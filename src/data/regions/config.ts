// src/data/regions/config.ts
// Centralized configuration for region-language mappings

export type RegionCode = 'gb' | 'ie';
export type LanguageCode = 'en';

export interface RegionConfig {
  languages: LanguageCode[];
  defaultLanguage: LanguageCode;
  name: string;
  currency: '£' | '€';
}

/**
 * Master configuration for all supported regions.
 *
 * Language-first architecture:
 * - Articles live in `articles/{lang}/` folders
 * - Regional overrides in `articles/overrides/{region}/{lang}/`
 * - Lookup order: override → language master
 */
export const regionConfig: Record<RegionCode, RegionConfig> = {
  gb: {
    languages: ['en'],
    defaultLanguage: 'en',
    name: 'United Kingdom',
    currency: '£',
  },
  ie: {
    languages: ['en'],
    defaultLanguage: 'en',
    name: 'Ireland',
    currency: '€',
  },
};

/**
 * Get languages supported by a region
 */
export function getRegionLanguages(region: string): LanguageCode[] {
  const config = regionConfig[region as RegionCode];
  return config?.languages ?? ['en'];
}

/**
 * Get default language for a region
 */
export function getRegionDefaultLanguage(region: string): LanguageCode {
  const config = regionConfig[region as RegionCode];
  return config?.defaultLanguage ?? 'en';
}

/**
 * Get all supported region codes
 */
export function getSupportedRegions(): RegionCode[] {
  return Object.keys(regionConfig) as RegionCode[];
}

/**
 * Check if a region is supported
 */
export function isValidRegion(region: string): region is RegionCode {
  return region in regionConfig;
}

/**
 * Get currency symbol for a region
 */
export function getRegionCurrency(region: string): '£' | '€' {
  const config = regionConfig[region as RegionCode];
  return config?.currency ?? '£';
}
