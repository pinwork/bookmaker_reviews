// src/data/articles.ts
import { GuideArticle, ToolReviewArticle } from '@/types';
import { GuideArticleSchema, ToolReviewArticleSchema } from '@/types/schemas';
import { DEFAULT_REGION } from './constants';
import * as gbArticles from './regions/gb/en';
import * as ieArticles from './regions/ie/en';

// Runtime validation helpers (only active in development)
function validateGuide(guide: unknown): boolean {
  const result = GuideArticleSchema.safeParse(guide);
  if (!result.success) {
    const slug = (guide as { slug?: string })?.slug ?? 'unknown';
    console.error(`[Guide Validation] "${slug}" failed:`, result.error.issues.map(i => `${i.path.join('.')}: ${i.message}`).join(', '));
    return false;
  }
  return true;
}

function validateToolReview(article: unknown): boolean {
  const result = ToolReviewArticleSchema.safeParse(article);
  if (!result.success) {
    const slug = (article as { slug?: string })?.slug ?? 'unknown';
    console.error(`[ToolReview Validation] "${slug}" failed:`, result.error.issues.map(i => `${i.path.join('.')}: ${i.message}`).join(', '));
    return false;
  }
  return true;
}

// Get guides from guides/ folder
function getGuidesData(region: string): GuideArticle[] {
  if (region === 'ie') {
    return [
      ieArticles.ultimateBonusGuide,
      ieArticles.bettingIndustryReport,
      ieArticles.bettingShopsBible,
      ieArticles.responsibleGamblingBible,
    ];
  }

  // Default to GB
  return [
    gbArticles.ultimateBonusGuide,
    gbArticles.bettingIndustryReport,
    gbArticles.bettingShopsBible,
    gbArticles.responsibleGamblingBible,
    gbArticles.gubbingGuide,
  ];
}

// Get bettor resources from bettor-resources/ folder
function getBettorResourcesData(region: string): ToolReviewArticle[] {
  if (region === 'ie') {
    // IE inherits GB bettor resources (universal content)
    return [gbArticles.liveScoreAppsGuide, gbArticles.inPlayScannersGuide, gbArticles.matchedBettingGuide];
  }

  // Default to GB
  return [gbArticles.liveScoreAppsGuide, gbArticles.inPlayScannersGuide, gbArticles.matchedBettingGuide];
}

// Public API
export function getGuides(region: string = DEFAULT_REGION): GuideArticle[] {
  const guides = getGuidesData(region);
  if (process.env.NODE_ENV === 'development') {
    guides.forEach(validateGuide);
  }
  return guides;
}

export function getBettorResources(region: string = DEFAULT_REGION): ToolReviewArticle[] {
  const articles = getBettorResourcesData(region);
  if (process.env.NODE_ENV === 'development') {
    articles.forEach(validateToolReview);
  }
  return articles;
}

export function getGuideBySlug(slug: string, region: string = DEFAULT_REGION): GuideArticle | undefined {
  return getGuidesData(region).find(article => article.slug === slug);
}

export function getBettorResourceBySlug(slug: string, region: string = DEFAULT_REGION): ToolReviewArticle | undefined {
  return getBettorResourcesData(region).find(article => article.slug === slug);
}

// Legacy aliases for backwards compatibility
export function getArticlesByCollection(
  collection: 'guides' | 'bettor-resources',
  region: string = DEFAULT_REGION
): (GuideArticle | ToolReviewArticle)[] {
  if (collection === 'guides') {
    return getGuides(region);
  }
  return getBettorResources(region);
}

export function getAllArticlesForRegion(region: string = DEFAULT_REGION): (GuideArticle | ToolReviewArticle)[] {
  return [...getGuidesData(region), ...getBettorResourcesData(region)];
}

export function getArticleBySlug(slug: string, region: string = DEFAULT_REGION): (GuideArticle | ToolReviewArticle) | undefined {
  return getAllArticlesForRegion(region).find(article => article.slug === slug);
}
