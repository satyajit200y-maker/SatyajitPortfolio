import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Instagram, MessageCircle, Mail, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenSitemap: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenSitemap }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06070B] border-t border-zinc-900 pt-16 pb-12 text-zinc-400 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono font-bold text-sm shadow-sm">
                &lt;SN/&gt;
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </span>
                <p className="text-xs text-cyan-400 font-medium">Web Developer &amp; UI/UX Designer</p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Crafting clean, high-performance web products with sub-second speeds, modern responsive UI, and integrated WhatsApp client acquisition funnels.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Based in Odisha, India • Available Globally</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About Satyajit', id: 'about' },
                { label: 'Services & Rates', id: 'services' },
                { label: 'Featured Projects', id: 'projects' },
                { label: 'Skills & Stack', id: 'skills' },
                { label: 'Career Experience', id: 'experience' },
                { label: 'Contact & Hire', id: 'contact' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-zinc-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Policies Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect Directly
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.socials.gmail}
                className="w-10 h-10 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-red-400 hover:border-red-500/40 flex items-center justify-center transition-all"
                title="Gmail"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 flex items-center justify-center transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/40 flex items-center justify-center transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs space-y-1">
              <div className="text-zinc-400">
                Email: <span className="font-mono text-zinc-300">{PERSONAL_INFO.email}</span>
              </div>
              <div className="text-zinc-400">
                WhatsApp: <a href={PERSONAL_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">Chat on WhatsApp</a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs">
              <button 
                onClick={onOpenPrivacy}
                className="hover:text-zinc-200 transition-colors underline cursor-pointer"
              >
                Privacy Policy & Cookies
              </button>
              <span>•</span>
              <button 
                onClick={onOpenSitemap}
                className="hover:text-zinc-200 transition-colors underline cursor-pointer"
              >
                Sitemap
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © 2026 Webnest Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-400">
              {PERSONAL_INFO.name} — Web Developer & UI/UX Designer
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center gap-1.5 focus:outline-none cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px]">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
