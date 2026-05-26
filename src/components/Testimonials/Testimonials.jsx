import React from 'react';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CMO, Elevate E-Commerce',
    text: '"ClickCoreMedia completely transformed our social channels. The video content quality is incredible, and our audience engagement has skyrocketed since they took over editing and production."',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Founder, TechFit',
    text: '"Our ROAS (Return on Ad Spend) practically doubled within the first month of letting them run our Meta and Google ads. They know exactly how to pair high-quality creatives with sharp targeting."',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sofia Toms',
    role: 'Digital Creator',
    text: '"Working with ClickCoreMedia for my personal brand has been life-changing. Their high-retention video editing completely blew up my YouTube Analytics and freed me to focus on creating."',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-top">
        <div className="testimonials-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
            alt="Client Team" 
            className="testimonials-image" 
          />
        </div>

        <div className="testimonials-content">
          <div className="badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Reviews
          </div>
          
          <h2 className="testimonials-title">Client Reviews</h2>
          <p className="testimonials-subtitle">
            Real feedback from clients who trusted my design expertise to elevate their brands successfully.
          </p>

          <div className="testimonials-buttons">
            <button className="btn-outline">Book a Free Call</button>
            <button className="btn-outline">See Services</button>
          </div>
        </div>
      </div>

      <div className="testimonials-carousel">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-avatar">
              <img src={review.avatar} alt={review.name} />
            </div>
            
            <h3 className="review-name">{review.name}</h3>
            <span className="review-role">{review.role}</span>
            
            <div className="review-divider"></div>
            
            <p className="review-text">{review.text}</p>
            
            <div className="review-rating">
              <span className="rating-number">5.0</span>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats-banner">
        <div className="stat-item">
          <h3 className="stat-number">180+</h3>
          <p className="stat-desc">design projects completed.</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3 className="stat-number">96%</h3>
          <p className="stat-desc">Client satisfaction rate.</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h3 className="stat-number">15+</h3>
          <p className="stat-desc">Years of experience</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
