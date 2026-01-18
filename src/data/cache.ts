// src/data/cache.ts
import type { BookmakerComplete, WelcomeOffer, ExtraPromotion } from '@/types';
import { DEFAULT_REGION } from './regions';

let bookmakersByRegion: Map<string, Map<string, BookmakerComplete>> | null = null;
let offersByRegion: Map<string, Map<string, WelcomeOffer[]>> | null = null;
let promosByRegion: Map<string, Map<string, ExtraPromotion[]>> | null = null;

function buildBookmakerIndex(region: string, buildFn: (region: string) => BookmakerComplete[]): Map<string, BookmakerComplete> {
  const bookmakers = buildFn(region);
  return new Map(bookmakers.map(b => [b.slug, b]));
}

export function getBookmakerIndex(region: string = DEFAULT_REGION, buildFn: (region: string) => BookmakerComplete[]): Map<string, BookmakerComplete> {
  if (!bookmakersByRegion) bookmakersByRegion = new Map();
  if (!bookmakersByRegion.has(region)) bookmakersByRegion.set(region, buildBookmakerIndex(region, buildFn));
  return bookmakersByRegion.get(region)!;
}

export function getCachedBookmaker(slug: string, region: string = DEFAULT_REGION, buildFn: (region: string) => BookmakerComplete[]): BookmakerComplete | undefined {
  return getBookmakerIndex(region, buildFn).get(slug);
}

function buildOffersIndex(offers: WelcomeOffer[]): Map<string, WelcomeOffer[]> {
  const index = new Map<string, WelcomeOffer[]>();
  for (const offer of offers) {
    const existing = index.get(offer.bookmakerSlug) || [];
    existing.push(offer);
    index.set(offer.bookmakerSlug, existing);
  }
  return index;
}

export function setOffersIndex(region: string, offers: WelcomeOffer[]): void {
  if (!offersByRegion) offersByRegion = new Map();
  offersByRegion.set(region, buildOffersIndex(offers));
}

export function getCachedOffers(bookmakerSlug: string, region: string = DEFAULT_REGION): WelcomeOffer[] | undefined {
  return offersByRegion?.get(region)?.get(bookmakerSlug);
}

export function isOffersCacheReady(region: string = DEFAULT_REGION): boolean {
  return offersByRegion?.has(region) ?? false;
}

function buildPromosIndex(promos: ExtraPromotion[]): Map<string, ExtraPromotion[]> {
  const index = new Map<string, ExtraPromotion[]>();
  for (const promo of promos) {
    const existing = index.get(promo.bookmakerSlug) || [];
    existing.push(promo);
    index.set(promo.bookmakerSlug, existing);
  }
  return index;
}

export function setPromosIndex(region: string, promos: ExtraPromotion[]): void {
  if (!promosByRegion) promosByRegion = new Map();
  promosByRegion.set(region, buildPromosIndex(promos));
}

export function getCachedPromos(bookmakerSlug: string, region: string = DEFAULT_REGION): ExtraPromotion[] | undefined {
  return promosByRegion?.get(region)?.get(bookmakerSlug);
}

export function clearCache(): void {
  bookmakersByRegion = null;
  offersByRegion = null;
  promosByRegion = null;
}

export function clearRegionCache(region: string): void {
  bookmakersByRegion?.delete(region);
  offersByRegion?.delete(region);
  promosByRegion?.delete(region);
}

export function getCacheStats(): { regions: string[]; bookmakersCached: number; offersCached: number; promosCached: number } {
  const regions = new Set<string>();
  bookmakersByRegion?.forEach((_, region) => regions.add(region));
  offersByRegion?.forEach((_, region) => regions.add(region));
  promosByRegion?.forEach((_, region) => regions.add(region));

  let bookmakersCached = 0, offersCached = 0, promosCached = 0;
  bookmakersByRegion?.forEach(map => { bookmakersCached += map.size; });
  offersByRegion?.forEach(map => { map.forEach(offers => { offersCached += offers.length; }); });
  promosByRegion?.forEach(map => { map.forEach(promos => { promosCached += promos.length; }); });

  return { regions: Array.from(regions), bookmakersCached, offersCached, promosCached };
}
