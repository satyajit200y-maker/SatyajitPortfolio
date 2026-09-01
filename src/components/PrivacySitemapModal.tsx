import React from 'react';
import { X, ShieldCheck, FileText, Globe, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PrivacySitemapModalProps {
  type: 'privacy' | 'sitemap' | null;
  onClose: () => void;
}

export const PrivacySitemapModal: React.FC<PrivacySitemapModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#0D101B] border border-zinc-700/80 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-auto max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            ) : (
              <Globe className="w-5 h-5 text-cyan-400" />
            )}
            <h3 className="text-xl font-bold text-white">
              {type === 'privacy' ? 'Privacy Policy & Cookies Notice' : 'XML Sitemap & Structure'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <p>
              <strong>Effective Date:</strong> January 2026 | <strong>Studio:</strong> Webnest Studio ({PERSONAL_INFO.name})
            </p>
            <h4 className="font-bold text-white text-sm pt-2">1. Data Collection & Use</h4>
            <p>
              Webnest Studio respects your privacy. When you submit inquiries through our contact forms or direct WhatsApp links, we only collect essential business details (Name, Email, Project Type, and Message) solely to respond to your development request and deliver tailored website proposals.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">2. Cookies & Local Storage</h4>
            <p>
              This website uses standard client-side state and minimal performance analytics cookies to provide seamless responsiveness, smooth theme transitions, and interactive project previews. No sensitive or tracking data is sold to third parties.
            </p>
            <h4 className="font-bold text-white text-sm pt-2">3. Direct Contact Security</h4>
            <p>
              All communications sent to <span className="font-mono text-cyan-300">{PERSONAL_INFO.email}</span> or via WhatsApp are securely transmitted and kept strictly confidential.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
            <p className="text-zinc-400">
              Webnest Studio structured sitemap for search engine crawlers (Google, Bing) and user indexing:
            </p>
            <div className="p-4 rounded-xl bg-[#090C16] border border-zinc-800 font-mono text-xs text-zinc-300 space-y-2">
              <div>https://webneststudio.dev/</div>
              <div className="pl-4 text-cyan-400">├── #about (About Satyajit Nayak)</div>
              <div className="pl-4 text-cyan-400">├── #services (Web Development, UI/UX, SEO)</div>
              <div className="pl-4 text-cyan-400">├── #projects (Jaguar Gym, 8 Zero Cafe, Swosti, RD Fitness)</div>
              <div className="pl-4 text-cyan-400">├── #skills (React, Next.js, Tailwind, Node, MongoDB)</div>
              <div className="pl-4 text-cyan-400">├── #workflow (01 Discover, 02 Design, 03 Develop, 04 Launch)</div>
              <div className="pl-4 text-cyan-400">├── #experience (Webnest Studio, Virtual Works Lab, THIRANEX)</div>
              <div className="pl-4 text-cyan-400">└── #contact (Project Inquiries & WhatsApp)</div>
            </div>
            <p className="text-xs text-zinc-400">
              Robots.txt status: <span className="text-emerald-400 font-mono">User-agent: * Allow: /</span>
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-zinc-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
