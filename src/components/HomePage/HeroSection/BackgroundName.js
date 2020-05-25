import React from 'react';
import styles from './BackgroundName.module.scss';

const BackgroundName = () => {
  return (
    <div className={styles.BackgroundName}>
      <span className={styles.FirstName}>Nazar</span>
      <span className={styles.LastName}>Vovk</span>
    </div>
  );
};

export default BackgroundName;
