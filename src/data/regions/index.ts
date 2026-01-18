// src/data/regions/index.ts

export interface RegionConfig {
  name: string;
  locale: string;
  currency: string;
  currencySymbol: string;
  defaultLanguage: string;
  languages: string[];
  enabledBookmakers: string[];
}

export const regionRegistry: Record<string, RegionConfig> = {
  gb: {
    name: 'United Kingdom',
    locale: 'en-GB',
    currency: 'GBP',
    currencySymbol: '£',
    defaultLanguage: 'en',
    languages: ['en'],
    enabledBookmakers: [
      'bet365', 'betfair', 'william-hill', 'ladbrokes', 'coral',
      'paddy-power', 'sky-bet', 'betfred', '888sport', 'unibet',
      'betvictor', 'boylesports', 'virgin-bet', 'betway',
      'matchbook', 'netbet', 'smarkets', 'bwin'
    ]
  },
  ie: {
    name: 'Ireland',
    locale: 'en-IE',
    currency: 'EUR',
    currencySymbol: '€',
    defaultLanguage: 'en',
    languages: ['en'],
    enabledBookmakers: [
      'bet365', 'betfair', 'william-hill', 'ladbrokes', 'coral',
      'paddy-power', 'sky-bet', 'betfred', '888sport', 'unibet',
      'betvictor', 'boylesports', 'virgin-bet', 'betway',
      'matchbook', 'netbet', 'smarkets', 'bwin'
    ]
  }
};