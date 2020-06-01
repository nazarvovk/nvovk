import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <ul>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a className={styles.BlogLink}>blog</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
