import React from 'react';
import './Footer.css';
import LiquidChrome from './LiquidChrome';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-liquid-bg">
        <LiquidChrome
          baseColor={[0.1, 0.1, 0.1]}
          speed={0.3}
          amplitude={0.3}
          interactive
        />
      </div>
      <div className="footer-overlay"></div>
      
      <div className="footer-content">
        <h2 className="footer-title">
          Ready to scale your brand's digital media? Let's create high-converting content and launch campaigns that put your business on the map.
        </h2>
        
        <button className="footer-cta-btn">
          Book a Free Media Audit
        </button>
        
        <div className="footer-socials">
          <a href="#behance" className="social-link">Bē</a>
          <span className="social-separator">|</span>
          <a href="#x" className="social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <span className="social-separator">|</span>
          <a href="#dribbble" className="social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-email">hello@clickcoremedia.com</span>
        <span className="footer-copyright">© 2026 ClickCoreMedia. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
