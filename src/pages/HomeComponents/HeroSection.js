import React from 'react';
import styles from './HeroSection.module.scss';
import BackgroundName from './BackgroundName';
import dividerFade from '../../assets/images/divider_fade.png';
import EmailButton from './EmailButton';

const HeroSection = () => {
  return (
    <section className={styles.HeroSection}>
      <BackgroundName />
      <div className={styles.CenterText}>
        <span>frontend-oriented</span>
        <span className={styles.Highlight}>fullstack developer</span>
      </div>
      <EmailButton />
      <img className={styles.DividerFade} src={dividerFade} />
    </section>
  );
};

export default HeroSection;
