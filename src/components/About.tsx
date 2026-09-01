import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  Smartphone, 
  TrendingUp, 
  MapPin, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Palette,
  Heart,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
  onOpenResume?: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick, onProjectsClick, onOpenResume }) => {
  const [indiaTime, setIndiaTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const now = new Date().toLocaleTimeString('en-US', options);
      setIndiaTime(now);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const corePillars = [
    {
      icon: Palette,
      title: "UI/UX & Figma Craft",
      desc: "Pixel-perfect visual harmony with tailored typography, custom design systems, and thoughtful micro-interactions.",
      accentClass: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400 group-hover:text-purple-300",
      iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
      tag: "Design Driven"
    },
    {
      icon: Zap,
      title: "Sub-Second Performance",
      desc: "Zero bloated scripts. Lean asset pipelines and semantic React deliver 99+ Lighthouse scores and top Google rankings.",
      accentClass: "from-cyan-500/20 to-sky-500/10 border-cyan-500/30 text-cyan-400 group-hover:text-cyan-300",
      iconBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
      tag: "Speed & SEO"
    },
    {
      icon: TrendingUp,
      title: "Conversion Architecture",
      desc: "Clear visual hierarchy, strategic CTA placement, and integrated WhatsApp funnels that turn visitors into paying clients.",
      accentClass: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400 group-hover:text-emerald-300",
      iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
      tag: "Business Impact"
    },
    {
      icon: ShieldCheck,
      title: "Clean React & Next.js",
      desc: "Maintainable TypeScript components, scalable Tailwind styling, and rock-solid responsive layouts across all devices.",
      accentClass: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400 group-hover:text-amber-300",
      iconBg: "bg-amber-500/10 border-amber-500/20 text-amber-400",
      tag: "Engineering"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#08090D] border-t border-zinc-900 overflow-hidden">
      {/* Background colorful radial glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/8 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Vibrant Typography */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-950/60 to-cyan-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Developer Story &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Bridging{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Visual Design
            </span>{' '}
            &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              High-Speed Code
            </span>
            .
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            I don't just write templates — I engineer strategic digital experiences that combine <span className="text-purple-300 font-semibold">UI/UX craftsmanship</span>, <span className="text-cyan-300 font-semibold">sub-second performance</span>, and <span className="text-emerald-300 font-semibold">direct WhatsApp conversion funnels</span>.
          </p>
        </div>

        {/* Grid: Bio Story + Live Status Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p className="font-normal text-zinc-200">
              I am <strong className="text-cyan-300 font-semibold">{PERSONAL_INFO.name}</strong>, a freelance <strong className="text-white">Web Developer &amp; UI/UX Designer</strong> based in Odisha, India. I specialize in building bespoke websites and web applications that combine aesthetic visual polish with high-converting user funnels.
            </p>
            
            <p className="text-zinc-400">
              My engineering approach is grounded in <strong className="text-purple-300">clarity and purpose</strong>: clean TypeScript architecture, purposeful Tailwind styling, zero bloat, and sub-second page loads that keep visitors engaged and Google algorithms happy.
            </p>

            <p className="text-zinc-400">
              Whether you are an independent brand launching a new digital identity, a gym or restaurant needing local client acquisition, or a startup building a custom web portal, I deliver end-to-end web products ready for immediate scale.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                id="about-cta-build-btn"
                onClick={onContactClick}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 hover:opacity-95 text-zinc-950 font-bold text-sm transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="about-cta-projects-btn"
                onClick={onProjectsClick}
                className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-purple-500/30 text-purple-200 font-medium text-sm transition-all flex items-center gap-2 cursor-pointer shadow-sm shadow-purple-950/30"
              >
                <span>Explore Works</span>
              </button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="px-5 py-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white font-medium text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Resume</span>
                </button>
              )}
            </div>
          </div>

          {/* Profile & Live Status Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0E111C] border border-cyan-500/30 rounded-2xl p-6 sm:p-7 shadow-xl shadow-cyan-950/20 relative overflow-hidden">
              
              {/* Top Bar with Status */}
              <div className="flex items-center justify-between pb-5 border-b border-zinc-800/80 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-0.5 shadow-md">
                    <div className="w-full h-full rounded-[10px] bg-[#0E111C] flex items-center justify-center text-cyan-300 font-bold text-lg font-mono">
                      SN
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-cyan-400 font-medium">{PERSONAL_INFO.brand}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Available for Hire</span>
                  </div>
                </div>
              </div>

              {/* Location & Timezone live meter */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-[#090C14] border border-cyan-500/20">
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Location</span>
                  </div>
                  <div className="font-semibold text-zinc-100 text-sm">{PERSONAL_INFO.location}</div>
                  <div className="text-[11px] text-cyan-300/80">Remote &amp; Global Clients</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090C14] border border-emerald-500/20">
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Local Time (IST)</span>
                  </div>
                  <div className="font-semibold text-emerald-300 text-sm font-mono">{indiaTime || 'IST (UTC+5:30)'}</div>
                  <div className="text-[11px] text-emerald-400/80">Fast Response Rate</div>
                </div>
              </div>

              {/* Verified skills summary checklist */}
              <div className="space-y-2.5 text-xs text-zinc-300 mb-6">
                <div className="flex items-center gap-2.5 text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Custom React 19 &amp; Next.js High-Performance Websites</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Figma Wireframing, UI Design Systems &amp; Modern Themes</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant WhatsApp Direct Chat &amp; Lead Generation Funnels</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>SEO Schema Markup, Core Web Vitals &amp; Sub-Second Loads</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span>Direct Inquiries:</span>
                <span className="font-mono text-cyan-300 font-semibold">{PERSONAL_INFO.email}</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Statistics Cards with Colorful Gradients */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {PERSONAL_INFO.stats.map((stat, idx) => {
            const gradientColors = [
              "from-cyan-400 to-sky-300",
              "from-purple-400 to-pink-300",
              "from-emerald-400 to-teal-300",
              "from-amber-400 to-orange-300"
            ][idx % 4];

            const borderColors = [
              "hover:border-cyan-500/50",
              "hover:border-purple-500/50",
              "hover:border-emerald-500/50",
              "hover:border-amber-500/50"
            ][idx % 4];

            return (
              <div 
                key={idx}
                className={`p-6 rounded-2xl bg-[#0D101A] border border-zinc-800/90 ${borderColors} transition-all duration-300 group shadow-lg`}
              >
                <div className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono tracking-tight mb-2 bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm font-semibold text-zinc-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-400">
                  {idx === 0 && "Completed client & studio deliverables"}
                  {idx === 1 && "Live commercial business portals"}
                  {idx === 2 && "Tested across iOS, Android & Desktop"}
                  {idx === 3 && "Continuous iteration & support"}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Engineering Pillars with Vibrant Distinct Themes */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">My Core Development Principles</h3>
            <p className="text-sm text-zinc-400">Every project is built on these four foundational pillars of craftsmanship.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl bg-[#0E121E]/80 border ${pillar.accentClass.split(' ')[2]} transition-all duration-300 group hover:-translate-y-1 shadow-lg`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${pillar.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

