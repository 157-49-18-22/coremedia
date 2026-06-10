import React from 'react';
import './Footer.css';
import FlipButton from '../FlipButton/FlipButton';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-liquid-bg">
        <video autoPlay loop muted playsInline className="desktop-video">
          <source src="/ccm BG 2_1 (1).mp4" type="video/mp4" />
        </video>
      </div>
      <div className="footer-overlay"></div>

      {/* Main content row */}
      <div className="footer-content">
        {/* LEFT — Big text + CTA */}
        <div className="footer-left">
          <div className="footer-text-glass">
            <h2 className="footer-title">
              Ready to scale your brand's digital media?<br />
              Let's create high-converting content<br />
              <span className="footer-and">AND</span><br />
              launch campaigns that put your business on the map.
            </h2>
          </div>
          <FlipButton variant="cta">Book a Free Media Audit</FlipButton>
        </div>

        {/* RIGHT — Large QR code */}
        <div className="footer-right">
          <div className="footer-qr-glass">
            <img src="/qrcode_1781092172655_page-0001.png" alt="QR Code" className="footer-qr" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy-left">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '0.5rem', verticalAlign: 'middle'}}>
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          hello@clickcoremedia.com
        </span>

        <div className="footer-socials">
          <a href="#behance" className="social-link">Bē</a>
          <span className="social-separator">|</span>
          <a href="#x" className="social-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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

        <span className="footer-copyright">© 2026 ClickCoreMedia. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
