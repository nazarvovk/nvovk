import React from 'react';
import styles from './Contact.module.scss';
import Highlight from '../../Highlight';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <h2>Send me a message</h2>
      <Highlight color>
        Got an interesting project for me, or just want to chat?
      </Highlight>
      <form>
        <div className={styles.InputContainer}>
          <label>Your Name</label>
          <input />
        </div>
        <div className={styles.InputContainer}>
          <label>Your Email</label>
          <input />
        </div>
        <textarea rows={3}></textarea>
      </form>
    </div>
  );
};

export default Contact;
