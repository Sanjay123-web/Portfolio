import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHub from './components/GitHub';
import LinkedIn from './components/LinkedIn';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Simulate loading time for premium feel
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className={darkMode ? 'dark' : ''}>
          {/* Noise overlay for texture */}
          <div className="noise-overlay" />

          {/* Custom cursor (desktop only) */}
          <CustomCursor />

          {/* Theme toggle */}
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Main content */}
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <GitHub />
            <LinkedIn />
            <Experience />
            <Certifications />
            <Contact />
          </main>
          <Footer />

          {/* Back to top */}
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
