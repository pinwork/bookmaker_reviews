// src/data/faqs.ts
import { faqs as gbFaqs } from './regions/gb/en/faqs';
import { FAQ } from '@/types';
import { adaptObjectToRegion } from './utils';

export const getFaqs = (region: string = 'gb'): FAQ[] => {
  return adaptObjectToRegion(gbFaqs, region);
};

export const getPopularFAQs = (region: string = 'gb', limit: number = 10): FAQ[] => {
  return getFaqs(region).filter(f => f.isPopular).slice(0, limit);
};

export const getFAQBySlug = (slug: string, region: string = 'gb'): FAQ | undefined => {
  return getFaqs(region).find(faq => faq.slug === slug);
};