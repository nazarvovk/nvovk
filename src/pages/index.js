import React from 'react';
import SEO from 'components/seo';
import styles from './index.module.scss';
import Hero from 'components/HomePage/HeroSection/Hero';
import About from 'components/HomePage/AboutSection/About';
import Services from 'components/HomePage/ServicesSection/Services';
import Statistics from 'components/HomePage/StatisticsSection/Statistics';
import Contact from 'components/HomePage/ContactSection/Contact';
import clickSoundSrc from 'assets/sounds/click.mp3';
import './global.scss';
import { Helmet } from 'react-helmet';

document.onmousedown = () => {
  const clickSound = new Audio(clickSoundSrc);
  clickSound.volume = 0.2;
  clickSound.play();
};

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Helmet>
      <SEO />
      <div className={styles.Container}>
        <Hero />
        <About />
        <Services />
        <Statistics />
        <Contact />
      </div>
    </main>
  );
};

export default HomePage;
