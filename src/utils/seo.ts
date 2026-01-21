// src/utils/seo.ts
import { IndustryReport, SiteConfig } from '@/types';
import { getActiveLinkedResources, resolveExternalResources } from '@/utils/linkedResources';

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

/**
 * Generate SoftwareApplication schema for Rich Snippets (star ratings in Google)
 * Used when article has reviewContext with objectType: 'SoftwareApplication'
 */
export const generateSoftwareAppSchema = (
  article: IndustryReport,
  url: string,
  config: SiteConfig
) => {
  const ctx = article.reviewContext!;

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

interface ItemListItem {
  name: string;
  url: string;
  category?: string;
  price?: string;
}

/**
 * Generate ItemList schema for comparison tables
 * For external apps: uses SoftwareApplication type
 */
export const generateItemListSchema = (
  title: string,
  items: ItemListItem[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: item.name,
        url: item.url,
        applicationCategory: item.category || 'Sports',
        ...(item.price && {
          offers: {
            '@type': 'Offer',
            price: item.price === 'Free' ? '0' : item.price.replace(/[^0-9.]/g, ''),
            priceCurrency: 'GBP'
          }
        })
      }
    }))
  };
};

/**
 * Generate all relevant schemas for an article
 * Returns array: [Article/SoftwareApp schema, FAQPage schema (if faq exists), ItemList (if external resources)]
 */
export const generateArticleSchemas = (
  article: IndustryReport,
  url: string,
  config: SiteConfig
): object[] => {
  const schemas: object[] = [];

  // Use SoftwareApplication schema if reviewContext exists (for Rich Snippets with stars)
  // Otherwise fall back to standard Article schema
  if (article.reviewContext?.objectType === 'SoftwareApplication') {
    schemas.push(generateSoftwareAppSchema(article, url, config));
  } else {
    schemas.push(generateArticleSchema(article, url, config));
  }

  // Add FAQPage schema if article has FAQ
  if (article.faq && article.faq.length > 0) {
    schemas.push(generateFAQSchema(article.faq));
  }

  // Add ItemList schema if article has external resources
  const activeResources = getActiveLinkedResources(article.linkedResources);
  const externalResources = resolveExternalResources(activeResources);

  if (externalResources.length > 0) {
    const items = externalResources.map((resource) => ({
      name: resource.name,
      url: resource.url,
      category: 'Sports',
      price: resource.tableData.price,
    }));

    // Find the comparison table with external resources, or use first table title
    const externalTable = article.comparisonTables?.find(
      (t) => t.linkedResourceType === 'external'
    );
    const tableTitle = externalTable?.title || article.comparisonTables?.[0]?.title || `${article.h1} - Apps`;

    schemas.push(generateItemListSchema(tableTitle, items));
  }

  return schemas;
};
