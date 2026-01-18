// src/types/index.ts
import { z } from 'zod';
import * as schemas from './schemas';

export type {
  BookmakerSlug, RegionCode, PaymentMethodSlug, OfferType,
  ExtraPromoCategory, PartnershipType, RewardRestriction, QualifyingBetType,
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

export interface BookmakerComplete extends Bookmaker, RegionalBookmakerData {
  welcomeOffers: WelcomeOffer[];
  extraPromotions: ExtraPromotion[];
  primaryOffer?: WelcomeOffer;
}

export type BookmakerListItem = BookmakerComplete;

export { validateWelcomeOffers, validateBookmakers, validateExtraPromotions } from './schemas';
