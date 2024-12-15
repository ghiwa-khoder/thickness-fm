import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

/**
 * Footer Component
 * - Displays copyright, contact info, social media links, and powered by SmartCat.
 */
const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      {/* Footer Logo */}
      <div className="footer-logo">
        <a href="/" aria-label="Go to Home">
          <h2>Thickness</h2>
        </a>
      </div>

      {/* Contact Info */}
      <div className="footer-info">
        <p>
          <a href="mailto:Info@thickness.sa">Info@thickness.sa</a> | +99663322114477
        </p>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </div>

    {/* Copyright */}
    <div className="footer-copyright">
      <p>© {new Date().getFullYear()} Thickness. All rights reserved.</p>
    </div>

    {/* Footer Links */}
    
    <div className="footer-links">
      <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
    </div>

    {/* Back to Top Button */}
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to Top"
    >
      ↑
    </button>

    {/* Powered By Section */}
    <div className="footer-powered">
      <p>
        Powered by <a href="https://smartcat.sa" target="_blank" rel="noopener noreferrer">SmartCat</a>
      </p>
    </div>

  </footer>
);

export default Footer;