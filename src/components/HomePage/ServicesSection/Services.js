import React, { useRef, useEffect } from 'react';
import styles from './Services.module.scss';
import NVLogo from 'assets/images/nv.svg';
import Highlight from '../../Highlight';

const Services = () => {
  const logoFrameRef = useRef();
  useEffect(() => {
    logoFrameRef.current.style.animationPlayState = 'running';
  }, []);
  return (
    <section className={styles.Tasks} id="services">
      <h4 className={styles.Title}>
        What can I do for <Highlight v3>you</Highlight>?
      </h4>
      <div className={styles.Container}>
        <div className={styles.LogoContainer}>
          <div className={styles.LogoFrame} ref={logoFrameRef}>
            <div className={styles.corner_tl} />
            <div className={styles.corner_tr} />
            <img src={NVLogo} alt="" className={styles.NVLogo} />
            <div className={styles.corner_bl} />
            <div className={styles.corner_br} />
          </div>
        </div>
        <div className={styles.ListContainer}>
          <div className={styles.ListItem}>
            Putting together complex digital solutions
            <br />
            From
            <Highlight color> research </Highlight>
            to
            <Highlight color> design and development </Highlight>
          </div>
          <div className={styles.ListItem}>
            Building apps with
            <br />
            <Highlight color>complicated business logic</Highlight>
          </div>
          <div className={styles.ListItem}>
            Using just the right tools to deliver
            <Highlight color> fast</Highlight>,
            <br />
            <Highlight color>scalable applications</Highlight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
