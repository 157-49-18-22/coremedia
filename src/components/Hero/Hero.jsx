import React from 'react';
import './Hero.css';
import bgImage from '../../assets/smoky_abstract_background.png';
import LiquidChrome from '../Footer/LiquidChrome';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-liquid-bg">
        <LiquidChrome
          baseColor={[0.1, 0.1, 0.1]}
          speed={0.3}
          amplitude={0.3}
          interactive
        />
      </div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="badge">
          <span className="dot"></span>
          Crafting Unique Brand Identities
        </div>
        
        <h1 className="hero-title">
          Branding that you<br />need Indeed
        </h1>
        
        <p className="hero-subtitle">
          Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary">Get Started Now</button>
          <button className="btn-secondary">See Projects</button>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-text">Scroll down</span>
        <div className="scroll-line"></div>
        <div className="mouse-icon">
          <div className="wheel"></div>
        </div>
        <div className="scroll-line"></div>
        <span className="scroll-text">to see projects</span>
      </div>
    </section>
  );
};

export default Hero;
