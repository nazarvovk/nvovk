import React from 'react';
import styles from './EmailButton.module.scss';
import cx from 'classnames';
import { useHoverButton } from '../../../utils';
import { motion } from 'framer-motion';

const EmailButton = () => {
  const [isHovered, buttonProps] = useHoverButton();

  return (
    <a href="mailto:nazarvovk.work@gmail.com">
      <motion.button
        initial={{ opacity: 0, x: '-25%' }}
        animate={{ opacity: 1, x: '0%' }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className={cx(styles.Button, { [styles.Hovered]: isHovered })}
        {...buttonProps}
      >
        <svg
          className={styles.Icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <polygon points="0,97.808 0,414.192 180.789,256" />
          <polygon points="22.64,97.808 257,281.063 491.362,97.808" />
          <polygon points="308.431,275.933 257,320.937 205.569,275.933 22.638,420 491.368,420" />
          <polygon points="331.213,256 512,414.187 512,97.81" />
        </svg>
        {isHovered && (
          <span>email me</span>
        )}
      </motion.button>
    </a>
  );
};

export default EmailButton;
