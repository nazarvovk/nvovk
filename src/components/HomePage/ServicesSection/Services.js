import React from 'react';
import styles from './Services.module.scss';
import NVLogo from 'assets/images/nv.svg';
import Highlight from '../../Highlight';
import { FadeUpDiv } from 'utils';

const Services = () => {
  return (
    <section className={styles.Services} id="services">
      <div className={styles.Container}>
        <div className={styles.LogoContainer}>
          <FadeUpDiv className={styles.LogoFrame}>
            <div className={styles.corner_tl} />
            <div className={styles.corner_tr} />
            <img src={NVLogo} alt="" className={styles.NVLogo} />
            <div className={styles.corner_bl} />
            <div className={styles.corner_br} />
          </FadeUpDiv>
        </div>
        <div className={styles.ListContainer}>
          <FadeUpDiv className={styles.Title}>
            <h4>
              What can I do for <Highlight outline>you</Highlight>?
            </h4>
          </FadeUpDiv>
          <FadeUpDiv className={styles.ListItem}>
            Putting together complex digital solutions
            <br />
            From
            <Highlight glitch> research </Highlight>
            to <Highlight glitch>design and development</Highlight>
          </FadeUpDiv>
          <FadeUpDiv className={styles.ListItem}>
            Building apps with
            <br />
            <Highlight glitch>complicated business logic</Highlight>
          </FadeUpDiv>
          <FadeUpDiv className={styles.ListItem}>
            Using just the right tools to deliver{' '}
            <Highlight glitch>fast</Highlight>,
            <br />
            <Highlight glitch>scalable applications</Highlight>
          </FadeUpDiv>
        </div>
      </div>
    </section>
  );
};

export default Services;
