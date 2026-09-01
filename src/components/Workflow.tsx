import React, { useState } from 'react';
import { 
  Compass, 
  Palette, 
  Code2, 
  Rocket, 
  Check, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/portfolioData';

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepTheme = (index: number) => {
    const themes = [
      {
        icon: Compass,
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10 border-cyan-500/30',
        activeBorder: 'border-cyan-400 shadow-cyan-950/40 bg-[#0E1524]',
        gradient: 'from-cyan-400 to-sky-300',
        tag: 'Strategy & Scope'
      },
      {
        icon: Palette,
        color: 'text-purple-400',
        bg: 'bg-purple-500/10 border-purple-500/30',
        activeBorder: 'border-purple-400 shadow-purple-950/40 bg-[#140E24]',
        gradient: 'from-purple-400 to-pink-300',
        tag: 'UI/UX & Figma'
      },
      {
        icon: Code2,
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10 border-emerald-500/30',
        activeBorder: 'border-emerald-400 shadow-emerald-950/40 bg-[#0E1F1A]',
        gradient: 'from-emerald-400 to-teal-300',
        tag: 'Clean React Code'
      },
      {
        icon: Rocket,
        color: 'text-amber-400',
        bg: 'bg-amber-500/10 border-amber-500/30',
        activeBorder: 'border-amber-400 shadow-amber-950/40 bg-[#1E170A]',
        gradient: 'from-amber-400 to-orange-300',
        tag: 'Launch & Edge Deploy'
      }
    ];
    return themes[index % themes.length];
  };

  return (
    <section id="workflow" className="py-24 relative bg-[#08090D] border-t border-zinc-900 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/6 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/6 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Vibrant Typography */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-950/60 to-cyan-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>Process &amp; Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Structured{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              4-Step Development Process
            </span>
            .
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            A transparent, collaborative workflow engineered to eliminate surprises, align with your vision, and guarantee on-time delivery.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {WORKFLOW_STEPS.map((step, idx) => {
            const theme = getStepTheme(idx);
            const Icon = theme.icon;
            const isCurrent = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden group shadow-lg ${
                  isCurrent
                    ? `${theme.activeBorder} shadow-2xl`
                    : 'bg-[#0E111C] border-zinc-800/90 hover:border-zinc-700'
                }`}
              >
                {/* Number indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-mono text-2xl font-extrabold tracking-tight ${
                    isCurrent ? theme.color : 'text-zinc-600 group-hover:text-zinc-400'
                  }`}>
                    {step.step}
                  </span>
                  
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isCurrent 
                      ? `${theme.bg} ${theme.color} border` 
                      : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <div className={`text-xs ${theme.color} font-mono font-semibold mb-1`}>
                    {step.tagline}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-zinc-800/80">
                    <div className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">
                      Key Deliverables:
                    </div>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className={`w-3.5 h-3.5 ${theme.color} shrink-0`} />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{step.duration}</span>
                  </span>
                  {isCurrent && (
                    <span className={`${theme.color} font-semibold text-[11px]`}>Active Step</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Guarantee Banner with Multi-Color Accent */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0D111E] via-[#120F24] to-[#0A0D16] border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-cyan-950/20">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Direct Developer Collaboration at Every Step</h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              No account managers or lost-in-translation briefs. You communicate directly with Satyajit via WhatsApp and instant screen-shares.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold shrink-0 shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>100% Milestone Transparency</span>
          </div>
        </div>

      </div>
    </section>
  );
};
