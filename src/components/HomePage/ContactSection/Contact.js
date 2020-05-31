import React from 'react';
import styles from './Contact.module.scss';
import Highlight from '../../Highlight';

const Contact = () => {
  return (
    <div id="contact" className={styles.Contact}>
      <h2>Send me a message</h2>
      <Highlight color>
        Got an interesting project for me, or just want to chat?
      </Highlight>
      <form name="contact" netlify="true">
        <div className={styles.InputContainer}>
          <label>Name</label>
          <input name="name" placeholder="Enter your name" />
        </div>
        <div className={styles.InputContainer}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className={styles.TextareaContainer}>
          <label>Your Message</label>
          <textarea
            rows={2}
            placeholder="Hi, we have a project you might be interested in. How soon can we discuss this?"
          ></textarea>
        </div>
        <button className={styles.SendButton} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
