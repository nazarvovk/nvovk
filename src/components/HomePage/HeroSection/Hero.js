import React from 'react';
import styles from './Hero.module.scss';
import { Highlight_1 } from '../../../components/Highlight.module.scss';
import BackgroundName from './BackgroundName';
import dividerFade from './divider_fade.png';
import EmailButton from './EmailButton';

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <BackgroundName />
      <div className={styles.CenterText}>
        <span>frontend-oriented</span>
        <span className={Highlight_1}>fullstack developer</span>
      </div>
      <EmailButton />
      <img className={styles.DividerFade} src={dividerFade} />
    </section>
  );
};

export default Hero;
