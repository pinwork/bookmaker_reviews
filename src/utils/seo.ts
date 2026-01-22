// src/utils/seo.ts
import { GuideArticle, ToolReviewArticle, SiteConfig } from '@/types';

type Article = GuideArticle | ToolReviewArticle;

/**
 * Helper to generate FAQ items array for Schema
 * Maps FAQ format to Google's Question/Answer structure
 */
const generateFAQItems = (faq: Array<{ q: string; a: string }>) => {
  return faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a
    }
  }));
};

/**
 * Generate Article schema with NESTED FAQ and E-E-A-T Author
 */
export const generateArticleSchema = (
  article: Article,
  url: string,
  config: SiteConfig
) => {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.h1,
    description: article.metaDescription,
    image: article.slug ? `${config.url}/images/${article.slug}.jpg` : undefined,
    datePublished: article.footer?.lastUpdated || new Date().toISOString(),
    dateModified: article.footer?.lastUpdated || new Date().toISOString(),

    // E-E-A-T: Person as Author
    author: {
      '@type': 'Person',
      name: config.defaultAuthor?.name || config.name,
      url: config.url
    },
    // Brand as Publisher
    publisher: {
      '@type': 'Organization',
      name: config.name,
      logo: {
        '@type': 'ImageObject',
        url: `${config.url}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };

  // Nest FAQ inside Article via hasPart
  if (article.faq && article.faq.length > 0) {
    schema.hasPart = [
      {
        '@type': 'FAQPage',
        mainEntity: generateFAQItems(article.faq)
      }
    ];
  }

  return schema;
};

/**
 * Generate Organization schema for Bookmakers
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
      '@type': 'Person',
      name: config.defaultAuthor?.name || config.name,
      url: config.url
    },
    reviewBody: verdict,
    datePublished: lastUpdated,
    dateModified: lastUpdated,
    url: url
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

  const schema: Record<string, unknown> = {
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
    // E-E-A-T Author for Reviews
    author: {
      '@type': 'Person',
      name: config.defaultAuthor?.name || config.name,
    },
    image: article.slug ? `${config.url}/images/${article.slug}.jpg` : undefined,
  };

  // Nest FAQ in Reviews as well
  if (article.faq && article.faq.length > 0) {
    schema.hasPart = [
      {
        '@type': 'FAQPage',
        mainEntity: generateFAQItems(article.faq)
      }
    ];
  }

  return schema;
};

/**
 * Main Entry Point - returns a SINGLE nested schema object
 */
export const generateArticleSchemas = (
  article: Article,
  url: string,
  config: SiteConfig
): object => {
  if ('reviewContext' in article && article.reviewContext?.objectType === 'SoftwareApplication') {
    return generateSoftwareAppSchema(article as ToolReviewArticle, url, config);
  }
  return generateArticleSchema(article, url, config);
};
