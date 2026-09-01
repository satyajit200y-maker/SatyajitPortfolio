import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  ExternalLink,
  Award,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#0C0F1D] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/40 z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080B14] border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>{PERSONAL_INFO.name} — Curriculum Vitae</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                  Updated 2025
                </span>
              </h3>
              <p className="text-[11px] text-zinc-400">Frontend Developer &amp; UI/UX Designer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hi%20Satyajit,%20I%20reviewed%20your%20resume%20and%20would%20like%20to%20connect!`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span className="hidden sm:inline">Contact on WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-zinc-200">
          
          {/* Header Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#101528] to-[#0A0D18] border border-cyan-500/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-semibold mb-3">
                <Sparkles className="w-3 h-3" />
                <span>Web Developer &amp; UI/UX Designer</span>
              </div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm text-zinc-300 max-w-xl leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono text-zinc-300 shrink-0">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <button onClick={handleCopyEmail} className="hover:text-cyan-300 underline cursor-pointer">
                  {copiedEmail ? 'Copied to clipboard!' : PERSONAL_INFO.email}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-zinc-400">Available Globally</span>
              </div>
            </div>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills Arsenal</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
                  <div className="text-xs font-bold text-white mb-2">{cat.title}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-zinc-800/80 text-[11px] text-zinc-300 font-mono"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 font-mono mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Work &amp; Commercial Experience</span>
            </h4>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div>
                      <span className="text-base font-bold text-white">{exp.role}</span>
                      <span className="text-sm text-cyan-300 ml-2">@ {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">{exp.period} • {exp.location}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 mb-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-1.5 mb-3">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((sk, skIdx) => (
                      <span key={skIdx} className="px-2 py-0.5 rounded bg-black/50 border border-zinc-800 text-[10px] font-mono text-cyan-300">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Featured Projects */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-mono mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Selected Commercial Works</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-white">{proj.name}</span>
                      <span className="text-[11px] font-mono text-zinc-400">{proj.year}</span>
                    </div>
                    <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
                      {proj.shortDescription}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap gap-1">
                    {proj.technologies.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] font-mono text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-mono mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education &amp; Background</span>
            </h4>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="text-sm font-bold text-white">{PERSONAL_INFO.education.degree}</div>
                <div className="text-xs text-zinc-400">{PERSONAL_INFO.education.institution} • {PERSONAL_INFO.education.location}</div>
              </div>
              <span className="text-xs font-mono text-cyan-300 bg-cyan-950/50 px-2.5 py-1 rounded-full border border-cyan-500/30">
                {PERSONAL_INFO.education.period}
              </span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#080B14] border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <span>{PERSONAL_INFO.name} • Portfolio 2025</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors cursor-pointer"
          >
            Close Resume
          </button>
        </div>

      </div>

    </div>
  );
};
