import { useFormik } from 'formik';
import React from 'react';
import validationSchema from '../../Components/Contact/Validation';

function Contact() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  return (
    <div className="contact-page">
      <div className="left-side">
        <h1>Let's get in touch</h1>
        <p className="opening">
          We're open for any suggestion or just to have a chat.
        </p>
        <div className="contact-items">
          <div className="contact-item">
            <i className="fa-solid fa-map-pin"></i>
            <p>
              <strong>Adress:</strong> 123 West 27th Street, Suite 321 New York
              NY 12345
            </p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <p>
              <strong>Phone:</strong> +123 123 1212
            </p>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-paper-plane"></i>
            <p>
              <strong>Email:</strong> emresates@outlook.com
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Get in touch</h1>
        <p>
          Choose the most convenient method and we’ll get back to you as soon as
          we can.
        </p>
        <div className="input">
          <label>Name:</label>
          <input
            name="name"
            type="name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            placeholder="Name"
          />

          {errors.name && touched.name && (
            <div className="error">{errors.name}</div>
          )}
        </div>
        <div className="input">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            placeholder="Email"
          />

          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>
        <div className="input">
          <label>Subject:</label>
          <input
            name="subject"
            onChange={handleChange}
            value={values.subject}
            onBlur={handleBlur}
            placeholder="Subject"
          />

          {errors.subject && touched.subject && (
            <div className="error">{errors.subject}</div>
          )}
        </div>

        <div className="input-textarea">
          <label>Your Message:</label>
          <textarea
            name="message"
            onChange={handleChange}
            value={values.message}
            onBlur={handleBlur}
            placeholder="Message"
            maxLength="101"
          />
          {errors.message && touched.message && (
            <div className="error">{errors.message}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
