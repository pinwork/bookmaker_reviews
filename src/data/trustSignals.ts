export interface TrustBadge {
  slug: string;
  name: string;
  url: string;
  regions: string[];
  ext?: 'svg' | 'png';
}

export const trustBadges: TrustBadge[] = [
  {
    slug: 'begambleaware',
    name: 'BeGambleAware',
    url: 'https://www.begambleaware.org',
    regions: ['gb'],
  },
  {
    slug: 'gamstop',
    name: 'GAMSTOP',
    url: 'https://www.gamstop.co.uk',
    regions: ['gb'],
  },
  {
    slug: 'gamcare',
    name: 'GamCare',
    url: 'https://www.gamcare.org.uk',
    regions: ['gb'],
  },
  {
    slug: 'gamblingcare-ie',
    name: 'GamblingCare.ie',
    url: 'https://gamblingcare.ie',
    regions: ['ie'],
    ext: 'png',
  },
  {
    slug: 'gambling-therapy',
    name: 'Gambling Therapy',
    url: 'https://www.gamblingtherapy.org',
    regions: ['gb', 'ie'],
  },
  {
    slug: 'raig',
    name: 'RAIG',
    url: 'https://www.raig.org',
    regions: ['gb', 'ie'],
  },
  {
    slug: '18plus',
    name: '18+',
    url: '#',
    regions: ['gb', 'ie'],
  },
];

export function getTrustBadgePath(badge: TrustBadge): string {
  const extension = badge.ext || 'svg';
  return `/images/trust/${badge.slug}.${extension}`;
}

export function getTrustBadgeBySlug(slug: string): TrustBadge | undefined {
  return trustBadges.find((badge) => badge.slug === slug);
}

export function getTrustBadgesByRegion(region: string): TrustBadge[] {
  return trustBadges.filter((badge) => badge.regions.includes(region));
}