import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FlipButton from '../FlipButton/FlipButton';
import './CaseStudy.css';

const caseStudiesData = [
  {
    id: 'hammers-fitness',
    category: 'Gym & Fitness Brands',
    categoryIcon: '💪',
    title: 'Hammers Kinetic Fitness',
    tagline: 'Scaling a high-end gym franchise through high-retention reel production & targeted member acquisition.',
    video: 'https://res.cloudinary.com/dp4izyo05/video/upload/f_auto,q_auto,w_800/v1793417856/Hammers_01_bpiqhh.mp4',
    metrics: [
      { label: 'Organic Views', value: '850K+' },
      { label: 'New Memberships', value: '+220%' },
      { label: 'ROAS on Ads', value: '4.8x' },
    ],
    challenge: 'Hammers had top-tier equipment and luxury facilities, but their social media was stagnant with basic static workout photos. They were struggling to attract premium long-term members.',
    strategy: 'We introduced high-contrast kinetic filming: macro muscle-tension captures, rhythmic sound design synced to barbell drops, and 3-second psychological hooks engineered for Instagram Reels.',
    deliverables: [
      '1x Cinema Brand Film (4K Master)',
      '12x High-Retention Training Reels',
      'Behind-the-Scenes Training Series',
      'Meta Ad Campaign Funnel Setup',
    ],
    quote: 'ClickCore completely transformed how our gym is perceived. Our trial bookings doubled within the first 14 days.',
    quoteAuthor: 'Head Coach & Operations Lead',
  },
  {
    id: 'weekend-rush',
    category: 'Restaurants & Hospitality',
    categoryIcon: '🍽️',
    title: 'The Weekend Rush Bistro',
    tagline: 'Engineering sensory food cinematography that drove 100% weekend table reservation sellouts.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Video Reach', value: '1.4M+' },
      { label: 'Table Bookings', value: '100% Full' },
      { label: 'Average Bill Size', value: '+35%' },
    ],
    challenge: 'A fine-dining contemporary bistro had exceptional culinary craft, but struggled to fill weekday evenings and turn casual social followers into paying diners.',
    strategy: 'We built a "Sensory Hook" video campaign: macro sizzle shots, natural ambiance audio, chef craft storytelling, and local targeted Instagram carousel ads.',
    deliverables: [
      '1x Hero Commercial for Web & Ads',
      '8x Dish Close-Up Highlight Reels',
      'Signature Cocktail Pour Mini-Ads',
      'Menu Redesign Visual Assets',
    ],
    quote: 'Our tables are now booked two weeks in advance. The visual quality brought our food to life like never before.',
    quoteAuthor: 'Executive Chef & Co-Owner',
  },
  {
    id: 'luxury-property',
    category: 'Real Estate & Luxury',
    categoryIcon: '🏠',
    title: 'The Obsidian Glass Villa',
    tagline: 'Architectural FPV drone cinematography and twilight walkthrough that closed a $4.2M property in 12 days.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Days on Market', value: '12 Days' },
      { label: 'Target HNI Views', value: '350K+' },
      { label: 'Property Sale', value: '$4.2M' },
    ],
    challenge: 'A premier architectural luxury home sat on listings for 5 months with flat, conventional real estate photos that failed to convey scale and natural lighting.',
    strategy: 'We produced a cinematic twilight narrative utilizing precision FPV drone interior fly-throughs, soundscapes tailored for luxury buyers, and an agent-led walkthrough.',
    deliverables: [
      '4K Cinematic Property Film',
      'FPV Drone Continuous One-Take',
      '4x Vertical Reels for Luxury Portals',
      'Ultra-HD Architectural Photo Suite',
    ],
    quote: 'We had 4 qualified international inquiries within 48 hours of ClickCore’s video going live.',
    quoteAuthor: 'Luxury Brokerage Director',
  },
  {
    id: 'velox-automotive',
    category: 'Automotive & Supercars',
    categoryIcon: '🚗',
    title: 'Velox Performance Supercars',
    tagline: 'High-octane tracking shots and precision audio engineering for an elite bespoke tuning release.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
    metrics: [
      { label: 'Global Impressions', value: '4.8M+' },
      { label: 'Watch Time', value: '89.4%' },
      { label: 'Launch Edition', value: 'Sold Out' },
    ],
    challenge: 'Launching a limited supercar aero kit required visuals that matched multimillion-dollar OEM commercial standards on an agile timeline.',
    strategy: 'Captured with high-speed chase vehicles, multi-camera night rollers, synchronized engine roar mixing, and high-tempo edits inspired by cinema trailers.',
    deliverables: [
      'Official Commercial Launch Trailer',
      '6x Sound-Design Heavy Teaser Cuts',
      'Behind-The-Build Documentary Short',
      'Social Banner & Billboard Assets',
    ],
    quote: 'The speed, energy, and grading were world-class. It felt like watching an official Porsche or AMG reveal.',
    quoteAuthor: 'Founder & Head of Design',
  },
];

const categories = ['All', 'Gym & Fitness Brands', 'Restaurants & Hospitality', 'Real Estate & Luxury', 'Automotive & Supercars'];

const CaseStudy = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStudies = activeCategory === 'All'
    ? caseStudiesData
    : caseStudiesData.filter((cs) => cs.category === activeCategory);

  return (
    <div className="cs-page">
      {/* ── Hero Section ── */}
      <section className="cs-hero-section">
        <div className="cs-hero-container">
          <div className="cs-badge">
            <span className="cs-badge-dot"></span>
            PROVEN CLIENT OUTCOMES
          </div>
          <h1 className="cs-hero-title">
            CASE <span className="cs-highlight">STUDIES</span>
          </h1>
          <p className="cs-hero-subtitle">
            An in-depth breakdown of how our cinematography, retention-focused editing,
            and digital distribution systems turn modern brands into market leaders.
          </p>

          {/* Category Filter Tabs */}
          <div className="cs-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`cs-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detailed Case Studies Showcase ── */}
      <section className="cs-list-section">
        <div className="cs-list-container">
          {filteredStudies.map((study, idx) => (
            <article key={study.id} className="cs-article-card">
              {/* Media Container (Video or Image) */}
              <div className="cs-media-wrapper">
                {study.video ? (
                  <video
                    src={study.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="cs-media-asset"
                  />
                ) : (
                  <img
                    src={study.image}
                    alt={study.title}
                    className="cs-media-asset"
                    decoding="async"
                  />
                )}
                <div className="cs-media-overlay"></div>
                <div className="cs-media-badge">
                  <span>{study.categoryIcon} {study.category}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="cs-content-body">
                <div className="cs-content-header">
                  <span className="cs-index-num">CASE STUDY 0{idx + 1}</span>
                  <h2 className="cs-card-title">{study.title}</h2>
                  <p className="cs-tagline">{study.tagline}</p>
                </div>

                {/* Metrics Pill Grid */}
                <div className="cs-metrics-grid">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="cs-metric-box">
                      <span className="cs-metric-val">{m.value}</span>
                      <span className="cs-metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Challenge & Strategy Dual Column */}
                <div className="cs-details-grid">
                  <div className="cs-detail-block">
                    <h4 className="cs-detail-heading">
                      <span className="cs-heading-icon">⚠️</span> The Challenge
                    </h4>
                    <p className="cs-detail-text">{study.challenge}</p>
                  </div>

                  <div className="cs-detail-block">
                    <h4 className="cs-detail-heading">
                      <span className="cs-heading-icon">⚡</span> The Strategy & Production
                    </h4>
                    <p className="cs-detail-text">{study.strategy}</p>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="cs-deliverables-block">
                  <h4 className="cs-detail-heading">
                    <span className="cs-heading-icon">📦</span> Deliverables Shipped
                  </h4>
                  <ul className="cs-deliverables-list">
                    {study.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="cs-deliverable-item">
                        <span className="cs-check-icon">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote Box */}
                <blockquote className="cs-quote-box">
                  <p className="cs-quote-text">"{study.quote}"</p>
                  <cite className="cs-quote-author">— {study.quoteAuthor}</cite>
                </blockquote>

                {/* CTA Action */}
                <div className="cs-card-footer">
                  <Link to="/contact">
                    <FlipButton variant="outline">Start a Similar Project ↗</FlipButton>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Bottom Call To Action ── */}
      <section className="cs-bottom-cta">
        <div className="cs-bottom-cta-inner">
          <h2 className="cs-cta-heading">Ready for your brand's breakthrough?</h2>
          <p className="cs-cta-desc">
            Let's discuss how our cinema-grade visuals and growth systems can scale your revenue.
          </p>
          <div className="cs-cta-buttons">
            <Link to="/contact">
              <FlipButton variant="secondary">Book a Discovery Call</FlipButton>
            </Link>
            <Link to="/portfolio">
              <FlipButton variant="ghost">Browse All Portfolio</FlipButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;

