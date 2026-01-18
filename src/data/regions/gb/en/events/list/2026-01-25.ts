import { SportEvent } from '@/types';

export const events: SportEvent[] = [
  {
    id: 'ars-liv-2026-01-25',
    slug: 'arsenal-vs-liverpool-offers',
    startTime: '2026-01-25T16:30:00Z',
    sportSlug: 'football',
    competitionId: 'pl',
    title: 'Arsenal vs Liverpool',
    shortNote: 'Top-of-the-table clash with Early Payout & Acca Boosts.',
    promotionIds: ['b365-soccer-early-payout', 'betway-free-bet-club'],
    content: {
      h1: 'Arsenal vs Liverpool Betting Offers: Preview & Best Odds',
      metaTitle: 'Arsenal vs Liverpool Betting Offers | Premier League 2026',
      metaDescription: 'Expert analysis and the best betting offers for Arsenal vs Liverpool. Get Early Payout and Free Bet Club details.',
      excerpt: 'The two main title contenders face off at the Emirates Stadium in a potential season-defining match.',
      body: `
## Match Analysis
Arsenal comes into this game with a perfect home record, while Liverpool has been dominant in their away fixtures. This is a classic tactical battle between two of the league's best defensive units.

### Best Betting Strategies
Given the high stakes, we expect a cautious start. However, using the **Early Payout** offer is a smart move here, as both teams have the quality to recover from a goal down.

### Why follow this event?
- Direct title race implications.
- High-value odds boosts across all major UK bookmakers.
- Multiple 'Sub On Play On' protections available.
      `.trim()
    },
    isActive: true
  }
];
