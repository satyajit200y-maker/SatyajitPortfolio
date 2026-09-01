import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Terminal, FileText, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: 'about' },
    { label: 'Projects', href: 'projects' },
    { label: 'Services', href: 'services' },
    { label: 'Skills', href: 'skills' },
    { label: 'Experience', href: 'experience' },
    { label: 'Contact', href: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    onNavigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#08090D]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Personal Developer Brand Logo */}
          <button
            id="nav-brand-btn"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono font-bold text-sm group-hover:border-cyan-300 group-hover:scale-105 transition-all shadow-sm shadow-cyan-500/20">
              <span>&lt;SN/&gt;</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse hidden sm:inline-block" title="Available for work" />
              </div>
              <p className="text-[11px] text-zinc-400 font-medium tracking-wide">
                {PERSONAL_INFO.role}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#10131E]/80 border border-zinc-800/90 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.href}
                  id={`nav-link-${item.href}`}
                  onClick={() => handleLinkClick(item.href)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-cyan-300 bg-zinc-800/90 shadow-sm border border-cyan-500/30'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Resume / CV + WhatsApp + Let's Talk CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-cyan-500/40 text-zinc-300 hover:text-white text-xs font-medium transition-all cursor-pointer"
                title="View Resume / CV"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume</span>
              </button>
            )}

            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-emerald-200 text-xs font-medium transition-all shadow-sm"
              title="Chat on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Chat on WhatsApp</span>
            </a>

            <button
              id="nav-cta-talk-btn"
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-zinc-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:opacity-95 rounded-full shadow-md shadow-cyan-500/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-950" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg flex flex-col pt-20 px-6 pb-8 sm:hidden animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-medium text-emerald-300">
                {PERSONAL_INFO.availability}
              </span>
            </div>
            <span className="text-xs text-zinc-400">Odisha, India</span>
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                id={`mobile-nav-${item.href}`}
                onClick={() => handleLinkClick(item.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-left transition-all ${
                  activeSection === item.href
                    ? 'bg-zinc-800 text-cyan-400 border border-cyan-500/30'
                    : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </button>
            ))}

            {onOpenResume && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-left bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View Resume / CV</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </button>
            )}
          </div>

          <div className="mt-auto pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <button
              id="mobile-drawer-cta-btn"
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-teal-300 text-zinc-950 font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Let's Build Something</span>
            </button>
            <p className="text-center text-xs text-zinc-500">
              {PERSONAL_INFO.name} • {PERSONAL_INFO.tagline}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
