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
        initial={{ opacity: 0, x: "-25%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 0.5, delay: 1.5}}
        className={cx(styles.Button, { [styles.Hovered]: isHovered })}
        {...buttonProps}
      >
        <svg
          className={styles.Icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 78.952 48.016"
        >
          <path d="M76.259,0H2.693A2.7,2.7,0,0,0,0,2.693v42.63a2.7,2.7,0,0,0,2.693,2.693H76.259a2.7,2.7,0,0,0,2.693-2.693V2.693A2.7,2.7,0,0,0,76.259,0ZM4.631,6.635,26.76,21.343,4.631,40.607Zm34.845,17.6L9.982,4.631H68.97ZM30.76,24l7.225,4.8a2.686,2.686,0,0,0,2.982,0L48.192,24,70.459,43.385H8.493Zm21.432-2.658L74.321,6.634V40.607Zm0,0" />
        </svg>
      </motion.button>
    </a>
  );
};

export default EmailButton;
