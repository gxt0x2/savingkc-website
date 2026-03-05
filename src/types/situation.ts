export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  factor: string;
  traditional: string;
  cashOffer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface SituationData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortAnswer: string;
  heroHeading: string;
  heroSubheading: string;
  sections: SituationSection[];
  faqs: FAQItem[];
  comparison: ComparisonRow[];
  steps: ProcessStep[];
  keyTerms: KeyTerm[];
  relatedSituations: string[];
  localHook: string;
  savingsTable?: SavingsRow[];
}

export interface SavingsRow {
  scenario: string;
  traditionalCost: string;
  cashOfferCost: string;
  savings: string;
}

export interface SituationSection {
  heading: string;
  content: string;
  callout?: {
    type: 'warning' | 'info' | 'fact';
    text: string;
  };
}
