import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-icon">
          <span></span><span></span><span></span><span></span>
        </div>
        <span>ClickCoreMedia</span>
      </div>

      <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
        <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
        <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a></li>
        <li><a href="#admanagement" onClick={() => setIsMobileMenuOpen(false)}>Ad Management</a></li>
        <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        <li className="mobile-only-btn">
          <button className="btn-outline">
            Get a Free Proposal
          </button>
        </li>
      </ul>

      <div className="navbar-action desktop-only-btn">
        <button className="btn-outline">
          Get a Free Proposal
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
