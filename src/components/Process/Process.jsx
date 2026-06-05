import React from 'react';
import './Process.css';
import FlipButton from '../FlipButton/FlipButton';

const steps = [
  {
    number: '1',
    title: 'Define & Strategize',
    desc: 'We deep dive into your brand goals, target audience, and current digital presence to build a customized content or advertising blueprint.',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '2',
    title: 'Produce',
    desc: 'From camera setup to on-location shoots, our team executes high-quality production — photography, videography, and commercial content creation.',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '3',
    title: 'Perfect',
    desc: 'Our editors refine every frame — color grading, motion graphics, sound design, and precise cuts that maximize audience retention and engagement.',
    img: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=800&auto=format&fit=crop',
  },
  {
    number: '4',
    title: 'Launch & Scale',
    desc: 'We deploy your content and ad campaigns on Meta and Google, continuously optimizing with data-driven insights to scale results and maximize ROI.',
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
              <FlipButton variant="ghost">Book a Free Call</FlipButton>
              <FlipButton variant="ghost">See Projects</FlipButton>
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
              <p className="step-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
