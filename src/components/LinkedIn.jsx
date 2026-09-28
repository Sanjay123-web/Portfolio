/**
 * ============================================================
 * LinkedIn - Professional LinkedIn profile card
 * ============================================================
 */
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Linkedin } from './Icons';
import SectionWrapper from './SectionWrapper';
import { linkedinData, personalInfo } from '../data/portfolioData';

export default function LinkedIn() {
  return (
    <SectionWrapper id="linkedin">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass-card p-8 md:p-10 text-center relative overflow-hidden group">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon */}
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-8 h-8 text-blue-400" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Let's Connect on LinkedIn
            </h3>

            <p className="text-slate-400 mb-6 max-w-md mx-auto leading-relaxed">
              {linkedinData.statement}
            </p>

            <a
              href={linkedinData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
