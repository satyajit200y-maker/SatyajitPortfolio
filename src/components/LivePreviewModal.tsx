import React, { useState } from 'react';
import { 
  X, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ExternalLink, 
  RefreshCw, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Calendar,
  Check
} from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface LivePreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({ project, onClose }) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [interactiveActionTriggered, setInteractiveActionTriggered] = useState<string | null>(null);

  if (!project) return null;

  const handleAction = (actionName: string) => {
    setInteractiveActionTriggered(actionName);
    setTimeout(() => setInteractiveActionTriggered(null), 3000);
  };

  return (
    <div 
      id="live-preview-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex flex-col p-2 sm:p-4 md:p-6 overflow-hidden animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="live-preview-container"
        className="bg-[#0A0D16] border border-zinc-700/80 rounded-2xl sm:rounded-3xl flex-1 flex flex-col max-w-6xl w-full mx-auto overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-[#0C101C] px-4 py-3 border-b border-zinc-800 flex items-center justify-between gap-4">
          
          {/* Project Title & Status */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <span className="text-xs sm:text-sm font-bold text-white">
                {project.name}
              </span>
              <span className="text-[11px] text-cyan-400 ml-2 hidden sm:inline font-mono">
                [{project.category}]
              </span>
            </div>
          </div>

          {/* Viewport Device Switcher */}
          <div className="flex items-center gap-1 bg-[#121626] p-1 rounded-xl border border-zinc-700/60">
            <button
              onClick={() => setDevice('desktop')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors ${
                device === 'desktop'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
              <span className="hidden sm:inline">Desktop</span>
            </button>

            <button
              onClick={() => setDevice('tablet')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors ${
                device === 'tablet'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Tablet View"
            >
              <Tablet className="w-4 h-4" />
              <span className="hidden sm:inline">Tablet</span>
            </button>

            <button
              onClick={() => setDevice('mobile')}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors ${
                device === 'mobile'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          {/* Close & Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hi%20Satyajit,%20I%20tested%20your%20${project.name}%20interactive%20demo%20and%20want%20to%20hire%20you.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/60"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Hire for Similar Site</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Viewport Stage / Canvas */}
        <div className="flex-1 bg-[#06080F] p-4 sm:p-6 overflow-y-auto flex items-center justify-center relative">
          
          {/* Simulated Browser Frame */}
          <div 
            className={`transition-all duration-300 bg-[#0C0F1A] border border-zinc-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col ${
              device === 'desktop' ? 'w-full max-w-5xl h-full' :
              device === 'tablet' ? 'w-[768px] h-full max-w-full' :
              'w-[380px] h-[640px] max-w-full'
            }`}
          >
            
            {/* Mockup Address Bar */}
            <div className="bg-[#111422] px-3 py-2 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
              </div>
              <div className="px-3 py-1 rounded-md bg-[#090C16] border border-zinc-800 text-[11px] text-zinc-300 flex items-center gap-2 max-w-[280px] truncate">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>https://{project.id}.webneststudio.dev</span>
              </div>
              <div className="text-zinc-500">100% Secure</div>
            </div>

            {/* Simulated Live Web Content */}
            <div className="flex-1 overflow-y-auto bg-[#08090D] text-zinc-100 p-4 sm:p-6 space-y-6">
              
              {/* Interactive simulated project header */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 p-6 sm:p-8 bg-gradient-to-br from-[#121624] via-[#0E111C] to-[#0A0C14]">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Verified Live Client Demo
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {project.name}
                </h3>
                
                <p className="text-zinc-300 text-sm max-w-xl mb-6">
                  {project.shortDescription}
                </p>

                {/* Interactive Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleAction('Trial / Booking Initiated! WhatsApp lead funnel triggered.')}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-sky-300 text-zinc-950 font-bold text-xs rounded-xl flex items-center gap-2 shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Test Instant Booking CTA</span>
                  </button>

                  <button
                    onClick={() => handleAction('Menu / Facilities modal opened on client device.')}
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs rounded-xl flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Test Interactive Menu Flow</span>
                  </button>

                  <a
                    href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hi%20Satyajit,%20I'm%20impressed%20by%20${project.name}!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-medium text-xs rounded-xl flex items-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Test WhatsApp Lead Flow</span>
                  </a>
                </div>

                {interactiveActionTriggered && (
                  <div className="mt-4 p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{interactiveActionTriggered}</span>
                  </div>
                )}
              </div>

              {/* Project Showcase Gallery Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-zinc-800 h-48 sm:h-56 relative group">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <span className="text-xs font-semibold text-white">Visual Design & Imagery</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0E121E] border border-zinc-800 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">Core Features Active in This Build:</h4>
                    <div className="space-y-2 text-xs text-zinc-300">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 font-mono">
                    Engineered by {PERSONAL_INFO.brand}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Bottom Information */}
        <div className="bg-[#0C101C] px-4 py-2.5 border-t border-zinc-800 text-center text-xs text-zinc-400 flex items-center justify-between">
          <span className="hidden sm:inline">Active Viewport: <strong className="text-white uppercase font-mono">{device}</strong></span>
          <span className="text-zinc-400">Designed & engineered by Satyajit Nayak</span>
          <button onClick={onClose} className="text-cyan-400 font-medium hover:underline text-xs">
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
