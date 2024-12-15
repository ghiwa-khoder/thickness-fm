import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/About.css';
import aboutImage from '../assets/aboutus.png'; // Replace with your actual image path

const About = () => (
  <section className="about-full-page">
    <div className="about-container">
      {/* Left Section: Content */}
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p>
          We are a full-service design firm providing expert civil and architectural engineering services.
          With a team of highly skilled professionals, we offer innovative solutions for projects in the built environment.
        </p>
        {/* Updated to navigate to the Services page */}
        <Link to="/services" className="about-button">Learn More</Link>
      </div>

      {/* Right Section: Image */}
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </div>
  </section>
);

export default About;