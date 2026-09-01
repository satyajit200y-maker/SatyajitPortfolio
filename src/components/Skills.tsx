import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Sparkles, 
  Check, 
  ExternalLink,
  Layers,
  Cpu,
  Palette
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getCategoryTheme = (key: string) => {
    switch (key) {
      case 'frontend': 
        return {
          icon: Code,
          color: 'text-cyan-400',
          bg: 'bg-cyan-500/10 border-cyan-500/30',
          border: 'hover:border-cyan-400/50',
          gradient: 'from-cyan-400 to-sky-300'
        };
      case 'backend': 
        return {
          icon: Server,
          color: 'text-emerald-400',
          bg: 'bg-emerald-500/10 border-emerald-500/30',
          border: 'hover:border-emerald-400/50',
          gradient: 'from-emerald-400 to-teal-300'
        };
      case 'database': 
        return {
          icon: Database,
          color: 'text-amber-400',
          bg: 'bg-amber-500/10 border-amber-500/30',
          border: 'hover:border-amber-400/50',
          gradient: 'from-amber-400 to-orange-300'
        };
      case 'tools': 
        return {
          icon: Palette,
          color: 'text-purple-400',
          bg: 'bg-purple-500/10 border-purple-500/30',
          border: 'hover:border-purple-400/50',
          gradient: 'from-purple-400 to-pink-300'
        };
      default: 
        return {
          icon: Layers,
          color: 'text-cyan-400',
          bg: 'bg-cyan-500/10 border-cyan-500/30',
          border: 'hover:border-cyan-400/50',
          gradient: 'from-cyan-400 to-sky-300'
        };
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#090A0F] border-t border-zinc-900 overflow-hidden">
      
      {/* Dynamic ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/6 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Colorful Typography */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-950/60 to-purple-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tech Stack &amp; Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Mastered{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-300 bg-clip-text text-transparent">
              Skills &amp; Modern Frameworks
            </span>
            .
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            A production-proven technology stack focused on <span className="text-cyan-300 font-semibold">sub-second speed</span>, <span className="text-purple-300 font-semibold">Figma design systems</span>, <span className="text-emerald-300 font-semibold">type safety</span>, and <span className="text-amber-300 font-semibold">clean architecture</span>.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-400/50 shadow-md shadow-cyan-950/30'
                : 'bg-[#10131E] text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            All Technologies ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const theme = getCategoryTheme(cat.categoryKey);
            const Icon = theme.icon;
            const isCatActive = activeCategory === cat.categoryKey;
            return (
              <button
                key={cat.categoryKey}
                onClick={() => setActiveCategory(cat.categoryKey as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  isCatActive
                    ? `${theme.bg} ${theme.color} border shadow-md`
                    : 'bg-[#10131E] text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.filter(c => activeCategory === 'all' || activeCategory === c.categoryKey).map((category) => {
            const theme = getCategoryTheme(category.categoryKey);
            const CategoryIcon = theme.icon;

            return (
              <div 
                key={category.categoryKey}
                className={`bg-[#0E111C] border border-zinc-800/90 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group ${theme.border} transition-all duration-300`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 pb-4 border-b border-zinc-800/80 mb-5">
                    <div className={`w-9 h-9 rounded-xl ${theme.bg} ${theme.color} flex items-center justify-center border group-hover:scale-105 transition-transform`}>
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {category.title}
                      </h3>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        {category.skills.length} core tools
                      </span>
                    </div>
                  </div>

                  {/* Skills Badges List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => {
                      const isHovered = hoveredSkill === skill.name;

                      return (
                        <div
                          key={idx}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`p-3 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-default ${
                            skill.highlight
                              ? 'bg-[#121626] border-cyan-500/30 hover:border-cyan-400/60 shadow-sm'
                              : 'bg-[#0A0C14] border-zinc-800/90 hover:border-zinc-700'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div 
                              className="w-2.5 h-2.5 rounded-full shadow-sm" 
                              style={{ 
                                backgroundColor: skill.color || '#38bdf8',
                                boxShadow: `0 0 8px ${skill.color || '#38bdf8'}80`
                              }}
                            />
                            <div>
                              <div className="text-xs font-bold text-zinc-100 flex items-center gap-1.5">
                                <span>{skill.name}</span>
                                {skill.highlight && (
                                  <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 font-mono border border-cyan-500/30">
                                    CORE
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-zinc-400">
                                {skill.experience}
                              </div>
                            </div>
                          </div>

                          <span className="text-[11px] font-mono font-semibold" style={{ color: skill.color || '#38bdf8' }}>
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-500 flex items-center justify-between font-mono">
                  <span>Production Ready</span>
                  <span className="text-emerald-400 font-semibold">● 100% Tested</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Fast Tech Highlights Bar with Multi-Color Accents */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0B0E18] via-[#101222] to-[#0B0E18] border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-300 shadow-xl shadow-cyan-950/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold">Continuous Modern Architecture: </span>
              <span className="text-zinc-400">Built with React 19, Next.js App Router, TypeScript, and responsive Tailwind CSS.</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-zinc-300 font-mono text-[11px] shrink-0">
            <span className="text-cyan-300 font-semibold">Clean Code</span>
            <span className="text-zinc-600">•</span>
            <span className="text-purple-300 font-semibold">Figma Precision</span>
            <span className="text-zinc-600">•</span>
            <span className="text-emerald-300 font-semibold">Vercel Edge</span>
          </div>
        </div>

      </div>
    </section>
  );
};

