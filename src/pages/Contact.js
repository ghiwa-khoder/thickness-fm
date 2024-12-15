import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSuccessMessage('Message sent successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us for any inquiries or feedback.</p>
      </section>

      <section className="contact-content">
        {/* Form Section */}
        <div className="contact-card">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'input-error' : ''}
                placeholder="Enter your message"
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            <button type="submit" className="submit-button">Send</button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>

        {/* Map and Details Section */}
        <div className="location-card">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387142.8400111039!2d46.52571558950352!3d24.7135518123851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0270e64802e3%3A0xc2f8d5e43bdfc94b!2sAl%20Riyadh!5e0!3m2!1sen!2ssa!4v1694600922332!5m2!1sen!2ssa"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-details">
            <p><strong>Country:</strong> Saudi Arabia</p>
            <p><strong>Email:</strong> <a href="mailto:Info@thickness.sa">Info@thickness.sa</a></p>
            <p><strong>Phone:</strong> <a href="tel:+99663322114477">+99663322114477</a></p>
            <p><strong>Address:</strong> خالد بن بندر, الرياض</p>
            <p><strong>Website:</strong> <a href="http://www.thickness.sa" target="_blank" rel="noopener noreferrer">www.thickness.sa</a></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;