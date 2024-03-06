import './global.scss';
import React from 'react';
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
              At some point there will be a new website here.
            </p>
            <br />
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://savelife.in.ua/en/donate-en/"
                style={{ textDecoration: 'underline' }}
              >
                Donate to Come Back Alive Foundation.
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
