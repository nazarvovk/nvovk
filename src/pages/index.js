import React from 'react';
import SEO from '../components/seo';
import styles from './index.module.scss';

const IndexPage = () => {
  return (
    <>
      <SEO />
      <div className={styles.mainText}>
        <p className={styles.paragraph}>
          Hi, my name is Nazar and this is my website.
        </p>
        <p className={styles.paragraph}>
          I am a web developer from Ukraine
        </p>
        <p className={styles.paragraph}>
          There's not much more here yet but I'm working on it :)
        </p>
        <p className={`${styles.paragraph} ${styles.hireParagraph}`}>
          You can hire me through{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.upwork.com/freelancers/~0141516dc1b519cd5d"
          >
            Upwork
          </a>
          ...
        </p>
      </div>
      <div className={styles.links}>
        ...or by contacting me via email =>{' '}
        <a href="mailto:work@nvovk.com">work@nvovk.com</a>
      </div>
    </>
  );
};

export default IndexPage;
