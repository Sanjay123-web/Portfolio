/**
 * ============================================================
 * Certifications - Responsive certification gallery
 * ============================================================
 */
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-violet-400 tracking-widest uppercase mb-3">
          Credentials
        </p>
        <h2 className="section-heading gradient-text mb-4">Certifications</h2>
        <p className="section-subheading">
          Professional certifications and accomplishments
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certificationsData.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="glass-card overflow-hidden group"
          >
            {/* Certificate Image / Placeholder */}
            <div className="h-36 relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-violet-500/5" />
                  <Award className="w-12 h-12 text-amber-400/30" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors line-clamp-2">
                {cert.title}
              </h3>
              <div className="space-y-1.5 mb-4">
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Building className="w-3 h-3" />
                  {cert.organization}
                </p>
                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </p>
              </div>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-400
                           hover:text-violet-300 transition-colors"
              >
                View Certificate
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
