// src/data/logos.ts
// Конфігурація логотипів букмекерів
// SVG файли в папці: public/images/bookmakers/

export interface LogoConfig {
  slug: string;
  backgroundColor: string;
}

export const bookmakerLogos: LogoConfig[] = [
  { slug: 'bet365', backgroundColor: '#027b5b' },
  { slug: 'betfair', backgroundColor: '#FFB80C' },
  { slug: 'william-hill', backgroundColor: '#0A3B5E' },
  { slug: 'ladbrokes', backgroundColor: '#EC1C24' },
  { slug: 'coral', backgroundColor: '#004696' },
  { slug: 'paddy-power', backgroundColor: '#004833' },
  { slug: 'sky-bet', backgroundColor: '#0C1C3E' },
  { slug: 'betfred', backgroundColor: '#0056A6' },
  { slug: '888sport', backgroundColor: '#fc6200' },
  { slug: 'unibet', backgroundColor: '#000000' },
  { slug: 'betvictor', backgroundColor: '#1D252D' },
  { slug: 'boylesports', backgroundColor: '#1E5631' },
  { slug: 'virgin-bet', backgroundColor: '#E10A0A' },
  { slug: 'matchbook', backgroundColor: '#c51a1b' },
  { slug: 'betway', backgroundColor: '#231F20' },
  { slug: 'netbet', backgroundColor: '#151515' },
  { slug: 'smarkets', backgroundColor: '#0d0d0d' },
  { slug: 'bwin', backgroundColor: '#000000' },
];

// Helper функції
export function getLogoPath(slug: string): string {
  return `/images/bookmakers/${slug}.svg`;
}

export function getLogoBackground(slug: string): string {
  const logo = bookmakerLogos.find((l) => l.slug === slug);
  return logo?.backgroundColor || '#1a1a2e';
}