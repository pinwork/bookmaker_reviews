// src/data/regions/ie/en/index.ts
// NOTE: Articles are now managed in src/data/articles/ with language-first architecture
// Import articles through src/data/articles.ts public API

import * as gbData from '../../gb/en';
import { adaptObjectToRegion } from '@/utils';
import { ieBookmakerData } from './bookmakerData';

export const welcomeOffers = adaptObjectToRegion(gbData.welcomeOffers, 'ie');
export const extraPromotions = adaptObjectToRegion(gbData.extraPromotions, 'ie');
export const reviews = adaptObjectToRegion(gbData.reviews, 'ie');
export const events = adaptObjectToRegion(gbData.events, 'ie');

export const bookmakerData = ieBookmakerData;

export { staticPages } from '../../gb/en';
export { siteConfig, mainNavigation } from './siteConfig';