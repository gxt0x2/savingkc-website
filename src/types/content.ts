import type { FAQItem } from './situation';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

export interface ProblemHubSection {
  heading: string;
  content: string;
  callout?: {
    type: 'warning' | 'info' | 'fact';
    text: string;
  };
}

export interface ProblemHubData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  shortAnswer: string;
  sections?: ProblemHubSection[];
  moInfo: StateSpecificInfo;
  ksInfo: StateSpecificInfo;
  faqs: FAQItem[];
  relatedSituations: string[];
}

export interface StateSpecificInfo {
  stateName: string;
  process: string;
  timeline: string;
  keyFacts: string[];
  counties: string[];
}
