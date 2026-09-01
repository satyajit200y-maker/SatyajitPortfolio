import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Eye, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  FolderGit2,
  Zap,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { LivePreviewModal } from './LivePreviewModal';
import { RecentProjectsModal } from './RecentProjectsModal';

interface ProjectsProps {
  onContactClick: () => void;
  onOpenRecentProjectsModal?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onContactClick }) => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);
  const [activeLivePreview, setActiveLivePreview] = useState<Project | null>(null);
  const [isRecentProjectsOpen, setIsRecentProjectsOpen] = useState<boolean>(false);

  // We highlight the top 2 featured builds on the minimal landing page
  const featuredPreview = PROJECTS.slice(0, 2);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#08090D] border-t border-zinc-900 overflow-hidden">
      
      {/* Subtle ambient blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Main "Recent Projects" Master Trigger Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium mb-3">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Client Websites.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              High-performance web applications built with React, Next.js, Tailwind CSS, and instant WhatsApp funnels.
            </p>
          </div>

          {/* PRIMARY "RECENT PROJECTS" BUTTON */}
          <button
            id="btn-recent-projects-main"
            onClick={() => setIsRecentProjectsOpen(true)}
            className="group px-6 py-3.5 rounded-2xl bg-[#0E1220] hover:bg-[#141A2D] border border-cyan-500/40 hover:border-cyan-400 text-white font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-cyan-950/40 flex items-center justify-center gap-3 cursor-pointer self-start md:self-auto"
          >
            <FolderGit2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Recent Projects</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Minimal 2-Column Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredPreview.map((project) => (
            <div
              key={project.id}
              id={`featured-card-${project.id}`}
              className="bg-[#0C0E17] border border-zinc-800/90 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              {/* Card Image Sandbox Preview */}
              <div 
                onClick={() => setActiveLivePreview(project)}
                className="relative h-56 sm:h-64 overflow-hidden bg-zinc-900 cursor-pointer group/img"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E17] via-transparent to-transparent opacity-90" />
                
                {/* Meta Pills */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-black/70 border border-zinc-800 text-[10px] font-mono text-cyan-300">
                    PROJ {project.number}
                  </span>
                  <span className="px-2 py-1 rounded bg-black/70 border border-zinc-800 text-[10px] font-medium text-zinc-300 uppercase tracking-wider">
                    {project.tag}
                  </span>
                </div>

                {/* Live Preview Button Trigger */}
                <div className="absolute inset-0 bg-cyan-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-white text-zinc-950 text-xs font-bold flex items-center gap-2 shadow-2xl">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Launch Live Preview</span>
                  </div>
                </div>

                {/* Metric pill */}
                {project.metrics && project.metrics[0] && (
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/80 border border-zinc-800 text-xs">
                    <span className="text-zinc-400">{project.metrics[0].label}: </span>
                    <span className="text-cyan-400 font-bold font-mono">{project.metrics[0].value}</span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-xs text-zinc-400">{project.year}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveLivePreview(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Live Preview</span>
                  </button>

                  <button
                    onClick={() => setActiveCaseStudy(project)}
                    className="text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Case Study</span>
                  </button>

                  <a
                    href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hi%20Satyajit,%20I'm%20interested%20in%20a%20website%20like%20${project.name}!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 ml-auto"
                    title="Direct WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Inquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Minimal Banner with Single "Recent Projects" Master Trigger */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0D16] border border-zinc-800/90 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Want to see all projects & technical outcomes?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Browse complete case studies, live previews, and design systems in the archive.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsRecentProjectsOpen(true)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Open Recent Projects</span>
            </button>

            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Custom Quote</span>
            </button>
          </div>
        </div>

      </div>

      {/* "Recent Projects" Master Archive Modal */}
      <RecentProjectsModal
        isOpen={isRecentProjectsOpen}
        onClose={() => setIsRecentProjectsOpen(false)}
        onOpenLivePreview={(proj) => {
          setIsRecentProjectsOpen(false);
          setActiveLivePreview(proj);
        }}
        onOpenCaseStudy={(proj) => {
          setIsRecentProjectsOpen(false);
          setActiveCaseStudy(proj);
        }}
      />

      {/* Case Study Modal */}
      {activeCaseStudy && (
        <CaseStudyModal
          project={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
          onOpenLivePreview={(proj) => {
            setActiveCaseStudy(null);
            setActiveLivePreview(proj);
          }}
        />
      )}

      {/* Live Device Sandbox Modal */}
      {activeLivePreview && (
        <LivePreviewModal
          project={activeLivePreview}
          onClose={() => setActiveLivePreview(null)}
        />
      )}

    </section>
  );
};
