import React from 'react';
import { X, CheckCircle2, ArrowUpRight, Award, Zap, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLivePreview: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenLivePreview }) => {
  if (!project) return null;

  return (
    <div 
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="case-study-modal-container"
        className="bg-[#0C0F1A] border border-zinc-700/80 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#0C0F1A]/95 backdrop-blur-md px-6 py-4 border-b border-zinc-800 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold">
              CASE STUDY {project.number}
            </span>
            <span className="text-xs text-zinc-400 font-medium hidden sm:inline">
              Client: {project.client} ({project.year})
            </span>
          </div>

          <button
            id="close-case-study-btn"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800/80 hover:bg-zinc-700 transition-colors focus:outline-none"
            aria-label="Close Case Study Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F1A] via-[#0C0F1A]/60 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1 block">
                {project.category}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {project.name}
              </h2>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenLivePreview(project);
              }}
              className="px-5 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-xs flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-lg shrink-0 cursor-pointer"
            >
              <span>Launch Interactive Preview</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Key Metrics Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#111626] border border-cyan-500/20">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">
                    {metric.value}
                  </div>
                  <div className="text-xs text-zinc-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Overview, Challenge, Solution */}
          <div className="space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Executive Overview</span>
              </h3>
              <p className="text-zinc-200">
                {project.caseStudy.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-2">
                  The Challenge
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.caseStudy.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  The Engineering Solution
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Key Deliverables & Implemented Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.caseStudy.keyDeliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111422] border border-zinc-800/80 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
                Tech Stack Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-200 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical & Performance Outcome */}
            {project.caseStudy.technicalOutcome && (
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
                <Zap className="w-5 h-5 text-cyan-400 shrink-0" />
                <p className="text-zinc-300 text-xs sm:text-sm font-medium">
                  {project.caseStudy.technicalOutcome}
                </p>
              </div>
            )}

          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-400">
              Want a similar modern website for your brand?
            </div>
            
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hi%20Satyajit,%20I%20reviewed%20the%20${project.name}%20case%20study%20and%20want%20to%20build%20something%20similar.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
            >
              Discuss a Similar Website
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
