/**
 * ============================================================
 * Projects - Featured project cards with filtering
 * ============================================================
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { Github } from './Icons';
import SectionWrapper from './SectionWrapper';
import { projectsData, projectCategories } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedProject, setExpandedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="projects">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-violet-400 tracking-widest uppercase mb-3">
          My Work
        </p>
        <h2 className="section-heading gradient-text mb-4">Featured Projects</h2>
        <p className="section-subheading">
          Real-world applications showcasing my development journey
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === cat
                ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-violet-500/20'
                : 'glass text-slate-400 hover:text-white hover:bg-white/[0.08]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group"
            >
              {/* Project Thumbnail */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  /* Placeholder visual */
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5" />
                    <div className="relative flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center">
                        <span className="text-2xl font-bold gradient-text">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs text-slate-600 font-medium tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>
                    {/* Decorative grid */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium text-violet-300
                                 bg-violet-500/10 border border-violet-500/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Features */}
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mb-4"
                    >
                      <div className="pt-3 border-t border-white/5">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                          Key Features
                        </p>
                        <ul className="space-y-1.5">
                          {project.features.map((f) => (
                            <li
                              key={f}
                              className="text-sm text-slate-400 flex items-start gap-2"
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === project.id ? null : project.id
                      )
                    }
                    className="btn-secondary text-xs py-2 px-4"
                  >
                    {expandedProject === project.id
                      ? 'Show Less'
                      : 'View Details'}
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center
                               text-slate-400 hover:text-white hover:border-violet-500/30
                               transition-all duration-300 hover:-translate-y-0.5"
                    title="GitHub Repository"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center
                               text-slate-400 hover:text-white hover:border-blue-500/30
                               transition-all duration-300 hover:-translate-y-0.5"
                    title="Live Demo"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
