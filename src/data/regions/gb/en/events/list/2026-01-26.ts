import { SportEvent } from '@/types';

export const events: SportEvent[] = [
  {
    id: 'cheltenham-trial-2026',
    slug: 'cheltenham-trial-day-preview',
    startTime: '2026-01-26T13:30:00Z',
    sportSlug: 'horse-racing',
    competitionId: 'cheltenham-festival',
    title: 'Cheltenham Trials Day',
    shortNote: 'Key races for the upcoming Festival with BOG & Extra Places.',
    promotionIds: ['coral-pipped-post', 'bv-run-for-money'],
    content: {
      h1: 'Cheltenham Trials Day 2026: Racing Offers & Tips',
      metaTitle: 'Cheltenham Trials Day Offers | Horse Racing 2026',
      metaDescription: 'Find the best "Pipped at the Post" and "Run for Your Money" offers for Cheltenham Trials.',
      excerpt: 'The final major hurdle before the Festival. We look at the top contenders and racing protections.',
      body: `
## Racing Preview
Trials Day is the ultimate form guide for the March Festival. With testing ground expected, stamina will be the key factor in the feature races.

### Top Offers to Use
1. **Pipped at the Post:** Ideal for the close finishes often seen at the Cheltenham hill.
2. **Best Odds Guaranteed (BOG):** Essential for early morning prices on the main favourites.

### Key Runners
Keep an eye on the Henderson yard's entries, as they traditionally use this day to prove fitness for their Grade 1 stars.
      `.trim()
    },
    isActive: true
  }
];
