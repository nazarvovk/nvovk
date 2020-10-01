import React from 'react';
import styles from './Statistics.module.scss';
import Highlight from '../../Highlight';
import { FlickerIn } from 'utils';
import moment from 'moment';

const Statistics = () => {
  const years = moment([2017, 6, 1]).toNow(true).split(' ')[0];
  return (
    <section className={styles.Statistics}>
      <p className="visually-hidden">{years} years of experience</p>
      <FlickerIn className={styles.Item}>
        <span className={styles.Number}>{years}</span>
        <Highlight color className={styles.Subtitle}>
          years of experience
        </Highlight>
      </FlickerIn>
      <p className="visually-hidden">17 projects completed</p>
      <FlickerIn className={styles.Item}>
        <span className={styles.Number}>17</span>
        <Highlight color className={styles.Subtitle}>
          projects completed
        </Highlight>
      </FlickerIn>
    </section>
  );
};

export default Statistics;
