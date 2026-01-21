// src/types/schemas.ts
import { z } from 'zod';
import {
  PAYMENT_METHOD_SLUGS, PARTNERSHIP_TYPES, OFFER_TYPES,
  REWARD_RESTRICTIONS, QUALIFYING_BET_TYPES, EXTRA_PROMO_CATEGORIES,
  RESOURCE_TYPES,
} from '@/data/constants';

export const PaymentMethodSlugSchema = z.enum(PAYMENT_METHOD_SLUGS);
export const PartnershipTypeSchema = z.enum(PARTNERSHIP_TYPES);
export const PartnershipSchema = z.object({
  name: z.string().min(1), slug: z.string().min(1), type: PartnershipTypeSchema, years: z.string().optional(),
});

export const OfferTypeSchema = z.enum(OFFER_TYPES);
export const RewardRestrictionSchema = z.enum(REWARD_RESTRICTIONS);
export const QualifyingBetTypeSchema = z.enum(QUALIFYING_BET_TYPES);

export const RewardTokenSchema = z.object({
  amount: z.number().positive(), count: z.number().int().positive(),
  restriction: RewardRestrictionSchema, minOdds: z.number().optional(), minSelections: z.number().int().optional(),
});

export const QualifyingRequirementsSchema = z.object({
  depositMin: z.number().nonnegative(), betMin: z.number().nonnegative(), minOdds: z.number().nonnegative(),
  daysToQualify: z.number().int().positive(), allowedBetTypes: z.array(QualifyingBetTypeSchema).min(1),
  mobileOnly: z.boolean(), sportRequired: z.string().optional(),
});

export const OfferRewardSchema = z.object({
  totalValue: z.number().nonnegative(), structure: z.array(RewardTokenSchema), validityDays: z.number().int().positive(),
});

export const WelcomeOfferSchema = z.object({
  bookmakerSlug: z.string().min(1), title: z.string().min(5), shortTitle: z.string().min(3),
  type: OfferTypeSchema, bonusPercentage: z.number().optional(), wageringRequirement: z.number().nonnegative(),
  isExclusive: z.boolean(), claimUrl: z.string().url().optional(), qualifying: QualifyingRequirementsSchema,
  reward: OfferRewardSchema, excludedPayments: z.array(PaymentMethodSlugSchema), promoCode: z.string().nullable(),
  termsShort: z.string().min(10), termsFull: z.string().min(50), highlights: z.array(z.string()).min(1),
  lastVerified: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), validUntil: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  isActive: z.boolean(),
});

export const BookmakerFeaturesSchema = z.object({
  cashOut: z.boolean(), liveStreaming: z.boolean(), betBuilder: z.boolean(), inPlayBetting: z.boolean(),
  mobileApp: z.boolean(), bestOddsGuaranteed: z.boolean(), earlyPayout: z.boolean(), accaBoost: z.boolean(),
});

export const RegionalBookmakerDataSchema = z.object({
  website: z.string().url(), affiliateLink: z.string().url(), promotionsPage: z.string(),
  payments: z.array(PaymentMethodSlugSchema).min(1), license: z.string().min(1),
});

export const BookmakerDisplaySchema = z.object({
  isActive: z.boolean(), isFeatured: z.boolean(), displayOrder: z.number().int().positive(), isEditorsChoice: z.boolean(),
});

export const BookmakerContentSchema = z.object({
  tagline: z.string().min(1), summary: z.string().min(10), h1: z.string().min(1),
  metaTitle: z.string().min(10).max(70), metaDescription: z.string().min(50).max(160),
  pros: z.array(z.string()).min(1), cons: z.array(z.string()).min(1), highlights: z.array(z.string()),
});

export const BookmakerBrandDataSchema = z.object({
  foundedYear: z.number().int().min(1800).max(2030), parentCompany: z.string().min(1), headquarters: z.string().min(1),
});

export const BookmakerSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/), name: z.string().min(1), features: BookmakerFeaturesSchema,
  brandData: BookmakerBrandDataSchema, content: BookmakerContentSchema, display: BookmakerDisplaySchema,
  partnerships: z.array(PartnershipSchema), lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const ExtraPromoCategorySchema = z.enum(EXTRA_PROMO_CATEGORIES);
export const ExtraPromotionSchema = z.object({
  id: z.string().min(1), bookmakerSlug: z.string().min(1), title: z.string().min(5),
  shortDescription: z.string().min(10), type: ExtraPromoCategorySchema, sports: z.array(z.string()).min(1),
  isActive: z.boolean(), validUntil: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  lastVerified: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), tags: z.array(z.string()),
  details: z.object({ keyCondition: z.string().optional(), maxBoost: z.string().optional() }),
  promoPageUrl: z.string().url().optional(), competitionId: z.string().optional(), eventId: z.string().optional(),
});

export const FAQCategorySchema = z.enum(['general', 'bonuses', 'deposits', 'withdrawals', 'betting', 'account', 'responsible_gambling', 'technical']);
export const FAQSchema = z.object({
  slug: z.string().min(1), question: z.string().min(5), answer: z.string().min(10),
  category: FAQCategorySchema, bookmakerSlug: z.string().optional(), isPopular: z.boolean(), order: z.number().int().nonnegative(),
});

export const GuideCategorySchema = z.enum(['basics', 'bet-types', 'features', 'strategy', 'sports']);
export const GuideSchema = z.object({
  slug: z.string().min(1), title: z.string().min(5), h1: z.string().min(5), excerpt: z.string().min(20),
  metaTitle: z.string().min(10).max(70), metaDescription: z.string().min(50).max(160), category: GuideCategorySchema,
  readingTime: z.number().int().positive(), isFeatured: z.boolean(), order: z.number().int().nonnegative(),
  content: z.string().min(100), relatedGuides: z.array(z.string()), lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const StaticPageSchema = z.object({
  slug: z.string().min(1), title: z.string().min(3), h1: z.string().min(3),
  metaTitle: z.string().min(10).max(70), metaDescription: z.string().min(50).max(160),
  content: z.string().min(50), lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const AuthorSchema = z.object({
  slug: z.string().min(1), name: z.string().min(2), role: z.string().min(2), bio: z.string().min(20),
  avatar: z.string(), experienceYears: z.number().int().nonnegative(),
  social: z.object({ twitter: z.string().optional(), linkedin: z.string().optional() }).optional(),
});

export const SiteConfigSchema = z.object({
  name: z.string().min(1), tagline: z.string().min(5), description: z.string().min(20), url: z.string().url(),
  copyrightYear: z.number().int(), foundedYear: z.number().int(), contactEmail: z.string().email(),
  defaultAuthor: AuthorSchema, fullDisclaimer: z.string().min(50),
});

export const SportCategorySchema = z.object({
  slug: z.string().min(1), name: z.string().min(2), h1: z.string().min(5), description: z.string().min(20),
  metaTitle: z.string().min(10).max(70), metaDescription: z.string().min(50).max(160),
  recommendedBookmakers: z.array(z.string()), isPopular: z.boolean(), order: z.number().int().nonnegative(),
});

export const CompetitionSchema = z.object({
  id: z.string().min(1), slug: z.string().min(1), sportSlug: z.string().min(1), name: z.string().min(2),
  isMajor: z.boolean(), order: z.number().int().nonnegative(), promotionalTags: z.array(z.string()),
  content: z.object({
    h1: z.string().min(5), excerpt: z.string().min(20), body: z.string().min(50),
    metaTitle: z.string().min(10).max(70), metaDescription: z.string().min(50).max(160),
  }),
});

export const SportEventSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  startTime: z.string(),
  sportSlug: z.string().min(1),
  competitionId: z.string().min(1),
  title: z.string().min(1),
  featuredOdds: z.string().optional(),
  isFeatured: z.boolean().default(false),
  eventLink: z.string().url().optional(),
  shortNote: z.string().min(1),
  promotionIds: z.array(z.string()),
  content: z.object({
    h1: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    excerpt: z.string(),
    body: z.string(),
  }).optional(),
  isActive: z.boolean().default(true),
});

export function validateWelcomeOffers(offers: unknown[]): z.infer<typeof WelcomeOfferSchema>[] {
  return offers.map((offer, i) => {
    try { return WelcomeOfferSchema.parse(offer); }
    catch (e) {
      if (e instanceof z.ZodError) {
        const slug = (offer as Record<string, unknown>)?.bookmakerSlug || `index ${i}`;
        throw new Error(`Invalid WelcomeOffer "${slug}": ${e.issues.map((x: z.ZodIssue) => x.message).join(', ')}`);
      }
      throw e;
    }
  });
}

export function validateBookmakers(bookmakers: unknown[]): z.infer<typeof BookmakerSchema>[] {
  return bookmakers.map((bm, i) => {
    try { return BookmakerSchema.parse(bm); }
    catch (e) {
      if (e instanceof z.ZodError) {
        const slug = (bm as Record<string, unknown>)?.slug || `index ${i}`;
        throw new Error(`Invalid Bookmaker "${slug}": ${e.issues.map((x: z.ZodIssue) => x.message).join(', ')}`);
      }
      throw e;
    }
  });
}

export function validateExtraPromotions(promos: unknown[]): z.infer<typeof ExtraPromotionSchema>[] {
  return promos.map((p, i) => {
    try { return ExtraPromotionSchema.parse(p); }
    catch (e) {
      if (e instanceof z.ZodError) {
        const id = (p as Record<string, unknown>)?.id || `index ${i}`;
        throw new Error(`Invalid ExtraPromotion "${id}": ${e.issues.map((x: z.ZodIssue) => x.message).join(', ')}`);
      }
      throw e;
    }
  });
}

const KeyStatSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const BonusGroupItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  quickVerdict: z.string().optional(),
  rating: z.number().min(1).max(5).optional(),
  badge: z.string().optional(),
  pros: z.array(z.string()).optional(),
  cons: z.array(z.string()).optional(),
  keyStats: z.array(KeyStatSchema).optional(),
  recommendedBookmakers: z.array(z.string()).optional(),
  content: z.string(),
});

const BonusGroupSchema = z.object({
  groupName: z.string(),
  items: z.array(BonusGroupItemSchema)
});

export const ExternalLinkSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  url: z.string().url(),
  bgColor: z.string().optional(),
});

export const ResourceTypeSchema = z.enum(RESOURCE_TYPES);
export const LinkedResourceSchema = z.object({
  id: z.string().min(1),
  type: ResourceTypeSchema,
  active: z.boolean(),
});

export const ComparisonTableSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  headers: z.array(z.string()).max(4),
  rows: z.array(z.array(z.string())).optional(),
  linkedResourceType: ResourceTypeSchema.optional(),
});

// Base schema with shared fields for all content types (guides, tool reviews, etc.)
export const BaseContentSchema = z.object({
  slug: z.string().min(1),
  h1: z.string().min(1),
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  intro: z.object({ title: z.string(), content: z.string() }),
  author: z.string().optional(),
  groups: z.array(BonusGroupSchema).optional(),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  footer: z.object({
    helpline: z.string().optional(),
    lastUpdated: z.string().optional(),
    dataSource: z.string().optional()
  }).optional(),
  collections: z.array(z.enum(['guides', 'tools', 'bettor-resources', 'featured', 'responsible-gambling'])).optional(),
  linkedResources: z.array(LinkedResourceSchema).optional(),
  comparisonTables: z.array(ComparisonTableSchema).optional(),
});

// Tool Review schema - for app reviews, betting tools, etc.
export const ToolReviewSchema = BaseContentSchema.extend({
  relatedAppId: z.string().optional(),
  verdict: z.string().optional(),
  pros: z.array(z.string()).optional(),
  cons: z.array(z.string()).optional(),
});

// Guide schema - alias for guides/articles (same as BaseContentSchema)
export const ContentGuideSchema = BaseContentSchema;

// Legacy alias - IndustryReportSchema for backwards compatibility
export const IndustryReportSchema = BaseContentSchema;
