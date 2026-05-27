import React from 'react';
import './Projects.css';
import FlipButton from '../FlipButton/FlipButton';

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
            <div className="project-gradient"></div>
            <div className="project-content-wrapper">
              <div className="project-text-info">
                <h3>{p.title}</h3>
                <p>{p.category}</p>
              </div>
              <div className="card-overlay">
                <span className="casestudy-btn">View Casestudy ↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-footer">
        <FlipButton variant="ghost">All Projects</FlipButton>
        <FlipButton variant="ghost">Book a Free Call</FlipButton>
      </div>
    </section>
  );
};

export default Projects;
