// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation
import logo from '../assets/logo.png'; // Importing the logo image

/**
 * Header Component
 * - Displays the logo on the left.
 * - Centers the navigation list.
 */
const Header = () => (
  <header>
    {/* Logo Section */}
    <div>
      <img src={logo} alt="Thickness Logo" />
    </div>

    {/* Navigation Menu */}
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;