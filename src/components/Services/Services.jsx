import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services-component" className="services-section">
      <div className="services-top">
        <div className="services-content">
          <div className="badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Design services
          </div>
          
          <h2 className="services-title">Services</h2>
          <p className="services-subtitle">
            Helping businesses standout with brand identity packaging that captivates and converts effectively.
          </p>

          <div className="services-pills">
            <span className="skill-pill">Product Design</span>
            <span className="skill-pill">Brand Identity Design</span>
            <span className="skill-pill">Branding</span>
            <span className="skill-pill">Packaging Design</span>
            <span className="skill-pill">Mochup Design</span>
          </div>

          <div className="divider" style={{ margin: '2.5rem 0' }}></div>

          <div className="services-buttons">
            <button className="btn-outline">Book a Free Call</button>
            <button className="btn-outline">See Projects</button>
          </div>
        </div>

        <div className="services-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" 
            alt="Design Services" 
            className="services-image" 
          />
        </div>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <h3>Brand Identity</h3>
          </div>
          <p>Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence.</p>
        </div>

        <div className="service-card">
          <div className="service-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3>Brand Design</h3>
          </div>
          <p>Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.</p>
        </div>

        <div className="service-card">
          <div className="service-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <h3>Package Design</h3>
          </div>
          <p>Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.</p>
        </div>

        <div className="service-card">
          <div className="service-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
            <h3>Mochup Design</h3>
          </div>
          <p>Tailored design mockups that align perfectly with your brand's aesthetic — because every detail matters when showcasing your product's true potential.</p>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> Copywriting</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> Brand Graphics</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3v18"></path><path d="M3 15h18"></path></svg> Brand Migration</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect></svg> Package Design</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg> Branding</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> Slide Decks</span>
          
          {/* Duplicated for infinite scroll */}
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> Copywriting</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> Brand Graphics</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
