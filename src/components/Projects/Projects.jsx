import React from 'react';
import './Projects.css';

const projects = [
  { id: 1, title: '[Brand Name] – Complete Meta Ads Scale & Content Overhaul', category: 'Creative Direction / Paid Traffic', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop', size: 'small' },
  { id: 2, title: '[Product/Commercial Client] – Premium Product Launch Campaign', category: 'Commercial Photography / Videography', img: 'https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=800&auto=format&fit=crop', size: 'tall' },
  
  { id: 3, title: '[Influencer/Creator Name] – High-Retention Short-Form Content System', category: 'Post-Production / Scripting & Editing', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop', size: 'tall' },
  { id: 4, title: '[Brand Name] – Identity Design & Multi-Platform Branding', category: 'Branding / Visual Identity', img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop', size: 'small' },
  
  { id: 5, title: '[Brand Name] – Advanced Content Architecture', category: 'Creative Direction / Paid Traffic', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop', size: 'small' },
  { id: 6, title: '[Client Name] – Global Rebrand', category: 'Branding / Visual Identity', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop', size: 'tall' },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Recent Campaigns & Case Studies</h2>
        <p className="projects-subtitle">
          A glimpse into the content systems and growth campaigns we’ve executed for brands and creators.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className={`project-card ${p.size}`}>
            <img src={p.img} alt={`Case Study ${p.id}`} className="project-image" />
            <div className="card-overlay" style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
              <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.4rem', lineHeight: '1.3' }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 }}>{p.category}</p>
              </div>
              <span className="casestudy-btn">View Casestudy ↗</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-footer">
        <button className="btn-text">All Projects</button>
        <button className="btn-outline-glow">Book a Free Call</button>
      </div>
    </section>
  );
};

export default Projects;
