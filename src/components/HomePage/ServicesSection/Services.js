import React from 'react';
import styles from './Services.module.scss';
import NVLogo from 'assets/images/nv.svg';
import Highlight from '../../Highlight';
import { FlickerIn } from 'utils';

const Services = () => {
  return (
    <section className={styles.Services} id="services">
      <div className={styles.Container}>
        <div className={styles.LogoContainer}>
          <FlickerIn className={styles.LogoFrame}>
            <div className={styles.corner_tl} />
            <div className={styles.corner_tr} />
            <img src={NVLogo} alt="" className={styles.NVLogo} />
            <div className={styles.corner_bl} />
            <div className={styles.corner_br} />
          </FlickerIn>
        </div>
        <div className={styles.ListContainer}>
          <p className="visually-hidden">What can I do for you?</p>
          <FlickerIn className={styles.Title}>
            <h4>
              What can I do for <Highlight outline>you</Highlight>?
            </h4>
          </FlickerIn>
          <p className="visually-hidden">
            Putting together complex digital solutions, from research to design
            and development. Building apps with complicated business logic.
            Using just the right tools to deliver fast, scalable applications.
          </p>
          <FlickerIn className={styles.ListItem}>
            Putting together complex digital solutions
            <br />
            From
            <Highlight glitch> research </Highlight>
            to <Highlight glitch>design and development</Highlight>
          </FlickerIn>
          <FlickerIn className={styles.ListItem}>
            Building apps with
            <br />
            <Highlight glitch>complicated business logic</Highlight>
          </FlickerIn>
          <FlickerIn className={styles.ListItem}>
            Using just the right tools to deliver{' '}
            <Highlight glitch>fast</Highlight>,
            <br />
            <Highlight glitch>scalable applications</Highlight>
          </FlickerIn>
        </div>
      </div>
    </section>
  );
};

export default Services;
