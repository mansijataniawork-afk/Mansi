import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';
import { staggerContainer, fadeInScaleUp, defaultViewport } from '../utils/motionVariants';

export const ExperienceTimeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#EAE5DF] dark:border-[#221F28]">
      <motion.div 
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        
        {/* Header with whileInView */}
        <motion.div variants={fadeInScaleUp} className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#E07A5F] mb-2">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A161E] dark:text-[#F3F0F6] font-display mb-3">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-[#6B6572] dark:text-[#A7A1AF] leading-relaxed">
            Leading strategic brand onboarding and portfolio optimization at Nykaa Beauty, with a proven track record in financial sales enablement and client performance marketing.
          </p>
        </motion.div>

        {/* Experience Cards with Staggered whileInView */}
        <motion.div variants={staggerContainer} className="space-y-4">
          {EXPERIENCES.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div
                key={idx}
                variants={fadeInScaleUp}
                className="bg-white dark:bg-[#141118] border border-[#EAE5DF] dark:border-[#25202D] rounded-2xl p-6 sm:p-7 transition-all duration-200 hover:border-[#DDD7CF] dark:hover:border-[#383142]"
              >
                {/* Clickable Header for Collapsible Details */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#E07A5F] font-semibold uppercase tracking-wider">
                      <span>{exp.company}</span>
                      <span aria-hidden="true" className="text-[#C8C2BA] dark:text-[#453F4E]">·</span>
                      <span className="flex items-center gap-1 text-[#8A8490]">
                        <MapPin className="w-3 h-3 text-[#E07A5F]" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A161E] dark:text-[#F3F0F6] font-display">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4">
                    <span className="text-xs sm:text-sm font-mono text-[#7A7382] dark:text-[#9B95A2] font-semibold whitespace-nowrap">
                      {exp.period}
                    </span>

                    <button
                      aria-label={isExpanded ? 'Collapse role details' : 'Expand role details'}
                      className="p-1.5 text-[#8A8490] hover:text-[#1A161E] dark:hover:text-white rounded-lg transition-colors cursor-pointer"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-[#554F5D] dark:text-[#B5AFBD] leading-relaxed mt-4">
                  {exp.summary}
                </p>

                {/* Expanded Bullet Points from CV with AnimatePresence */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-5 border-t border-[#F0EBE5] dark:border-[#221D29] space-y-4 overflow-hidden"
                    >
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A161E] dark:text-[#F3F0F6] mb-3">
                          Key Responsibilities & Measurable Impact
                        </h4>
                        <ul className="space-y-2.5">
                          {exp.bulletPoints.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#554F5D] dark:text-[#B5AFBD] leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F] mt-2 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#8A8490] mb-2">
                          Core Competencies Applied
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.competencies.map((comp, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#FAF8F5] dark:bg-[#1C1822] text-[#423C49] dark:text-[#C5BFCD] border border-[#EAE5DF] dark:border-[#2A2433]"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </section>
  );
};
