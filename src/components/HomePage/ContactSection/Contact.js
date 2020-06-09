import React, { useState } from 'react';
import styles from './Contact.module.scss';
import Highlight from '../../Highlight';
import { useFormik } from 'formik';
import * as yup from 'yup';
import cx from 'classnames';
import { useHoverButton } from '../../../utils';

const Check = () => (
  <svg x="0px" y="0px" viewBox="0 0 448 448" className={styles.CheckIcon}>
    <polygon
      points="341.333,192.96 341.333,381.12 42.667,381.12 42.667,82.453 308.693,82.453 355.627,39.787 0,39.787 0,423.787 
			384,423.787 384,153.707"
    />
    <polygon points="417.493,24.213 186.027,234.56 113.493,162.24 85.333,190.4 187.947,293.013 448,54.08" />
  </svg>
);

const initialValues = {
  'form-name': 'contact',
  name: '',
  email: '',
  message: '',
};
const validationSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  email: yup
    .string()
    .required('Please enter your email')
    .email('Invalid email format'),
  message: yup.string().required('Please enter your message'),
});
const handleSubmit = (values) => {
  const urlEncodedData = Object.entries(values)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&');
  console.log('urlEncodedData: ', urlEncodedData);
  return Promise.all([
    new Promise((res) => setTimeout(res, 1000)),
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlEncodedData,
    }),
  ]);
};

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSubmitButtonHovered, submitButtonHandlers] = useHoverButton();
  const {
    values,
    errors,
    touched,
    submitForm,
    isSubmitting,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues,
    onSubmit: (values) => handleSubmit(values).then(() => setIsSent(true)),
    validationSchema,
    validateOnChange: false,
  });
  const handleChange = (name) => (e) => setFieldValue(name, e.target.value);
  const handleBlur = (name) => () => setFieldTouched(name, true);

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
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles.InputContainer}>
          {errors.name && touched.name ? (
            <label className={styles.ErrorLabel}>{errors.name}</label>
          ) : (
            <label>Name</label>
          )}
          <input
            value={values.name}
            onChange={handleChange('name')}
            onBlur={handleBlur('name')}
            name="name"
            placeholder="Enter your name"
          />
        </div>
        <div className={styles.InputContainer}>
          {errors.email && touched.email ? (
            <label className={styles.ErrorLabel}>{errors.email}</label>
          ) : (
            <label>Email</label>
          )}
          <input
            value={values.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className={styles.TextareaContainer}>
          {errors.message && touched.message ? (
            <label className={styles.ErrorLabel}>{errors.message}</label>
          ) : (
            <label>Your Message</label>
          )}
          <textarea
            value={values.message}
            onChange={handleChange('message')}
            onBlur={handleBlur('message')}
            name="message"
            rows={2}
            placeholder="Hi, we have a project you might be interested in. How soon can we discuss this?"
          ></textarea>
        </div>
        {isSent ? (
          <div className={styles.Sent}>
            <Check /> Sent
          </div>
        ) : (
          <button
            className={cx(styles.SendButton, {
              [styles.Sending]: isSubmitting,
              [styles.Hovered]: isSubmitButtonHovered,
            })}
            {...submitButtonHandlers}
            type="button"
            onClick={submitForm}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
