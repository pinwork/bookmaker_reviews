import { staticPages as gbPages } from './regions/gb/en/staticPages';
import { StaticPage } from '@/types';
import { adaptObjectToRegion } from './utils';

export const getStaticPageBySlug = (slug: string, region: string = 'gb'): StaticPage | undefined => {
  const pages = adaptObjectToRegion(gbPages, region);
  return pages.find(p => p.slug === slug);
};