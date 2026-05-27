import React from 'react';
import './Services.css';
import FlipButton from '../FlipButton/FlipButton';

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
            Our Services
          </div>
          
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Helping businesses and influencers dominate social feeds and scale revenue effectively.
          </p>

          <div className="services-pills">
            <span className="skill-pill">Content Creation & Production</span>
            <span className="skill-pill">Commercial Videography</span>
            <span className="skill-pill">High-Retention Editing</span>
            <span className="skill-pill">Meta & Google Paid Ads</span>
            <span className="skill-pill">Brand Strategy</span>
          </div>

          <div className="divider" style={{ margin: '2.5rem 0' }}></div>

          <div className="services-buttons">
            <FlipButton variant="ghost">Book a Free Call</FlipButton>
            <FlipButton variant="ghost">See Projects</FlipButton>
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
        <div className="service-card" style={{ gridColumn: '1 / -1' }}>
          <div className="service-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <h3>Content Creation & Production</h3>
          </div>
          <p>Tailor-made short-form and long-form content optimized for Instagram Reels, YouTube Shorts, and TikTok. We design the concepts, handle the strategy, and execute the production to build a highly engaged audience around your brand.</p>
        </div>

        <div className="service-card">
          <div className="service-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <h3>Commercial Photography & Videography</h3>
          </div>
          <p>High-end visual assets for products, commercial spaces, and campaigns. Whether it's sharp studio product shots or cinematic brand videos, we deliver high-quality production value that commands attention.</p>
        </div>

        <div className="service-card">
          <div className="service-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <h3>Post-Production & Video Editing</h3>
          </div>
          <p>Professional, fast-paced editing utilizing seamless transitions, precise sound design, color grading, and custom motion graphics. Turn raw footage into polished, high-retention media that drives views and shares.</p>
        </div>

        <div className="service-card">
          <div className="service-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
            <h3>Brand Identity & Strategy</h3>
          </div>
          <p>Building unique, cohesive brand identities from scratch. From visual assets and logos to custom media kits and aesthetic design languages, we ensure your brand leaves a lasting impression across all platforms.</p>
        </div>

        <div className="service-card">
          <div className="service-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <h3>Meta & Google Paid Ads</h3>
          </div>
          <p>Stop wasting budget on unoptimized ads. We manage and scale targeted ad campaigns on Facebook, Instagram, and Google, focusing on creative testing, audience analytics, and maximizing your ROI/ROAS.</p>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> Content Creation</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> High-Retention Editing</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3v18"></path><path d="M3 15h18"></path></svg> Paid Traffic</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect></svg> Commercial Videography</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg> Product Photography</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> Brand Strategy</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg> Meta Ads Specialist</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> Google PPC</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg> Creator Growth</span>
          
          {/* Duplicated for infinite scroll */}
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> Content Creation</span>
          <span className="marquee-pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> High-Retention Editing</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
