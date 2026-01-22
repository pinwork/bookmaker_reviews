// src/utils/seo.ts
import { GuideArticle, ToolReviewArticle, SiteConfig } from '@/types';

type Article = GuideArticle | ToolReviewArticle;

/**
 * Generate Article schema for Guides and Tool Reviews
 */
export const generateArticleSchema = (
  article: Article,
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

/**
 * Generate SoftwareApplication schema for Rich Snippets (star ratings in Google)
 * Used when article has reviewContext with objectType: 'SoftwareApplication'
 */
export const generateSoftwareAppSchema = (
  article: ToolReviewArticle,
  url: string,
  config: SiteConfig
) => {
  const ctx = article.reviewContext;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: article.h1,
    description: article.metaDescription,
    applicationCategory: ctx.applicationCategory,
    operatingSystem: ctx.operatingSystem,
    url: url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ctx.rating,
      bestRating: ctx.bestRating ?? 5,
      worstRating: ctx.worstRating ?? 1,
      ratingCount: ctx.reviewCount ?? 1,
      reviewCount: ctx.reviewCount ?? 1,
    },
    offers: {
      '@type': 'Offer',
      price: ctx.price === 'Free' ? '0' : (ctx.price?.replace(/[^0-9.]/g, '') ?? '0'),
      priceCurrency: ctx.priceCurrency ?? 'GBP',
    },
    author: {
      '@type': 'Organization',
      name: config.name,
      url: config.url
    },
    image: article.slug ? `${config.url}/images/${article.slug}.jpg` : undefined,
  };
};

/**
 * Generate FAQPage schema from article FAQ
 */
const generateFAQSchema = (faq: Array<{ q: string; a: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };
};

/**
 * Generate all relevant schemas for an article
 * Returns array: [Article/SoftwareApp schema, FAQPage schema (if faq exists)]
 */
export const generateArticleSchemas = (
  article: Article,
  url: string,
  config: SiteConfig
): object[] => {
  const schemas: object[] = [];

  // Use SoftwareApplication schema if reviewContext exists (for Rich Snippets with stars)
  // Otherwise fall back to standard Article schema
  if ('reviewContext' in article && article.reviewContext?.objectType === 'SoftwareApplication') {
    schemas.push(generateSoftwareAppSchema(article as ToolReviewArticle, url, config));
  } else {
    schemas.push(generateArticleSchema(article, url, config));
  }

  // Add FAQPage schema if article has FAQ
  if (article.faq && article.faq.length > 0) {
    schemas.push(generateFAQSchema(article.faq));
  }

  return schemas;
};
