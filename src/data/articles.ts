// src/data/articles.ts
// Public API for articles - implements language-first architecture with regional overrides
// Lookup order: 1. Regional override → 2. Language master

import { GuideArticle, ToolReviewArticle } from '@/types';
import { GuideArticleSchema, ToolReviewArticleSchema } from '@/types/schemas';
import { DEFAULT_REGION } from './constants';

// Import universal English articles (shared across all EN regions)
import * as enGuides from './articles/en/guides';
import * as enBettorResources from './articles/en/bettor-resources';

// Import regional overrides
import * as gbGuideOverrides from './articles/overrides/gb/en/guides';
import * as ieGuideOverrides from './articles/overrides/ie/en/guides';

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

// Get guides for a region
// Architecture: Universal EN guides + Regional override guides
function getGuidesData(region: string): GuideArticle[] {
  // Universal guides (available to all EN regions)
  const universalGuides: GuideArticle[] = [
    enGuides.gubbingGuide,
  ];

  // Regional override guides
  if (region === 'ie') {
    return [
      ...universalGuides,
      ieGuideOverrides.ieBonusGuide,
      ieGuideOverrides.ieBettingIndustryReport,
      ieGuideOverrides.ieBettingShopsBible,
      ieGuideOverrides.responsibleGamblingIrelandBible,
    ];
  }

  // Default to GB
  return [
    ...universalGuides,
    gbGuideOverrides.ultimateBonusGuide,
    gbGuideOverrides.bettingIndustryBible,
    gbGuideOverrides.bettingShopsBible,
    gbGuideOverrides.responsibleGamblingBible,
  ];
}

// Get bettor resources for a region
// Architecture: All bettor resources are universal EN content (no regional overrides)
function getBettorResourcesData(region: string): ToolReviewArticle[] {
  // All bettor resources are universal - same for all EN regions
  void region; // Unused for now, but kept for API consistency
  return [
    enBettorResources.liveScoreAppsGuide,
    enBettorResources.inPlayScannersGuide,
    enBettorResources.matchedBettingGuide,
  ];
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
