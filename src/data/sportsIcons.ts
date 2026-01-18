// src/data/sportsIcons.ts
// Sports icons configuration for UK betting site
// SVG files location: public/images/sports/

export interface SportIcon {
  slug: string;
  name: string;
  isPopularUK: boolean;
}

export const sportsIcons: SportIcon[] = [
  // Top UK Sports
  { slug: 'football', name: 'Football', isPopularUK: true },
  { slug: 'horse-racing', name: 'Horse Racing', isPopularUK: true },
  { slug: 'tennis', name: 'Tennis', isPopularUK: true },
  { slug: 'cricket', name: 'Cricket', isPopularUK: true },
  { slug: 'golf', name: 'Golf', isPopularUK: true },
  { slug: 'rugby', name: 'Rugby', isPopularUK: true },
  { slug: 'boxing', name: 'Boxing', isPopularUK: true },
  { slug: 'darts', name: 'Darts', isPopularUK: true },
  { slug: 'snooker', name: 'Snooker', isPopularUK: true },
  { slug: 'greyhound-racing', name: 'Greyhound Racing', isPopularUK: true },
  
  // Popular International
  { slug: 'formula-1', name: 'Formula 1', isPopularUK: true },
  { slug: 'american-football', name: 'American Football', isPopularUK: true },
  { slug: 'basketball', name: 'Basketball', isPopularUK: true },
  { slug: 'ice-hockey', name: 'Ice Hockey', isPopularUK: false },
  { slug: 'mma', name: 'MMA', isPopularUK: true },
  { slug: 'esports', name: 'Esports', isPopularUK: true },
  
  // Additional Sports
  { slug: 'baseball', name: 'Baseball', isPopularUK: false },
  { slug: 'handball', name: 'Handball', isPopularUK: false },
  { slug: 'volleyball', name: 'Volleyball', isPopularUK: false },
  { slug: 'table-tennis', name: 'Table Tennis', isPopularUK: false },
];

// Helper functions

export function getSportIconPath(slug: string): string {
  return `/images/sports/${slug}.svg`;
}

export function getSportIconBySlug(slug: string): SportIcon | undefined {
  return sportsIcons.find((sport) => sport.slug === slug);
}

export function getPopularUKSports(): SportIcon[] {
  return sportsIcons.filter((sport) => sport.isPopularUK);
}