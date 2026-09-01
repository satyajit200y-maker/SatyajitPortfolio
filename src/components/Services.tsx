import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Briefcase, 
  Sparkles, 
  Zap, 
  MessageCircle, 
  Check, 
  ArrowRight, 
  Calculator, 
  Clock, 
  Layers,
  Send
} from 'lucide-react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string, estimatedBudget?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Estimator State
  const [estType, setEstType] = useState<'business' | 'restaurant' | 'fitness' | 'landing' | 'custom'>('business');
  const [estPages, setEstPages] = useState<'1' | '3-5' | '6+'>('3-5');
  const [estFeatures, setEstFeatures] = useState<{ [key: string]: boolean }>({
    whatsapp: true,
    seo: true,
    animation: true,
    maps: true
  });

  const toggleFeature = (key: string) => {
    setEstFeatures(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Calculate estimated timeline & approximate budget range
  const calculateEstimate = () => {
    let baseDays = 7;
    let baseCost = 250; // in USD or equivalent INR bracket

    if (estType === 'landing') { baseDays = 4; baseCost = 180; }
    if (estType === 'restaurant') { baseDays = 10; baseCost = 320; }
    if (estType === 'fitness') { baseDays = 9; baseCost = 300; }
    if (estType === 'custom') { baseDays = 14; baseCost = 450; }

    if (estPages === '1') { baseDays -= 2; baseCost -= 40; }
    if (estPages === '6+') { baseDays += 5; baseCost += 120; }

    if (estFeatures.whatsapp) { baseCost += 20; }
    if (estFeatures.seo) { baseCost += 30; }
    if (estFeatures.animation) { baseCost += 40; }
    if (estFeatures.maps) { baseCost += 20; }

    return {
      days: `${Math.max(3, baseDays - 2)} - ${baseDays + 3} Days`,
      priceTier: `$${baseCost} - $${baseCost + 150}`
    };
  };

  const currentEstimate = calculateEstimate();

  const handleApplyEstimate = () => {
    const typeLabel = estType === 'business' ? 'Business Website' :
                     estType === 'restaurant' ? 'Restaurant / Cafe Website' :
                     estType === 'fitness' ? 'Fitness / Gym Website' :
                     estType === 'landing' ? 'Landing Page' : 'Custom Web App';
    onSelectServiceForInquiry(`${typeLabel} (${estPages} pages)`, currentEstimate.priceTier);
  };

  const getServiceColorConfig = (index: number) => {
    const configs = [
      {
        iconColor: 'text-cyan-400',
        iconBg: 'bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/20',
        hoverBorder: 'hover:border-cyan-400/50',
        badgeColor: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30',
        accentText: 'group-hover:text-cyan-300',
        checkColor: 'text-cyan-400',
        glow: 'group-hover:shadow-cyan-950/40'
      },
      {
        iconColor: 'text-purple-400',
        iconBg: 'bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/20',
        hoverBorder: 'hover:border-purple-400/50',
        badgeColor: 'text-purple-400 bg-purple-950/40 border-purple-500/30',
        accentText: 'group-hover:text-purple-300',
        checkColor: 'text-purple-400',
        glow: 'group-hover:shadow-purple-950/40'
      },
      {
        iconColor: 'text-emerald-400',
        iconBg: 'bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/20',
        hoverBorder: 'hover:border-emerald-400/50',
        badgeColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30',
        accentText: 'group-hover:text-emerald-300',
        checkColor: 'text-emerald-400',
        glow: 'group-hover:shadow-emerald-950/40'
      },
      {
        iconColor: 'text-amber-400',
        iconBg: 'bg-amber-500/10 border-amber-500/20 group-hover:bg-amber-500/20',
        hoverBorder: 'hover:border-amber-400/50',
        badgeColor: 'text-amber-400 bg-amber-950/40 border-amber-500/30',
        accentText: 'group-hover:text-amber-300',
        checkColor: 'text-amber-400',
        glow: 'group-hover:shadow-amber-950/40'
      },
      {
        iconColor: 'text-sky-400',
        iconBg: 'bg-sky-500/10 border-sky-500/20 group-hover:bg-sky-500/20',
        hoverBorder: 'hover:border-sky-400/50',
        badgeColor: 'text-sky-400 bg-sky-950/40 border-sky-500/30',
        accentText: 'group-hover:text-sky-300',
        checkColor: 'text-sky-400',
        glow: 'group-hover:shadow-sky-950/40'
      },
      {
        iconColor: 'text-teal-400',
        iconBg: 'bg-teal-500/10 border-teal-500/20 group-hover:bg-teal-500/20',
        hoverBorder: 'hover:border-teal-400/50',
        badgeColor: 'text-teal-400 bg-teal-950/40 border-teal-500/30',
        accentText: 'group-hover:text-teal-300',
        checkColor: 'text-teal-400',
        glow: 'group-hover:shadow-teal-950/40'
      }
    ];
    return configs[index % configs.length];
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return Code2;
      case 'Palette': return Palette;
      case 'Briefcase': return Briefcase;
      case 'Sparkles': return Sparkles;
      case 'Zap': return Zap;
      case 'MessageCircle': return MessageCircle;
      default: return Code2;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#090A0F] border-t border-zinc-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/6 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Vibrant Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-950/60 to-purple-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Services &amp; Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              High-Impact{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-300 bg-clip-text text-transparent">
                Web Deliverables
              </span>
              .
            </h2>
          </div>
          <p className="text-zinc-300 max-w-md text-sm sm:text-base leading-relaxed">
            Tailored digital solutions crafted to establish authority, capture high-intent leads, and drive business revenue.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid with Distinct Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SERVICES.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const style = getServiceColorConfig(index);

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`bg-[#0E111C] border border-zinc-800/90 ${style.hoverBorder} rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl hover:-translate-y-1 ${style.glow}`}
              >
                {/* Number */}
                <div className="absolute top-6 right-6 font-mono text-zinc-700 text-lg font-bold group-hover:text-zinc-500 transition-colors">
                  {service.number}
                </div>

                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${style.iconBg} border ${style.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-all`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-xl font-bold text-white mb-3 ${style.accentText} transition-colors`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className={`w-3.5 h-3.5 ${style.checkColor} shrink-0`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-mono flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{service.typicalTimeline}</span>
                  </span>

                  <button
                    onClick={() => onSelectServiceForInquiry(service.title)}
                    className={`${style.iconColor} font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer`}
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Scope & Estimate Tool Card with Vibrant Atmosphere */}
        <div className="bg-gradient-to-b from-[#101422] to-[#0A0D16] border border-cyan-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden shadow-cyan-950/30">
          
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            {/* Tool Explanation */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-semibold mb-4">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Cost &amp; Scope Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Estimate Your Website Scope &amp; Timeframe
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Configure your desired project parameters to calculate a ballpark timeframe and budget range. You can transfer this directly into your inquiry with 1 click.
              </p>

              {/* Selector 1: Project Type */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  1. Select Website Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'business', label: 'Business Portal' },
                    { id: 'restaurant', label: 'Cafe / Restaurant' },
                    { id: 'fitness', label: 'Gym / Fitness' },
                    { id: 'landing', label: 'Single Landing Page' },
                    { id: 'custom', label: 'Custom Web App' }
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setEstType(t.id as any)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-left border cursor-pointer ${
                        estType === t.id
                          ? 'bg-gradient-to-r from-cyan-500/25 to-purple-500/25 border-cyan-400 text-cyan-200 shadow-sm'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 2: Pages */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  2. Page Scope
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '1', label: '1 Page (Landing)' },
                    { id: '3-5', label: '3 — 5 Pages (Standard)' },
                    { id: '6+', label: '6+ Pages (Multi-Section)' }
                  ].map(p => (
                    <button
                      key={p.id}
                      onClick={() => setEstPages(p.id as any)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-left border cursor-pointer ${
                        estPages === p.id
                          ? 'bg-gradient-to-r from-cyan-500/25 to-purple-500/25 border-cyan-400 text-cyan-200 shadow-sm'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 3: Features */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  3. Key Integrations
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'whatsapp', label: 'WhatsApp One-Tap Flow' },
                    { id: 'seo', label: 'Full SEO & Core Vitals' },
                    { id: 'animation', label: 'Interactive UI Animations' },
                    { id: 'maps', label: 'Google Maps & Reviews' }
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between border cursor-pointer ${
                        estFeatures[f.id]
                          ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 shadow-sm'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <span>{f.label}</span>
                      {estFeatures[f.id] ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <span className="text-[10px] text-zinc-600">+</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Output Result Display */}
            <div className="lg:w-1/2 w-full bg-[#080B14] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mb-2">Estimated Timeline</div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent font-mono mb-4">
                  {currentEstimate.days}
                </div>

                <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mb-2">Estimated Investment Tier</div>
                <div className="text-2xl font-bold text-white font-mono mb-6">
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">{currentEstimate.priceTier}</span> <span className="text-xs text-zinc-400 font-normal font-sans">(Transparent project pricing)</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Includes 100% responsive testing across iOS, Android &amp; Desktop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Complimentary Vercel / Netlify edge hosting setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Direct developer communication via WhatsApp/Email</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  id="estimator-apply-btn"
                  onClick={handleApplyEstimate}
                  className="flex-1 py-3.5 px-4 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-300 hover:opacity-95 text-zinc-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Apply To Inquiry Form</span>
                </button>

                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=Hi%20Satyajit,%20I%20used%20your%20website%20estimator%20for%20a%20${estType}%20project%20(${estPages}%20pages).%20Let's%20discuss!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 bg-emerald-950/70 hover:bg-emerald-900/70 border border-emerald-500/50 text-emerald-300 font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
