import React, { useState } from 'react';
import { isValidEmail } from '../utils/helpers';
import { toast } from 'react-toastify';

const Footer = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      onSubscribe(email);
      setEmail('');
    } else {
      toast.error('Please enter a valid email address');
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Luxe Furniture</h4>
            <p>
              Crafting exceptional furniture for discerning homeowners since 2025. 
              Experience the perfect blend of traditional craftsmanship and contemporary design.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">📘</a>
              <a href="https://instagram.com" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
              <a href="https://pinterest.com" className="social-icon" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">📌</a>
              <a href="https://twitter.com" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🐦</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#products">Shop</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li><strong>Address:</strong> siva surya avenue,ondipudur,coimbatore</li>
              <li><strong>Phone:</strong> (91) 6381331762</li>
              <li><strong>Email:</strong> info@luxe-furniture.com</li>
              <li><strong>Hours:</strong> Mon-Fri 9AM-6PM EST</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest collections and exclusive offers</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Luxe Furniture. All rights reserved. Handcrafted with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;