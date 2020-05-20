import React from 'react';
import SEO from '../components/seo';
import styles from './index.module.scss';
import HeroSection from './HomeComponents/HeroSection';
import AboutSection from './HomeComponents/AboutSection';
import clickSoundSrc from '../assets/sounds/click.mp3';
import WhatIDoSection from './HomeComponents/WhatIDoSection';

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
