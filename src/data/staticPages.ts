// src/data/staticPages.ts
import {
  staticPages as gbPages,
  getFooterPages as gbGetFooterPages,
  getAllStaticPageSlugs as gbGetAllStaticPageSlugs,
} from './regions/gb/en/staticPages';
import { StaticPage } from '@/types';
import { adaptObjectToRegion } from '@/utils';

export const getStaticPageBySlug = (slug: string, region: string = 'gb'): StaticPage | undefined => {
  const pages = adaptObjectToRegion(gbPages, region);
  return pages.find(p => p.slug === slug);
};

export const getFooterPages = (): Pick<StaticPage, 'slug' | 'title'>[] => {
  return gbGetFooterPages();
};

export const getAllStaticPageSlugs = (): string[] => {
  return gbGetAllStaticPageSlugs();
};