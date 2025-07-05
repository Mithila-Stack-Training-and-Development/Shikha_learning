import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
  <h2>Contact Me</h2>
  <form className="contact-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" rows="4" required></textarea>
    <button type="submit">Send</button>
  </form>
  <p>&copy; 2025 Shikha. All rights reserved.</p>
</footer>

  );
};

export default Footer;