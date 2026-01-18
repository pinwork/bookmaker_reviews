import * as gbData from '../../gb/en';
import { adaptObjectToRegion } from '../../../utils';
import { ieBookmakerData } from './bookmakerData';

export const welcomeOffers = adaptObjectToRegion(gbData.welcomeOffers, 'ie');
export const extraPromotions = adaptObjectToRegion(gbData.extraPromotions, 'ie');
export const reviews = adaptObjectToRegion(gbData.reviews, 'ie');
export const events = adaptObjectToRegion(gbData.events, 'ie');
export const ultimateBonusGuide = adaptObjectToRegion(gbData.ultimateBonusGuide, 'ie');
export const responsibleGamblingBible = adaptObjectToRegion(gbData.responsibleGamblingBible, 'ie');
export const bettingShopsBible = adaptObjectToRegion(gbData.bettingShopsBible, 'ie');

export const bookmakerData = ieBookmakerData;

export { faqs, guides, sports, staticPages, siteConfig } from '../../gb/en';