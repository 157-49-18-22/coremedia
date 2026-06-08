import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import RecentWorks from './components/RecentWorks/RecentWorks';
import Projects from './components/Projects/Projects';
import Process from './components/Process/Process';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import './App.css';

/* ── Home Page ── */
const HomePage = () => (
  <div className="app-container">
    <Navbar />
    <Hero />
    <Projects />
    <RecentWorks />
    <About />
    <Process />
    <Testimonials />
    <FAQ />
    <Footer />
  </div>
);

/* ── Services Page ── */
const ServicesPage = () => (
  <div className="app-container">
    <Navbar />
    <Services />
    <Footer />
  </div>
);

/* ── Contact Page ── */
const ContactPage = () => (
  <div className="app-container">
    <Navbar />
    <Contact />
    <Footer />
  </div>
);

/* ── Portfolio Page ── */
const PortfolioPage = () => (
  <div className="app-container">
    <Navbar />
    <Portfolio />
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/"          element={<HomePage />} />
      <Route path="/services"  element={<ServicesPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact"   element={<ContactPage />} />
    </Routes>
  );
}

export default App;
