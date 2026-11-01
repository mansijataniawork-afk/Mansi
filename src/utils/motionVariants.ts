import { Variants } from 'motion/react';

// Container variant that staggers children elements
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

// Clean editorial fade up variant for headers and cards
export const fadeInScaleUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 28,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.65, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

// Subtle horizontal slide-in for timeline and comparison matrices
export const fadeInHorizontal: Variants = {
  hidden: { 
    opacity: 0, 
    x: -20,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

// Viewport trigger settings for scroll triggers
export const defaultViewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -80px 0px"
};
