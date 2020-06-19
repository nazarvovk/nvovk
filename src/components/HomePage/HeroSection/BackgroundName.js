import React, { useEffect } from 'react';
import styles from './BackgroundName.module.scss';
import { motion, useAnimation } from 'framer-motion';
const ANIMATION_DURATION = 15;
const firstNameVariants = {
  initial: {
    x: '100vw',
    opacity: 0,
  },
  entered: {
    x: '-10vw',
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.41, 0.16, 0.43, 0.94],
    },
  },
  float: {
    x: ['-10vw', '-20vw'],
    transition: {
      duration: ANIMATION_DURATION,
      ease: 'easeInOut',
      yoyo: Infinity,
    },
  },
};
const lastNameVariants = {
  initial: {
    x: '-100vw',
    opacity: 0,
  },
  entered: {
    x: '15vw',
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.41, 0.16, 0.43, 0.94],
    },
  },
  float: {
    x: ['15vw', '25vw'],
    transition: {
      duration: ANIMATION_DURATION,
      ease: 'easeInOut',
      yoyo: Infinity,
    },
  },
};
const BackgroundName = () => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start('entered').then(() => controls.start('float'));
  }, []);
  return (
    <div className={styles.BackgroundName}>
      <motion.span
        initial="initial"
        animate={controls}
        variants={firstNameVariants}
        className={styles.FirstName}
      >
        Nazar
      </motion.span>
      <motion.span
        initial="initial"
        animate={controls}
        variants={lastNameVariants}
        className={styles.LastName}
      >
        Vovk
      </motion.span>
    </div>
  );
};

export default BackgroundName;
