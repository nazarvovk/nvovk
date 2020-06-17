import React from 'react';
import styles from './Header.module.scss';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.75, // wait for background
    },
  },
};
const variants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
  },
};
const Header = () => {
  return (
    <header className={styles.Header}>
      <motion.ul variants={containerVariants} initial="hidden" animate="shown">
        <motion.li variants={variants}>
          <a href="#about">about</a>
        </motion.li>
        <motion.li variants={variants}>
          <a href="#services">services</a>
        </motion.li>
        <motion.li variants={variants}>
          <a className={styles.BlogLink}>blog</a>
        </motion.li>
        <motion.li variants={variants}>
          <a href="#contact">contact</a>
        </motion.li>
      </motion.ul>
    </header>
  );
};

export default Header;
