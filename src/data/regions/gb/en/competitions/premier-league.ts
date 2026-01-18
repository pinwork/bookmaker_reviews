import { Competition } from '@/types';

export const premierLeague: Competition = {
  id: 'pl',
  slug: 'premier-league',
  sportSlug: 'football',
  name: 'Premier League',
  isMajor: true,
  order: 1,
  promotionalTags: ['early-payout', 'acca-boost', 'bore-draw', 'goalscorer-protection'],
  content: {
    h1: 'Premier League Betting Guide 2026',
    excerpt: 'The ultimate resource for English Premier League betting. We compare the best bookmakers and analyze top odds.',
    metaTitle: 'Best Premier League Betting Sites & Offers 2026 | FreeBetGeek',
    metaDescription: 'Expert guide to Premier League betting. Compare UKGC licensed bookmakers and get the best odds for the 2025/26 season.',
    body: `
## Premier League Overview
The English Premier League (EPL) is the most popular football league globally. For bettors, it represents the highest liquidity and the widest range of markets.

### Top Betting Markets
1. **Match Result (1X2):** The most straightforward bet on the outcome of a game.
2. **Both Teams to Score (BTTS):** Extremely popular in the PL.
3. **Bet Builders:** Combining markets like corners, cards, and goalscorers.

### Key Betting Features
- **Early Payout:** Get paid as a winner if your team goes 2 goals up.
- **Acca Boost:** Extra percentage on successful accumulators.
    `.trim(),
  },
};