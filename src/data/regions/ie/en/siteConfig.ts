// src/data/regions/ie/en/siteConfig.ts
// IE-specific overrides for navigation with localized article slugs

import {
  siteConfig as gbSiteConfig,
  defaultAuthor as gbDefaultAuthor,
  footerNavigation as gbFooterNavigation,
  seoDefaults as gbSeoDefaults,
  socialLinks as gbSocialLinks,
  featureFlags as gbFeatureFlags,
  getPageTitle,
  getCurrentYear,
  getSiteAge,
  NavItem,
} from '../../gb/en/siteConfig';

// Re-export unchanged items from GB
export const siteConfig = gbSiteConfig;
export const defaultAuthor = gbDefaultAuthor;
export const footerNavigation = gbFooterNavigation;
export const seoDefaults = gbSeoDefaults;
export const socialLinks = gbSocialLinks;
export const featureFlags = gbFeatureFlags;
export { getPageTitle, getCurrentYear, getSiteAge };
export type { NavItem };

// IE-specific navigation with localized article slugs
export const mainNavigation: NavItem[] = [
  { label: 'Betting Sites', href: '/betting-sites' },
  { label: 'Free Bets', href: '/free-bets' },
  { label: 'Reviews', href: '/reviews' },
  {
    label: 'Sports',
    href: '/sports',
    children: [
      { label: 'Football', href: '/sports/football' },
      { label: 'Horse Racing', href: '/sports/horse-racing' },
      { label: 'Tennis', href: '/sports/tennis' },
      { label: 'Golf', href: '/sports/golf' },
      { label: 'Boxing', href: '/sports/boxing' },
      { label: 'All Sports', href: '/sports' },
    ],
  },
  {
    label: 'Guides',
    href: '/guides',
    children: [
      { label: 'Bonus Guide', href: '/guides/ireland-betting-bonus-guide-2026' },
      { label: 'Betting Shops', href: '/guides/ireland-betting-shops-guide' },
      { label: 'Industry Report', href: '/guides/ireland-betting-market-analysis-2026' },
      { label: 'Responsible Gambling', href: '/guides/responsible-gambling-ireland-guide' },
      { label: 'All Guides', href: '/guides' },
    ],
  },
];
