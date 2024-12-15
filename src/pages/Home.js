import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import aboutImage from '../assets/aboutus.png';
import visionIcon from '../assets/vision-icon.png';
import missionIcon from '../assets/mission-icon.png';
import visionMissionImage from '../assets/vision-mission.png';
import valuesBackground from '../assets/values-background.png';
import sustainabilityIcon from '../assets/sustainability-icon.png';
import qualityIcon from '../assets/quality-icon.png';
import integrityIcon from '../assets/integrity-icon.png';
import innovationIcon from '../assets/innovation-icon.png';
import projectManagementIcon from '../assets/project-management.png';
import technologyIcon from '../assets/technology-icon.png';
import clientCentricIcon from '../assets/client-centric-icon.png';
import teamExpertiseIcon from '../assets/team-expertise-icon.png';
import handshakeImage from '../assets/handshakeImage.png';
import logoIcon from '../assets/logo-icon.png'; // Replace with the correct path

import targetImage from '../assets/target.jpg';
import analyticsImage from '../assets/analytics.png'




const Home = () => (
  <main>
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        {/* Left Section: Text */}
        <div className="hero-left">
          <h1>Thickness</h1>
          <div className="line-section">
            <p>Shaping for future</p>
            <hr />
          </div>
        </div>

        {/* Right Block: Logo with Overlay */}
        <div className="hero-right">
          <div className="vertical-overlay"></div>
          <img src={logo} alt="Thickness Logo" className="logo" />
        </div>
      </div>
    </section>

    {/* About Section */}
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Team working on a project" />
        </div>
        <div className="about-content">
          <Link to="/about">
            <button className="about-button">ABOUT US</button>
          </Link>
          <p>
            OUR ENGINEERING OFFICE IS A FULL-SERVICE DESIGN FIRM PROVIDING EXPERT
            CIVIL AND ARCHITECTURAL ENGINEERING SERVICES. WITH A TEAM OF HIGHLY
            SKILLED PROFESSIONALS, WE OFFER INNOVATIVE SOLUTIONS FOR A WIDE RANGE
            OF PROJECTS IN THE BUILT ENVIRONMENT.
          </p>
          <div className="about-logo">
            <img src={logo} alt="Thickness company logo" />
          </div>
        </div>
      </div>
    </section>

    {/* Vision and Mission Section */}
    <section className="vision-mission-section">
      {/* Top Image */}
      <div className="vision-mission-image">
        <img src={visionMissionImage} alt="Vision and Mission Background" />
      </div>

      {/* Vision and Mission Content */}
      <div className="vision-mission-container">
        {/* Vision Section */}
        <div className="vision">
          <div className="icon-box">
            <img src={visionIcon} alt="Vision Icon" />
          </div>
          <div className="text-box">
            <h2>VISION:</h2>
            <p>
              To be a leading and build innovative designs and sustainable
              environment on civil and architectural engineering.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission">
          <div className="icon-box">
            <img src={missionIcon} alt="Mission Icon" />
          </div>
          <div className="text-box">
            <h2>MISSION:</h2>
            <p>
              Our mission is inspiring for the next generation of engineering and
              contribute to cutting-edge technologies that positively impact on
              our innovative and sustainable commitment.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="values-section">
    {/* Background Image */}
    <div className="values-background">
      <img src={valuesBackground} alt="Our Values Background" />
      <div className="overlay">
        <h2>OUR VALUES</h2>
      </div>
    </div>

    {/* Values Cards */}
    <div className="values-cards">
      {/* Sustainability */}
      <div className="value-card">
        <div className="icon-wrapper">
          <img src={sustainabilityIcon} alt="Sustainability Icon" />
        </div>
        <h3>Sustainability</h3>
        <div className="divider"></div>
        <p>Promoting eco-friendly practices and sustainable development.</p>
      </div>

      {/* Quality */}
      <div className="value-card">
        <div className="icon-wrapper">
          <img src={qualityIcon} alt="Quality Icon" />
        </div>
        <h3>Quality</h3>
        <div className="divider"></div>
        <p>Commitment to excellence in every project we undertake.</p>
      </div>

      {/* Integrity */}
      <div className="value-card">
        <div className="icon-wrapper">
          <img src={integrityIcon} alt="Integrity Icon" />
        </div>
        <h3>Integrity</h3>
        <div className="divider"></div>
        <p>
          Upholding the highest standards of ethics and transparency in all our
          dealings.
        </p>
      </div>

      {/* Innovation */}
      <div className="value-card">
        <div className="icon-wrapper">
          <img src={innovationIcon} alt="Innovation Icon" />
        </div>
        <h3>Innovation</h3>
        <div className="divider"></div>
        <p>
          Continuously pushing the boundaries of engineering with creative
          solutions.
        </p>
      </div>
    </div>
  </section>


  
 {/* Our Approach Section */}
      <section className="approach-section">
        <div className="approach-container">
          <div className="approach-text">
            <h2>OUR APPROACH:</h2>
            <p>
              We follow a concept of total design, emphasizing a comprehensive understanding of
              project complexity and cross-disciplinary collaboration. Our team adopts cutting-edge
              digital practices and considers sustainability at a fundamental level in all our work.
            </p>
          </div>
          <div className="approach-content">
            <div className="approach-images">
              <img src={targetImage} alt="Target Image" className="approach-image" />
              <img src={analyticsImage} alt="Analytics Image" className="approach-image" />
            </div>
            <div className="focus-areas">
              <h3>KEY FOCUS AREAS:</h3>
              <ul>
                <li>Sustainable Building and Civil Engineering</li>
                <li>Structural Engineering</li>
                <li>Facade Engineering</li>
                <li>Urban Resilience</li>
                <li>Smart Building Technologies</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



{/* Our Methodology Section */}
<section className="methodology-section">
  <div className="methodology-header">
    <h2>OUR METHODOLOGY</h2>
  </div>
  <div className="methodology-content">
    <div className="methodology-row">
      <div className="methodology-card">
        <div className="icon-wrapper">
          <img src={projectManagementIcon} alt="Project Management Icon" />
        </div>
        <h3>PROJECT MANAGEMENT</h3>
        <p>
          Our experienced engineers manage projects from conception to completion,
          ensuring safe, timely, and sustainable outcomes.
        </p>
      </div>
      <div className="methodology-card">
        <div className="icon-wrapper">
          <img src={technologyIcon} alt="Technology Icon" />
        </div>
        <h3>TECHNOLOGY</h3>
        <p>
          We utilize state-of-the-art design and visualization software,
          including AutoCAD and Civil 3D, to deliver high-quality designs.
        </p>
      </div>
      <div className="methodology-card">
        <div className="icon-wrapper">
          <img src={clientCentricIcon} alt="Client-Centric Icon" />
        </div>
        <h3>CLIENT-CENTRIC</h3>
        <p>
          We collaborate closely with stakeholders to ensure client satisfaction
          throughout the project lifecycle.
        </p>
      </div>
    </div>
    <div className="methodology-row">
      <div className="methodology-card">
        <div className="icon-wrapper">
          <img src={teamExpertiseIcon} alt="Team Expertise Icon" />
        </div>
        <h3>TEAM EXPERTISE</h3>
        <p>
          Our staff includes licensed Professional Engineers with strong
          technical competence and creativity.
        </p>
      </div>
      <div className="methodology-card">
        <div className="icon-wrapper">
          <img src={sustainabilityIcon} alt="Sustainability Icon" />
        </div>
        <h3>COMMITMENT TO SUSTAINABILITY</h3>
        <p>
          We critically assess the environmental impact of our designs to
          create eco-friendly infrastructure.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Why Choose Us Section */}
<section className="why-choose-us-section">
  <div className="why-choose-us-header">
    <h2>WHY CHOOSE US</h2>
  </div>
  <div className="why-choose-us-content">
    <p>
      At Thickness, we pride ourselves on delivering engineering solutions that exceed expectations.
      Our dedication to precision, innovation, and sustainability makes us the trusted partner for your projects.
    </p>
  </div>
  <div className="why-choose-us-image-container">
    <div className="image-wrapper">
      <img src={handshakeImage} alt="Handshake" className="why-choose-us-image" />
      <div className="icon-overlay">
        <img src={logoIcon} alt="Logo Icon" />
      </div>
    </div>
  </div>
  <div className="key-benefits">
    <div className="benefit-card">
      <h3>Expert Team</h3>
      <p>Skilled professionals dedicated to precision and excellence.</p>
    </div>
    <div className="benefit-card">
      <h3>Innovative Solutions</h3>
      <p>Cutting-edge technologies tailored to your needs.</p>
    </div>
    <div className="benefit-card">
      <h3>Sustainability</h3>
      <p>Committed to environmentally-friendly practices.</p>
    </div>
  </div>
</section>





  
  </main>
);

export default Home;