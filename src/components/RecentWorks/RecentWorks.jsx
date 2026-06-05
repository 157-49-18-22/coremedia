import React from 'react';
import './RecentWorks.css';

const recentWorks = [
  {
    id: 1,
    title: '[Brand Name] – Complete Meta Ads Scale & Content Overhaul',
    category: 'Creative Direction / Paid Traffic',
    img: 'https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: '[Product/Commercial Client] – Premium Product Launch Campaign',
    category: 'Commercial Photography / Videography',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: '[Influencer/Creator Name] – High-Retention Short-Form Content System',
    category: 'Post-Production / Scripting & Editing',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: '[Brand Name] – Identity Design & Multi-Platform Branding',
    category: 'Branding / Visual Identity',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
  },
];

const RecentWorks = () => {
  return (
    <section className="rw-section" id="recent-works">
      <div className="rw-header">
        <h2 className="rw-title">
          Recent Works 
          <span className="rw-header-icon">↓</span>
        </h2>
      </div>

      <div className="rw-slider">
        {recentWorks.map((work) => (
          <div className="rw-card" key={work.id}>
            <img src={work.img} alt={work.title} />
            <div className="rw-card-gradient"></div>
            <div className="rw-card-overlay">
              <span className="casestudy-btn">View Casestudy ↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
