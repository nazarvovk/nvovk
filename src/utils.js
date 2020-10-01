import PropTypes from 'prop-types';
import useSound from 'use-sound';
import React, { useRef, useState } from 'react';
import hoverSound from 'assets/sounds/button_hover.mp3';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export function isTouchDevice() {
  if (!window) return false;
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

  var mq = function (query) {
    return window.matchMedia(query).matches;
  };

  if (
    'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch)
  ) {
    return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

export const useHoverButton = () => {
  const [playSound] = useSound(hoverSound, { volume: 0.1 });
  const hoverTimer = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const buttonProps = {
    onMouseEnter: () => {
      hoverTimer.current = setTimeout(() => {
        playSound();
        setIsHovered(true);
      }, 200);
    },
    onMouseLeave: () => {
      clearTimeout(hoverTimer.current);
      setIsHovered(false);
    },
  };

  return [isHovered, buttonProps];
};

const flickerVariants = {
  out: {
    opacity: 0,
  },
  in: {
    opacity: [0, 1, 0, 1, 0, 1, 1],
    transition: {
      duration: 0.75,
      times: [0, 0.1, 0.2, 0.3, 0.4, 0.75, 1],
      ease: 'easeOut',
    },
  },
};

export const FlickerIn = ({ children, threshold = 1, ...props }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce: true });
  return (
    <motion.div
      initial="out"
      animate={inView ? 'in' : 'out'}
      variants={flickerVariants}
      ref={ref}
      {...props}
    >
      {children}
    </motion.div>
  );
};

FlickerIn.propTypes = {
  children: PropTypes.node.isRequired,
  threshold: PropTypes.number,
};
