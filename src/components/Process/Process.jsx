import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <section id="process" className="process-section">
      <div className="process-image-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=800&auto=format&fit=crop" 
          alt="Design Process" 
          className="process-image" 
        />
      </div>

      <div className="process-content">
        <div className="process-header">
          <div className="badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            Design process
          </div>
          
          <h2 className="process-title">Process</h2>
          <p className="process-subtitle">
            crafting bold visuals that inspire and elevate brands with thought process.
          </p>
          
          <div className="process-buttons">
            <button className="btn-outline">Book a Free Call</button>
            <button className="btn-outline act">See Projects</button>
          </div>
        </div>

        <div className="process-steps">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-header">
              <div className="step-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M5 12H3"></path><path d="M21 12h-2"></path><path d="M18.36 5.64l-1.42 1.42"></path><path d="M7.05 16.95l-1.42 1.42"></path><path d="M18.36 18.36l-1.42-1.42"></path><path d="M7.05 7.05l-1.42-1.42"></path><circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <span className="step-number">1</span>
            </div>
            <h3 className="step-title">Define Your Vision</h3>
            <p className="step-desc">
              Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-header">
              <div className="step-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </div>
              <span className="step-number">2</span>
            </div>
            <h3 className="step-title">Submit Your Request</h3>
            <p className="step-desc">
              Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-header">
              <div className="step-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
              </div>
              <span className="step-number">3</span>
            </div>
            <h3 className="step-title">Project Delivered</h3>
            <p className="step-desc">
              As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
