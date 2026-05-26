import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-icon">
          <span></span><span></span><span></span><span></span>
        </div>
        <span>Portfolite</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-action">
        <button className="btn-outline">
          <span className="sparkle-icon">✨</span> Get Template
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
