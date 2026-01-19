// src/data/regions/index.ts
import { DEFAULT_REGION, RegionCode, BOOKMAKER_SLUGS } from '../constants';
import { SiteConfig } from '@/types';
import { adaptObjectToRegion } from '@/utils';
import { siteConfig as gbSiteConfig } from './gb/en/siteConfig';

export { DEFAULT_REGION };
export type { RegionCode };

export interface LegalInfo {
  regulator: string;
  regulatorFullName: string;
  regulatorUrl: string;
  minAge: number;
  complianceLinks: { name: string; url: string }[];
}

export interface RegionConfig {
  code: RegionCode;
  name: string;
  locale: string;
  currency: string;
  currencySymbol: string;
  defaultLanguage: string;
  languages: string[];
  enabledBookmakers: string[];
  legalInfo: LegalInfo;
}

export const regionRegistry: Record<RegionCode, RegionConfig> = {
  gb: {
    code: 'gb', name: 'United Kingdom', locale: 'en-GB', currency: 'GBP', currencySymbol: '£',
    defaultLanguage: 'en', languages: ['en'], enabledBookmakers: [...BOOKMAKER_SLUGS],
    legalInfo: {
      regulator: 'UKGC', regulatorFullName: 'UK Gambling Commission',
      regulatorUrl: 'https://www.gamblingcommission.gov.uk/', minAge: 18,
      complianceLinks: [
        { name: 'BeGambleAware', url: 'https://www.begambleaware.org/' },
        { name: 'GamCare', url: 'https://www.gamcare.org.uk/' },
        { name: 'GamStop', url: 'https://www.gamstop.co.uk/' },
      ],
    },
  },
  ie: {
    code: 'ie', name: 'Ireland', locale: 'en-IE', currency: 'EUR', currencySymbol: '€',
    defaultLanguage: 'en', languages: ['en'], enabledBookmakers: [...BOOKMAKER_SLUGS],
    legalInfo: {
      regulator: 'Revenue Commissioners', regulatorFullName: 'Irish Revenue Commissioners',
      regulatorUrl: 'https://www.revenue.ie/', minAge: 18,
      complianceLinks: [
        { name: 'Gambling Awareness Trust', url: 'https://www.gamblingcare.ie/' },
        { name: 'Extern Problem Gambling', url: 'https://www.extern.org/' },
      ],
    },
  },
};

export function getRegion(code: string): RegionConfig | undefined {
  return regionRegistry[code as RegionCode];
}

export function isValidRegion(code: string): code is RegionCode {
  return code in regionRegistry;
}

export function getAllRegions(): RegionConfig[] {
  return Object.values(regionRegistry);
}

export function getRegionOrDefault(code: string | undefined): RegionConfig {
  if (code && isValidRegion(code)) return regionRegistry[code];
  return regionRegistry[DEFAULT_REGION];
}

export function getCurrencySymbol(region: string = DEFAULT_REGION): string {
  return getRegion(region)?.currencySymbol || '£';
}

export function isBookmakerEnabledInRegion(slug: string, region: string = DEFAULT_REGION): boolean {
  return getRegion(region)?.enabledBookmakers.includes(slug) ?? false;
}

export function getSiteConfig(region: string): SiteConfig | null {
  if (region === 'gb') return gbSiteConfig;
  
  if (region === 'ie') {
    return adaptObjectToRegion(gbSiteConfig, 'ie');
  }
  
  return null;
}