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
 * Returns array: [Article schema, FAQPage schema (if faq exists), ItemList (if external resources)]
 */
export const generateArticleSchemas = (
  article: IndustryReport,
  url: string,
  config: SiteConfig
): object[] => {
  const schemas: object[] = [];

  // Always include Article schema
  schemas.push(generateArticleSchema(article, url, config));

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
