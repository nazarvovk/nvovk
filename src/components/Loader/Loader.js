import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loader.module.scss';

const containerVariants = {
  start: {
    opacity: 1,
  },
  loading: {
    opacity: 1,
  },
  loaded: {
    opacity: [0, 1, 0, 1, 0],
    transition: {
      when: 'afterChildren',
      delay: 0.1,
      duration: 0.75,
      times: [0, 0.1, 0.2, 0.3, 0.8],
    },
  },
};

const loaderVariants = {
  start: {
    strokeDashoffset: 64,
  },
  loading: {
    strokeDashoffset: 8,
    transition: {
      duration: 10,
    },
  },
  loaded: {
    strokeDashoffset: 0,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="start"
      animate="loading"
      exit="loaded"
      key="Container"
      className={styles.Container}
    >
      <motion.svg
        key="Loader"
        variants={loaderVariants}
        viewBox="0 0 32 32"
        className={styles.Loader}
      >
        <path d="M 0 0 L 0 32 L 32 32"></path>
        <path d="M 0 0 L 32 0 L 32 32"></path>
      </motion.svg>
      <span>loading</span>
    </motion.div>
  );
};

export default Loader;
