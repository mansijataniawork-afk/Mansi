import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Presentation, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DeckSlide } from '../types/portfolio';

interface PresentationDeckViewerProps {
  slides?: DeckSlide[];
  projectTitle: string;
  canvaUrl?: string;
}

export const PresentationDeckViewer: React.FC<PresentationDeckViewerProps> = ({ slides, projectTitle, canvaUrl }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="rounded-2xl border border-[#EAE5DF] dark:border-[#2A2433] bg-[#FAF8F5] dark:bg-[#120F16] overflow-hidden shadow-xs">
      
      {/* Deck Toolbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#EAE5DF] dark:border-[#221D29] bg-white/70 dark:bg-[#18141E]/70 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E07A5F]">
          <Presentation className="w-4 h-4" />
          <span>Executive Strategy Deck</span>
        </div>

        <div className="flex items-center gap-3">
          {canvaUrl && (
            <a
              href={canvaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-white bg-[#00C4CC] hover:bg-[#00B0B8] transition-colors shadow-xs"
            >
              <span>View on Canva</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <span className="text-xs font-mono text-[#8A8490] tabular-nums hidden sm:inline">
            Slide {currentSlideIndex + 1} of {slides.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="p-1 rounded-lg text-[#554F5D] dark:text-[#B5AFBD] hover:bg-[#EFEAE4] dark:hover:bg-[#25202D] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="p-1 rounded-lg text-[#554F5D] dark:text-[#B5AFBD] hover:bg-[#EFEAE4] dark:hover:bg-[#25202D] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Body with AnimatePresence */}
      <div className="p-6 sm:p-8 min-h-[300px] flex flex-col justify-between relative bg-white dark:bg-[#141118]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Slide Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E07A5F] block mb-1">
                  {currentSlide.category}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A161E] dark:text-[#F3F0F6] font-display">
                  {currentSlide.title}
                </h4>
              </div>

              {currentSlide.stat && (
                <div className="text-right shrink-0 p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1C1822] border border-[#EAE5DF] dark:border-[#2C2735]">
                  <div className="text-xl sm:text-2xl font-bold font-display text-[#E07A5F] tabular-nums">
                    {currentSlide.stat.value}
                  </div>
                  <div className="text-[10px] text-[#8A8490] font-medium">
                    {currentSlide.stat.label}
                  </div>
                </div>
              )}
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5">
              {currentSlide.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#554F5D] dark:text-[#B5AFBD] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F] mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Executive Takeaway Banner */}
            <div className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#1A1622] border-l-2 border-[#E07A5F] text-xs text-[#423C49] dark:text-[#C5BFCD] italic">
              <strong className="not-italic font-bold text-[#1A161E] dark:text-[#F3F0F6]">Strategic Principle: </strong>
              {currentSlide.takeaway}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#F0EBE5] dark:border-[#221D29]">
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentSlideIndex === idx
                    ? 'w-6 bg-[#E07A5F]'
                    : 'w-2 bg-[#DDD7CF] dark:bg-[#383142] hover:bg-[#8A8490]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#E07A5F] hover:underline cursor-pointer"
          >
            <span>Next Slide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
