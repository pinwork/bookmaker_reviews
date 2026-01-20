import { BOOKMAKER_SLUGS } from '../../../../constants';
import { IndustryReport } from '@/types';

export const ultimateBonusGuide: IndustryReport = {
  slug: 'uk-betting-bonus-guide-2026',
  collections: ['guides', 'featured'],
  h1: 'The Ultimate Betting Bonus Bible 2026: Master Every Offer',
  metaTitle: 'Betting Bonus Guide 2026 | Comprehensive Rules & Mechanics',
  metaDescription: 'Complete masterclass on UK betting bonuses. 14+ mechanics explained: Deposit offers, Free Bets, Early Payouts, BOG, and Acca Insurance.',
  lastUpdated: '2026-01-28',

  relatedBookmakers: [
    'bet365', 'sky-bet', 'paddy-power', 'william-hill', 'ladbrokes', 'betfred', 'unibet'
  ] as typeof BOOKMAKER_SLUGS[number][],

  comparisonTable: {
    title: 'Comprehensive Bonus Comparison: 2026 UK Market',
    headers: ['Bonus Type', 'Best For', 'Complexity', 'Key Benefit'],
    rows: [
      ['Deposit Bonus', 'New Players', 'Medium', 'Doubles starting bankroll (£10 to £50)'],
      ['No Deposit', 'Risk-free Testing', 'Low', 'No financial commitment, £200 max cap'],
      ['Free Bet (SNR)', 'Daily Betting', 'Low', 'Wager without risking cash'],
      ['Refer a Friend', 'Social Bettors', 'Low', '£20-£50 cash per successful referral'],
      ['Reload Bonus', 'Active Players', 'Medium', 'Bonus on subsequent deposits'],
      ['Cashback', 'Regular Players', 'Low', '10-25% refund on weekly net losses'],
      ['Loyalty Club', 'Consistent Punters', 'Medium', 'Weekly £5-£10 free bets'],
      ['Price Boost', 'Value Hunters', 'Low', 'Artificially inflated odds'],
      ['Early Payout', 'Football & NBA', 'Low', 'Win even if team loses late (2-goal lead)'],
      ['Acca Insurance', 'Multi-bettors', 'High', 'Refund if 1 leg of 5+ fails'],
      ['Player Protection', 'Goalscorer Bets', 'Medium', 'Bet transfers to sub (Super Sub)'],
      ['Acca Boost', 'High Returns', 'Medium', 'Up to 70-100% extra cash profit'],
      ['Bet Builder', 'Match Specialists', 'High', 'Multiplied odds within one game'],
      ['BOG', 'Horse Racing', 'Low', 'Guaranteed highest SP from 8:00 AM'],
      ['Free-to-Play', 'Casual Fans', 'Zero', 'Win up to £250k-£1m for free']
    ]
  },

  intro: {
    title: 'Navigating the 2026 Betting Bonus Landscape',
    content: `In 2026, the gap between a casual punter and a pro is defined by how they use bonuses. Bookmakers have shifted from simple cash gifts to complex protections. This guide is the result of 100+ hours of research into UKGC regulations and bookmaker terms. We break down 14 mechanics across 5 logical stages of your betting journey.`
  },

  groups: [
    {
      groupName: 'Part 1: The Kickstart (New Customer Offers)',
      items: [
        {
          id: 'deposit_bonus',
          title: 'Deposit & Match Bonuses',
          quickVerdict: 'The biggest bankroll booster for new registrations.',
          recommendedBookmakers: ['william-hill', 'betfred', '10bet'],
          content: `### What is a Deposit Bonus?
A deposit bonus matches your initial deposit with a percentage (usually 100% or 200%) in bonus funds. In the UK, "Bet £10 Get £30-£50" is the standard.

### Real-World Example
Deposit £10 with **Betfred** and place a qualifying bet. Once settled, you receive **£50 in bonuses**. 
- **Wagering:** If a requirement is 3x, you must bet £150 total before withdrawing.
- **Expiry:** Usually **7 days**, but **Bet365** gives you **30 days** to claim and **90 days** to use credits.

### Common Mistakes
Using PayPal/Skrill usually voids the bonus. Stick to Debit Cards. Minimum odds are typically **1.50 (1/2)**, but **BoyleSports** allows as low as **1.20 (1/5)**.`
        },
        {
          id: 'no_deposit_bonus',
          title: 'No Deposit Bonuses',
          quickVerdict: 'Pure risk-free betting with zero financial commitment.',
          recommendedBookmakers: ['dabble', 'bet365'],
          content: `### Risk-Free Exploration
A No Deposit bonus provides a small token (£5-£10) just for registering. 

### Practice & Limits
You get a £10 free bet, win £50 profit. You can't withdraw £500 immediately; there is a **standard cap of £200** on maximum conversions. You must verify ID/Mobile before the bonus is credited.`
        },
        {
          id: 'free_bet',
          title: 'Free Bets (SNR Mechanics)',
          quickVerdict: 'A betting token where you keep only the profit, not the stake.',
          recommendedBookmakers: ['betfred', 'sky-bet', 'william-hill'],
          content: `### SNR: Stake Not Returned
The most common bonus type in the UK. Unlike a cash bet, the stake of a free bet is never returned to you; you only receive the winnings.

### Real-World Example
You place a £10 free bet on a selection at 3/1 (4.0).
- **If it wins:** You receive **£30 cash** (3/1 of £10).
- **If it was cash:** You would have received £40 (£30 winnings + £10 stake).

### Strategy
Since the stake is not returned, free bets are mathematically most valuable when used on higher odds (between 2.0 and 5.0) to maximize the potential return.`
        },
        {
          id: 'refer_a_friend',
          title: 'Refer a Friend',
          quickVerdict: 'Earn bonuses by inviting your friends to join.',
          recommendedBookmakers: ['paddy-power', 'unibet', 'betfair'],
          content: `### Social Betting Rewards
You share a unique link/code. Once your friend joins, deposits, and bets, you both get a reward.

### Example
You refer a friend to **Paddy Power**. They stake £10. You receive **£20 cash** (real withdrawable money).

### Limitations
Most UK bookies cap this at **5 friends per month**. The friend must be a totally new customer and cannot share your IP address or household.`
        }
      ]
    },
    {
      groupName: 'Part 2: Ongoing Rewards (Loyalty & Retention)',
      items: [
        {
          id: 'reload_bonus',
          title: 'Reload Bonuses',
          quickVerdict: 'Bonuses for existing players on subsequent deposits.',
          recommendedBookmakers: ['10bet', 'betway', 'bet365'],
          content: `### Keeping the Balance Full
Reloads are aimed at existing customers. They often appear during major events like the **Cheltenham Festival** or the **Grand National**.

### Example
A "50% Reload up to £20" means if you deposit £40, you get £20 extra. 
- **Comparison:** Reloads often have higher wagering requirements **than** welcome offers (e.g., 5x instead of 1x).`
        },
        {
          id: 'cashback',
          title: 'Cashback Offers',
          quickVerdict: 'A percentage refund on your net losses.',
          recommendedBookmakers: ['all-british-sports', 'quinnbet'],
          content: `### Net Loss Protection
Cashback softens losing streaks. **QuinnBet** offers **25% weekly cashback** (up to £50), while **All British Sports** provides a flat **10% daily** real cash refund.

### Real-World Example
Lose £100 over a week. Receive £10-£25 back. Real cash cashback has no wagering; free bet cashback must be used within **7 days**.`
        },
        {
          id: 'loyalty_program',
          title: 'Loyalty Clubs',
          quickVerdict: 'Recurring weekly rewards for consistent activity.',
          recommendedBookmakers: ['sky-bet', 'paddy-power', 'coral'],
          content: `### Weekly Free Bet Clubs
Stake a set amount (e.g., £25-£30) between Monday and Sunday. **Sky Bet Club** offers the most flexibility, with rewards lasting up to **365 days**, compared to the industry standard of **7 days**.`
        },
        {
          id: 'bet_boost',
          title: 'Price Boosts (Enhanced Odds)',
          quickVerdict: 'Artificially inflated odds on popular events.',
          recommendedBookmakers: ['sky-bet', 'ladbrokes', 'william-hill'],
          content: `### Finding Value
Bookmakers manually increase the odds of a favorite. 
- **Universal Boost:** Available to everyone on the homepage.
- **Personal Boost:** Tokens you apply yourself.

### Example
A horse is 2.0. The boost makes it **2.50**. Stake is usually capped at **£10-£20** for these special offers.`
        }
      ]
    },
    {
      groupName: 'Part 3: Protection (The Professional Choice)',
      items: [
        {
          id: 'early_payout',
          title: 'Early Payout (2-Goal Lead)',
          quickVerdict: 'Your bet wins instantly if your team takes a 2-goal lead.',
          recommendedBookmakers: ['bet365', 'paddy-power', 'sky-bet'],
          content: `### The Comeback Killer
If your team goes 2-0 up, the bet is settled as a winner. **Bet365** leads the market as it works on **accumulators** and multiple sports (NBA 20pts, NFL 17pts).

### Example
Back Liverpool. They go 2-0 up, then draw 2-2. You get paid in full. Cashing out early **disqualifies** you from this feature.`
        },
        {
          id: 'acca_insurance',
          title: 'Acca Insurance',
          quickVerdict: 'Refund if your acca loses by exactly one leg.',
          recommendedBookmakers: ['betfred', 'ladbrokes', 'boylesports'],
          content: `### Near-Miss Protection
Place a 5-fold+ accumulator. If 4 teams win but 1 draws/loses, you get your stake back.

### Example
You bet £10 on a 5-fold. 4 legs win, 1 loses. You get **£10 back**. **Betfred** is the leader here as they often refund in **CASH**, while others give free bets.`
        },
        {
          id: 'player_protection',
          title: 'Player Protection (Super Sub)',
          quickVerdict: 'Bet stays live if your player is substituted.',
          recommendedBookmakers: ['paddy-power', 'bet365', 'william-hill'],
          content: `### Super Sub & VAR
In 2026, **Paddy Power** and **Bet365** protect you if your goalscorer is subbed. The bet transfers to the replacement. It also covers VAR: if a goal is disallowed, most "Super Sub" markets remain active for the replacement.`
        }
      ]
    },
    {
      groupName: 'Part 4: Tools (Enhancing Your Bets)',
      items: [
        {
          id: 'acca_boost',
          title: 'Acca Boosts',
          quickVerdict: 'Extra profit added to winning accumulators.',
          recommendedBookmakers: ['bet365', '10bet'],
          content: `### Scaling Profits
Winnings increase based on legs: **5% for a treble (3 legs)** up to **70-100% for 14+ legs**. If one leg is voided, your boost drops to the lower tier automatically.`
        },
        {
          id: 'bet_builder',
          title: 'Bet Builders',
          quickVerdict: 'Combine multiple selections from the same match.',
          recommendedBookmakers: ['paddy-power', 'sky-bet', 'bet365'],
          content: `### Same Game Multis
Combine corners, cards, and scorers in one match. 

### Void Rules
If a player doesn't start: **Bet365** voids the whole builder. **Paddy Power** removes the leg and adjusts the odds. Most builders require at least 2 or 3 selections.`
        },
        {
          id: 'odds_guarantee',
          title: 'Best Odds Guaranteed (BOG)',
          quickVerdict: 'Always get the best price on Horse Racing.',
          recommendedBookmakers: ['bet365', 'coral', 'william-hill'],
          content: `### Timing is Everything
If you take 4/1 and SP is 6/1, you get 6/1. BOG starts at **8:00 AM** (Bet365, Coral, William Hill) or **9:00 AM** (Sky Bet). It never applies to Ante-Post bets.`
        }
      ]
    },
    {
      groupName: 'Part 5: Free-to-Play',
      items: [
        {
          id: 'free_to_play',
          title: 'Free Prediction Games',
          quickVerdict: 'Win jackpots without spending a penny.',
          recommendedBookmakers: ['sky-bet', 'bet365', 'ladbrokes'],
          content: `### Jackpots for Everyone
Predict 6 scores (Super 6) for a **£250k-£1m jackpot**. **Ladbrokes 1-2-Free** is the easiest to win, requiring only 3 correct scores for a £100 cash prize.`
        }
      ]
    }
  ],

  faq: [
    {
      q: 'What is Best Odds Guaranteed?',
      a: 'BOG ensures that if the Starting Price (SP) of a horse is higher than the odds you took, you get paid at the higher price. It typically starts daily at 8:00 AM.'
    },
    {
      q: 'Do free bets expire?',
      a: 'Yes. Most UK free bets expire in 7 days. However, Bet365 credits last 90 days, and Sky Bet Club rewards can last up to 365 days.'
    },
    {
      q: 'Does Early Payout work on accumulators?',
      a: 'Yes, but primarily at Bet365 and Sky Bet. If one team goes 2-0 up in your acca, that leg is marked as a winner immediately.'
    },
    {
      q: "What happens if a player doesn't start in Bet Builder?",
      a: 'At Bet365, the entire builder is voided. At Paddy Power, the specific leg is removed and the odds are adjusted for the remaining selections.'
    },
    {
      q: "What's the difference between cash and bonus funds?",
      a: 'Cash is withdrawable immediately. Bonus funds are "locked" until you meet wagering requirements (e.g., betting the amount 3x).'
    },
    {
      q: 'Can I use free bets on Bet Builders?',
      a: 'Most bookmakers allow this, but the stake is not returned (SNR). Some "Free Bet Builder" tokens are restricted specifically to that market.'
    },
    {
      q: 'What are wagering requirements?',
      a: 'It is the number of times you must bet your bonus (e.g., 3x £10 = £30 in total bets) before you can withdraw any winnings.'
    },
    {
      q: 'Why was my bonus rejected?',
      a: 'Common reasons include using an excluded payment method (PayPal/Skrill), depositing below the minimum (£5-£10), or having a duplicate account at the same address.'
    }
  ],

  tooltips: {
    free_bet: "A token for a wager. You keep the profit, but the stake is not returned (SNR).",
    bet_boost: "Artificially increased odds on selected events to provide better value.",
    early_payout: "Win instantly if your team goes 2-0 up, regardless of the final score.",
    acca_insurance: "Get your stake back as a free bet if exactly one leg of your 5+ fold acca loses.",
    bog: "Best Odds Guaranteed: Always get paid at the higher price if the SP drifts.",
    cashback: "Receive 10-25% of your weekly net losses back as cash or free bets.",
    snr: "Stake Not Returned: You keep the profit from a free bet, but the token itself is not cash.",
    wagering: "The total amount you must bet before bonus funds convert to withdrawable cash.",
    void: "When a selection is cancelled (e.g. postponed) and the stake is returned or odds adjusted.",
    sp: "Starting Price: The final official odds of a runner when the race begins.",
    ante_post: "Bets placed well in advance of an event, often before the final participants are confirmed."
  }
};