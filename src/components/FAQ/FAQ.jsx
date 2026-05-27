import React, { useState } from 'react';
import './FAQ.css';
import FlipButton from '../FlipButton/FlipButton';

const faqs = [
  {
    question: 'What types of brands do you work with?',
    answer: 'We work with e-commerce brands, local businesses looking for commercial media, corporate entities needing brand assets, and digital content creators/influencers aiming to scale their production.'
  },
  {
    question: 'Do you handle both creative production and ad management?',
    answer: 'Yes! We can handle the entire pipeline—from shooting and editing the high-converting ad creative to managing the daily budgets and analytics on the Google and Meta ad platforms.'
  },
  {
    question: 'What is the typical turnaround time for editing and content delivery?',
    answer: 'Turnaround times vary depending on project scale, but standard short-form content packages or standard post-production assets are typically delivered within a swift 3-5 business days.'
  },
  {
    question: 'How do I start working with you?',
    answer: 'The first step is booking a free discovery call. We will discuss your current brand position, content needs, and goals. From there, we propose a tailored strategy and production timeline.'
  },
  {
    question: 'What platforms do you specialize in for paid ads?',
    answer: 'We heavily specialize in Meta (Facebook/Instagram) and Google Ads, as they consistently provide the highest scalable ROAS for e-commerce and commercial clients when paired with great creatives.'
  },
  {
    question: 'Do you offer revisions on edited videos?',
    answer: 'Absolutely. We include standard revision rounds in all our post-production and editing packages to ensure the final product perfectly aligns with your brand’s voice and aesthetic.'
  },
  {
    question: 'Can you work with footage we already shot?',
    answer: 'Yes! Our high-retention video editing services are built to take your raw footage, podcasts, or streams and transform them into viral-ready, polished assets for social media.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-left">
        <div className="faq-sticky-content">
          <div className="badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            FAQ'S
          </div>

          <h2 className="faq-title">Answers</h2>
          <p className="faq-subtitle">
             Find answers to common questions about our design, production, and paid ads workflow...
          </p>

          <div className="faq-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop" 
              alt="FAQ illustration" 
              className="faq-image" 
            />
          </div>

          <div className="faq-tags">
            <span className="skill-pill">Production</span>
            <span className="skill-pill">Ad Management</span>
            <span className="skill-pill">Editing</span>
          </div>

          <FlipButton variant="ghost">Book a Free Call</FlipButton>
        </div>
      </div>

      <div className="faq-right">
        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <div className="faq-icon">
                    {isOpen ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </div>
                </div>
                
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
