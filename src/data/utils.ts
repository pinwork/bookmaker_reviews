import { regionRegistry } from './regions';

export const adaptTextToRegion = (text: string, region: string = 'gb'): string => {
  const config = regionRegistry[region];
  if (!config || region === 'gb' || !text) return text;

  return text
    .replace(/£/g, config.currencySymbol)
    .replace(/GBP/g, config.currency)
    .replace(/UK/g, config.name)
    .replace(/British/g, region === 'ie' ? 'Irish' : config.name)
    .replace(/UKGC/g, region === 'ie' ? 'Irish Revenue' : 'Local Regulator');
};

export const adaptObjectToRegion = <T>(obj: T, region: string): T => {
  if (region === 'gb') return obj;
  const json = JSON.stringify(obj);
  const adaptedJson = adaptTextToRegion(json, region);
  return JSON.parse(adaptedJson);
};

export const getCurrencySymbol = (region: string = 'gb'): string => {
  return regionRegistry[region]?.currencySymbol || '£';
};