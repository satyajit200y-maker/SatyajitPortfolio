import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="floating-whatsapp-widget" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick chat teaser popover */}
      {isOpen && (
        <div className="mb-3 w-72 bg-[#0E121E] border border-cyan-500/30 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
              <div>
                <span className="text-xs font-bold text-white block">Satyajit Nayak</span>
                <span className="text-[10px] text-emerald-400 font-medium">Online • Quick Response</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-zinc-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed mb-3">
            Hi there! Looking for a fast, modern website for your business? Click below to chat directly with me on WhatsApp.
          </p>

          <a
            href={PERSONAL_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-zinc-950" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Floating Action Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-4 py-3 bg-[#0E121E]/95 hover:bg-[#141A2B] border border-emerald-500/40 hover:border-emerald-400 text-white rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none"
        aria-label="Direct WhatsApp Contact"
      >
        <div className="w-7 h-7 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center shadow-md">
          <MessageCircle className="w-4 h-4 fill-zinc-950" />
        </div>
        <span className="text-xs font-semibold text-zinc-200 group-hover:text-emerald-300">
          Chat on WhatsApp
        </span>
      </button>

    </div>
  );
};
