import React, { useState } from 'react';
import styles from './About.module.scss';
import JsImg from './JS.svg.js';
import ReactImg from './React.svg.js';
import EcosystemImg from './Ecosystem.svg.js';
import CodeBackgroundImage from './CodeBackgroundImage.svg.js';
import Highlight from '../../Highlight';

const images = { js: JsImg, react: ReactImg, ecosystem: EcosystemImg };

const About = () => {
  const [imageKey, setImageKey] = useState('js');
  const changeImage = (key) => () => setImageKey(key);
  const BackgroundImage = images[imageKey];
  return (
    <section className={styles.AboutSection}>
      <h3 className={styles.Title}>
        Hi, I&apos;m Nazar –<br />
        web <Highlight color>developer</Highlight>
        <br />
        helping startups build
        <br />
        <Highlight color>amazing products</Highlight>
      </h3>
      <div className={styles.Container}>
        <div className={styles.Text}>
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
        </div>
        <div className={styles.ImageContainer}>
          <BackgroundImage className={styles.Image} />
          <BackgroundImage className={styles.Image} />
        </div>
      </div>
      <div className={styles.ContainerSecondary}>
        <div className={styles.Text}>
          Focusing on writing
          <Highlight color> clean, </Highlight>elegant and
          <Highlight color> efficient code</Highlight>
        </div>
        <div className={styles.ImageContainer}>
          <CodeBackgroundImage className={styles.Image} />
          <CodeBackgroundImage className={styles.Image} />
        </div>
      </div>
    </section>
  );
};

export default About;
