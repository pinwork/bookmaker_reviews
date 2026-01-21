// src/data/articles.ts
import { IndustryReport } from '@/types';
import { DEFAULT_REGION } from './constants';
import * as gbArticles from './regions/gb/en';
import * as ieArticles from './regions/ie/en';

type CollectionType = 'guides' | 'bettor-resources';

function getAllArticles(region: string): IndustryReport[] {
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

export function getArticlesByCollection(
  collection: CollectionType,
  region: string = DEFAULT_REGION
): IndustryReport[] {
  const articles = getAllArticles(region);
  return articles.filter(article => article.collections?.includes(collection));
}

export function getAllArticlesForRegion(region: string = DEFAULT_REGION): IndustryReport[] {
  return getAllArticles(region);
}

export function getArticleBySlug(slug: string, region: string = DEFAULT_REGION): IndustryReport | undefined {
  return getAllArticles(region).find(article => article.slug === slug);
}
