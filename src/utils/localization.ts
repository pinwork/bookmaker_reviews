// src/utils/localization.ts
import { getRegion, DEFAULT_REGION, getCurrencySymbol as getRegionCurrencySymbol } from '@/data/regions';

export const adaptTextToRegion = (text: string, region: string = DEFAULT_REGION): string => {
  const config = getRegion(region);
  if (!config || region === DEFAULT_REGION || !text) return text;
  return text
    .replace(/£/g, config.currencySymbol)
    .replace(/GBP/g, config.currency)
    .replace(/UK(?!\w)/g, config.name)
    .replace(/British/g, region === 'ie' ? 'Irish' : config.name)
    .replace(/UKGC/g, config.legalInfo.regulator);
};

export const adaptObjectToRegion = <T>(obj: T, region: string): T => {
  if (region === DEFAULT_REGION) return obj;
  const json = JSON.stringify(obj);
  const adaptedJson = adaptTextToRegion(json, region);
  return JSON.parse(adaptedJson);
};

export const getCurrencySymbol = (region: string = DEFAULT_REGION): string => {
  return getRegionCurrencySymbol(region);
};
