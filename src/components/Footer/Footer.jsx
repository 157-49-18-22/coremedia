import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import FlipButton from '../FlipButton/FlipButton';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "mailto:connect@clickcoremedia.com?subject=Project%20Inquiry";
    } else {
      window.open("https://mail.google.com/mail/?view=cm&fs=1&to=connect@clickcoremedia.com&su=Project%20Inquiry", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-ambient-glow"></div>

      <div className="footer-container">

        {/* ── Top Pre-Footer CTA ── */}
        <div className="footer-cta-banner">
          <div className="footer-cta-left">
            <span className="footer-cta-tag">READY TO ELEVATE YOUR BRAND?</span>
            <h2 className="footer-cta-heading">
              Let's create content that <br />
              <span className="text-gradient">demands attention.</span>
            </h2>
          </div>
          <div className="footer-cta-right">
            <Link to="/contact">
              <FlipButton variant="cta">Start a Project ↗</FlipButton>
            </Link>
          </div>
        </div>

        <div className="footer-divider-line"></div>

        {/* ── Main Columns Grid ── */}
        <div className="footer-grid">

          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo">
              <img src="/ClickCore BW.png" alt="ClickCore Media" className="footer-logo-img" />
            </Link>
            <p className="footer-brand-desc">
              High-impact visual production, cinema-grade editing, and data-driven growth systems engineered for modern brands.
            </p>

            {/* Live Availability Badge */}
            <div className="footer-status-badge">
              <span className="pulse-dot"></span>
              <span>Available for New Projects</span>
            </div>

            <a href="tel:+919307189778" className="footer-phone-pill">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 9307189778
            </a>
          </div>

          {/* Column 1: Services */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">
              <span className="col-title-dot"></span> SERVICES
            </h4>
            <ul className="footer-links-list">
              <li><Link to="/services">Commercial Production <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/services">High-Retention Editing <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/services">Meta & Google Ads <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/services">Brand Identity & Design <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/services">Content Creation <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/services">Commercial Photography <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/services">Influencer & PR Growth <span className="link-arrow">↗</span></Link></li>
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">
              <span className="col-title-dot"></span> INDUSTRIES
            </h4>
            <ul className="footer-links-list">
              <li><Link to="/portfolio">Restaurants & Cafés <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/portfolio">Gym & Fitness Brands <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/portfolio">Real Estate & Luxury <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/portfolio">Fashion & Apparel <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/portfolio">Personal Brands & Creators <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/portfolio">Automobile & Supercars <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/portfolio">Tech & Product Commercials <span className="link-arrow">↗</span></Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">
              <span className="col-title-dot"></span> COMPANY
            </h4>
            <ul className="footer-links-list">
              <li><Link to="/portfolio">Our Work <span className="link-arrow">↗</span></Link></li>
              <li><Link to="/services">Our Services <span className="link-arrow">↗</span></Link></li>
              <li><a href="/#process">How We Work <span className="link-arrow">↗</span></a></li>
              <li><a href="/#about">About Us <span className="link-arrow">↗</span></a></li>
              <li><Link to="/contact">Contact Us <span className="link-arrow">↗</span></Link></li>
            </ul>
          </div>

        </div>

        {/* ── Oversized Ghost Watermark ── */}
        <div className="footer-watermark" aria-hidden="true">
          CLICKCORE
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © 2026 ClickCore Media. All rights reserved.
          </span>

          {/* Social Icons & Maydiv Website Link */}
          <div className="footer-bottom-center">
            <div className="footer-social-icons">
              <a
                href="https://www.instagram.com/clickcoremedia"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Twitter / X"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.maydiv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Maydiv Website"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </a>
            </div>

            <a
              href="https://www.maydiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-dev-credit"
            >
              <span>For web development, visit</span>
              <span className="maydiv-highlight">maydiv.com ↗</span>
            </a>
          </div>

          <a
            href="mailto:connect@clickcoremedia.com?subject=Project%20Inquiry"
            onClick={handleEmailClick}
            className="footer-email"
          >
            <span className="email-dot"></span>
            connect@clickcoremedia.com
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
