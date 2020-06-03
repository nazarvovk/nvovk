import useSound from 'use-sound';
import { useRef, useState } from 'react';
import hoverSound from 'assets/sounds/EmailButton_hover.mp3';

export function isTouchDevice() {
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
