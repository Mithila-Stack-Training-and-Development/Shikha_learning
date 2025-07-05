import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import { revealOnScroll } from './utils/scrollEffect';

function App() {
  useEffect(() => {
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;