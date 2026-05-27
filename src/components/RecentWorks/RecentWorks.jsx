import React from 'react';
import './RecentWorks.css';
import CardSwap, { Card } from './CardSwap';
import FlipButton from '../FlipButton/FlipButton';

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
    <section className="rw-section">
      {/* Left: Text */}
      <div className="rw-left">
        <span className="rw-label">Featured Work</span>
        <h2 className="rw-title">Recent Works</h2>
        <p className="rw-desc">
          A glimpse into the content systems and growth campaigns we've executed
          for brands and creators worldwide.
        </p>
        <FlipButton variant="ghost">View All Projects ↗</FlipButton>

        {/* Card count indicator */}
        <div className="rw-counter">
          {recentWorks.map((_, i) => (
            <span key={i} className={`rw-dot ${i === 0 ? 'active' : ''}`} />
          ))}
        </div>
      </div>

      {/* Right: CardSwap */}
      <div className="rw-right">
        <div className="rw-cardswap-wrapper">
          <CardSwap
            width={520}
            height={420}
            cardDistance={60}
            verticalDistance={60}
            delay={3500}
            pauseOnHover={true}
            skewAmount={4}
            easing="elastic"
          >
            {recentWorks.map((work) => (
              <Card key={work.id}>
                <img src={work.img} alt={work.title} />
                <div className="card-content-overlay">
                  <h3>{work.title}</h3>
                  <p>{work.category}</p>
                  <span className="casestudy-btn">View Casestudy ↗</span>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
