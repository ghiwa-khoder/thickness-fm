import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/ Footer'; // Fixed extra space in import
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

/**
 * Main Application
 * - Includes Header, Footer, and page routing.
 */
const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Header Component */}
        <Header />

        {/* Main Content Area */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         
          </Routes>
        </main>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;