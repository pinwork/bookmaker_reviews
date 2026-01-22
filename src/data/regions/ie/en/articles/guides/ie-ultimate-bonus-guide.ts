import { GuideArticle } from '@/types';

export const ieBonusGuide: GuideArticle = {
  slug: 'ie-betting-bonus-guide-2026',
  collections: ['guides'],
  h1: 'Ireland Betting Bonus Guide 2026: What is Legal Under GRAI?',
  metaTitle: 'Ireland Betting Bonuses 2026 | Free Bets, GRAI Rules & Tax Free Winnings',
  metaDescription: 'The complete guide to Irish betting offers under the new Gambling Regulation Act. Find out why "Targeted Inducements" are banned and which bonuses remain legal.',

  linkedResources: [
    { id: 'boylesports', type: 'bookmaker', active: true },
    { id: 'paddy-power', type: 'bookmaker', active: true },
    { id: 'bet365', type: 'bookmaker', active: true },
    { id: 'quinnbet', type: 'bookmaker', active: true },
    { id: 'sky-bet', type: 'bookmaker', active: true },
    { id: 'ladbrokes', type: 'bookmaker', active: true },
    { id: 'betfair', type: 'bookmaker', active: true },
  ],

  comparisonTables: [
    {
      id: 'ie-bonus-legality-2026',
      title: 'Bonus Comparison: Ireland (GRAI Rules)',
      headers: ['Bonus Type', 'Status', 'Tax', 'Key Benefit'],
      rows: [
        ['Welcome Offer', '✅ Legal', '0%', 'Bet €10 Get €30 deals'],
        ['Cashback', '✅ Legal', '0%', 'Same % for all (QuinnBet 25%)'],
        ['Tiered/VIP Cashback', '❌ BANNED', 'N/A', 'Based on betting history'],
        ['Targeted Reloads', '❌ BANNED', 'N/A', 'Individual loss-based offers'],
        ['Refer a Friend', '✅ Legal', '0%', 'Public offer available to all'],
        ['Early Payout', '✅ Legal', '0%', '2-up you win feature'],
        ['Universal Loyalty', '⚠️ Grey', '0%', 'Awaiting GRAI guidance'],
        ['Free-to-Play', '✅ Legal', '0%', 'Super 6, Score Challenge'],
      ]
    }
  ],

  intro: {
    title: 'The End of "Secret" Bonuses in Ireland',
    content: `The Gambling Regulation Act 2024 has fundamentally changed how bonuses work in Ireland. Under **Section 157**, "targeted inducements"—bonuses offered personally to you based on your betting history or losses—are now illegal. This means the end of VIP managers and "loss-chasing" emails. However, public offers available to everyone (like Welcome Bonuses and Early Payouts) remain fully legal. ESRI research commissioned by GRAI found that free bets increase spending by 10%+, supporting this strict ban on targeting.`
  },

  groups: [
    {
      groupName: 'Part 1: Legal Welcome Offers (Public)',
      items: [
        {
          id: 'bet_get_ie',
          title: 'Bet & Get (Standard)',
          content: 'The classic "Bet €10, Get €30/€40". Legal because it is a general acquisition offer available to the public. \n\n**Note:** In Ireland, winnings from free bets are completely tax-free.',
          quickVerdict: 'The best value for new accounts.'
        },
        {
          id: 'risk_free_ie',
          title: 'Money Back as Cash',
          content: 'If your first bet loses, you get a refund. Paddy Power is famous for this in Ireland. \n\n**Pro Tip:** Look for offers that refund as CASH, not a Free Bet. Cash can be withdrawn instantly.'
        }
      ]
    },
    {
      groupName: 'Part 2: Universal Rewards (Legal)',
      items: [
        {
          id: 'cashback_ie',
          title: 'Cashback Offers (Universal)',
          content: '**Universal cashback = LEGAL.** If ALL customers get the same % (e.g., QuinnBet 25% weekly), it\'s a general offer.\n\n**Targeted cashback = BANNED.** If the % varies by VIP tier or betting history, it\'s illegal targeting.\n\n**QuinnBet remains fully operational** in Ireland with its 25% weekly cashback model.'
        },
        {
          id: 'refer_friend_ie',
          title: 'Refer a Friend',
          content: '**Likely Legal.** This is a general public offer available to any customer, not targeted based on losses. Example: Paddy Power pays €20 when your friend places their first bet.'
        },
        {
          id: 'free_to_play_ie',
          title: 'Free-to-Play Games',
          content: 'Prediction games remain fully legal as they don\'t involve real money stakes.\n\n**Sky Sports Super 6:** Predict 6 scores for a £250k jackpot. Available to ROI residents.\n**Bet365 6 Scores Challenge:** €1m jackpot pool.'
        }
      ]
    },
    {
      groupName: 'Part 3: "Product Features" (Not Inducements)',
      items: [
        {
          id: 'acca_insurance_ie',
          title: 'Acca Insurance',
          content: 'If one leg of your 5+ fold accumulator fails, you get your stake back. This is a universal product feature, not a targeted inducement, so it remains fully legal.\n\n**Best for:** Betfred (often refunds as CASH), Ladbrokes, BoyleSports.'
        },
        {
          id: 'early_payout',
          title: '2-Up Early Payout',
          content: 'Considered a product feature. If your football team goes 2 goals up, you win instantly. Applies to Premier League, Champions League, and League of Ireland.'
        },
        {
          id: 'bog_ie',
          title: 'Best Odds Guaranteed (BOG)',
          content: 'Essential for Irish Racing. If SP is higher than your price, you get the bigger odds. \n\n**Warning:** Many firms exclude Skrill/Neteller deposits from BOG.'
        }
      ]
    },
    {
      groupName: 'Part 4: What Is Banned/Restricted?',
      items: [
        {
          id: 'vip_schemes',
          title: 'VIP & High Roller Schemes (BANNED)',
          content: 'Targeted offers based on how much you lose are prohibited to prevent "chasing losses". Do not expect a personal account manager in 2026.'
        },
        {
          id: 'loyalty_ie',
          title: 'Loyalty Clubs (Grey Area)',
          content: 'GRAI has not issued specific guidance yet. **Likely Legal:** Programs with identical rewards for ALL who opt-in. **Likely Banned:** Tiered programs based on spend.'
        },
        {
          id: 'grai_timeline',
          title: 'GRAI Enforcement Timeline (2025-2026)',
          content: 'While the Act is passed, full enforcement is phased. B2C license applications opened in Dec 2025. **Compliance monitoring is scheduled to begin in July 2026**, with the full enforcement framework operational by **Q3 2026**. Currently, no fines have been issued, but operators are already removing targeted VIP schemes to ensure compliance.'
        }
      ]
    }
  ],

  faq: [
    { q: 'Why did I stop getting emails with free bets?', a: 'Under Section 157 of the 2024 Act, targeted inducements based on your activity are banned. Bookies can no longer email you personally to encourage betting.' },
    { q: 'Is cashback legal in Ireland?', a: 'Yes, IF it is universal (same % for everyone, like QuinnBet). Tiered cashback based on VIP status or losses is banned as a targeted inducement.' },
    { q: 'Can I use Sky Bet in Ireland?', a: 'Yes. Sky Bet holds Irish Remote Bookmaker\'s Licences and accepts customers from the Republic of Ireland.' },
    { q: 'When will GRAI start enforcing bonus rules?', a: 'Full enforcement is expected by Q3 2026. Currently, we are in a transition period, and no fines have been issued yet.' },
    { q: 'Are free-to-play games legal?', a: 'Yes. Prediction games like Super 6 don\'t involve real money stakes and remain fully legal.' },
    { q: 'How is Ireland different from the UK?', a: 'In the UK, targeted inducements are allowed WITH consent. In Ireland, they are BANNED entirely regardless of consent, making Ireland one of the strictest markets in Europe.' }
  ],

  footer: {
    lastUpdated: '2026-01-20'
  }
};