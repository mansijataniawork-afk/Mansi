import React from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAF8F5]/90 dark:bg-[#0E0C10]/90 border-b border-[#EAE5DF] dark:border-[#221F28] transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-[#1A161E] dark:text-[#F3F0F6] hover:text-[#E07A5F] dark:hover:text-[#E07A5F] transition-colors whitespace-nowrap shrink-0 font-display flex items-center gap-2"
        >
          <span>{PERSONAL_INFO.name}</span>
          <span className="hidden sm:inline-block text-xs font-normal text-[#8A8490] dark:text-[#9B95A2]">
            | Nykaa Beauty
          </span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-[#6B6572] dark:text-[#A7A1AF]">
          <a 
            href="#case-studies" 
            className="hover:text-[#1A161E] dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Case Studies
          </a>
          <a 
            href="#framework" 
            className="hover:text-[#1A161E] dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Brand Matrix
          </a>
          <a 
            href="#experience" 
            className="hover:text-[#1A161E] dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a 
            href="#skills" 
            className="hover:text-[#1A161E] dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Capabilities
          </a>
          <a 
            href="#contact" 
            className="hover:text-[#1A161E] dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action + theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setDarkMode(prev => !prev)}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="p-2 text-[#6B6572] dark:text-[#A7A1AF] hover:text-[#1A161E] dark:hover:text-white rounded-lg hover:bg-[#EFEAE4] dark:hover:bg-[#1C1822] transition-colors cursor-pointer"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A161E] hover:bg-[#2C2735] dark:bg-[#E07A5F] dark:text-white dark:hover:bg-[#C9684F] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </header>
  );
};
