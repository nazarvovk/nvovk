import React, { useState } from 'react';
import styles from './Contact.module.scss';
import Highlight from '../../Highlight';
import { urlencodeFormData } from '../../../utils';

const Check = () => (
  <svg x="0px" y="0px" viewBox="0 0 448 448" className={styles.CheckIcon}>
    <g>
      <g>
        <polygon
          points="341.333,192.96 341.333,381.12 42.667,381.12 42.667,82.453 308.693,82.453 355.627,39.787 0,39.787 0,423.787 
			384,423.787 384,153.707"
        />
      </g>
    </g>
    <g>
      <g>
        <polygon points="417.493,24.213 186.027,234.56 113.493,162.24 85.333,190.4 187.947,293.013 448,54.08" />
      </g>
    </g>
  </svg>
);

const Contact = () => {
  const [state, setState] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setState('submitting');
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlencodeFormData(new FormData(e.target)),
    });
    setState('submitted');
  };
  return (
    <div id="contact" className={styles.Contact}>
      <h2>Send me a message</h2>
      <Highlight color>
        Got an interesting project for me, or just want to chat?
      </Highlight>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
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
            name="message"
            rows={2}
            placeholder="Hi, we have a project you might be interested in. How soon can we discuss this?"
          ></textarea>
        </div>
        {state === 'submitted' ? (
          <div className={styles.Sent}>
            <Check /> Sent
          </div>
        ) : (
          <button className={styles.SendButton} type="submit">
            {state === 'submitting' ? 'Sending...' : 'Send'}
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
