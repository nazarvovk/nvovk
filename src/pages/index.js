import './global.scss';
import React from 'react';
import Footer from 'components/Footer/Footer';
import SEO from 'components/seo';
import styles from './index.module.scss';

const HomePage = () => {
  return (
    <>
      <SEO />
      <main>
        <div className={styles.Container}>
          <div className={styles.Spacer}>
            <p>
              Not available for work due to a genocide being committed by
              russians in Ukraine.
            </p>
            <p>russia is a terrorist state.</p>
            <br />
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://savelife.in.ua/en/donate-en/"
              >
                Donate to Come Back Alive Foundation.
              </a>
            </p>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default HomePage;
