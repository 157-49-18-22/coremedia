import React from 'react';
import './RecentWorks.css';

const recentWorks = [
  { id: 1, img: 'https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=800&auto=format&fit=crop' },
  { id: 2, img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop' },
  { id: 3, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop' },
  { id: 4, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop' }
];

const RecentWorks = () => {
  return (
    <section className="recent-works-container">
      <div className="recent-works-grid">
        {recentWorks.map((work) => (
          <div key={work.id} className="recent-work-card">
            <img src={work.img} alt={`Work ${work.id}`} className="recent-work-image" />
            <div className="card-overlay">
              <span className="casestudy-btn">View Casestudy ↗</span>
            </div>
          </div>
        ))}
        {/* Navigation Arrow (simulated) */}
        <div className="carousel-nav-right">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
