import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences.'
  },
  {
    question: 'How do I start working with you?',
    answer: 'We start with a quick discovery call to discuss your goals. Following that, I provide a detailed proposal and contract before we kick off the process.'
  },
  {
    question: 'What design tools do you use?',
    answer: 'I primarily use Figma for UI/UX and web design, alongside Adobe Illustrator and Photoshop for robust branding and visual asset creation.'
  },
  {
    question: 'How long does a project take?',
    answer: 'Most standard branding packages take 2-4 weeks, depending on the complexity and how quickly we cycle through feedback rounds.'
  },
  {
    question: 'Do you provide revisions?',
    answer: 'Yes! Every project includes up to two rounds of revisions to ensure we land on the perfect visual solution for your brand.'
  },
  {
    question: 'What industries do you work with?',
    answer: 'I have worked with a diverse array of industries including tech, eco-friendly consumer goods, fashion, and boutique agencies.'
  },
  {
    question: 'Do you offer development services?',
    answer: 'While my primary focus is design, I often partner with skilled developers or use no-code tools like Webflow and Framer to bring designs to life.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'My projects are typically value-based and flat-fee, meaning you know exactly what your investment is upfront with no surprise hourly charges.'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely. A website redesign is a great opportunity to elevate your digital presence and optimize conversion rates.'
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
            Find answers to common questions about my design process, services etc...
          </p>

          <div className="faq-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop" 
              alt="FAQ illustration" 
              className="faq-image" 
            />
          </div>

          <div className="faq-tags">
            <span className="skill-pill">Product Design</span>
            <span className="skill-pill">Brand Identity Design</span>
            <span className="skill-pill">Branding</span>
          </div>

          <button className="btn-outline-glow call-btn">Book a Free Call</button>
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
