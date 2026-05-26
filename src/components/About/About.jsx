import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">Meet ClickCoreMedia</h2>
        <p className="about-description">
          We are a full-service creative and growth agency dedicated to brands and creators who want to stand out. From high-end commercial photography to high-retention video editing and high-converting Meta and Google ad campaigns, we bridge the gap between stunning creative work and measurable business results.
        </p>

        <div className="divider"></div>

        <div className="skills-container">
          <span className="skill-pill">Content Creation</span>
          <span className="skill-pill">Commercial Photography</span>
          <span className="skill-pill">High-Retention Editing</span>
          <span className="skill-pill">Brand Identity Design</span>
          <span className="skill-pill">Meta & Google Ads</span>
          <span className="skill-pill">Influencer Growth</span>
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
          alt="Meet ClickCoreMedia" 
          className="about-image" 
        />
      </div>
    </section>
  );
};

export default About;
