import { getTrustBadgeImagePath } from '@/utils/images';

export interface TrustBadge {
  slug: string;
  name: string;
  url: string;
  regions: string[];
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
  return getTrustBadgeImagePath(badge.slug) || `/images/trust/${badge.slug}.svg`;
}

export function getTrustBadgeBySlug(slug: string): TrustBadge | undefined {
  return trustBadges.find((badge) => badge.slug === slug);
}

export function getTrustBadgesByRegion(region: string): TrustBadge[] {
  return trustBadges.filter((badge) => badge.regions.includes(region));
}