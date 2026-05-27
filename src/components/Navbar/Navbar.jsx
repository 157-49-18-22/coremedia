import React, { useState, useEffect } from 'react';
import './Navbar.css';
import FlipButton from '../FlipButton/FlipButton';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src="/ClickCore BW.png" alt="ClickCoreMedia Logo" className="logo-img" />
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
          <FlipButton variant="outline">Get a Free Proposal</FlipButton>
        </li>
      </ul>

      <div className="navbar-action desktop-only-btn">
        <FlipButton variant="outline">Get a Free Proposal</FlipButton>
      </div>
    </nav>
  );
};

export default Navbar;
