import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    num: '01',
    title: 'Content Production',
    desc: 'Multi-channel asset creation — from photography to immersive video — designed for high-impact social and web presence.',
    tag: 'Photography · Video · Reels',
  },
  {
    num: '02',
    title: 'Brand Identity',
    desc: 'Conceptualizing visual systems that transcend trends. We build brand architectures that scale with innovation.',
    tag: 'Logo · Visual System · Strategy',
  },
  {
    num: '03',
    title: 'Paid Ad Strategy',
    desc: 'Data-informed roadmaps that align creative output with business growth, ensuring every pixel serves a purpose.',
    tag: 'Meta · Google · ROI',
  },
  {
    num: '04',
    title: 'Motion Design',
    desc: 'High-end 2D and 3D animation that brings static brands to life with fluid, cinematic motion and emotional resonance.',
    tag: 'Animation · After Effects · Reel',
  },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years of Expertise' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3x', label: 'Avg. ROAS Growth' },
];

const tools = [
  'AFTER EFFECTS', 'CINEMA 4D', 'PREMIERE PRO', 'FIGMA',
  'META ADS', 'GOOGLE ADS', 'PHOTOSHOP', 'DAVINCI RESOLVE',
  'AFTER EFFECTS', 'CINEMA 4D', 'PREMIERE PRO', 'FIGMA',
  'META ADS', 'GOOGLE ADS', 'PHOTOSHOP', 'DAVINCI RESOLVE',
];

const Services = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('srv-visible');
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <section id="services-component" className="services-section">

      {/* ── Hero ── */}
      <div className="srv-hero-wrapper">
        <div className="srv-hero-anim-bg">
          <div className="srv-moving-grid"></div>
          <div className="srv-ambient-glow"></div>
        </div>
        <div className="srv-hero srv-reveal" ref={addRef}>
          <div className="srv-hero-left">
            <span className="srv-hero-badge">OUR SERVICES</span>
            <h1 className="srv-hero-title">
              <span className="srv-kinetic">CORE</span>
              <br />
              <span className="srv-kinetic srv-outline">CAPABILITIES</span>
            </h1>
          </div>
          <div className="srv-hero-right">
            <p className="srv-hero-desc">
              Defining the next generation of digital experiences through
              high-fidelity motion and strategic design thinking.
            </p>
            <Link to="/contact" className="srv-hero-cta">
              Book a Free Call <span className="srv-cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="srv-hero-img-wrap">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
          alt="Core Capabilities"
          className="srv-hero-img"
        />
        <div className="srv-hero-img-fade" />
      </div>

      {/* ── Stats Bar ── */}
      <div className="srv-stats-bar srv-reveal" ref={addRef}>
        {stats.map((s) => (
          <div className="srv-stat" key={s.label}>
            <span className="srv-stat-value">{s.value}</span>
            <span className="srv-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── 4-Column Service Cards ── */}
      <div className="srv-grid">
        {services.map((s, i) => (
          <div
            className="srv-card srv-reveal"
            key={s.num}
            ref={addRef}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="srv-card-top">
              <span className="srv-card-num">{s.num}</span>
              <h3 className="srv-card-title">{s.title}</h3>
            </div>
            <p className="srv-card-desc">{s.desc}</p>
            <span className="srv-card-tag">{s.tag}</span>
          </div>
        ))}
      </div>

      {/* ── Our Process ── */}
      <div className="srv-process-wrap">
        <div className="srv-process-inner">
          <div className="srv-process-left srv-reveal" ref={addRef}>
            <h2 className="srv-process-heading">Our Process</h2>
            <p className="srv-process-sub">
              Three phases. Zero compromise.
            </p>
          </div>
          <div className="srv-process-right">
            {[
              {
                phase: 'PHASE 01',
                title: 'Discovery & Audit',
                desc: "We deep-dive into your brand's ecosystem, auditing competitors and identifying the unique friction points where design can make the most significant impact.",
              },
              {
                phase: 'PHASE 02',
                title: 'Visual Prototyping',
                desc: "Rapid iteration of core concepts. We create style frames and motion tests to define the visual language before moving into full production.",
              },
              {
                phase: 'PHASE 03',
                title: 'Execution & Refinement',
                desc: 'High-fidelity craftsmanship. Every element is polished to perfection, ensuring seamless interaction and technical excellence.',
              },
            ].map((p, i) => (
              <div
                className="srv-phase srv-reveal"
                key={p.phase}
                ref={addRef}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <span className="srv-phase-label">{p.phase}</span>
                <h4 className="srv-phase-title">{p.title}</h4>
                <p className="srv-phase-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tool Marquee ── */}
      <div className="srv-tools-wrap">
        <p className="srv-tools-label">Industrial Standard Tools</p>
        <div className="srv-marquee-outer">
          <div className="srv-marquee-track">
            {tools.map((tool, i) => (
              <span className="srv-tool-item" key={i}>{tool}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="srv-cta-wrap srv-reveal" ref={addRef}>
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
          alt="CTA background"
          className="srv-cta-bg"
        />
        <div className="srv-cta-overlay" />
        <div className="srv-cta-content">
          <p className="srv-cta-eyebrow">READY TO START?</p>
          <h2 className="srv-cta-title">
            LET'S PUSH<br />BOUNDARIES
          </h2>
          <Link to="/contact" className="srv-cta-btn">
            START A PROJECT →
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Services;
