import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import FlipButton from '../FlipButton/FlipButton';

const projects = [
  {
    id: 1,
    col: 'left',
    category: 'Restaurant Campaign 🍽️',
    title: 'The Weekend Rush Campaign',
    includes: [
      '1 Hero cinematic reel',
      '5 food close-up shots',
      'Behind-the-scenes footage',
      'Instagram carousel',
      'Before vs. after edit'
    ],
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    col: 'center',
    category: 'Gym / Fitness Brand 💪',
    title: 'Transformation Challenge',
    includes: [
      'High-energy workout reels',
      'Member testimonials',
      'Slow-motion cinematic shots',
      'Color grading process'
    ],
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    col: 'right',
    category: 'Real Estate 🏠',
    title: 'Luxury Property Showcase',
    includes: [
      'Drone footage',
      'Interior walkthrough',
      'Agent branding reel',
      'Vertical social edits'
    ],
    results: 'Property sold in 12 days • 350K views',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 4,
    col: 'left',
    category: 'Fashion Brand 👕',
    title: 'New Collection Launch',
    includes: [
      'Model shoot',
      'BTS',
      'Product reels',
      'Lifestyle edits'
    ],
    results: '4M organic views • 2.3x website traffic',
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 5,
    col: 'center',
    category: 'Coffee Shop / Café ☕',
    title: 'Launch Week Content',
    includes: [
      'Barista slow-motion shots',
      'Product close-ups',
      'Aesthetic editing',
      'Customer reactions'
    ],
    img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 6,
    col: 'right',
    category: 'Personal Brand / Creator 🎥',
    title: '30 Days of Content',
    includes: [
      'Filming process',
      'Editing workflow',
      'Thumbnail design',
      'Final reels'
    ],
    results: '500K views • 18 viral reels • +12K followers',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 7,
    col: 'left',
    category: 'Automobile 🚗',
    title: 'Performance Meets Luxury',
    includes: [
      'Rolling shots',
      'Drone shots',
      'Night cinematics',
      'Sound design'
    ],
    img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 8,
    col: 'right',
    category: 'Product Commercial 📱',
    title: 'Premium Product Launch',
    note: 'Apple / Nothing-style cinematic ad',
    includes: [
      'Macro shots',
      'Lighting setup',
      'CGI visuals',
      'Final commercial'
    ],
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
  },
];

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('project-card--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const leftCol = projects.filter((p) => p.col === 'left');
  const centerCol = projects.filter((p) => p.col === 'center');
  const rightCol = projects.filter((p) => p.col === 'right');

  const renderCard = (p, globalIdx) => (
    <div
      key={p.id}
      className={`project-card ${p.col === 'center' ? 'card-tall' : 'card-standard'}`}
      ref={(el) => (cardsRef.current[globalIdx] = el)}
      style={{ transitionDelay: `${(globalIdx % 3) * 0.1}s` }}
    >
      <img src={p.img} alt={p.title} className="project-image" />
      <div className="project-gradient"></div>

      {/* Top Category Tag */}
      <div className="project-top-tag">
        <span>{p.category}</span>
      </div>

      <div className="project-content-wrapper">
        <div className="project-text-info">
          <h3 className="project-card-title">{p.title}</h3>

          {p.results && (
            <div className="project-results-badge">
              <span className="results-icon">⚡</span>
              <span className="results-text">{p.results}</span>
            </div>
          )}

          <div className="project-includes-list">
            {p.includes.slice(0, p.col === 'center' ? 5 : 3).map((item, idx) => (
              <span key={idx} className="project-include-item">
                • {item}
              </span>
            ))}
            {p.col !== 'center' && p.includes.length > 3 && (
              <span className="project-include-more">
                +{p.includes.length - 3} more
              </span>
            )}
          </div>
        </div>

        <Link to="/portfolio" className="card-overlay-link">
          <div className="card-overlay">
            <span className="casestudy-btn">View Casestudy ↗</span>
          </div>
        </Link>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Recent Campaigns</h2>
        <p className="projects-subtitle">
          A glimpse into the high-retention content systems and growth campaigns we’ve executed for brands and creators across 8 industries.
        </p>
      </div>

      {/* 3-Column Masonry: 3 on left, 2 tall in center, 3 on right = 8 cards */}
      <div className="projects-masonry">
        <div className="projects-col col-side">
          {leftCol.map((p, idx) => renderCard(p, idx))}
        </div>

        <div className="projects-col col-center">
          {centerCol.map((p, idx) => renderCard(p, idx + 3))}
        </div>

        <div className="projects-col col-side">
          {rightCol.map((p, idx) => renderCard(p, idx + 5))}
        </div>
      </div>

      <div className="projects-footer">
        <Link to="/portfolio">
          <FlipButton variant="ghost">All Projects</FlipButton>
        </Link>
        <Link to="/contact">
          <FlipButton variant="ghost">Book a Free Call</FlipButton>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
