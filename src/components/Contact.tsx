import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  prefilledService?: string;
  prefilledBudget?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService, prefilledBudget }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    websiteOrInstagram: '',
    projectType: 'Redesign Landing Page',
    requirement: '',
    budget: '$300 - $600 (₹25k - ₹50k)',
    timeline: 'Within 2–4 Weeks'
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({
        ...prev,
        projectType: prefilledService,
        requirement: prev.requirement || `Hi Satyajit, I am looking to ${prefilledService.toLowerCase().includes('redesign') ? prefilledService : 'build a ' + prefilledService}.`
      }));
    }
    if (prefilledBudget) {
      setFormData(prev => ({
        ...prev,
        budget: prefilledBudget
      }));
    }
  }, [prefilledService, prefilledBudget]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.businessType.trim()) {
      errs.businessType = 'Please enter or select your business type.';
    }
    if (!formData.requirement.trim()) {
      errs.requirement = 'Please describe your requirement or goals.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*New Project Inquiry via Webnest Studio*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${formData.name || 'Potential Client'}\n` +
      `✉️ *Email:* ${formData.email || 'Not provided'}\n` +
      `🏢 *Business Type:* ${formData.businessType || 'General Business'}\n` +
      `🔗 *Website/Instagram:* ${formData.websiteOrInstagram || 'None provided'}\n` +
      `🎯 *Service:* ${formData.projectType}\n` +
      `💰 *Budget:* ${formData.budget}\n` +
      `⏱️ *Timeline:* ${formData.timeline}\n` +
      `📝 *Requirement:* ${formData.requirement || 'Looking to discuss a new website or landing page redesign.'}`
    );
    return `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#08090D] border-t border-zinc-900 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtext */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Have an Idea? Let's Build It.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Whether you need a business website, landing page, portfolio or a complete digital experience, let’s turn your idea into something people remember.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels & Socials */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Action Buttons: Start Project & WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-zinc-950" />
                <span>WhatsApp Me</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20-%20Webnest%20Studio`}
                className="flex-1 py-3.5 px-5 bg-[#121626] hover:bg-[#1a2035] border border-cyan-500/40 text-cyan-300 font-bold rounded-2xl text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email Direct</span>
              </a>
            </div>

            {/* Contact Details Card */}
            <div className="bg-[#0E111C] border border-zinc-800 rounded-2xl p-6 space-y-5 shadow-xl">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Direct Contact Channels
              </h3>

              {/* Email item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#090C14] border border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Official Email</div>
                    <div className="text-xs sm:text-sm font-mono font-medium text-white">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20-%20Satyajit%20Nayak`}
                    className="p-2 text-cyan-400 hover:text-cyan-300 rounded-lg hover:bg-cyan-950/40 transition-colors"
                    title="Open mail box to send email"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* WhatsApp item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#090C14] border border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">WhatsApp Instant</div>
                    <div className="text-xs sm:text-sm font-medium text-emerald-300">
                      Chat on WhatsApp
                    </div>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-emerald-400 hover:text-emerald-300 rounded-lg hover:bg-emerald-950/50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Location & Availability */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#090C14] border border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Location</div>
                    <div className="text-xs sm:text-sm font-medium text-zinc-200">
                      {PERSONAL_INFO.location} (Remote Globally)
                    </div>
                  </div>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono">● Online</span>
              </div>
            </div>

            {/* Social Links Cards */}
            <div>
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                Social Profiles & Direct Channels
              </div>
              <div className="grid grid-cols-2 gap-3">
                
                {/* Gmail */}
                <a
                  href={PERSONAL_INFO.socials.gmail}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0E111C] border border-zinc-800 text-zinc-300 hover:text-white hover:border-red-500/40 hover:bg-zinc-800/80 transition-all group"
                  title="Gmail Satyajit"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Gmail</div>
                    <div className="text-[10px] text-zinc-400">Direct Inquiries</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0E111C] border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80 transition-all group"
                  title="GitHub Profile"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">GitHub</div>
                    <div className="text-[10px] text-zinc-400">Code Repositories</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={PERSONAL_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0E111C] border border-zinc-800 text-zinc-300 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-zinc-800/80 transition-all group"
                  title="WhatsApp Chat"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">WhatsApp</div>
                    <div className="text-[10px] text-emerald-400">Fast Response</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0E111C] border border-zinc-800 text-zinc-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-zinc-800/80 transition-all group"
                  title="LinkedIn Profile"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">LinkedIn</div>
                    <div className="text-[10px] text-cyan-400">Professional Network</div>
                  </div>
                </a>

              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="p-4 rounded-xl bg-[#090C16] border border-zinc-800 text-xs text-zinc-400 flex items-center gap-3">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Typical response time: Within 2–4 hours during business days.</span>
            </div>

          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0E111C] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. I have received your inquiry for <span className="text-cyan-300 font-semibold">{formData.projectType}</span> and will reply to <span className="text-cyan-300 font-mono">{formData.email}</span> shortly.
                  </p>

                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Also Send Via WhatsApp for Instant Reply</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          businessType: '',
                          websiteOrInstagram: '',
                          projectType: 'Redesign Landing Page',
                          requirement: '',
                          budget: '$300 - $600 (₹25k - ₹50k)',
                          timeline: 'Within 2–4 Weeks'
                        });
                      }}
                      className="px-5 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium text-xs cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="border-b border-zinc-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">Project Inquiry Form</h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Share your requirement below for a fast quote and project consultation.
                    </p>
                  </div>

                  {/* 1. Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#090C16] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 focus:border-red-400' : 'border-zinc-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@business.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#090C16] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-400' : 'border-zinc-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* 2. Business Type & Website/Instagram Link */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Business Type *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Cafe, Gym, Agency, SaaS, Creator, Clinic..."
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-[#090C16] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                          errors.businessType ? 'border-red-500 focus:border-red-400' : 'border-zinc-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.businessType && <p className="text-[11px] text-red-400 mt-1">{errors.businessType}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Website / Instagram Link <span className="text-zinc-500 font-normal normal-case">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. instagram.com/brand or mywebsite.com"
                        value={formData.websiteOrInstagram}
                        onChange={(e) => setFormData({ ...formData, websiteOrInstagram: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090C16] border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* 3. Project Type (Including Redesign Landing Page) */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      Service / Project Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090C16] border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                    >
                      <option value="Redesign Landing Page">Redesign Landing Page (High Conversion & Fast)</option>
                      <option value="Redesign Existing Website">Redesign Existing Website (Modern UI & Speed Upgrade)</option>
                      <option value="New Business Website">New Business Website (Complete Build)</option>
                      <option value="Restaurant / Cafe Website">Restaurant / Cafe Website (Menu + Booking)</option>
                      <option value="Fitness / Gym Website">Fitness / Gym Website (Membership Funnel)</option>
                      <option value="Custom Web App">Custom Web App (React / Next.js)</option>
                      <option value="UI/UX Redesign in Figma">UI/UX Redesign in Figma (Design System)</option>
                    </select>
                  </div>

                  {/* 4. Requirement */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      Project Requirement & Goals *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your requirement, what issues your current page has, target audience, preferred sections, or reference designs..."
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#090C16] border text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors resize-none ${
                        errors.requirement ? 'border-red-500 focus:border-red-400' : 'border-zinc-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.requirement && <p className="text-[11px] text-red-400 mt-1">{errors.requirement}</p>}
                  </div>

                  {/* 5. Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090C16] border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                      >
                        <option value="Under $300 (₹25,000)">Under $300 (₹25,000)</option>
                        <option value="$300 - $600 (₹25k - ₹50k)">$300 - $600 (₹25k - ₹50k)</option>
                        <option value="$600 - $1200 (₹50k - ₹100k)">$600 - $1200 (₹50k - ₹100k)</option>
                        <option value="$1200+ (Custom Scope)">$1200+ (Custom Scope)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090C16] border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                      >
                        <option value="Urgent (1–2 Weeks)">Urgent (1–2 Weeks)</option>
                        <option value="Within 2–4 Weeks">Within 2–4 Weeks</option>
                        <option value="Flexible (1–2 Months)">Flexible (1–2 Months)</option>
                        <option value="Ready to start immediately">Ready to start immediately</option>
                      </select>
                    </div>
                  </div>

                  {/* Action buttons inside form */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-[#121626] border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950/40 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-center text-zinc-500 flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Your details are strictly confidential. Quick response guaranteed.</span>
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
