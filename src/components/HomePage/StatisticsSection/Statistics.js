import React from 'react';
import styles from './Statistics.module.scss';
import Highlight from '../../Highlight';
import { FadeUpDiv } from 'utils';

const Statistics = () => {
  return (
    <section className={styles.Statistics}>
      <FadeUpDiv className={styles.Item}>
        <span className={styles.Number}>3</span>
        <Highlight color className={styles.Subtitle}>
          years of experience
        </Highlight>
      </FadeUpDiv>
      <FadeUpDiv className={styles.Item}>
        <span className={styles.Number}>17</span>
        <Highlight color className={styles.Subtitle}>
          projects completed
        </Highlight>
      </FadeUpDiv>
    </section>
  );
};

export default Statistics;
