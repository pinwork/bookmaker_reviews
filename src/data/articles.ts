// src/data/articles.ts
// Public API for articles - implements language-first architecture with regional overrides
// Lookup order: 1. Regional override → 2. Language master

import { GuideArticle, ToolReviewArticle, CompetitionArticle } from '@/types';
import { GuideArticleSchema, ToolReviewArticleSchema, CompetitionArticleSchema } from '@/types/schemas';
import { DEFAULT_REGION } from './constants';

// Import universal English articles (shared across all EN regions)
import * as enGuides from './articles/en/guides';
import * as enBettorResources from './articles/en/bettor-resources';
import * as enCompetitions from './articles/en/competitions';

// Import regional overrides
import * as gbGuideOverrides from './articles/overrides/gb/en/guides';
import * as ieGuideOverrides from './articles/overrides/ie/en/guides';
// Competition overrides (empty for now)
// import * as gbCompetitionOverrides from './articles/overrides/gb/en/competitions';
// import * as ieCompetitionOverrides from './articles/overrides/ie/en/competitions';

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

function validateCompetitionArticle(article: unknown): boolean {
  const result = CompetitionArticleSchema.safeParse(article);
  if (!result.success) {
    const slug = (article as { slug?: string })?.slug ?? 'unknown';
    console.error(`[CompetitionArticle Validation] "${slug}" failed:`, result.error.issues.map(i => `${i.path.join('.')}: ${i.message}`).join(', '));
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

// Get competition articles for a region
// Architecture: Universal EN articles + Regional overrides
function getCompetitionArticlesData(region: string): CompetitionArticle[] {
  // Universal competition articles
  const universalArticles: CompetitionArticle[] = [
    // Football
    enCompetitions.premierLeagueBettingGuide,
    enCompetitions.championsLeagueBettingGuide,
    enCompetitions.laLigaBettingGuide,
    enCompetitions.bundesligaBettingGuide,
    enCompetitions.serieABettingGuide,
    enCompetitions.ligue1BettingGuide,
    enCompetitions.faCupBettingGuide,
    enCompetitions.worldCupBettingGuide,
    enCompetitions.eurosBettingGuide,
    // Tennis
    enCompetitions.wimbledonBettingGuide,
    enCompetitions.australianOpenBettingGuide,
    enCompetitions.frenchOpenBettingGuide,
    enCompetitions.usOpenTennisBettingGuide,
    // Horse Racing
    enCompetitions.cheltenhamFestivalBettingGuide,
    enCompetitions.grandNationalBettingGuide,
    enCompetitions.royalAscotBettingGuide,
    enCompetitions.epsomDerbyBettingGuide,
    enCompetitions.kentuckyDerbyBettingGuide,
    // Golf
    enCompetitions.theMastersBettingGuide,
    enCompetitions.theOpenBettingGuide,
    enCompetitions.pgaChampionshipBettingGuide,
    enCompetitions.usOpenGolfBettingGuide,
    enCompetitions.ryderCupBettingGuide,
    // Cricket
    enCompetitions.theAshesBettingGuide,
    enCompetitions.cricketWorldCupBettingGuide,
    enCompetitions.t20WorldCupBettingGuide,
    enCompetitions.iplBettingGuide,
    // American Football
    enCompetitions.nflBettingGuide,
    enCompetitions.superBowlBettingGuide,
    // Basketball
    enCompetitions.nbaBettingGuide,
    enCompetitions.nbaFinalsBettingGuide,
    enCompetitions.marchMadnessBettingGuide,
    enCompetitions.euroleagueBettingGuide,
    // Rugby
    enCompetitions.sixNationsBettingGuide,
    enCompetitions.rugbyWorldCupBettingGuide,
    // Darts
    enCompetitions.pdcWorldChampionshipBettingGuide,
    enCompetitions.premierLeagueDartsBettingGuide,
    // Snooker
    enCompetitions.worldSnookerChampionshipBettingGuide,
    enCompetitions.mastersSnookerBettingGuide,
    enCompetitions.ukChampionshipSnookerBettingGuide,
    // Boxing
    enCompetitions.heavyweightBoxingBettingGuide,
    // Baseball
    enCompetitions.mlbBettingGuide,
    enCompetitions.worldSeriesBettingGuide,
    // Ice Hockey
    enCompetitions.nhlBettingGuide,
    enCompetitions.stanleyCupBettingGuide,
    // Motorsport
    enCompetitions.f1WorldChampionshipBettingGuide,
    // MMA
    enCompetitions.ufcBettingGuide,
    // Esports
    enCompetitions.leagueOfLegendsWorldsBettingGuide,
    enCompetitions.cs2MajorBettingGuide,
    enCompetitions.theInternationalBettingGuide,
    enCompetitions.valorantChampionsBettingGuide,
  ];

  // Regional overrides (none for now)
  void region;
  return universalArticles;
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

export function getCompetitionArticles(region: string = DEFAULT_REGION): CompetitionArticle[] {
  const articles = getCompetitionArticlesData(region);
  if (process.env.NODE_ENV === 'development') {
    articles.forEach(validateCompetitionArticle);
  }
  return articles;
}

export function getCompetitionArticleBySlug(slug: string, region: string = DEFAULT_REGION): CompetitionArticle | undefined {
  return getCompetitionArticlesData(region).find(article => article.slug === slug);
}

// Legacy aliases for backwards compatibility
export function getArticlesByCollection(
  collection: 'guides' | 'bettor-resources' | 'competitions',
  region: string = DEFAULT_REGION
): (GuideArticle | ToolReviewArticle | CompetitionArticle)[] {
  if (collection === 'guides') {
    return getGuides(region);
  }
  if (collection === 'competitions') {
    return getCompetitionArticles(region);
  }
  return getBettorResources(region);
}

export function getAllArticlesForRegion(region: string = DEFAULT_REGION): (GuideArticle | ToolReviewArticle | CompetitionArticle)[] {
  return [...getGuidesData(region), ...getBettorResourcesData(region), ...getCompetitionArticlesData(region)];
}

export function getArticleBySlug(slug: string, region: string = DEFAULT_REGION): (GuideArticle | ToolReviewArticle | CompetitionArticle) | undefined {
  return getAllArticlesForRegion(region).find(article => article.slug === slug);
}
