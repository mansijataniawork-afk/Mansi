import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-[#0E0C10] border-t border-[#EAE5DF] dark:border-[#221F28] transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-[#7A7382] dark:text-[#9B95A2]">
          <span className="font-bold text-[#1A161E] dark:text-[#F3F0F6]">
            {PERSONAL_INFO.name}
          </span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>Assistant Manager, Brand Management | Nykaa Beauty</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        {/* Quiet Navigation & Back to Top */}
        <div className="flex items-center gap-6 text-xs font-medium text-[#6B6572] dark:text-[#A7A1AF]">
          <a href="#case-studies" className="hover:text-[#1A161E] dark:hover:text-white transition-colors">
            Case Studies
          </a>
          <a href="#framework" className="hover:text-[#1A161E] dark:hover:text-white transition-colors">
            Brand Matrix
          </a>
          <a href="#experience" className="hover:text-[#1A161E] dark:hover:text-white transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-[#1A161E] dark:hover:text-white transition-colors">
            Capabilities
          </a>
          <a href="#contact" className="hover:text-[#1A161E] dark:hover:text-white transition-colors">
            Contact
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-[#1A161E] dark:text-[#F3F0F6] hover:text-[#E07A5F] transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
