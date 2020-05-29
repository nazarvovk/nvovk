import React from 'react';
import styles from './Statistics.module.scss';
import Highlight from '../../Highlight';

const Statistics = () => {
  return (
    <div className={styles.Statistics}>
      <div className={styles.Item}>
        <span className={styles.Number}>3</span>
        <Highlight color className={styles.Subtitle}>
          years of experience
        </Highlight>
      </div>
      <div className={styles.Item}>
        <span className={styles.Number}>17</span>
        <Highlight color className={styles.Subtitle}>
          projects complete
        </Highlight>
      </div>
    </div>
  );
};

export default Statistics;
