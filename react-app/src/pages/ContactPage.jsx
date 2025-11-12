import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Simple Contact page that scrolls to the Footer contact section
const ContactPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to footer contact section on mount
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If the footer isn't present on a separate page, navigate home and then scroll
      navigate('/');
      setTimeout(() => {
        const footer = document.getElementById('contact');
        if (footer) footer.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  }, [navigate]);

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">We've forwarded you to the contact section. If you don't see it, please make sure the page layout includes the footer's contact block.</p>
      </div>
    </div>
  );
};

export default ContactPage;
