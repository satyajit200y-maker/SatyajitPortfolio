import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Terminal, 
  Copy, 
  Check, 
  Play,
  Mail, 
  Github, 
  Linkedin, 
  MessageCircle, 
  ArrowUpRight, 
  FolderGit2, 
  Zap, 
  Palette, 
  Smartphone, 
  CheckCircle2,
  FileText,
  MapPin,
  Clock,
  ArrowRight,
  UserCheck,
  Send
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick, onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'code' | 'performance'>('profile');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "✓ Satyajit Nayak portfolio runtime initialized",
    "✓ React 19 + TypeScript + Tailwind v4 active",
    "✓ Core Web Vitals: 99/100 (Performance, Accessibility, SEO)",
    "● Status: Available for freelance projects & full-time roles"
  ]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyCode = () => {
    const codeSnippet = `const developer = {\n  name: "${PERSONAL_INFO.name}",\n  role: "${PERSONAL_INFO.role}",\n  location: "${PERSONAL_INFO.location}",\n  status: "Available for Hire",\n  stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"]\n};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunBuild = () => {
    const newLogs = [
      `[${new Date().toLocaleTimeString()}] Running production build for Satyajit's showcase...`,
      `[${new Date().toLocaleTimeString()}] Assets minified, sub-second LCP verified (0.42s)`,
      `[${new Date().toLocaleTimeString()}] Ready for high-converting client deployments 🚀`
    ];
    setTerminalOutput(prev => [...prev.slice(-2), ...newLogs]);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-32 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic ambient multi-color glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-cyan-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[280px] bg-purple-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Personal Developer Intro, Headshot, Badges & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Developer Greeting Pill with Pulse */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-950/80 via-purple-950/50 to-zinc-900 border border-cyan-500/40 shadow-lg shadow-cyan-950/30 text-xs font-medium mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/80" />
              <span className="text-zinc-200">
                Hi, I'm <strong className="text-cyan-300 font-bold">{PERSONAL_INFO.name}</strong> 👋
              </span>
              <span className="text-zinc-500 hidden sm:inline">•</span>
              <span className="text-purple-300 font-medium hidden sm:inline">{PERSONAL_INFO.location}</span>
            </div>

            {/* High Impact Personal Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              I design &amp; build{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                High-Converting
              </span>{' '}
              &amp;{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                Modern Websites
              </span>
              .
            </h1>

            {/* Personal Bio Description */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl mb-6">
              I am a <span className="text-cyan-300 font-semibold">Web Developer &amp; UI/UX Designer</span> specializing in crafting ultra-fast, responsive web experiences with modern <span className="text-purple-300 font-medium">React, Next.js, Tailwind CSS</span>, and conversion-first <span className="text-emerald-300 font-medium">WhatsApp funnels</span>.
            </p>

            {/* Quick Developer Stats / Value Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-2xl mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0E1220]/90 border border-cyan-500/30 text-xs shadow-md">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="font-extrabold text-white">&lt;0.5s Speed</div>
                  <div className="text-[10px] text-cyan-300/80">99+ Web Vitals</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#160E24]/90 border border-purple-500/30 text-xs shadow-md">
                <Palette className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <div className="font-extrabold text-white">UI/UX Design</div>
                  <div className="text-[10px] text-purple-300/80">Figma Craft</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1E140C]/90 border border-amber-500/30 text-xs shadow-md">
                <Smartphone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="font-extrabold text-white">Mobile-First</div>
                  <div className="text-[10px] text-amber-300/80">100% Fluid</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B1A14]/90 border border-emerald-500/30 text-xs shadow-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-extrabold text-white">Modern Stack</div>
                  <div className="text-[10px] text-emerald-300/80">TypeScript/React</div>
                </div>
              </div>
            </div>

            {/* Core Portfolio Actions */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                id="hero-cta-recent-projects-btn"
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 text-zinc-950 font-extrabold text-sm hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-cyan-500/25"
              >
                <FolderGit2 className="w-4 h-4 text-zinc-950" />
                <span>Explore Featured Work</span>
              </button>

              <button
                id="hero-cta-contact-btn"
                onClick={onContactClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#101424] hover:bg-[#181F38] border border-purple-500/40 text-purple-200 font-bold text-sm hover:border-purple-400 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-purple-950/40"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Let's Build Something</span>
              </button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 hover:border-cyan-400/50 text-zinc-200 font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View Resume</span>
                </button>
              )}
            </div>

            {/* Direct Channels & Quick Copy Strip */}
            <div className="pt-6 border-t border-zinc-800/80 w-full max-w-xl">
              <div className="text-xs text-zinc-400 font-medium mb-3 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Connect Directly with Satyajit:</span>
                </span>
                {copiedEmail && (
                  <span className="text-emerald-400 font-semibold text-[11px] animate-in fade-in">
                    Email copied to clipboard!
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                
                {/* WhatsApp Direct */}
                <a
                  href={PERSONAL_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/50 text-emerald-300 text-xs font-bold transition-all shadow-sm shadow-emerald-950/40"
                  title="Chat directly on WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </a>

                {/* Send Email / Mailbox Link */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20-%20Satyajit%20Nayak&body=Hi%20Satyajit,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/80 hover:bg-red-950/40 border border-zinc-800 hover:border-red-500/50 text-zinc-300 hover:text-red-200 text-xs font-medium transition-all group"
                  title="Open mail box to send email"
                >
                  <Mail className="w-3.5 h-3.5 text-red-400 group-hover:scale-110 transition-transform" />
                  <span>{PERSONAL_INFO.email}</span>
                  <ArrowUpRight className="w-3 h-3 text-red-400/80 group-hover:text-red-300 transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-purple-500/40 text-zinc-300 hover:text-white text-xs font-medium transition-all"
                  title="View GitHub profile"
                >
                  <Github className="w-3.5 h-3.5 text-purple-400" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/80 hover:bg-sky-950/40 border border-zinc-800 hover:border-cyan-500/40 text-zinc-300 hover:text-cyan-300 text-xs font-medium transition-all"
                  title="View LinkedIn profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>

              </div>
            </div>

          </div>

          {/* Right Column: Personal Developer Profile & Interactive Sandbox */}
          <div className="lg:col-span-5 relative">
            <div 
              id="hero-developer-card"
              className="relative bg-[#0C0E17] border border-cyan-500/30 hover:border-cyan-400/60 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/40 transition-all duration-300"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#090A10] border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    &lt; Satyajit.portfolio /&gt;
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 text-zinc-400 hover:text-zinc-200 rounded-md hover:bg-zinc-800 transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    title="Copy snippet"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handleRunBuild}
                    className="px-2.5 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 hover:text-white border border-cyan-500/40 rounded-lg text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                  >
                    <Play className="w-3 h-3 fill-cyan-300" />
                    <span>Run Build</span>
                  </button>
                </div>
              </div>

              {/* IDE Tabs with Personal Developer Options */}
              <div className="flex items-center px-2 bg-[#0A0C13] border-b border-zinc-800/80 text-xs font-mono overflow-x-auto">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-3.5 py-2.5 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeTab === 'profile'
                      ? 'border-cyan-400 text-cyan-300 bg-[#0E111C]'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  profile.view
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3.5 py-2.5 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeTab === 'code'
                      ? 'border-purple-400 text-purple-300 bg-[#0E111C]'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  developer.ts
                </button>
                <button
                  onClick={() => setActiveTab('performance')}
                  className={`px-3.5 py-2.5 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeTab === 'performance'
                      ? 'border-emerald-400 text-emerald-300 bg-[#0E111C]'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  vitals.json
                </button>
              </div>

              {/* Content Panel */}
              <div className="p-5 bg-[#090A10] min-h-[290px]">
                
                {/* TAB 1: Profile & Bio Card */}
                {activeTab === 'profile' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center gap-4">
                      {/* Avatar / Portrait Monogram */}
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-cyan-500/20">
                          <div className="w-full h-full rounded-[14px] bg-[#0E1220] flex flex-col items-center justify-center text-cyan-300 font-extrabold text-xl font-mono">
                            SN
                          </div>
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#090A10] shadow-sm animate-pulse" />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          <span>{PERSONAL_INFO.name}</span>
                          <span className="px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                            PRO
                          </span>
                        </h3>
                        <p className="text-xs text-purple-300 font-medium">{PERSONAL_INFO.role}</p>
                        <p className="text-[11px] text-zinc-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-zinc-500" />
                          <span>{PERSONAL_INFO.location}</span>
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed bg-[#0E111C] p-3 rounded-xl border border-zinc-800">
                      "I love turning complex ideas into clean, blazing-fast interfaces with obsessive attention to typography, margins, and user conversion."
                    </p>

                    {/* Tech Badges */}
                    <div>
                      <div className="text-[11px] text-zinc-400 font-mono mb-2 flex items-center justify-between">
                        <span>Core Tech Arsenal:</span>
                        <span className="text-emerald-400 font-semibold">100% Client Ready</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Vercel", "WhatsApp API"].map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-lg bg-zinc-900 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: Developer Code Snippet */}
                {activeTab === 'code' && (
                  <div className="font-mono text-[12.5px] leading-relaxed text-zinc-300 space-y-1 animate-in fade-in duration-200">
                    <p className="text-zinc-500">// Satyajit Nayak — Engineer Config</p>
                    <p><span className="text-purple-400 font-semibold">const</span> <span className="text-cyan-300 font-bold">satyajit</span> = &#123;</p>
                    <p className="pl-4"><span className="text-zinc-400">developer:</span> <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,</p>
                    <p className="pl-4"><span className="text-zinc-400">craft:</span> <span className="text-amber-300">"Web Dev &amp; UI/UX Design"</span>,</p>
                    <p className="pl-4"><span className="text-zinc-400">status:</span> <span className="text-emerald-400 font-semibold">"Ready for Work"</span>,</p>
                    <p className="pl-4"><span className="text-zinc-400">buildPhilosophy:</span> [</p>
                    <p className="pl-8 text-cyan-300 font-medium">"Sub-0.5s Load Times", "Pixel-Perfect UI", "High ROI"</p>
                    <p className="pl-4">],</p>
                    <p className="pl-4"><span className="text-zinc-400">chatTrigger:</span> () =&gt; <span className="text-pink-300">"Direct WhatsApp / Email"</span></p>
                    <p>&#125;;</p>
                  </div>
                )}

                {/* TAB 3: Web Vitals & Metrics */}
                {activeTab === 'performance' && (
                  <div className="space-y-3 font-mono text-xs animate-in fade-in duration-200">
                    <div className="text-[11px] text-zinc-400 uppercase tracking-wider mb-2">
                      Verified Production Benchmarks
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-emerald-500/30">
                        <div className="text-[10px] text-zinc-400">Lighthouse Score</div>
                        <div className="text-xl font-extrabold text-emerald-400">99 / 100</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-cyan-500/30">
                        <div className="text-[10px] text-zinc-400">First Contentful Paint</div>
                        <div className="text-xl font-extrabold text-cyan-300">0.42s</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-purple-500/30">
                        <div className="text-[10px] text-zinc-400">Mobile Responsiveness</div>
                        <div className="text-xl font-extrabold text-purple-300">100%</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-amber-500/30">
                        <div className="text-[10px] text-zinc-400">Cumulative Layout Shift</div>
                        <div className="text-xl font-extrabold text-amber-300">0.00</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Every client site is tested on iOS Safari &amp; Android Chrome.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Live Terminal Output Console */}
              <div className="px-4 py-3 bg-[#06070B] border-t border-zinc-800 font-mono text-[11px] text-zinc-400">
                <div className="flex items-center justify-between text-zinc-500 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span className="text-zinc-300 font-semibold">Live Console</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE
                  </span>
                </div>
                <div className="space-y-1">
                  {terminalOutput.map((log, idx) => (
                    <div key={idx} className="text-zinc-300 truncate font-mono">
                      {log}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
