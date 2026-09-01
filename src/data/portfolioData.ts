import { Project, Service, SkillCategory, WorkflowStep, ExperienceItem, FAQItem } from '../types';

export const PERSONAL_INFO = {
  name: "Satyajit Nayak",
  brand: "Satyajit Nayak",
  role: "Web Developer & UI/UX Designer",
  subtitle: "Frontend Engineer & Interface Craftsperson",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  location: "Odisha, India",
  timezone: "IST (UTC+5:30)",
  availability: "Available for freelance projects & full-time roles",
  email: "satyajit200y@gmail.com",
  phoneDisplay: "+91 8926120052",
  whatsappNumber: "918926120052",
  whatsappDefaultMsg: "Hi Satyajit! I came across your portfolio and would love to discuss a web project.",
  tagline: "Crafting fast, minimal, and high-converting web experiences.",
  heroHeading: "Building Fast, Minimal & Modern Web Experiences.",
  heroSubtext: "Hi, I'm Satyajit Nayak — a Web Developer and UI/UX Designer based in India. I engineer high-performance, aesthetically refined websites that turn visitors into clients.",
  bio: "I combine modern frontend engineering (React, Next.js, TypeScript), UI/UX design systems in Figma, and sub-second performance tuning to build high-impact web products for ambitious businesses, startups, and creators worldwide.",
  stats: [
    { label: "Projects Shipped", value: "12+", suffix: "" },
    { label: "Commercial Websites", value: "6+", suffix: "" },
    { label: "Responsive Score", value: "100", suffix: "%" },
    { label: "Lighthouse Speed", value: "99+", suffix: "" }
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Biju Patnaik University of Technology",
    period: "2020 - 2024",
    location: "Odisha, India"
  },
  socials: {
    gmail: "mailto:satyajit200y@gmail.com",
    github: "https://github.com",
    whatsapp: "https://wa.me/918926120052?text=Hi%20Satyajit,%20I'm%20interested%20in%20discussing%20a%20website%20project.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "jaguar-gym",
    number: "01",
    name: "Jaguar Gym",
    category: "Business Website",
    tag: "Fitness",
    client: "Jaguar Fitness Club",
    year: "2025",
    shortDescription: "Modern fitness website designed to showcase gym facilities, membership plans, trainer profiles, and quick WhatsApp lead generation.",
    technologies: ["React", "Tailwind CSS", "Lucide Icons", "Vite", "Responsive Design"],
    features: [
      "Dynamic Membership Tier Calculator & Plan Comparison",
      "Interactive Facility Tour & Equipment Gallery",
      "Instant WhatsApp Trial Class Booking Integration",
      "100/100 Lighthouse Performance & Mobile Optimization"
    ],
    metrics: [
      { label: "Mobile Conversions", value: "+145%" },
      { label: "Load Speed", value: "0.65s" },
      { label: "Lighthouse Score", value: "99/100" }
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    mockupType: "dual",
    caseStudy: {
      overview: "Jaguar Gym needed a high-impact digital presence to stand out against local fitness chains and convert mobile traffic into in-person trial gym memberships.",
      challenge: "The previous website was outdated, slow on mobile connections, and lacked direct customer contact triggers, causing high bounce rates.",
      solution: "Engineered a lightning-fast responsive web app with crisp typography, transparent membership pricing cards, trainer spotlights, and one-tap WhatsApp trial booking.",
      keyDeliverables: [
        "Complete UI/UX wireframing and design system in dark athletic aesthetic",
        "Single-page responsive architecture with sub-second page loads",
        "Direct WhatsApp and call integration for immediate membership queries",
        "Optimized asset pipeline reducing total payload by 70%"
      ],
      technicalOutcome: "Sub-second 0.65s load time achieved with 99/100 Core Web Vitals score."
    }
  },
  {
    id: "8-zero-cafe",
    number: "02",
    name: "8 Zero Cafe & Bakery",
    category: "Restaurant/Cafe Website",
    tag: "Restaurant & Cafe",
    client: "8 Zero Artisanal Bakery & Cafe",
    year: "2025",
    shortDescription: "A modern cafe website focused on warm visual branding, interactive menu presentation, and direct table reservation inquiries.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Google Maps"],
    features: [
      "Categorized Interactive Digital Food & Beverage Menu with Dietary Badges",
      "One-Click WhatsApp Table Reservation & Party Booking",
      "Interactive Google Maps Location & Live Operating Hours Indicator",
      "High-Resolution Pastry & Beverage Showcase"
    ],
    metrics: [
      { label: "Inquiry Growth", value: "+180%" },
      { label: "Menu Views / Day", value: "850+" },
      { label: "Average Session", value: "2m 40s" }
    ],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
    mockupType: "browser",
    caseStudy: {
      overview: "8 Zero Cafe wanted an artisanal, warm digital storefront that reflected their cafe ambience and made it effortless for visitors to browse bakery items and reserve tables.",
      challenge: "Customers frequently called to ask about daily bakery specials and open hours because their social bio link was fragmented.",
      solution: "Created an elegant, responsive web portal highlighting signature pastries, brewed beverages, chef stories, dynamic open/closed status, and direct WhatsApp ordering.",
      keyDeliverables: [
        "Cohesive artisanal visual branding with refined photography accents",
        "Filterable digital menu with high-resolution imagery and allergen tags",
        "Seamless WhatsApp message pre-fill for catering and cake orders",
        "Local SEO schema markup for cafe discovery in Google Maps"
      ],
      technicalOutcome: "Zero layout shift (CLS 0.0) with instant mobile menu browsing."
    }
  },
  {
    id: "swosti-restaurant",
    number: "03",
    name: "Swosti Restaurant",
    category: "Restaurant Website",
    tag: "Restaurant & Cafe",
    client: "Swosti Fine Dining & Banquets",
    year: "2024",
    shortDescription: "Responsive fine dining restaurant website with an elegant food-focused interface, chef special curation, and banquet booking inquiry system.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Formik", "EmailJS"],
    features: [
      "Luxury Minimalist Fine Dining Presentation & Chef's Signature Showcase",
      "Banquet & Private Dining Hall Event Booking Inquiry Form",
      "Multi-Cuisine Filterable Menu with Price Guide & Chef Recommendations",
      "Smooth Navigation & Mobile-Optimized Table Inquiries"
    ],
    metrics: [
      { label: "Event Inquiries", value: "+95%" },
      { label: "Page Load Time", value: "0.8s" },
      { label: "Mobile Score", value: "98/100" }
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    mockupType: "browser",
    caseStudy: {
      overview: "Swosti Fine Dining required a sophisticated digital presence matching their hospitality reputation and attracting corporate banquet reservations.",
      challenge: "The brand lacked a modern online showcase for banquet halls and signature dishes, resulting in missed corporate bookings.",
      solution: "Crafted a luxury dark-themed web application featuring high-res culinary galleries, virtual banquet tour request forms, and detailed menu showcases.",
      keyDeliverables: [
        "High-end minimalist aesthetic tailored for hospitality",
        "Dynamic banquet hall capacity and inquiry calculation flow",
        "Optimized mobile responsiveness for diners browsing on iOS/Android",
        "Google Business profile and Maps integration"
      ],
      technicalOutcome: "Engineered with modular React architecture achieving 98/100 on Google PageSpeed."
    }
  },
  {
    id: "rd-fitness",
    number: "04",
    name: "RD Fitness",
    category: "Fitness Website",
    tag: "Fitness",
    client: "RD Strength & Conditioning",
    year: "2024",
    shortDescription: "Modern gym landing page designed to increase local customer engagement, personal training inquiries, and schedule free trial passes.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Vercel"],
    features: [
      "High-Conversion Lead Capture Form for Free 3-Day Workout Passes",
      "Certified Personal Trainer Bios with Specialty Tags & Availability",
      "Class Schedule & Daily Group Workout Calendar",
      "Clean Athletic Typography & High Contrast UI"
    ],
    metrics: [
      { label: "Pass Signups", value: "220+/mo" },
      { label: "Conversion Rate", value: "14.2%" },
      { label: "Mobile Speed", value: "0.6s" }
    ],
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop",
    mockupType: "browser",
    caseStudy: {
      overview: "RD Fitness needed a focused, high-converting landing page to launch their personal training program and capture local gym seekers.",
      challenge: "Generic ad campaigns were sending visitors to social media pages with low conversion and no structured trial pass distribution.",
      solution: "Built a conversion-first landing page with clear value propositions, interactive class schedules, and direct WhatsApp lead collection.",
      keyDeliverables: [
        "Conversion-optimized single page layout with strategic CTA placement",
        "Interactive schedule table for crossfit, cardio, and strength sessions",
        "Instant automated WhatsApp redirect with lead parameters",
        "Ultra-lightweight React deployment on Vercel"
      ],
      technicalOutcome: "14.2% conversion rate on mobile visitors with instant WhatsApp handoff."
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    shortDesc: "Modern, responsive and performance-focused websites built with clean code and modern frameworks.",
    fullDesc: "I build blazing-fast, custom websites using React, Next.js, and modern CSS architecture. Every line of code is written with clean standards, cross-browser compatibility, and modular scalability.",
    iconName: "Code2",
    deliverables: ["Custom React/Next.js Code", "100% Responsive Architecture", "Clean & Scalable Codebase", "Zero-Bloat Performance"],
    typicalTimeline: "1 - 3 Weeks",
    popularFor: "Startups, Businesses & Modern Brands"
  },
  {
    id: "ui-ux-design",
    number: "02",
    title: "UI/UX Design",
    shortDesc: "Clean interfaces designed around usability, typography, visual hierarchy, and customer conversion.",
    fullDesc: "Great design is more than aesthetics—it guides user decisions. I craft user interfaces in Figma with purposeful typography, balanced negative space, and intuitive navigation that turns visitors into paying customers.",
    iconName: "Palette",
    deliverables: ["Interactive Figma Prototypes", "Design Systems & Style Guides", "Wireframes & User Flows", "Mobile-First UX Layouts"],
    typicalTimeline: "1 - 2 Weeks",
    popularFor: "Web Apps, SaaS & Rebranding"
  },
  {
    id: "business-websites",
    number: "03",
    title: "Business Websites",
    shortDesc: "Professional websites for cafes, restaurants, gyms, startups, local businesses, and creators.",
    fullDesc: "Custom-tailored business websites that establish credibility, showcase your services, display pricing, and capture incoming leads automatically via WhatsApp and customized forms.",
    iconName: "Briefcase",
    deliverables: ["Service & Pricing Showcases", "Google Maps & Local SEO", "Lead Capture Mechanisms", "Mobile-First Ordering Flows"],
    typicalTimeline: "1 - 2 Weeks",
    popularFor: "Gyms, Cafes, Salons, Clinics, Agencies"
  },
  {
    id: "website-redesign",
    number: "04",
    title: "Website Redesign",
    shortDesc: "Transform outdated websites into modern, high-converting digital experiences.",
    fullDesc: "Give your existing website a modern makeover. I audit existing UX bottlenecks, modernize typography and branding, accelerate load times, and rebuild the site with modern tech stacks.",
    iconName: "Sparkles",
    deliverables: ["Full UX/UI Overhaul", "Speed & Performance Optimization", "Mobile Responsiveness Fixes", "Content & Asset Restructuring"],
    typicalTimeline: "1 - 2 Weeks",
    popularFor: "Outdated Business Portals & Legacy Sites"
  },
  {
    id: "performance-seo",
    number: "05",
    title: "Performance & SEO",
    shortDesc: "Fast loading, mobile optimized and search-engine-friendly websites that rank on Google.",
    fullDesc: "Speed is a feature and a ranking factor. I optimize Core Web Vitals, implement semantic HTML5, structure JSON-LD schema markup, and compress media to achieve 95+ Lighthouse performance scores.",
    iconName: "Zap",
    deliverables: ["95+ Google Lighthouse Scores", "Semantic SEO & Open Graph Tags", "Core Web Vitals Optimization", "Image & Asset Compression"],
    typicalTimeline: "3 - 7 Days",
    popularFor: "Local Search Ranking & Faster Load Times"
  },
  {
    id: "contact-integration",
    number: "06",
    title: "WhatsApp & Contact Integration",
    shortDesc: "Make it easy for customers to contact businesses directly with one-tap messaging.",
    fullDesc: "Frictionless communication channels including automated WhatsApp pre-filled chat triggers, direct calling buttons, interactive contact forms, and instant email alerts for new inquiries.",
    iconName: "MessageCircle",
    deliverables: ["One-Tap WhatsApp Triggers", "Direct Call-to-Action CTAs", "Custom Inquiry Form Validation", "Instant Email Notification Setup"],
    typicalTimeline: "2 - 4 Days",
    popularFor: "Local Businesses & Service Providers"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    categoryKey: "frontend",
    skills: [
      { name: "React 19", level: "Advanced", experience: "Core Stack", icon: "Atom", highlight: true, color: "#00D8FF" },
      { name: "Next.js", level: "Proficient", experience: "Modern SSR/SSG", icon: "Layers", highlight: true, color: "#E2E8F0" },
      { name: "TypeScript", level: "Advanced", experience: "Type-Safe Architecture", icon: "FileCode", highlight: true, color: "#3178C6" },
      { name: "Tailwind CSS", level: "Advanced", experience: "Design Systems", icon: "Wind", highlight: true, color: "#38BDF8" },
      { name: "JavaScript (ES6+)", level: "Advanced", experience: "Reactive Logic", icon: "FileCode", highlight: true, color: "#F7DF1E" },
      { name: "HTML5 & CSS3", level: "Expert", experience: "Semantic UI & Grid", icon: "Globe", color: "#E34F26" }
    ]
  },
  {
    title: "Backend & APIs",
    categoryKey: "backend",
    skills: [
      { name: "Node.js", level: "Intermediate", experience: "Server Runtime", icon: "Server", highlight: true, color: "#22C55E" },
      { name: "Express.js", level: "Intermediate", experience: "REST Endpoints", icon: "Cpu", highlight: true, color: "#A855F7" },
      { name: "REST APIs", level: "Proficient", experience: "API Architecture", icon: "Network", highlight: true, color: "#06B6D4" }
    ]
  },
  {
    title: "Database & Storage",
    categoryKey: "database",
    skills: [
      { name: "MongoDB", level: "Proficient", experience: "NoSQL Data", icon: "Database", color: "#10B981" },
      { name: "MySQL", level: "Intermediate", experience: "Relational Queries", icon: "Table", color: "#00758F" }
    ]
  },
  {
    title: "Design & Tools",
    categoryKey: "tools",
    skills: [
      { name: "Figma", level: "Advanced", experience: "UI/UX Design", icon: "Figma", highlight: true, color: "#A259FF" },
      { name: "Git & GitHub", level: "Advanced", experience: "Version Control", icon: "GitBranch", highlight: true, color: "#F05032" },
      { name: "Vite", level: "Daily Driver", experience: "Fast Bundling", icon: "Terminal", color: "#646CFF" },
      { name: "VS Code", level: "Daily Driver", experience: "Dev Environment", icon: "Terminal", color: "#007ACC" },
      { name: "Vercel", level: "Proficient", experience: "Edge Hosting", icon: "Cloud", color: "#F43F5E" }
    ]
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Discover",
    tagline: "Strategy & Scope",
    description: "Understand your business goals, target audience, brand identity, and technical requirements. We define clear milestones and scope.",
    deliverables: ["Project Roadmap", "Competitor Research", "Feature Architecture", "Content Outline"],
    duration: "2 - 3 Days"
  },
  {
    step: "02",
    title: "Design",
    tagline: "UI/UX & Prototyping",
    description: "Create a strategic, conversion-focused user interface in Figma with modern typography, balanced spacing, and interactive prototypes.",
    deliverables: ["High-Fidelity Wireframes", "Interactive Figma Prototype", "Design System", "Mobile & Desktop Previews"],
    duration: "4 - 7 Days"
  },
  {
    step: "03",
    title: "Develop",
    tagline: "Clean Code & Performance",
    description: "Build the website using modern React/Next.js and Tailwind CSS with clean code architecture, smooth animations, and responsive layouts.",
    deliverables: ["Clean Modular Codebase", "Mobile-First Responsiveness", "WhatsApp & Form Integration", "Interactive Features"],
    duration: "1 - 2 Weeks"
  },
  {
    step: "04",
    title: "Launch",
    tagline: "Testing & Deployment",
    description: "Perform strict cross-browser testing, Core Web Vitals optimization, SEO metadata verification, and deploy to ultra-fast edge servers.",
    deliverables: ["Live Edge Deployment", "Lighthouse 95+ Score", "SEO Metadata & Sitemap", "Post-Launch Handover Support"],
    duration: "1 - 2 Days"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Freelance Web Developer & UI Designer",
    company: "Webnest Studio",
    location: "India • Remote",
    type: "Freelance",
    description: "Founded Webnest Studio to design and engineer modern websites for businesses, fitness centers, cafes, and personal brands.",
    achievements: [
      "Delivered 10+ client websites with 100% mobile-responsive compliance and sub-second load speeds",
      "Increased client business inquiries using tailored WhatsApp call-to-actions and fast lead funnels",
      "Managed full lifecycle from Figma wireframing to production deployment on Vercel"
    ],
    skills: ["React", "Next.js", "Tailwind CSS", "Figma", "UI/UX", "SEO", "Vercel"]
  },
  {
    period: "2024",
    role: "Web Development Intern",
    company: "Virtual Works Lab",
    location: "India • Hybrid",
    type: "Internship",
    description: "Worked on real-world frontend web development tasks, component architecture, and responsive UI implementation.",
    achievements: [
      "Collaborated with senior engineers to implement reusable UI component libraries in React",
      "Optimized client-side rendering bottlenecks and reduced cumulative layout shifts (CLS)",
      "Implemented RESTful API endpoints and integrated backend data schemas"
    ],
    skills: ["JavaScript", "React", "REST APIs", "Git", "CSS Grid", "Code Reviews"]
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack Web Development & Future Tech",
    company: "THIRANEX Skill Development",
    location: "India",
    type: "Training",
    description: "Comprehensive practical training covering full-stack web architectures, modern JavaScript standards, databases, and clean code principles.",
    achievements: [
      "Built multiple full-stack projects using React, Node.js, Express, and MongoDB",
      "Mastered modern Git workflows, responsive design principles, and accessibility standards",
      "Earned top distinction for capstone full-stack web application development"
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL"]
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Process & Timeline",
    question: "How long does it take to design and build a website?",
    answer: "A standard business website typically takes 1 to 2 weeks from kickoff to launch. More comprehensive web applications with custom backends or detailed multi-page portals take around 2 to 4 weeks. I prioritize swift delivery without ever sacrificing quality."
  },
  {
    category: "Pricing & Budget",
    question: "How much do you charge for a custom website?",
    answer: "Pricing is transparent and based on project scope, number of pages, and required features (such as WhatsApp lead flows, booking systems, or animations). I offer competitive package pricing tailored for small businesses, startups, and growing brands. Contact me for a customized quote!"
  },
  {
    category: "Maintenance & Hosting",
    question: "Do you help with hosting, domain setup, and ongoing updates?",
    answer: "Yes! I handle the complete deployment on reliable edge platforms like Vercel or Netlify, configure your custom domain and SSL certificate, and provide post-launch support to ensure everything runs smoothly."
  },
  {
    category: "Design & Input",
    question: "What if I don't have a design or logo ready yet?",
    answer: "No problem at all. As a UI/UX designer, I can help you select brand colors, typography pairings, and layout structures. We'll start with clean wireframes and build a modern visual identity together."
  },
  {
    category: "Mobile & SEO",
    question: "Will my website work perfectly on mobile phones and rank on Google?",
    answer: "Absolutely. 100% of my websites are designed mobile-first and tested across iOS and Android devices. I also implement semantic HTML, meta tags, Open Graph previews, and Core Web Vitals optimization for maximum search visibility."
  }
];
