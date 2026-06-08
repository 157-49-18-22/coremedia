import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const faqs = [
  {
    id: 1,
    q: 'What is your turnaround?',
    a: 'Most creative sprints are delivered within 4-6 weeks. Complexity dictates the cadence, but we prioritize velocity without compromising the kinetic quality of the work.',
  },
  {
    id: 2,
    q: 'Do you offer retainers?',
    a: 'Yes. We partner with selected brands on an annual basis to ensure constant creative evolution and market dominance through consistent visual innovation.',
  },
  {
    id: 3,
    q: 'Global production?',
    a: 'Our network spans LA, NYC, and London. We handle on-site production anywhere in the world, utilizing local expertise backed by our central creative vision.',
  },
];

const offices = [
  { num: '01', city: 'DELHI', place: 'Faridabad Studio', phone: '+91 98765 43210' },
  { num: '02', city: 'MUMBAI', place: 'Bandra Creative Lab', phone: '+91 91234 56789' },
  { num: '03', city: 'BLR', place: 'Koramangala Hub', phone: '+91 80123 45678' },
];

const Contact = () => {
  const revealRefs = useRef([]);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('ct-visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <main className="ct-main">

      {/* ── Hero ── */}
      <section className="ct-hero">
        {/* Animated Background */}
        <div className="ct-hero-bg-anim">
          <div className="ct-glow-orb orb-1"></div>
          <div className="ct-glow-orb orb-2"></div>
        </div>
        
        <div className="ct-hero-content">
          <h1 className="ct-hero-title ct-reveal" ref={addRef}>
            Let's Build <br />
            <span className="ct-hero-outline">The Future</span>
          </h1>
          <p className="ct-hero-sub ct-reveal" ref={addRef}>
            We bridge the gap between imagination and execution. Whether you have a
            fully-formed brief or just a spark of an idea, we're ready to amplify
            your vision.
          </p>
        </div>
      </section>

      {/* ── Split Form ── */}
      <section className="ct-split-section">
        {/* Left visual */}
        <div className="ct-split-left">
          <img
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=900&auto=format&fit=crop"
            alt="Data meets creativity"
            className="ct-split-img"
          />
          <div className="ct-split-gradient" />
          <div className="ct-split-label-wrap">
            <span className="ct-split-badge">C_C CORE LABS</span>
            <h2 className="ct-split-tagline">Data meets <br />pure creativity.</h2>
          </div>
        </div>

        {/* Right form */}
        <div className="ct-split-right">
          <div className="ct-form-inner">
            <h2 className="ct-form-heading">Inquiry</h2>
            <form className="ct-form" onSubmit={(e) => e.preventDefault()}>
              <div className="ct-form-row">
                <div className="ct-field">
                  <label className="ct-label">Full Name</label>
                  <input className="ct-input" type="text" placeholder="John Doe" />
                  <div className="ct-underline" />
                </div>
                <div className="ct-field">
                  <label className="ct-label">Email Address</label>
                  <input className="ct-input" type="email" placeholder="john@domain.com" />
                  <div className="ct-underline" />
                </div>
              </div>

              <div className="ct-field">
                <label className="ct-label">Interested In</label>
                <select className="ct-input ct-select">
                  <option>Brand Strategy</option>
                  <option>Content Production</option>
                  <option>Paid Ads</option>
                  <option>Other Inquiry</option>
                </select>
                <div className="ct-underline" />
              </div>

              <div className="ct-field">
                <label className="ct-label">Message</label>
                <textarea
                  className="ct-input ct-textarea"
                  placeholder="Tell us about the mission..."
                  rows={3}
                />
                <div className="ct-underline" />
              </div>

              <button type="submit" className="ct-submit-btn">
                <span>Send Brief</span>
                <span className="ct-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Global Reach ── */}
      <section className="ct-reach-section">
        <div className="ct-reach-header ct-reveal" ref={addRef}>
          <h2 className="ct-reach-title">Global <br />Reach</h2>
          <p className="ct-reach-sub">
            OPERATING AT THE SPEED OF CULTURE ACROSS THREE CONTINENTS.
          </p>
        </div>
        <div className="ct-offices ct-reveal" ref={addRef}>
          {offices.map((o) => (
            <div className="ct-office-card" key={o.num}>
              <span className="ct-office-num">{o.num}</span>
              <h3 className="ct-office-city">{o.city}</h3>
              <p className="ct-office-info">
                {o.place}<br />{o.phone}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ct-faq-section">
        <p className="ct-faq-label">COMMON QUERIES</p>
        <div className="ct-faq-list">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div className="ct-faq-item" key={faq.id}>
                <button
                  className="ct-faq-trigger"
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                >
                  <h3 className="ct-faq-q">{faq.q}</h3>
                  <span className={`ct-faq-icon ${isOpen ? 'open' : ''}`}>+</span>
                </button>
                <div className={`ct-faq-answer ${isOpen ? 'open' : ''}`}>
                  <p className="ct-faq-a">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Location Card ── */}
      <section className="ct-location-section ct-reveal" ref={addRef}>
        <div className="ct-location-card">
          <div className="ct-location-info">
            <span className="ct-location-icon">📍</span>
            <h2 className="ct-location-heading">Find our heartbeat</h2>
            <p className="ct-location-desc">
              Located in the heart of Faridabad, our studio is a laboratory for bold ideas and
              digital craftsmanship. We're always open for a coffee and a deep dive into your
              brand's future.
            </p>
            <a
              href="https://maps.google.com/?q=Puri+High+Street,+Faridabad"
              target="_blank"
              rel="noreferrer"
              className="ct-location-link"
            >
              View on Map →
            </a>
          </div>
          <div className="ct-map-placeholder">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112349.56942004245!2d77.24075196924859!3d28.358607198162125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe37ebac90fcba19!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)', opacity: 0.8 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Faridabad Map"
            ></iframe>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
