import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import FlipButton from '../FlipButton/FlipButton';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-liquid-bg">
        <video autoPlay loop muted playsInline className="desktop-video">
          <source src="/ccm BG 2_1 (1).mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="badge">
          <span className="dot"></span>
          Nagpur · Canada · Faridabad
        </div>

        <h1 className="hero-title">
          YOUR VISION. <br />OUR PRODUCTION.
        </h1>

        <p className="hero-subtitle">
          Elevate your digital presence with strategic content creation, premium production, and targeted ad campaigns. We turn casual viewers into loyal customers through bold visuals and data-driven growth.
        </p>

        <div className="hero-buttons">
          <Link to="/portfolio">
            <FlipButton variant="secondary">See Our Work</FlipButton>
          </Link>
          <Link to="/contact">
            <FlipButton variant="secondary">Book a Discovery Call</FlipButton>
          </Link>
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
