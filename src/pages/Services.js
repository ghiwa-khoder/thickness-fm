import React from 'react';
import '../styles/Services.css';

const Services = () => (
  <main className="services-page">
    {/* Header Section */}
    <header className="services-header">
      <h1>Our Services</h1>
      <p>
        Delivering innovative solutions across various engineering disciplines to meet construction and development needs.
      </p>
    </header>

    {/* Services Section */}
    <section className="services-grid">
      {[
        {
          title: 'Structural Engineering',
          description: 'Comprehensive structural design and analysis for buildings, bridges, and infrastructure projects.',
          image: '/images/structural-engineering.png',
          alt: 'Structural Engineering',
        },
        {
          title: 'Civil Engineering',
          description: 'Expertise in land development, transportation, and water resources engineering.',
          image: '/images/civil-engineering.png',
          alt: 'Civil Engineering',
        },
        {
          title: 'Mechanical Engineering',
          description: 'Cutting-edge solutions for HVAC, plumbing, and mechanical systems in construction projects.',
          image: '/images/mechanical-engineering.png',
          alt: 'Mechanical Engineering',
        },
        {
          title: 'Electrical Engineering',
          description: 'Efficient electrical system designs ensuring safety and functionality in construction.',
          image: '/images/electrical-engineering.png',
          alt: 'Electrical Engineering',
        },
        {
          title: 'Environmental Engineering',
          description: 'Sustainable solutions for environmental impact assessments and construction waste management.',
          image: '/images/environmental-engineering.png',
          alt: 'Environmental Engineering',
        },
      ].map((service, index) => (
        <div
          className={`service-card ${index % 2 !== 0 ? 'reverse' : ''}`}
          key={service.title}
        >
          <div className="service-image">
            <img src={service.image} alt={service.alt} />
          </div>
          <div className="service-details">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  </main>
);

export default Services;