/**
 * ============================================================
 * GitHub - Dedicated GitHub activity & profile section
 * ============================================================
 */
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Activity } from 'lucide-react';
import { Github } from './Icons';
import SectionWrapper from './SectionWrapper';
import { githubData } from '../data/portfolioData';

export default function GitHub() {
  return (
    <SectionWrapper id="github">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-violet-400 tracking-widest uppercase mb-3">
          Open Source
        </p>
        <h2 className="section-heading gradient-text mb-4">GitHub Activity</h2>
        <p className="section-subheading">
          My contributions and open-source projects
        </p>
      </div>

      {/* Profile Card + Stats */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 flex flex-col items-center text-center lg:col-span-1"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center mb-4">
            <Github className="w-10 h-10 text-violet-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-1">
            @{githubData.username}
          </h3>
          <p className="text-sm text-slate-400 mb-6">Developer & Creator</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 w-full mb-6">
            {[
              { label: 'Repos', value: githubData.stats.repositories },
              { label: 'Contributions', value: githubData.stats.contributions },
              { label: 'Stars', value: githubData.stats.stars },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-lg font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <a
            href={githubData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm w-full justify-center"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Profile</span>
          </a>
        </motion.div>

        {/* Contribution Graph Placeholder + Featured Repos */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contribution Graph Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-4 h-4 text-violet-400" />
              <h4 className="text-sm font-medium text-slate-300">
                Contribution Activity
              </h4>
            </div>

            {/* Simulated contribution grid */}
            <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(52, 1fr)' }}>
              {Array.from({ length: 364 }).map((_, i) => {
                const intensity = Math.random();
                let bg = 'bg-white/[0.03]';
                if (intensity > 0.85) bg = 'bg-violet-500/60';
                else if (intensity > 0.7) bg = 'bg-violet-500/40';
                else if (intensity > 0.5) bg = 'bg-violet-500/20';
                else if (intensity > 0.3) bg = 'bg-violet-500/10';
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-[2px] ${bg}`}
                  />
                );
              })}
            </div>
            <p className="text-xs text-slate-600 mt-3 text-center">
              Contribution data placeholder — connect GitHub API for live data
            </p>
          </motion.div>

          {/* Featured Repos */}
          <div className="grid sm:grid-cols-2 gap-4">
            {githubData.featuredRepos.map((repo, idx) => (
              <motion.a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5 block group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {repo.name}
                  </h4>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-violet-400 transition-colors" />
                </div>
                <p className="text-xs text-slate-400 mb-3 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {repo.forks}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
