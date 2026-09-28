/**
 * ============================================================
 * About - About section with education card and stats grid
 * ============================================================
 */
import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Calendar,
  FolderGit2,
  Layers,
  Award,
  TrendingUp,
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { aboutData } from '../data/portfolioData';

// Map icon string names to actual components
const iconMap = { FolderGit2, Layers, Award, TrendingUp };

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <SectionWrapper id="about">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-violet-400 tracking-widest uppercase mb-3"
        >
          Get To Know Me
        </motion.p>
        <h2 className="section-heading gradient-text mb-4">About Me</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Description + Education */}
        <div>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            {aboutData.description}
          </p>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {aboutData.education.degree}
                </h3>
                <p className="text-violet-300 font-medium mb-2">
                  {aboutData.education.college}
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {aboutData.education.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {aboutData.education.duration}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {aboutData.stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Layers;
            return (
              <motion.div
                key={stat.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 text-center group cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-violet-400" />
                </div>
                <p className="text-2xl font-bold gradient-text mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
