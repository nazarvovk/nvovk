import React, { useState } from 'react';
import styles from './AboutSection.module.scss';
import {
  Highlight_1,
  Highlight_2,
  Highlight_3,
} from '../../components/Highlight.module.scss';
import JsImg from '../../assets/images/JS.svg.js';
import ReactImg from '../../assets/images/React.svg.js';
import EcosystemImg from '../../assets/images/Ecosystem.svg.js';
import CodeBackgroundImage from '../../assets/images/CodeBackgroundImage.svg.js';

const images = { js: JsImg, react: ReactImg, ecosystem: EcosystemImg };

const AboutSection = () => {
  const [imageKey, setImageKey] = useState('js');
  const changeImage = (key) => () => setImageKey(key);
  const BackgroundImage = images[imageKey];
  return (
    <section className={styles.AboutSection}>
      <h3 className={styles.Title}>
        Hi, I&apos;m Nazar –<br />
        web developer
        <br />
        helping startups build
        <br />
        amazing products
      </h3>
      <div className={styles.Tech}>
        <div className={styles.Text}>
          Specializing in
          <br />
          <span
            onClick={changeImage('js')}
            onMouseEnter={changeImage('js')}
            className={Highlight_1}
          >
            JavaScript,
          </span>
          <br />
          <span
            onClick={changeImage('react')}
            onMouseEnter={changeImage('react')}
            className={Highlight_2}
          >
            React,
          </span>
          <br />
          and the
          <br />
          extensive{' '}
          <span
            onClick={changeImage('ecosystem')}
            onMouseEnter={changeImage('ecosystem')}
            className={Highlight_3}
          >
            JS ecosystem
          </span>
        </div>
        <div className={styles.ImageContainer}>
          <BackgroundImage className={styles.Image} />
          <BackgroundImage className={styles.Image} />
        </div>
      </div>
      <div className={styles.Code}>
        <div className={styles.Text}>
          Focusing on writing
          <span className={styles.ColorHighlight}> clean, </span>elegant and
          <span className={styles.ColorHighlight}> efficient code</span>
        </div>
        <div className={styles.ImageContainer}>
          <CodeBackgroundImage className={styles.Image} />
          <CodeBackgroundImage className={styles.Image} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
