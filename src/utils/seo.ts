// src/utils/seo.ts
import { IndustryReport, SiteConfig } from '@/types';

/**
 * Generate Article schema for Industry Reports and Guides
 */
export const generateArticleSchema = (
  article: IndustryReport,
  url: string,
  config: SiteConfig
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.h1,
    description: article.metaDescription,
    image: article.slug ? `${config.url}/images/${article.slug}.jpg` : undefined,
    datePublished: article.footer?.lastUpdated || new Date().toISOString(),
    dateModified: article.footer?.lastUpdated || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: config.name,
      url: config.url
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };
};

/**
 * Generate Organization schema for Bookmakers
 * Works with data from BookmakerComplete type
 */
export const generateBookmakerSchema = (
  name: string,
  foundedYear: number,
  description: string,
  websiteUrl: string,
  logoUrl?: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: name,
    foundingDate: foundedYear.toString(),
    description: description,
    url: websiteUrl,
    ...(logoUrl && { logo: logoUrl })
  };
};

/**
 * Generate Review schema for Bookmaker Reviews
 * Simplified version without rating (can be added later when rating system is implemented)
 */
export const generateReviewSchema = (
  bookmakerName: string,
  tagline: string,
  verdict: string,
  url: string,
  lastUpdated: string,
  config: SiteConfig
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: bookmakerName,
      description: tagline
    },
    author: {
      '@type': 'Organization',
      name: config.name,
      url: config.url
    },
    reviewBody: verdict,
    datePublished: lastUpdated,
    dateModified: lastUpdated
  };
};
