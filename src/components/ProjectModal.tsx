import React, { useEffect } from 'react';
import { X, CheckCircle2, Building2, Calendar, Target, Award, ArrowRight, ExternalLink, Globe, Presentation } from 'lucide-react';
import { Project } from '../types/portfolio';
import { PresentationDeckViewer } from './PresentationDeckViewer';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#141118] border border-[#EAE5DF] dark:border-[#25202D] rounded-3xl shadow-2xl flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#141118]/95 backdrop-blur-sm border-b border-[#EAE5DF] dark:border-[#25202D]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E07A5F]">
            <span>{project.organization}</span>
            <span aria-hidden="true" className="text-[#C8C2BA] dark:text-[#453F4E]">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true" className="text-[#C8C2BA] dark:text-[#453F4E]">·</span>
            <span>{project.role}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-[#8A8490] hover:text-[#1A161E] dark:hover:text-white rounded-lg hover:bg-[#FAF8F5] dark:hover:bg-[#1C1822] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title Area */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A161E] dark:text-[#F3F0F6] font-display mb-2">
              {project.title}
            </h2>
            <p className="text-base text-[#554F5D] dark:text-[#B5AFBD] leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Full Visual Banner Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#EAE5DF] dark:border-[#25202D] bg-[#FAF8F5] dark:bg-[#1C1822] shadow-sm">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#FAF8F5] dark:bg-[#1A1622] border border-[#EAE5DF] dark:border-[#2A2433]">
            {project.metrics.map((m, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold font-display text-[#1A161E] dark:text-[#F3F0F6] tabular-nums">
                  {m.value}
                </span>
                <span className="text-xs font-medium text-[#7A7382] dark:text-[#9B95A2] mt-1">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Presentation Deck Carousel if Available */}
          {project.slides && project.slides.length > 0 && (
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1A161E] dark:text-[#F3F0F6] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Presentation className="w-4 h-4 text-[#E07A5F]" />
                  <span>Executive Strategy Deck & Slides</span>
                </div>
                {project.canvaUrl && (
                  <a
                    href={project.canvaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#00C4CC] hover:underline"
                  >
                    <span>Open in Canva</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              <PresentationDeckViewer 
                slides={project.slides} 
                projectTitle={project.title} 
                canvaUrl={project.canvaUrl}
              />
            </div>
          )}

          {/* Detailed Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A161E] dark:text-[#F3F0F6] flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-[#E07A5F]" />
                <span>The Challenge & Strategic Context</span>
              </h3>
              <p className="text-[#554F5D] dark:text-[#B5AFBD]">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A161E] dark:text-[#F3F0F6] flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#E07A5F]" />
                <span>Strategic Execution & Strategy</span>
              </h3>
              <p className="text-[#554F5D] dark:text-[#B5AFBD]">
                {project.strategy}
              </p>
            </div>
          </div>

          {/* Measurable Deliverables & Outcomes */}
          <div className="pt-6 border-t border-[#F0EBE5] dark:border-[#221D29]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A161E] dark:text-[#F3F0F6] mb-4">
              Measurable Deliverables & Real Impact
            </h4>
            <div className="space-y-2.5">
              {project.outcomes.map((outcome, oIdx) => (
                <div key={oIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#554F5D] dark:text-[#B5AFBD]">
                  <CheckCircle2 className="w-4 h-4 text-[#E07A5F] shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Strip (including Wix Archive and External Resources) */}
          {project.links && project.links.length > 0 && (
            <div className="pt-6 border-t border-[#F0EBE5] dark:border-[#221D29]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A161E] dark:text-[#F3F0F6] mb-3">
                Resource Links & External Archives
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-[#FAF8F5] dark:bg-[#1A1622] text-[#1A161E] dark:text-[#F3F0F6] border border-[#EAE5DF] dark:border-[#2A2433] hover:border-[#E07A5F] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#E07A5F]" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Competency & Framework Tags */}
          <div className="pt-4 border-t border-[#F0EBE5] dark:border-[#221D29]">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#8A8490] mb-3">
              Competencies & Strategic Focus
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#FAF8F5] dark:bg-[#1A1622] text-[#423C49] dark:text-[#C5BFCD] border border-[#EAE5DF] dark:border-[#2A2433]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A161E] dark:bg-[#E07A5F] rounded-xl hover:opacity-90 transition-opacity cursor-pointer ml-auto"
            >
              Close Case Monograph
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
