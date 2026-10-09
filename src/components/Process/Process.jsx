import React from 'react';
import { Link } from 'react-router-dom';
import './Process.css';
import FlipButton from '../FlipButton/FlipButton';

const steps = [
  {
    number: '1',
    title: 'Discover & Strategy',
    tagline: 'Understand the brand before the camera rolls.',
    desc: 'We start by understanding your business, audience, and marketing goals. Together, we create a content strategy, define the creative direction, and plan every detail to ensure your shoot delivers measurable results.',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '2',
    title: 'Shoot & Create',
    tagline: 'Professional production with purpose.',
    desc: 'From product shoots and lifestyle content to brand films and social media videos, we capture high-quality visuals that align with your brand identity and marketing objectives.',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '3',
    title: 'Edit & Enhance',
    tagline: 'Where great content becomes exceptional.',
    desc: 'Our editing team transforms raw footage into polished, engaging content through color grading, sound design, motion graphics, retouching, and platform-specific optimization.',
    img: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '4',
    title: 'Deliver & Grow',
    tagline: 'Content ready to perform.',
    desc: 'Receive optimized files for every platform—Instagram, YouTube, Meta Ads, LinkedIn, your website, and more. We can also support your marketing campaigns to help your content generate real business results.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
];

const Process = () => {

  return (
    <section id="process" className="process-section">
      <div className="process-header">
        <div className="badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
          The Core Process
        </div>

        <div className="process-header-row">
          <h2 className="process-title">The Core Process</h2>
          <div className="process-header-right">
            <p className="process-subtitle">
              Our seamless workflow designed to take your media from concept to high-performing asset.
            </p>
            <div className="process-buttons">
              <Link to="/contact">
                <FlipButton variant="ghost">Book a Free Call</FlipButton>
              </Link>
              <Link to="/portfolio">
                <FlipButton variant="ghost">See Projects</FlipButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <div
            className="step-card"
            key={step.number}
          >
            <div className="step-img-wrapper">
              <img src={step.img} alt={step.title} className="step-img" />
            </div>
            <div className="step-body">
              <div className="step-header">
                <span className="step-number">{step.number}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              {step.tagline && <p className="step-tagline">{step.tagline}</p>}
              <p className="step-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
