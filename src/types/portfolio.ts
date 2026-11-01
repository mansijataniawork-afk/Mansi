export type ProjectCategory = 'all' | 'brand-strategy' | 'neuromarketing' | 'growth-campaigns' | 'corporate-initiatives';

export interface DeckSlide {
  slideNumber: number;
  title: string;
  category: string;
  bullets: string[];
  takeaway: string;
  stat?: { value: string; label: string };
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'brand-strategy' | 'neuromarketing' | 'growth-campaigns' | 'corporate-initiatives';
  year: string;
  organization: string;
  role: string;
  image: string;
  summary: string;
  challenge: string;
  strategy: string;
  outcomes: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  featured?: boolean;
  canvaUrl?: string;
  slides?: DeckSlide[];
  links?: {
    label: string;
    url: string;
    external?: boolean;
    isCanva?: boolean;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  department?: string;
  summary: string;
  bulletPoints: string[];
  competencies: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}
