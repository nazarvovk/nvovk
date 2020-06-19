import './global.scss';
import React, { useEffect, useRef, useState } from 'react';
import About from 'components/HomePage/AboutSection/About';
import Contact from 'components/HomePage/ContactSection/Contact';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Hero from 'components/HomePage/HeroSection/Hero';
import SEO from 'components/seo';
import Services from 'components/HomePage/ServicesSection/Services';
import Statistics from 'components/HomePage/StatisticsSection/Statistics';
import styles from './index.module.scss';

import { isTouchDevice } from '../utils';
import Loader from 'components/Loader/Loader';
import { AnimatePresence, motion } from 'framer-motion';

const useCursorFollow = () => {
  const elementRef = useRef();
  useEffect(() => {
    if (!isTouchDevice()) {
      document.onmousemove = (e) => {
        const x = e.clientX - 16;
        const y = e.clientY - 16;
        elementRef.current.style.opacity = `1`;
        elementRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      };
    }
  }, []);
  return elementRef;
};
const Cursor = () => {
  const ref = useCursorFollow();
  return (
    <svg ref={ref} className={styles.Cursor} viewBox="0 0 32 32">
      <circle
        cy="16"
        cx="16"
        r="12"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

const Scroll = () => {
  const ref = useRef();
  useEffect(() => {
    const handler = () => {
      const wWidth = ref.current.width.baseVal.value;
      const circumference = wWidth * 2;
      const way = document.body.clientHeight - window.innerHeight;
      const percent = (window.pageYOffset * 100) / way;
      const invertPercent = 100 - percent;
      ref.current.style.strokeDasharray = circumference;
      ref.current.style.strokeDashoffset =
        (invertPercent * circumference) / 100;
    };
    addEventListener('scroll', handler);
  }, []);
  return (
    <svg ref={ref} className={styles.Progress} viewBox="0 0 32 32">
      <path d="M 0 0 L 0 32 L 32 32"></path>
      <path d="M 0 0 L 32 0 L 32 32"></path>
    </svg>
  );
};
const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  // Runs on hydration
  useEffect(() => {
    if (typeof window !== `undefined`) {
      Promise.all([
        import('assets/sounds/click.mp3'),
        new Promise((res) => setTimeout(res, 500)),
      ]).then(([{ default: clickSoundSrc }]) => {
        document.addEventListener('mousedown', () => {
          const clickSound = new Audio(clickSoundSrc);
          clickSound.volume = 0.2;
          clickSound.play();
        });
        setIsLoaded(true);
      });
    }
  }, []);
  return (
    <>
      <SEO />
      <AnimatePresence exitBeforeEnter>
        {!isLoaded ? (
          <Loader />
        ) : (
          <motion.main key="Main">
            <Cursor />
            <Scroll />
            <div className={styles.Container}>
              <Header />

              <Hero />
              <About />
              <Services />
              <Statistics />
              <Contact />

              <Footer />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
