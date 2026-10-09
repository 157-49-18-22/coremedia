import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    client: 'The Weekend Rush',
    category: 'Restaurant Campaign 🍽️',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    size: 'large',
  },
  {
    id: 2,
    client: 'Transformation Challenge',
    category: 'Gym / Fitness Brand 💪',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: 3,
    client: 'Luxury Property Showcase',
    category: 'Real Estate 🏠',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    size: 'tall',
  },
  {
    id: 4,
    client: 'New Collection Launch',
    category: 'Fashion Brand 👕',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: 5,
    client: 'Launch Week Content',
    category: 'Coffee Shop / Café ☕',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
    size: 'large',
  },
  {
    id: 6,
    client: '30 Days of Content',
    category: 'Personal Brand / Creator 🎥',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: 7,
    client: 'Performance Meets Luxury',
    category: 'Automobile 🚗',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop',
    size: 'tall',
  },
  {
    id: 8,
    client: 'Premium Product Launch',
    category: 'Product Commercial 📱',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    size: 'large',
  }
];

const Portfolio = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pf-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <main className="pf-main">

      {/* ── Premium Spotlight Hero ── */}
      <section className="pf-hero pb-12">
        <div className="pf-hero-inner pf-reveal" ref={addRef}>
          <div className="pf-hero-content">
            <div className="pf-hero-badge-wrap">
              <span className="pf-hero-badge">Curated Archive</span>
              <span className="pf-hero-year">2023 — 2024</span>
            </div>
            
            <h1 className="pf-hero-title">
              <span className="text-stroke-light">SELECTED</span><br />
              WORKS.
            </h1>
            
            <p className="pf-hero-desc">
              We don't just build campaigns; we craft digital legacies. Explore our 
              highest-fidelity projects across motion, strategy, and production.
            </p>
          </div>
          
          <div className="pf-hero-image-wrapper">
             <div className="pf-image-overlay"></div>
             <img 
               src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop" 
               alt="Portfolio Hero" 
               className="pf-hero-main-img" 
             />
             <div className="pf-scroll-indicator">
                <span className="pf-scroll-text">SCROLL</span>
                <div className="pf-scroll-line"></div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Dynamic Masonry Project Grid ── */}
      <section className="pf-projects-section">
        <div className="pf-projects-grid">
          {projects.map((project, index) => (
            <div 
              className={`pf-project-card pf-card-${project.size} pf-reveal`} 
              key={project.id}
              ref={addRef}
              style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
            >
              <div className="pf-card-image-box">
                <img src={project.image} alt={project.client} />
                <div className="pf-card-hover-overlay">
                  <span className="pf-view-project-btn">View Case Study <span className="arrow">↗</span></span>
                </div>
              </div>
              <div className="pf-card-meta">
                <div className="pf-card-meta-left">
                  <span className="pf-project-number">0{index + 1}</span>
                  <h3 className="pf-project-client">{project.client}</h3>
                </div>
                <span className="pf-project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bold Ticker ── */}
      <div className="pf-ticker-container pf-reveal" ref={addRef}>
        <div className="pf-ticker-track">
          <span className="pf-ticker-item">STRATEGY <span className="dot">·</span> DESIGN <span className="dot">·</span> MOTION <span className="dot">·</span> PRODUCTION <span className="dot">·</span> </span>
          <span className="pf-ticker-item">STRATEGY <span className="dot">·</span> DESIGN <span className="dot">·</span> MOTION <span className="dot">·</span> PRODUCTION <span className="dot">·</span> </span>
          <span className="pf-ticker-item">STRATEGY <span className="dot">·</span> DESIGN <span className="dot">·</span> MOTION <span className="dot">·</span> PRODUCTION <span className="dot">·</span> </span>
        </div>
      </div>



      {/* ── Next-Level CTA ── */}
      <section className="pf-cta-premium pf-reveal" ref={addRef}>
        <div className="pf-cta-premium-inner">
          <div className="pf-cta-premium-content">
            <p className="pf-cta-eyebrow">YOUR TURN</p>
            <h2 className="pf-cta-mega-title">
              Ready to create <br/>your legacy?
            </h2>
            <Link to="/contact" className="pf-premium-btn">
              <span className="btn-text">Start a Project</span>
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Portfolio;
