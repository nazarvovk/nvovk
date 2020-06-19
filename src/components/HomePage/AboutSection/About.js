import React, { useState } from 'react';
import styles from './About.module.scss';
import JsImg from './JS.svg.js';
import ReactImg from './React.svg.js';
import EcosystemImg from './Ecosystem.svg.js';
import CodeBackgroundImage from './CodeBackgroundImage.svg.js';
import Highlight from 'components/Highlight';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUpDiv } from '../../../utils';

const images = { js: JsImg, react: ReactImg, ecosystem: EcosystemImg };

const About = () => {
  const [imageKey, setImageKey] = useState('ecosystem');
  const changeImage = (key) => () => setImageKey(key);
  const BackgroundImage = images[imageKey];

  return (
    <section className={styles.AboutSection} id="about">
      <FadeUpDiv>
        <motion.h3 className={styles.Title}>
          Hi, I&apos;m Nazar –<br />
          web <Highlight outline>developer</Highlight>
          <br />
          helping startups build
          <br />
          <Highlight outline>amazing products</Highlight>
        </motion.h3>
      </FadeUpDiv>
      <div className={styles.Container}>
        <FadeUpDiv className={styles.Text}>
          Specializing in
          <br />
          <Highlight
            v1
            onClick={changeImage('js')}
            onMouseEnter={changeImage('js')}
          >
            JavaScript,
          </Highlight>
          <br />
          <Highlight
            v2
            onClick={changeImage('react')}
            onMouseEnter={changeImage('react')}
          >
            React,
          </Highlight>
          <br />
          and the
          <br />
          extensive{' '}
          <Highlight
            v3
            onClick={changeImage('ecosystem')}
            onMouseEnter={changeImage('ecosystem')}
          >
            JS ecosystem
          </Highlight>
        </FadeUpDiv>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={imageKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className={styles.ImageContainer}
          >
            <BackgroundImage className={styles.Image} />
            <BackgroundImage className={styles.Image} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.ContainerSecondary}>
        <FadeUpDiv className={styles.Text}>
          Focusing on writing
          <Highlight outline> clean, </Highlight>elegant and
          <Highlight outline> efficient code</Highlight>
        </FadeUpDiv>
        <div className={styles.ImageContainer}>
          <CodeBackgroundImage className={styles.Image} />
          <CodeBackgroundImage className={styles.Image} />
        </div>
      </div>
    </section>
  );
};

export default About;
