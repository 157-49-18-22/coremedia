import React from 'react';
import './Projects.css';

const projects = [
  { id: 1, img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop', size: 'small' },
  { id: 2, img: 'https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=800&auto=format&fit=crop', size: 'tall' },
  
  { id: 3, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop', size: 'tall' },
  { id: 4, img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop', size: 'small' },
  
  { id: 5, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop', size: 'small' },
  { id: 6, img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop', size: 'tall' },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className={`project-card ${p.size}`}>
            <img src={p.img} alt={`Case Study ${p.id}`} className="project-image" />
            <div className="card-overlay">
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
