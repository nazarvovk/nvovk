import React from 'react';
import styles from './WhatIDoSection.module.scss';
import { Highlight_3 } from '../../components/Highlight.module.scss';
import NVLogo from '../../assets/images/nv.svg';

const WhatIDoSection = () => {
  return (
    <section className={styles.WhatIDoSection}>
      <h4 className={styles.Title}>
        What can I do for <span className={Highlight_3}>you</span>?
      </h4>
      <div className={styles.logoContainer}>
        <div className={styles.corner_tl} />
        <div className={styles.corner_tr} />
        <img src={NVLogo} alt="" className={styles.NVLogo} />
        <div className={styles.corner_bl} />
        <div className={styles.corner_br} />
      </div>
    </section>
  );
};

export default WhatIDoSection;
