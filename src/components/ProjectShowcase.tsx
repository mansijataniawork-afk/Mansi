import React, { useState } from 'react';
import { ArrowUpRight, Presentation, ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { staggerContainer, fadeInScaleUp, defaultViewport } from '../utils/motionVariants';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Initiatives', value: 'all' },
    { label: 'Brand Strategy & Nykaa', value: 'brand-strategy' },
    { label: 'Neuromarketing & Gen-Z', value: 'neuromarketing' },
    { label: 'Corporate Initiatives', value: 'corporate-initiatives' },
    { label: 'Growth & Campaigns', value: 'growth-campaigns' },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-28 border-b border-[#EAE5DF] dark:border-[#221F28]">
      <motion.div 
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        
        {/* Section Header with whileInView */}
        <motion.div 
          variants={fadeInScaleUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#E07A5F] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Strategic Portfolio & Presentations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A161E] dark:text-[#F3F0F6] font-display">
              Case Studies, Decks & Brand Inception
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#EFEAE4] dark:bg-[#1C1822] border border-[#DDD7CF] dark:border-[#2C2735] rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-white dark:bg-[#282230] text-[#1A161E] dark:text-white shadow-xs'
                    : 'text-[#6B6572] dark:text-[#A7A1AF] hover:text-[#1A161E] dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Project Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeInScaleUp}
                onClick={() => onSelectProject(project)}
                className="group relative flex flex-col justify-between bg-white dark:bg-[#141118] rounded-2xl border border-[#EAE5DF] dark:border-[#25202D] overflow-hidden hover:border-[#1A161E] dark:hover:border-[#E07A5F] transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF8F5] dark:bg-[#1C1822] border-b border-[#EAE5DF] dark:border-[#25202D]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/20">
                      {project.organization}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {project.canvaUrl && (
                        <a
                          href={project.canvaUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="Open Canva Presentation Deck"
                          className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#00C4CC] hover:bg-[#00B0B8] text-white shadow-xs transition-colors"
                        >
                          <span>Canva Deck</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      {project.slides && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#E07A5F] text-white shadow-xs">
                          <Presentation className="w-3 h-3" />
                          <span>Slides</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Floating Trigger */}
                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 bg-white dark:bg-[#1A1622] text-[#1A161E] dark:text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                    <span>Explore Presentation & Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E07A5F]" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Quiet Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-[#E07A5F] font-semibold uppercase tracking-wider mb-2">
                      <span>{project.role}</span>
                      <span aria-hidden="true" className="text-[#C8C2BA] dark:text-[#453F4E]">·</span>
                      <span className="text-[#8A8490]">{project.year}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A161E] dark:text-[#F3F0F6] font-display group-hover:text-[#E07A5F] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-[#7A7382] dark:text-[#9B95A2] mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-[#554F5D] dark:text-[#B5AFBD] leading-relaxed line-clamp-2 mb-6">
                      {project.summary}
                    </p>
                  </div>

                  {/* Bottom Card Footer: Quantitative Proof & Monograph Affordance */}
                  <div className="pt-5 border-t border-[#F0EBE5] dark:border-[#221D29] flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-display text-[#1A161E] dark:text-[#F3F0F6] tabular-nums">
                        {project.metrics[0].value}
                      </span>
                      <span className="text-xs text-[#7A7382] dark:text-[#9B95A2] font-medium truncate">
                        {project.metrics[0].label}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {project.canvaUrl && (
                        <a
                          href={project.canvaUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs font-bold text-[#00C4CC] hover:underline flex items-center gap-1"
                        >
                          <span>Canva</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#1A161E] dark:text-[#F3F0F6] group-hover:text-[#E07A5F] flex items-center gap-1 transition-colors">
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Previous Wix Archive Banner Callout with whileInView */}
        <motion.div 
          variants={fadeInScaleUp}
          className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#141118] border border-[#EAE5DF] dark:border-[#25202D] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E07A5F]">
              <Presentation className="w-3.5 h-3.5" />
              <span>Multi-Platform Portfolio Heritage & Canva Assets</span>
            </div>
            <p className="text-xs text-[#6B6572] dark:text-[#A7A1AF]">
              Looking for earlier live archives, client creative designs, Canva slide decks, and original Wix site assets?
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.previousWixUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A161E] dark:text-white bg-[#FAF8F5] dark:bg-[#1C1822] hover:bg-[#EFEAE4] dark:hover:bg-[#282230] border border-[#DDD7CF] dark:border-[#2C2735] rounded-xl transition-colors cursor-pointer shrink-0"
            >
              <span>Open Wix Archive</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E07A5F]" />
            </a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};
