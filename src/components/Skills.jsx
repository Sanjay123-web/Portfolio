/**
 * ============================================================
 * Skills - Categorized tech skills with interactive cards
 * ============================================================
 */
import { motion } from 'framer-motion';
import {
  Monitor,
  Server,
  Code2,
  Database,
  Wrench,
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { skillsData } from '../data/portfolioData';

const iconMap = { Monitor, Server, Code2, Database, Wrench };

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-violet-400 tracking-widest uppercase mb-3">
          What I Work With
        </p>
        <h2 className="section-heading gradient-text mb-4">Technical Skills</h2>
        <p className="section-subheading">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, idx) => {
          const CategoryIcon = iconMap[category.icon] || Code2;

          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center
                              group-hover:scale-110 transition-transform duration-300`}
                  style={{ background: `linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))` }}
                >
                  <CategoryIcon className="w-5 h-5 text-white/80" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + si * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300
                               bg-white/[0.04] border border-white/[0.06]
                               hover:bg-white/[0.08] hover:border-violet-500/20
                               hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
