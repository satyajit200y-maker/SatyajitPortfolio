import React, { useState } from 'react';
import { 
  X, 
  Eye, 
  FileText, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Layers, 
  Zap, 
  Search,
  Filter,
  MessageCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

interface RecentProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLivePreview: (project: Project) => void;
  onOpenCaseStudy: (project: Project) => void;
}

export const RecentProjectsModal: React.FC<RecentProjectsModalProps> = ({
  isOpen,
  onClose,
  onOpenLivePreview,
  onOpenCaseStudy
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const categories = ['All', 'Fitness', 'Restaurant & Cafe', 'Business'];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesTag = selectedTag === 'All' 
      ? true 
      : proj.tag === selectedTag || (selectedTag === 'Business' && proj.category.includes('Business'));
    
    const matchesSearch = searchQuery.trim() === ''
      ? true
      : proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        proj.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTag && matchesSearch;
  });

  return (
    <div 
      id="recent-projects-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="recent-projects-modal-container"
        className="bg-[#0A0C14] border border-zinc-800 rounded-2xl sm:rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-7 bg-[#0D101C] border-b border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Project History & Client Archive</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>Recent Projects</span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 font-normal">
                {PROJECTS.length} Builds
              </span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              Explore recent web applications, custom business websites, and live previews.
            </p>
          </div>

          {/* Close button */}
          <button
            id="close-recent-projects-modal-btn"
            onClick={onClose}
            className="self-end sm:self-center p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="px-5 sm:px-7 py-3.5 bg-[#090A10] border-b border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedTag === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech or client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-zinc-900/90 border border-zinc-800 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>

        </div>

        {/* Projects Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 max-h-[calc(90vh-190px)]">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 text-sm">
              No projects found matching your search. Try resetting filters.
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`modal-project-item-${project.id}`}
                className="bg-[#0E111C] border border-zinc-800/90 hover:border-zinc-700 rounded-2xl p-5 sm:p-6 transition-all shadow-lg flex flex-col lg:flex-row gap-6 group"
              >
                {/* Project Image Mockup Thumbnail */}
                <div 
                  onClick={() => onOpenLivePreview(project)}
                  className="w-full lg:w-72 h-48 sm:h-56 lg:h-auto rounded-xl overflow-hidden relative bg-zinc-900 shrink-0 cursor-pointer group/thumb border border-zinc-800"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Badge & Year */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-1 rounded bg-black/70 border border-zinc-700 text-[10px] font-mono text-cyan-300">
                    PROJ {project.number}
                  </div>
                  <div className="absolute top-2.5 right-2.5 px-2 py-1 rounded bg-black/70 border border-zinc-700 text-[10px] font-mono text-zinc-400">
                    {project.year}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-cyan-950/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-3 py-1.5 rounded-full bg-white text-zinc-950 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live Preview</span>
                    </div>
                  </div>

                  {/* Outcome Pill */}
                  {project.metrics && project.metrics[0] && (
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/80 border border-cyan-500/30 flex items-center justify-between text-[11px]">
                      <span className="text-zinc-400">{project.metrics[0].label}</span>
                      <span className="text-cyan-400 font-bold font-mono">{project.metrics[0].value}</span>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tag & Client */}
                    <div className="flex items-center gap-2 mb-2 text-xs">
                      <span className="text-cyan-400 font-semibold uppercase tracking-wider">
                        {project.tag}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400">{project.client}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Features list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                      {project.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2.5">
                    <button
                      id={`modal-btn-live-${project.id}`}
                      onClick={() => onOpenLivePreview(project)}
                      className="px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live Device Preview</span>
                    </button>

                    <button
                      id={`modal-btn-case-${project.id}`}
                      onClick={() => onOpenCaseStudy(project)}
                      className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-medium text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Technical Case Study</span>
                    </button>

                    <a
                      href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hi%20Satyajit,%20I'm%20interested%20in%20a%20website%20like%20${project.name}!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-xs text-zinc-400 hover:text-emerald-300 transition-colors flex items-center gap-1 ml-auto"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Inquire WhatsApp</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#0D101C] border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Direct WhatsApp Consultation: <strong>Available Now</strong></span>
          </div>
          <a
            href={PERSONAL_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-all flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-zinc-950" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
