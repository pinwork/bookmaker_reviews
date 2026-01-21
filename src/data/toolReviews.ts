// src/data/toolReviews.ts
import { ToolReview } from '@/types';
import { DEFAULT_REGION } from './constants';

type ToolsCollectionType = 'tools' | 'bettor-resources' | 'featured';

// Tool reviews will be populated when files are added to reviews/tools/
function getAllToolReviews(region: string): ToolReview[] {
  // Placeholder: will be populated in Story 3 when liveScoreAppsGuide is migrated
  if (region === 'ie') {
    return [];
  }
  // Default to GB
  return [];
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

export function getToolReviewBySlug(slug: string, region: string = DEFAULT_REGION): ToolReview | undefined {
  return getAllToolReviews(region).find(tool => tool.slug === slug);
}

export function getFeaturedToolReviews(region: string = DEFAULT_REGION): ToolReview[] {
  return getToolReviewsByCollection('featured', region);
}
