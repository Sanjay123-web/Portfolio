/**
 * ============================================================
 * Hero - Full-screen landing with typing effect, animated
 * background orbs, and call-to-action buttons
 * ============================================================
 */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, animatedRoles } from '../data/portfolioData';

/**
 * Custom typing effect hook
 */
function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1500) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting
              ? currentWord.substring(0, prev.length - 1)
              : currentWord.substring(0, prev.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

export default function Hero() {
  const typedRole = useTypingEffect(animatedRoles);

  // Stagger children animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Greeting badge */}
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Typing Role */}
            <motion.div variants={item} className="mb-4">
              <div className="text-xl sm:text-2xl text-slate-300 font-medium h-8 flex items-center">
                <span>{typedRole}</span>
                <span className="ml-0.5 w-0.5 h-6 bg-violet-400 animate-pulse" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-slate-400 mb-3 font-light leading-relaxed"
            >
              {personalInfo.headline}
            </motion.p>

            {/* Introduction */}
            <motion.p
              variants={item}
              className="text-base text-slate-500 mb-8 max-w-lg leading-relaxed"
            >
              {personalInfo.introduction}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-8">
              <a href="#projects" className="btn-primary">
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={item} className="flex items-center gap-4">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center
                           text-slate-400 hover:text-white hover:border-violet-500/30 transition-all duration-300
                           hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center
                           text-slate-400 hover:text-white hover:border-blue-500/30 transition-all duration-300
                           hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Outer rotating ring */}
              <div
                className="absolute inset-0 rounded-full border border-violet-500/20"
                style={{ animation: 'spin 25s linear infinite' }}
              >
                <div className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
              </div>

              {/* Middle ring */}
              <div
                className="absolute inset-8 rounded-full border border-blue-500/15"
                style={{ animation: 'spin 18s linear infinite reverse' }}
              >
                <div className="absolute -bottom-1 right-8 w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
              </div>

              {/* Inner glow circle */}
              <div className="absolute inset-16 rounded-full glass flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/10 to-blue-500/10" />
                {/* Code block visual */}
                <div className="relative text-left font-mono text-sm space-y-2 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <p className="text-violet-400">
                    <span className="text-blue-400">const</span>{' '}
                    <span className="text-emerald-400">developer</span> ={' '}
                    <span className="text-amber-300">{'{'}</span>
                  </p>
                  <p className="text-slate-400 pl-4">
                    name: <span className="text-emerald-300">"Rupesh"</span>,
                  </p>
                  <p className="text-slate-400 pl-4">
                    passion: <span className="text-emerald-300">"Code"</span>,
                  </p>
                  <p className="text-slate-400 pl-4">
                    coffee: <span className="text-amber-300">true</span>,
                  </p>
                  <p className="text-amber-300">{'}'}</p>
                </div>
              </div>

              {/* Floating tech badges */}
              {['React', 'Node.js', 'Python', 'MongoDB'].map((tech, i) => (
                <motion.div
                  key={tech}
                  className="absolute px-3 py-1.5 rounded-full glass text-xs text-slate-300 font-medium"
                  style={{
                    top: `${[10, 75, 90, 25][i]}%`,
                    left: `${[-5, 85, 15, 95][i]}%`,
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-violet-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
