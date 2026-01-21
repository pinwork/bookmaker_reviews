// src/data/toolReviews.ts
import { ToolReview } from '@/types';
import { DEFAULT_REGION } from './constants';
import * as gbTools from './regions/gb/en/reviews/tools';
import * as gbData from './regions/gb/en';

type ToolsCollectionType = 'bettor-resources';

function getAllToolReviews(region: string): ToolReview[] {
  if (region === 'ie') {
    // IE inherits GB tool reviews (universal content)
    return [gbData.liveScoreAppsGuide as ToolReview];
  }
  // Default to GB
  return [gbTools.liveScoreAppsReview];
}

export function getToolReviewsByCollection(
  collection: ToolsCollectionType,
  region: string = DEFAULT_REGION
): ToolReview[] {
  const tools = getAllToolReviews(region);
  return tools.filter(tool => tool.collections?.includes(collection));
}

export function getAllToolReviewsForRegion(region: string = DEFAULT_REGION): ToolReview[] {
  return getAllToolReviews(region);
}

// Alias for simpler API
export function getToolReviews(region: string = DEFAULT_REGION): ToolReview[] {
  return getAllToolReviews(region);
}

export function getToolReviewBySlug(slug: string, region: string = DEFAULT_REGION): ToolReview | undefined {
  return getAllToolReviews(region).find(tool => tool.slug === slug);
}
