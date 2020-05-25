import React from 'react';
import SEO from 'components/seo';
import styles from 'components/HomePage/index.module.scss';
import HeroSection from 'components/HomePage/HeroSection/Hero';
import AboutSection from 'components/HomePage/AboutSection';
import WhatIDoSection from 'components/HomePage/WhatIDoSection';
import clickSoundSrc from '../assets/sounds/click.mp3';
import './index.scss';

document.onmousedown = () => {
  const clickSound = new Audio(clickSoundSrc);
  clickSound.play();
};

const HomePage = () => {
  return (
    <main>
      <SEO />
      <div className={styles.Container}>
        <HeroSection />
        <AboutSection />
        <WhatIDoSection />
      </div>
    </main>
  );
};

export default HomePage;
