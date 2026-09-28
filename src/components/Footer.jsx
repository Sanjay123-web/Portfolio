/**
 * ============================================================
 * Footer - Site footer with navigation, socials, and copyright
 * ============================================================
 */
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
          {/* Logo + Description */}
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">
              RM.
            </a>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed max-w-xs">
              Full Stack Developer crafting modern digital experiences with clean
              code and thoughtful design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-slate-500 hover:text-violet-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center
                           text-slate-400 hover:text-white hover:border-violet-500/30
                           transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center
                           text-slate-400 hover:text-white hover:border-blue-500/30
                           transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-slate-600 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400" /> using React &
            Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
