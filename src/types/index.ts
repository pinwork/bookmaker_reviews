// src/types/index.ts
import { z } from 'zod';
import * as schemas from './schemas';

export type {
  BookmakerSlug, RegionCode, PaymentMethodSlug, OfferType,
  ExtraPromoCategory, PartnershipType, RewardRestriction, QualifyingBetType,
  ResourceType,
} from '@/data/constants';

export type Partnership = z.infer<typeof schemas.PartnershipSchema>;
export type RewardToken = z.infer<typeof schemas.RewardTokenSchema>;
export type QualifyingRequirements = z.infer<typeof schemas.QualifyingRequirementsSchema>;
export type OfferReward = z.infer<typeof schemas.OfferRewardSchema>;
export type WelcomeOffer = z.infer<typeof schemas.WelcomeOfferSchema>;
export type BookmakerFeatures = z.infer<typeof schemas.BookmakerFeaturesSchema>;
export type RegionalBookmakerData = z.infer<typeof schemas.RegionalBookmakerDataSchema>;
export type BookmakerDisplay = z.infer<typeof schemas.BookmakerDisplaySchema>;
export type BookmakerContent = z.infer<typeof schemas.BookmakerContentSchema>;
export type BookmakerBrandData = z.infer<typeof schemas.BookmakerBrandDataSchema>;
export type Bookmaker = z.infer<typeof schemas.BookmakerSchema>;
export type ExtraPromotion = z.infer<typeof schemas.ExtraPromotionSchema>;
export type FAQCategory = z.infer<typeof schemas.FAQCategorySchema>;
export type FAQ = z.infer<typeof schemas.FAQSchema>;
export type GuideCategory = z.infer<typeof schemas.GuideCategorySchema>;
export type Guide = z.infer<typeof schemas.GuideSchema>;
export type StaticPage = z.infer<typeof schemas.StaticPageSchema>;
export type Author = z.infer<typeof schemas.AuthorSchema>;
export type SiteConfig = z.infer<typeof schemas.SiteConfigSchema>;
export type SportCategory = z.infer<typeof schemas.SportCategorySchema>;
export type Competition = z.infer<typeof schemas.CompetitionSchema>;
export type SportEvent = z.infer<typeof schemas.SportEventSchema>;

export type BaseContent = z.infer<typeof schemas.BaseContentSchema>;
export type ToolReview = z.infer<typeof schemas.ToolReviewSchema>;
export type ContentGuide = z.infer<typeof schemas.ContentGuideSchema>;
export type ExternalLink = z.infer<typeof schemas.ExternalLinkSchema>;
export type LinkedResource = z.infer<typeof schemas.LinkedResourceSchema>;
export type ComparisonTable = z.infer<typeof schemas.ComparisonTableSchema>;
export type BonusGroupItem = z.infer<typeof schemas.BonusGroupItemSchema>;

// New strict article types
export type ReviewItem = z.infer<typeof schemas.ReviewItemSchema>;
export type GuideItem = z.infer<typeof schemas.GuideItemSchema>;
export type ToolReviewArticle = z.infer<typeof schemas.ToolReviewArticleSchema>;
export type GuideArticle = z.infer<typeof schemas.GuideArticleSchema>;
export type QuickFact = z.infer<typeof schemas.QuickFactSchema>;
export type EdgePattern = z.infer<typeof schemas.EdgePatternSchema>;
export type CompetitionArticle = z.infer<typeof schemas.CompetitionArticleSchema>;

export interface BookmakerComplete extends Bookmaker, RegionalBookmakerData {
  welcomeOffers: WelcomeOffer[];
  extraPromotions: ExtraPromotion[];
  primaryOffer?: WelcomeOffer;
}

export type BookmakerListItem = BookmakerComplete;

export { validateWelcomeOffers, validateBookmakers, validateExtraPromotions } from './schemas';