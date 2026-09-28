/**
 * ============================================================
 * Experience - Vertical timeline for achievements & journey
 * ============================================================
 */
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Code2,
  Award,
  Users,
  Layers,
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { timelineData } from '../data/portfolioData';

const iconMap = { GraduationCap, Code2, Award, Users, Layers };

const typeColorMap = {
  education: 'from-blue-500 to-cyan-400',
  project: 'from-violet-500 to-purple-400',
  certification: 'from-amber-500 to-orange-400',
  workshop: 'from-emerald-500 to-teal-400',
};

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-violet-400 tracking-widest uppercase mb-3">
          My Journey
        </p>
        <h2 className="section-heading gradient-text mb-4">
          Experience & Achievements
        </h2>
        <p className="section-subheading">
          A timeline of my academic and professional milestones
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-blue-500/20 to-transparent" />

        {timelineData.map((entry, idx) => {
          const Icon = iconMap[entry.icon] || Code2;
          const isLeft = idx % 2 === 0;
          const colorGradient = typeColorMap[entry.type] || 'from-violet-500 to-blue-400';

          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative flex items-start mb-10 md:mb-12 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full
                             bg-gradient-to-br ${colorGradient} bg-opacity-20 flex items-center justify-center
                             border-4 border-dark-950 z-10`}
                style={{ background: `linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))` }}
              >
                <Icon className="w-5 h-5 text-white/80" />
              </div>

              {/* Content card */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                  isLeft ? 'md:pr-4 md:text-right' : 'md:pl-4 md:text-left'
                }`}
              >
                <div className="glass-card p-5 group hover:border-violet-500/20 transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 mb-2">
                    {entry.year}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
