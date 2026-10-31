import React, { useEffect, useRef, useState } from 'react';
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
    img: 'https://res.cloudinary.com/dp4izyo05/video/upload/f_auto,q_auto,w_800/v1793417856/Hammers_01_bpiqhh.jpg',
    video: 'https://res.cloudinary.com/dp4izyo05/video/upload/f_auto,q_auto,w_800/v1793417856/Hammers_01_bpiqhh.mp4',
    link: 'https://www.instagram.com/clickcoremedia',
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

const ProjectCard = ({
  project,
  isExpanded,
  toggleExpand,
  cardRef,
  transitionDelay,
}) => {
  const videoRef = useRef(null);

  // Auto-play when visible on screen, pause when scrolled away
  useEffect(() => {
    if (!project.video) return;
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {});
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, [project.video]);

  const handleCardClick = (e) => {
    // If click was on the +more expand button, let it expand without redirecting
    if (e.target.closest('.project-include-more')) {
      return;
    }
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  const maxVisible = project.col === 'center' ? 5 : 3;
  const itemsToShow = isExpanded ? project.includes : project.includes.slice(0, maxVisible);
  const hiddenCount = project.includes.length - maxVisible;
  const remainingItems = project.includes.slice(maxVisible);

  return (
    <div
      key={project.id}
      className={`project-card ${project.col === 'center' ? 'card-tall' : 'card-standard'} project-card--${project.col} ${project.video ? 'has-video-preview' : ''}`}
      ref={cardRef}
      style={{ transitionDelay }}
      onClick={project.link ? handleCardClick : undefined}
    >
      {!project.video && (
        <img
          src={project.img}
          alt={project.title}
          className="project-image"
          decoding="async"
        />
      )}

      {project.video && (
        <video
          ref={videoRef}
          src={project.video}
          className="project-video-preview"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        />
      )}

      <div className="project-gradient"></div>

      {/* Top Category Tag */}
      <div className="project-top-tag">
        <span>{project.category}</span>
      </div>

      <div className="project-content-wrapper">
        <div className="project-text-info">
          <h3 className="project-card-title">{project.title}</h3>

          {project.results && (
            <div className="project-results-badge">
              <span className="results-icon">⚡</span>
              <span className="results-text">{project.results}</span>
            </div>
          )}

          <div className="project-includes-list">
            {itemsToShow.map((item, idx) => (
              <span key={idx} className="project-include-item">
                • {item}
              </span>
            ))}

            {project.col !== 'center' && hiddenCount > 0 && (
              <button
                type="button"
                className={`project-include-more ${isExpanded ? 'is-expanded' : ''}`}
                onClick={(e) => toggleExpand(project.id, e)}
                title={isExpanded ? 'Click to show less' : `Also includes: ${remainingItems.join(', ')}`}
                aria-label={isExpanded ? 'Show less deliverables' : `Show ${hiddenCount} more deliverables`}
              >
                {isExpanded ? (
                  <span className="expand-label">− show less</span>
                ) : (
                  <>
                    <span className="plus-count">+{hiddenCount}</span>
                    <span className="plus-text">more</span>
                    <div className="project-include-more-tooltip">
                      <span className="tooltip-title">Also Includes</span>
                      {remainingItems.map((moreItem, mIdx) => (
                        <span key={mIdx} className="tooltip-item">• {moreItem}</span>
                      ))}
                    </div>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-overlay-link"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="card-overlay">
              <span className="casestudy-btn">Watch on Instagram ↗</span>
            </div>
          </a>
        ) : (
          <Link to="/case-studies" className="card-overlay-link">
            <div className="card-overlay">
              <span className="casestudy-btn">View Casestudy ↗</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const cardsRef = useRef([]);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
          {leftCol.map((p, idx) => (
            <ProjectCard
              key={p.id}
              project={p}
              isExpanded={!!expandedCards[p.id]}
              toggleExpand={toggleExpand}
              cardRef={(el) => (cardsRef.current[idx] = el)}
              transitionDelay={`${(idx % 3) * 0.1}s`}
            />
          ))}
        </div>

        <div className="projects-col col-center">
          {centerCol.map((p, idx) => (
            <ProjectCard
              key={p.id}
              project={p}
              isExpanded={!!expandedCards[p.id]}
              toggleExpand={toggleExpand}
              cardRef={(el) => (cardsRef.current[idx + 3] = el)}
              transitionDelay={`${((idx + 3) % 3) * 0.1}s`}
            />
          ))}
        </div>

        <div className="projects-col col-side">
          {rightCol.map((p, idx) => (
            <ProjectCard
              key={p.id}
              project={p}
              isExpanded={!!expandedCards[p.id]}
              toggleExpand={toggleExpand}
              cardRef={(el) => (cardsRef.current[idx + 5] = el)}
              transitionDelay={`${((idx + 5) % 3) * 0.1}s`}
            />
          ))}
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
