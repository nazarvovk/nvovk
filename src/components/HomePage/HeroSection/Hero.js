import React, {
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from 'react';
import styles from './Hero.module.scss';
import BackgroundName from './BackgroundName';
import EmailButton from './EmailButton';
import Highlight from 'components/Highlight';
import { motion, useAnimation } from 'framer-motion';
import DotsCanvas from './DotsCanvas';

export const useMouse = () => {
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
  opacity: [0, 1, 0, 1, 0, 1, 1],
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
  enter: {
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
  enter: {
    ...commonEntered,
    x: ['15%', '15%', '15%', '15%', '15%', '15%', '5%'],
    y: ['15%', '15%', '15%', '15%', '15%', '15%', `0%`],
  },
};

const ANIMATION_STATES = {
  INITIAL: 'INITIAL',
  ENTERING: 'ENTERING',
  ENTERED: 'ENTERED',
};
const ENTERED_VARIANTS = {
  APART: {
    x: 10,
  },
  CLOSE: {
    x: 0,
  },
};
const useSlidePosition = () => {
  const { x, y } = useMouse();

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const maxDistanceToCenter = Math.hypot(centerX, centerY);
  const breakpoint = maxDistanceToCenter / 1.8;
  const distanceToCenter = Math.hypot(centerX - x, centerY - y);
  const position =
    distanceToCenter > breakpoint
      ? ENTERED_VARIANTS.APART
      : ENTERED_VARIANTS.CLOSE;

  return position;
};

const Title = () => {
  const controls = useAnimation();
  const state = useRef(ANIMATION_STATES.INITIAL);
  const { x } = useSlidePosition();

  useLayoutEffect(() => {
    async function animate() {
      switch (state.current) {
        case ANIMATION_STATES.INITIAL:
          state.current = ANIMATION_STATES.ENTERING;
          await controls.start('enter');
          state.current = ANIMATION_STATES.ENTERED;
          break;
        case ANIMATION_STATES.ENTERED:
          controls.start((direction) => ({ x: `${x * direction}%` }), {
            ease: 'easeInOut',
            duration: 0.75,
          });
          break;
      }
    }
    animate();
  }, [controls, x]);
  return (
    <motion.h1 initial="initial" className={styles.CenterText}>
      <motion.span animate={controls} custom={-1} variants={topVariants}>
        frontend-oriented
      </motion.span>
      <motion.span animate={controls} custom={1} variants={bottomVariants}>
        <Highlight v1>fullstack developer</Highlight>
      </motion.span>
    </motion.h1>
  );
};

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <BackgroundName />
      <Title />
      <EmailButton />
      <DotsCanvas />
    </section>
  );
};

export default Hero;
