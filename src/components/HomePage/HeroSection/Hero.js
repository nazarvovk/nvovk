import React, { useEffect, useState } from 'react';
import styles from './Hero.module.scss';

import BackgroundName from './BackgroundName';
import dividerFade from './divider_fade.png';
import EmailButton from './EmailButton';
import Highlight from '../../Highlight';
import { motion, useAnimation, transform } from 'framer-motion';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return position;
};

const commonEntered = {
  opacity: [null, 1, 0, 1, 0, 1, 1],
  transition: {
    delay: 2,
    duration: 0.75,
    times: [0, 0.1, 0.2, 0.3, 0.4, 0.75, 1],
    ease: 'easeOut',
  },
};
const topVariants = {
  initial: {
    opacity: 0,
    x: '-15%',
    y: '-10%',
  },
  entered: {
    ...commonEntered,
    x: ['-15%', '-15%', '-15%', '-15%', '-15%', '-15%', '-5%'],
    y: ['-15%', '-15%', '-15%', '-15%', '-15%', '-15%', '0%'],
  },
};
const bottomVariants = {
  initial: {
    opacity: 0,
    x: '15%',
    y: '10%',
  },
  entered: {
    ...commonEntered,
    x: ['15%', '15%', '15%', '15%', '15%', '15%', '5%'],
    y: ['15%', '15%', '15%', '15%', '15%', '15%', `0%`],
  },
};
const Hero = () => {
  const { x: mouseX, y: mouseY } = useMousePosition();
  // wanna punch myself for this, pretty sure there's a better way
  const [didEnter, setDidEnter] = useState(false);
  const controls = useAnimation();
  async function sequence() {
    if (!didEnter) {
      await controls.start('entered');
      setDidEnter(true);
    } else {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const maxDistanceToCenter = Math.hypot(centerX, centerY);
      const distanceToCenter = Math.hypot(centerX - mouseX, centerY - mouseY);
      const x = transform(distanceToCenter, [0, maxDistanceToCenter], [-5, 10]);

      controls.start((a) => ({ x: `${x * a}%` }), {
        ease: 'easeInOut',
        duration: 4,
      });
    }
  }
  useEffect(() => {
    sequence();
  }, [didEnter, mouseX, mouseY]);

  return (
    <section className={styles.Hero}>
      <BackgroundName />
      <motion.div initial="initial" className={styles.CenterText}>
        <motion.span animate={controls} custom={-1} variants={topVariants}>
          frontend-oriented
        </motion.span>
        <motion.span animate={controls} custom={1} variants={bottomVariants}>
          <Highlight v1>fullstack developer</Highlight>
        </motion.span>
      </motion.div>
      <EmailButton />
      <img className={styles.DividerFade} src={dividerFade} />
    </section>
  );
};

export default Hero;
