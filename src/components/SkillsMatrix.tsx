import React from 'react';
import { motion } from 'motion/react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { staggerContainer, fadeInScaleUp, defaultViewport } from '../utils/motionVariants';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#EAE5DF] dark:border-[#221F28]">
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
            Strategic Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A161E] dark:text-[#F3F0F6] font-display mb-3">
            Core Capabilities & Domains
          </h2>
          <p className="text-sm sm:text-base text-[#6B6572] dark:text-[#A7A1AF] leading-relaxed">
            A cohesive synthesis of quantitative category analysis, brand lifecycle governance, behavioral neuromarketing, and executive deck communication.
          </p>
        </motion.div>

        {/* 4-Quadrant Grid with Staggered whileInView */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={idx}
              variants={fadeInScaleUp}
              className="bg-white dark:bg-[#141118] border border-[#EAE5DF] dark:border-[#25202D] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-[#DDD7CF] dark:hover:border-[#383142] transition-colors"
            >
              <div>
                <h3 className="text-base font-bold text-[#1A161E] dark:text-[#F3F0F6] font-display mb-1.5">
                  {group.category}
                </h3>
                <p className="text-xs text-[#7A7382] dark:text-[#9B95A2] leading-relaxed mb-6">
                  {group.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="text-xs font-medium text-[#423C49] dark:text-[#C5BFCD] py-1 border-b border-[#F0EBE5] dark:border-[#221D29] last:border-none flex items-center justify-between"
                    >
                      <span>{skill}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]/60" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0EBE5] dark:border-[#221D29] text-[11px] font-mono text-[#8A8490]">
                Domain 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};
