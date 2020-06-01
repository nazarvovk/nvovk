import React, { useRef, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
import Header from '../components/Header/Header';
import { isTouchDevice } from '../utils';

if (typeof window !== `undefined`) {
  document.onmousedown = () => {
    const clickSound = new Audio(clickSoundSrc);
    clickSound.volume = 0.2;
    clickSound.play();
  };
}

const TwitterIcon = () => (
  <svg width="24" height="20" viewBox="0 0 24 20">
    <path d="M24,2.96470588 C23.1,3.40941176 22.2,3.55764706 21.15,3.70588235 C22.2,3.11294118 22.95,2.22352941 23.25,1.03764706 C22.35,1.63058824 21.3,1.92705882 20.1,2.22352941 C19.2,1.33411765 17.85,0.741176471 16.5,0.741176471 C13.95,0.741176471 11.7,2.96470588 11.7,5.63294118 C11.7,6.07764706 11.7,6.37411765 11.85,6.67058824 C7.8,6.52235294 4.05,4.59529412 1.65,1.63058824 C1.2,2.37176471 1.05,3.11294118 1.05,4.15058824 C1.05,5.78117647 1.95,7.26352941 3.3,8.15294118 C2.55,8.15294118 1.8,7.85647059 1.05,7.56 C1.05,7.56 1.05,7.56 1.05,7.56 C1.05,9.93176471 2.7,11.8588235 4.95,12.3035294 C4.5,12.4517647 4.05,12.4517647 3.6,12.4517647 C3.3,12.4517647 3,12.4517647 2.7,12.3035294 C3.3,14.2305882 5.1,15.7129412 7.35,15.7129412 C5.7,17.0470588 3.6,17.7882353 1.2,17.7882353 C0.75,17.7882353 0.45,17.7882353 0,17.7882353 C2.25,19.1223529 4.8,20.0117647 7.5,20.0117647 C16.5,20.0117647 21.45,12.6 21.45,6.22588235 C21.45,6.07764706 21.45,5.78117647 21.45,5.63294118 C22.5,4.89176471 23.4,4.00235294 24,2.96470588 Z"></path>
  </svg>
);
const GithubIcon = () => (
  <svg width="23" height="23" viewBox="0 0 23 23">
    <path d="M11.2941176,0.279031142 C5.08235294,0.279031142 0,5.3015917 0,11.4402768 C0,16.3233218 3.24705882,20.5087889 7.76470588,22.0434602 C8.32941176,22.1829758 8.47058824,21.7644291 8.47058824,21.4853979 C8.47058824,21.2063668 8.47058824,20.5087889 8.47058824,19.5321799 C5.36470588,20.2297578 4.65882353,18.1370242 4.65882353,18.1370242 C4.09411765,16.8813841 3.38823529,16.4628374 3.38823529,16.4628374 C2.4,15.7652595 3.52941176,15.7652595 3.52941176,15.7652595 C4.65882353,15.9047751 5.22352941,16.8813841 5.22352941,16.8813841 C6.21176471,18.6950865 7.90588235,18.1370242 8.47058824,17.8579931 C8.61176471,17.1604152 8.89411765,16.6023529 9.17647059,16.3233218 C6.63529412,16.0442907 4.09411765,15.0676817 4.09411765,10.742699 C4.09411765,9.48705882 4.51764706,8.51044983 5.22352941,7.81287197 C5.08235294,7.53384083 4.65882353,6.41771626 5.36470588,4.88304498 C5.36470588,4.88304498 6.35294118,4.60401384 8.47058824,5.99916955 C9.31764706,5.72013841 10.3058824,5.58062284 11.2941176,5.58062284 C12.2823529,5.58062284 13.2705882,5.72013841 14.1176471,5.99916955 C16.2352941,4.60401384 17.2235294,4.88304498 17.2235294,4.88304498 C17.7882353,6.41771626 17.5058824,7.53384083 17.3647059,7.81287197 C18.0705882,8.6499654 18.4941176,9.62657439 18.4941176,10.742699 C18.4941176,15.0676817 15.8117647,15.9047751 13.2705882,16.1838062 C13.6941176,16.7418685 14.1176471,17.4394464 14.1176471,18.4160554 C14.1176471,19.9507266 14.1176471,21.0668512 14.1176471,21.4853979 C14.1176471,21.7644291 14.2588235,22.1829758 14.9647059,22.0434602 C19.4823529,20.5087889 22.7294118,16.3233218 22.7294118,11.4402768 C22.5882353,5.3015917 17.5058824,0.279031142 11.2941176,0.279031142 Z"></path>
  </svg>
);

const useCursorFollow = () => {
  const elementRef = useRef();
  useEffect(() => {
    if (!isTouchDevice()) {
      document.onmousemove = (e) => {
        elementRef.current.style.opacity = `1`;
        const x = e.clientX - 16;
        const y = e.clientY - 16;
        elementRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      };
    }
  }, []);
  return {
    ref: elementRef,
  };
};
const Cursor = () => {
  const { ref } = useCursorFollow();
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
      ref.current.style.opacity = '1';
      const wWidth = ref.current.width.baseVal.value;
      const circumference = wWidth * 4;
      const way = document.body.clientHeight - window.innerHeight;
      const percent = (window.pageYOffset * 100) / way;
      const invertPercent = 100 - percent;
      ref.current.style.strokeDasharray = circumference;
      ref.current.style.strokeDashoffset =
        (invertPercent * circumference) / 100;
      ref.current.style.fillOpacity = percent > 90 ? (percent + 10) / 100 : 0;
    };
    addEventListener('scroll', handler);
  }, []);
  return (
    <svg ref={ref} className={styles.Progress}>
      <rect></rect>
    </svg>
  );
};

const HomePage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            authorTwitterLink
            authorGithubLink
          }
        }
      }
    `,
  );
  return (
    <>
      <Cursor />
      <Scroll />
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Helmet>
      <SEO />
      <main>
        <div className={styles.Container}>
          <Header />

          <Hero />
          <About />
          <Services />
          <Statistics />
          <Contact />

          <footer>
            <span>Nazar Vovk © 2020</span>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href={site.siteMetadata.authorTwitterLink}
              >
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={site.siteMetadata.authorGithubLink}
              >
                <GithubIcon />
              </a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default HomePage;
