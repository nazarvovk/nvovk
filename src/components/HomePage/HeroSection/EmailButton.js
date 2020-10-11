import React, { useState } from 'react';
import styles from './EmailButton.module.scss';
import cx from 'classnames';
import { FlickerIn, useHoverButton } from '../../../utils';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';

const EmailButton = () => {
  const [isHovered, buttonProps] = useHoverButton();
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const {
    site: {
      siteMetadata: { authorEmail },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          authorEmail
        }
      }
    }
  `);
  const copyEmail = async () => {
    await navigator.clipboard.writeText(authorEmail);
    setShowCopiedMessage(true);
    setTimeout(() => setShowCopiedMessage(false), 4000);
  };

  return (
    <motion.button
      style={{ y }}
      initial={{ opacity: 0, x: '-25%' }}
      animate={{ opacity: 1, x: '0%' }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className={cx(styles.Button, {
        [styles.Hovered]: isHovered || showCopiedMessage,
      })}
      aria-label="Email me"
      onClick={copyEmail}
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
      {showCopiedMessage ? (
        <FlickerIn element="span">email copied</FlickerIn>
      ) : (
        isHovered && <span>email me</span>
      )}
    </motion.button>
  );
};

export default EmailButton;
