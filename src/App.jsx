import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import RecentWorks from './components/RecentWorks/RecentWorks';
import Projects from './components/Projects/Projects';
import Process from './components/Process/Process';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <RecentWorks />
      <Projects />
      <Process />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
