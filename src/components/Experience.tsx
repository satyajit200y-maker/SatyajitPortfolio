import React from 'react';
import { 
  Briefcase, 
  Building, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Sparkles, 
  CheckCircle2,
  Terminal,
  Award
} from 'lucide-react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#090A0F] border-t border-zinc-900 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/6 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Vibrant Typography */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-950/60 to-purple-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Career Path &amp; Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experience &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-300 bg-clip-text text-transparent">
              Client Proven Work
            </span>
            .
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Hands-on commercial freelance execution, intensive real-world project deliverables, and continuous skill mastery.
          </p>
        </div>

        {/* Minimal Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 space-y-12">
          {EXPERIENCES.map((exp, idx) => {
            const isFirst = idx === 0;
            const dotBorder = isFirst ? 'border-cyan-400 bg-cyan-400 shadow-cyan-400/60' : 'border-purple-400 bg-purple-400 shadow-purple-400/60';
            const badgeBg = isFirst ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30' : 'text-purple-400 bg-purple-950/50 border-purple-500/30';
            const cardBorder = isFirst ? 'hover:border-cyan-400/50' : 'hover:border-purple-400/50';

            return (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                
                {/* Timeline Marker Dot */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${dotBorder} transition-all shadow-md group-hover:scale-125`} />

                {/* Experience Card */}
                <div className={`bg-[#0E111C] border border-zinc-800/90 ${cardBorder} rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}>
                  
                  {/* Header with Role and Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider font-mono px-2.5 py-0.5 rounded-full border ${badgeBg} inline-block mb-2`}>
                        {exp.type}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-zinc-300 flex items-center gap-2 mt-1">
                        <span className="text-cyan-300 font-semibold">{exp.company}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-400 text-xs flex items-center gap-1 font-normal">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121626] border border-zinc-700/60 text-xs font-mono text-zinc-300 shadow-sm">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Key Achievements Checklist */}
                  <div className="space-y-2 mb-6">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Chips */}
                  <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg bg-[#0A0C14] border border-cyan-500/20 text-cyan-300/90 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
