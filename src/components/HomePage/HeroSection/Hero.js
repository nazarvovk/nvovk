import React from 'react';
import styles from './Hero.module.scss';

import BackgroundName from './BackgroundName';
import dividerFade from './divider_fade.png';
import EmailButton from './EmailButton';
import Highlight from '../../Highlight';

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <BackgroundName />
      <div className={styles.CenterText}>
        <span>frontend-oriented</span>
        <Highlight v1>fullstack developer</Highlight>
      </div>
      <EmailButton />
      <img className={styles.DividerFade} src={dividerFade} />
    </section>
  );
};

export default Hero;
