import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import FlipButton from '../FlipButton/FlipButton';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & scroll to top on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome      = location.pathname === '/';
  const isServices  = location.pathname === '/services';
  const isPortfolio = location.pathname === '/portfolio';
  const isContact   = location.pathname === '/contact';

  // Smooth scroll for home-page anchor links
  const handleAnchorClick = (e, hash) => {
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>

      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/ClickCore BW.png" alt="ClickCoreMedia Logo" className="logo-img" />
        </Link>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Nav Links */}
      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <li>
          <Link to="/" className={isHome ? 'nav-active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className={isServices ? 'nav-active' : ''}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={isPortfolio ? 'nav-active' : ''}>
            Portfolio
          </Link>
        </li>

        <li>
          <Link to="/contact" className={isContact ? 'nav-active' : ''}>
            Contact
          </Link>
        </li>
        <li className="mobile-only-btn">
          <Link to="/contact">
            <FlipButton variant="outline">Get a Free Proposal</FlipButton>
          </Link>
        </li>
      </ul>

      <div className="navbar-action desktop-only-btn">
        <Link to="/contact">
          <FlipButton variant="outline">Get a Free Proposal</FlipButton>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
