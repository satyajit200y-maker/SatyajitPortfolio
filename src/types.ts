export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  tag: 'Business' | 'Restaurant & Cafe' | 'Fitness' | 'Web App';
  shortDescription: string;
  client: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  image: string;
  mockupType: 'browser' | 'mobile' | 'dual';
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    keyDeliverables: string[];
    technicalOutcome?: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  typicalTimeline: string;
  popularFor: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'frontend' | 'backend' | 'database' | 'tools';
  skills: {
    name: string;
    level: string;
    experience: string;
    icon: string;
    highlight?: boolean;
    color: string;
  }[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Freelance' | 'Internship' | 'Training';
  description: string;
  achievements: string[];
  skills: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
