import React, { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { BrandEvaluationLab } from './components/BrandEvaluationLab';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types/portfolio';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mansi_theme_preference');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('mansi_theme_preference', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('mansi_theme_preference', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#0E0C10] text-[#1A161E] dark:text-[#F3F0F6] transition-colors selection:bg-[#E07A5F] selection:text-white">
      {/* Slim Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Top Bar Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* Visual Hero Section */}
        <Hero />

        {/* Selected Projects, Case Studies & Presentation Decks */}
        <ProjectShowcase onSelectProject={(project) => setSelectedProject(project)} />

        {/* Interactive Nykaa Brand Evaluation & Assortment Simulator */}
        <BrandEvaluationLab />

        {/* Brand Management Career Journey */}
        <ExperienceTimeline />

        {/* Core Capabilities & Strategic Competencies */}
        <SkillsMatrix />

        {/* Strategic Contact & Inquiry Composer */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study & Deck Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
