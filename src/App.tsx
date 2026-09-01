/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Workflow } from './components/Workflow';
import { Experience } from './components/Experience';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacySitemapModal } from './components/PrivacySitemapModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [inquiryService, setInquiryService] = useState<string>('');
  const [inquiryBudget, setInquiryBudget] = useState<string>('');
  const [modalType, setModalType] = useState<'privacy' | 'sitemap' | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to update active nav link
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'skills', 'workflow', 'experience', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleSelectServiceForInquiry = (serviceTitle: string, estimatedBudget?: string) => {
    setInquiryService(serviceTitle);
    if (estimatedBudget) setInquiryBudget(estimatedBudget);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200 antialiased relative">
      
      {/* Sticky Navbar */}
      <Navbar 
        onNavigate={scrollToSection} 
        activeSection={activeSection} 
        onOpenResume={() => setResumeOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* About Section */}
        <About
          onContactClick={() => scrollToSection('contact')}
          onProjectsClick={() => scrollToSection('projects')}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Services & Interactive Scope Estimator */}
        <Services
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* Projects & Interactive Case Studies / Sandboxes */}
        <Projects
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Skills Section */}
        <Skills />

        {/* 4-Step Workflow Section */}
        <Workflow />

        {/* Career & Freelance Experience Section */}
        <Experience />

        {/* FAQ Section */}
        <FAQ />

        {/* Final Conversion Contact Form & Social Pages */}
        <Contact
          prefilledService={inquiryService}
          prefilledBudget={inquiryBudget}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPrivacy={() => setModalType('privacy')}
        onOpenSitemap={() => setModalType('sitemap')}
      />

      {/* Privacy / Sitemap Modal */}
      <PrivacySitemapModal
        type={modalType}
        onClose={() => setModalType(null)}
      />

      {/* Interactive Developer Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Floating Instant WhatsApp Lead Widget */}
      <FloatingWhatsApp />

    </div>
  );
}
