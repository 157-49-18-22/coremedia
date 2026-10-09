import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">Meet ClickCoreMedia</h2>
        <p className="about-description">
          We are a full-service creative and growth agency headquartered in Nagpur with production arms across Canada and Faridabad. From high-end commercial photography to high-retention video editing and high-converting Meta and Google ad campaigns, we bridge the gap between stunning creative work and measurable business results.
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
