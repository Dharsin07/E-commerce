import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isValidEmail } from '../utils/helpers';

const ContactForm = () => {
  // use react-toastify for notifications
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all required fields');
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error('Please enter a valid email');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
  toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="section contact-section" id="contact-form">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have questions? We'd love to hear from you</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info fade-in">
            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <h4>Visit Us</h4>
              <p>123 Design Boulevard<br/>Milan, Italy</p>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">📞</div>
              <h4>Call Us</h4>
              <p>+1-555-LUXE-HOME<br/>Mon-Fri, 9AM-6PM</p>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">✉️</div>
              <h4>Email Us</h4>
              <p>info@luxefurniture.com<br/>support@luxefurniture.com</p>
            </div>
          </div>

          <form className="contact-form fade-in" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name *</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;