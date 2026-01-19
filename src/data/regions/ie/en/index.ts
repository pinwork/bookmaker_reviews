import * as gbData from '../../gb/en';
import { adaptObjectToRegion } from '@/utils';
import { ieBookmakerData } from './bookmakerData';
import { ieBonusGuide } from './promoGuides/ie-ultimate-bonus-guide';
import { responsibleGamblingIrelandBible } from './promoGuides/responsible-gambling-ie-bible';
import { ieBettingShopsBible } from './promoGuides/ie-betting-shops-bible';
import { ieBettingIndustryReport } from './promoGuides/ie-betting-industry-report';

export const welcomeOffers = adaptObjectToRegion(gbData.welcomeOffers, 'ie');
export const extraPromotions = adaptObjectToRegion(gbData.extraPromotions, 'ie');
export const reviews = adaptObjectToRegion(gbData.reviews, 'ie');
export const events = adaptObjectToRegion(gbData.events, 'ie');

export const ultimateBonusGuide = ieBonusGuide;
export const responsibleGamblingBible = responsibleGamblingIrelandBible;
export const bettingShopsBible = ieBettingShopsBible;
export const bettingIndustryReport = ieBettingIndustryReport;

export const bookmakerData = ieBookmakerData;

export { sports, staticPages, siteConfig } from '../../gb/en';