// src/data/articles.ts
import { IndustryReport } from '@/types';
import { DEFAULT_REGION } from './constants';
import * as gbArticles from './regions/gb/en';
import * as ieArticles from './regions/ie/en';

// Get guides from guides/ folder
function getGuidesData(region: string): IndustryReport[] {
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
  ];
}

// Get bettor resources from bettor-resources/ folder
function getBettorResourcesData(region: string): IndustryReport[] {
  if (region === 'ie') {
    // IE inherits GB bettor resources (universal content)
    return [gbArticles.liveScoreAppsGuide, gbArticles.inPlayScannersGuide];
  }

  // Default to GB
  return [gbArticles.liveScoreAppsGuide, gbArticles.inPlayScannersGuide];
}

// Public API
export function getGuides(region: string = DEFAULT_REGION): IndustryReport[] {
  return getGuidesData(region);
}

export function getBettorResources(region: string = DEFAULT_REGION): IndustryReport[] {
  return getBettorResourcesData(region);
}

export function getGuideBySlug(slug: string, region: string = DEFAULT_REGION): IndustryReport | undefined {
  return getGuidesData(region).find(article => article.slug === slug);
}

export function getBettorResourceBySlug(slug: string, region: string = DEFAULT_REGION): IndustryReport | undefined {
  return getBettorResourcesData(region).find(article => article.slug === slug);
}

// Legacy aliases for backwards compatibility
export function getArticlesByCollection(
  collection: 'guides' | 'bettor-resources',
  region: string = DEFAULT_REGION
): IndustryReport[] {
  if (collection === 'guides') {
    return getGuides(region);
  }
  return getBettorResources(region);
}

export function getAllArticlesForRegion(region: string = DEFAULT_REGION): IndustryReport[] {
  return [...getGuidesData(region), ...getBettorResourcesData(region)];
}

export function getArticleBySlug(slug: string, region: string = DEFAULT_REGION): IndustryReport | undefined {
  return getAllArticlesForRegion(region).find(article => article.slug === slug);
}
