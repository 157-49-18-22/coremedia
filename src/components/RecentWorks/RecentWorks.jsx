import React from 'react';
import './RecentWorks.css';

const recentWorks = [
  { id: 1, title: '[Brand Name] – Complete Meta Ads Scale & Content Overhaul', category: 'Creative Direction / Paid Traffic', img: 'https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: '[Product/Commercial Client] – Premium Product Launch Campaign', category: 'Commercial Photography / Videography', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: '[Influencer/Creator Name] – High-Retention Short-Form Content System', category: 'Post-Production / Scripting & Editing', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: '[Brand Name] – Identity Design & Multi-Platform Branding', category: 'Branding / Visual Identity', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop' }
];

const RecentWorks = () => {
  return (
    <section className="recent-works-container">
      <div className="recent-works-grid">
        {recentWorks.map((work) => (
          <div key={work.id} className="recent-work-card">
            <img src={work.img} alt={`Work ${work.id}`} className="recent-work-image" />
            <div className="card-overlay" style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
              <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.4rem', lineHeight: '1.3' }}>{work.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 }}>{work.category}</p>
              </div>
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
