import type { BrandInfo } from '@/types/brand';

export const brand: BrandInfo = {
  name: 'Saving KC Homebuyers',
  shortName: 'Saving KC',
  phone: '8164292900',
  phoneFormatted: '(816) 429-2900',
  email: 'ari@savingkc.com',
  address: {
    street: '1705 Baltimore Ave',
    city: 'Kansas City',
    state: 'MO',
    zip: '64108',
    full: '1705 Baltimore Ave, Kansas City, MO 64108',
  },
  domain: 'https://savingkc.com',
  tagline: 'We Buy Houses in Kansas City for Cash',
  description: 'Saving KC Homebuyers purchases homes in any condition across the Kansas City metro area. Get a fair cash offer within 24 hours and close on your timeline.',
  foundedYear: 2020,
  ownerName: 'Ernest Dodson',
  ownerTitle: 'Managing Member',
  serviceArea: 'Kansas City Metro (Jackson, Clay, Platte, Wyandotte, Johnson Counties)',
  rating: '5',
  reviewCount: '15',
  socialLinks: {
    facebook: 'https://www.facebook.com/savingkc/',
    youtube: 'https://www.youtube.com/@SavingKC',
  },
};

export const BANNED_WORDS = [
  'navigating',
  'seamless',
  'hassle-free',
  'hassle free',
  'streamlined',
  'cutting-edge',
  'cutting edge',
  'leverage',
  'synergy',
  'holistic',
  'paradigm',
];
