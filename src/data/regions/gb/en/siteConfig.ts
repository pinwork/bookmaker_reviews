// src/data/regions/gb/en/siteConfig.ts
import { SiteConfig, Author } from '../../../../types';

export const defaultAuthor: Author = {
  slug: 'freebetgeek-team',
  name: 'FreeBetGeek Team',
  role: 'Betting Experts',
  bio: 'The FreeBetGeek team consists of experienced betting industry professionals dedicated to helping UK punters find the best bookmakers, welcome offers, and betting value. We test every bookmaker ourselves and provide honest, independent reviews.',
  avatar: '/images/authors/team-avatar.png',
  experienceYears: 10,
  social: {
    twitter: 'https://twitter.com/freebetgeek',
  },
};

export const siteConfig: SiteConfig = {
  name: 'FreeBetGeek',
  tagline: 'Your Expert Guide to UK Betting Sites & Free Bets',
  description: 'FreeBetGeek helps UK punters find the best betting sites, welcome offers, and free bets. Independent reviews, honest comparisons, and expert analysis of UKGC licensed bookmakers.',
  url: 'https://freebetgeek.com',
  copyrightYear: 2026,
  foundedYear: 2024,
  contactEmail: 'contact@freebetgeek.com',
  defaultAuthor: defaultAuthor,
  fullDisclaimer: `FreeBetGeek is an independent affiliate website. We may receive commission from bookmakers when you sign up through our links, but this does not affect our reviews or recommendations. All bookmakers featured are licensed by the UK Gambling Commission. Gambling can be addictive. Please gamble responsibly. For help and support, visit GambleAware.org or call 0808 8020 133. 18+ only.`,
};

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

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
      { label: 'Betting Odds Explained', href: '/guides/betting-odds-explained' },
      { label: 'How Free Bets Work', href: '/guides/how-free-bets-work' },
      { label: 'Accumulator Guide', href: '/guides/accumulator-betting-guide' },
      { label: 'All Guides', href: '/guides' },
    ],
  },
];

export const footerNavigation = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Responsible Gambling', href: '/responsible-gambling' },
  ],
  resources: [
    { label: 'Betting Guides', href: '/guides' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Bookmaker Reviews', href: '/reviews' },
  ],
};

export const seoDefaults = {
  titleTemplate: '%s | FreeBetGeek',
  defaultTitle: 'FreeBetGeek - UK Betting Sites, Free Bets & Expert Reviews',
  defaultDescription: 'Compare the best UK betting sites and free bet offers. Independent bookmaker reviews, welcome bonus comparisons, and expert betting guides. 18+ BeGambleAware.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'FreeBetGeek',
  },
  twitter: {
    handle: '@freebetgeek',
    cardType: 'summary_large_image',
  },
};

export const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/freebetgeek',
    icon: 'Twitter',
  },
];

export const featureFlags = {
  showBlogSection: false,
  showLiveOdds: false,
  showUserReviews: false,
  enableDarkMode: false,
  showPromoBanners: true,
};

export const getPageTitle = (title?: string): string => {
  if (!title) return seoDefaults.defaultTitle;
  return seoDefaults.titleTemplate.replace('%s', title);
};

export const getCurrentYear = (): number => new Date().getFullYear();

export const getSiteAge = (): number => {
  return getCurrentYear() - siteConfig.foundedYear;
};