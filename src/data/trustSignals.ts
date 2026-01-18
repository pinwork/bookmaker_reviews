// src/data/trustSignals.ts
export interface TrustBadge {
  slug: string;
  name: string;
  url: string;
}

export const trustBadges: TrustBadge[] = [
  { slug: 'begambleaware', name: 'BeGambleAware', url: 'https://www.begambleaware.org' },
  { slug: 'gamstop', name: 'GAMSTOP', url: 'https://www.gamstop.co.uk' },
  { slug: 'gamcare', name: 'GamCare', url: 'https://www.gamcare.org.uk' },
  { slug: 'gambling-therapy', name: 'Gambling Therapy', url: 'https://www.gamblingtherapy.org' },
  { slug: 'raig', name: 'RAIG', url: 'https://www.raig.org' },
  { slug: '18plus', name: '18+', url: '#' },
];

export function getTrustBadgePath(slug: string): string {
  return `/images/trust/${slug}.svg`;
}

export function getTrustBadgeBySlug(slug: string): TrustBadge | undefined {
  return trustBadges.find((badge) => badge.slug === slug);
}