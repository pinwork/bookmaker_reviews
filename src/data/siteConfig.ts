// src/data/siteConfig.ts
import { siteConfig as gbConfig, defaultAuthor, socialLinks, featureFlags } from './regions/gb/en/siteConfig';
import { adaptObjectToRegion } from '@/utils';

export { defaultAuthor, socialLinks, featureFlags };

export const getSiteConfig = (region: string = 'gb') => {
  return adaptObjectToRegion(gbConfig, region);
};

export const getPageTitle = (title?: string, region: string = 'gb'): string => {
  const config = getSiteConfig(region);
  if (!title) return config.name;
  return `${title} | ${config.name}`;
};

export const getCurrentYear = (): number => new Date().getFullYear();