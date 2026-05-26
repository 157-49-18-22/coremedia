import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">Meet Meily</h2>
        <p className="about-description">
          I'm Meily, a passionate Brand Identity & Package Designer based in tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.
        </p>

        <div className="divider"></div>

        <div className="skills-container">
          <span className="skill-pill">Product Design</span>
          <span className="skill-pill">Brand Identity Design</span>
          <span className="skill-pill">UX Design</span>
          <span className="skill-pill">Branding</span>
          <span className="skill-pill">Packaging Design</span>
          <span className="skill-pill">Figma</span>
          <span className="skill-pill">Photoshop</span>
        </div>

        <div className="divider"></div>

        <div className="experience-list">
          <div className="experience-row">
            <span className="exp-title">Freelance</span>
            <span className="exp-company">GreenLeaf Co</span>
            <span className="exp-date">Currently</span>
          </div>
          <div className="experience-row">
            <span className="exp-title">Brand Designer</span>
            <span className="exp-company">UrbanFit Studio</span>
            <span className="exp-date">2023-24</span>
          </div>
          <div className="experience-row">
            <span className="exp-title">Package Designer</span>
            <span className="exp-company">GreenK Studio</span>
            <span className="exp-date">2020-22</span>
          </div>
        </div>

        <div className="recent-works">
          <h3>Recent Works</h3>
          <div className="arrow-down">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="8 12 12 16 16 12"></polyline>
              <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="about-image-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=800&auto=format&fit=crop" 
          alt="Meet Meily" 
          className="about-image" 
        />
      </div>
    </section>
  );
};

export default About;
