import { GuideArticle } from '@/types';

export const bettingAccountRestrictionsGubbingGuide: GuideArticle = {
  slug: 'betting-account-restrictions-gubbing-guide',
  collections: ['guides'],
  h1: 'Betting Account Restrictions & Gubbing: A Survival Guide',
  metaTitle: 'Account Restrictions & Gubbing Explained | How Bookies Track You',
  metaDescription: 'Why winners get banned. Deep dive into Stake Factoring, Iovation tracking, IE Snare, and proven strategies to extend your betting account life.',

  intro: {
    title: 'The Invisible War on Winners',
    content: `For casual punters, gambling is entertainment. For bookmakers, it's a business optimised to identify and remove customers who threaten profitability. This process is known as "gubbing."

You don't need to win thousands to get restricted. The primary metric risk teams watch is **Closing Line Value (CLV)**. Beat the starting price consistently and you're marked as a "sharp" bettor—even if you're currently losing money.

This guide decodes the "Black Box" of risk management: how tracking cookies like Iovation fingerprint your device, why betting £12.43 is a death sentence, and the mathematical reality of survival strategies.`
  },

  keyTakeaways: [
    'Closing Line Value (CLV) triggers bans faster than actual profits — you can lose money and still get restricted',
    'Iovation fingerprints 40+ device data points; flags at one bookie follow you to others',
    'Mug betting extends account life 3x longer according to controlled studies',
  ],

  comparisonTables: [
    {
      id: 'stake-factor-scale',
      title: 'The Stake Factor (SF) System',
      headers: ['Factor', 'Category', 'Max Bet Permission'],
      rows: [
        ['5.00+', 'VIP Loser ("Whale")', '500% of standard limit'],
        ['1.00', 'Standard Account', '100% (e.g., £500 on EPL)'],
        ['0.45', 'Price Sensitive', '45% (Oddschecker users)'],
        ['0.10', 'Confirmed Sharp', '10% (Pre-cursor to gubbing)'],
        ['0.01', 'Fully Restricted', '1% (Effectively banned)'],
      ],
    },
    {
      id: 'soft-vs-sharp',
      title: 'Soft Books vs Sharp Books',
      headers: ['Feature', 'Soft Books', 'Sharp Books'],
      rows: [
        ['Business Model', 'High Margin (5-7%)', 'Low Margin (2-3%)'],
        ['Policy on Winners', 'Restrict or Ban', 'Welcome & Use for pricing'],
        ['Lifespan for Pros', '8-16 weeks', 'Indefinite'],
        ['Best For', 'Bonuses & Matched Betting', 'Arbitrage & Value Betting'],
      ],
    },
  ],

  groups: [
    {
      groupName: 'The Panopticon: How They Track You',
      items: [
        {
          id: 'iovation-device-fingerprinting',
          title: 'Iovation & Device Fingerprinting',
          keyStats: [
            { label: 'Data Points', value: '40+' },
            { label: 'Reach', value: '8 of top 10 platforms' },
            { label: 'Transactions', value: '4B+ annually' },
          ],
          content: `### The "IE Snare" Cookie

Bookmakers don't just analyse your bets. They analyse your hardware. Tools like Iovation (IE Snare) and Sift Science create a permanent digital fingerprint of your device.

This script collects over **40 data points** within milliseconds of a page load:

- **Canvas Fingerprinting:** How your specific GPU renders graphics
- **Hardware IDs:** Battery API, screen resolution, installed fonts
- **Network Leaks:** WebRTC data that bypasses VPNs

### The Shared Ledger

Iovation operates a consortium database. Get flagged for "Bonus Abuse" at William Hill, and your device ID lands on a blacklist. Open an account at Ladbrokes (which also uses Iovation), and their system sees "High Risk" before you place a single bet.

The fingerprint survives clearing cookies. It survives reinstalling browsers. Only a completely new device breaks the chain.`
        },
        {
          id: 'stake-factoring',
          title: 'Stake Factoring: The Hidden Score',
          content: `### Your Account's Credit Score

Every betting account carries a hidden multiplier called a **Stake Factor (SF)**.

New accounts typically start at SF 1.00. Deposit and immediately bet max stakes on a niche market (Peruvian 2nd Division), and the algorithm may instantly drop you to SF 0.10. You rarely get a notification. You simply try to bet £50, and the slip says "Max Stake £1.42".

### How Fast It Drops

The descent is brutal. One user reported going from SF 1.00 to SF 0.05 after just three bets on obscure Asian Handicap markets. Another maintained SF 0.80 for months by exclusively betting on televised Premier League matches.

The algorithm watches two things: what markets you bet, and whether your odds consistently beat the closing line.`
        },
      ],
    },
    {
      groupName: 'The Red Flag Checklist',
      items: [
        {
          id: 'behavioral-triggers',
          title: 'Behavioural Triggers',
          quickVerdict: 'Betting £12.43 is the fastest way to get banned',
          content: `### Precision Staking

Recreational players bet round numbers: £10, £20, £50. Arbitrage software calculates exact stakes to maximise profit (e.g., £12.43).

**Rule:** Always round your stakes to the nearest £5. Non-round numbers flag you as a user of "Arbing Calculators" instantly.

### The Liquidity Trap

Big money on major markets (Premier League) is hard to spot. Max limits on low-liquidity markets (Ukrainian Table Tennis, ITF Tennis, Women's Volleyball) screams "Insider Knowledge."

Risk teams know their pricing is weak in these markets. They aggressively restrict anyone exploiting them. A £20 bet on Latvian Women's Basketball draws more scrutiny than £500 on Manchester United.`
        },
        {
          id: 'closing-line-value',
          title: 'Closing Line Value (CLV)',
          content: `### The #1 Metric for Bans

Bookmakers compare the odds you took versus the odds at kick-off.

Back a horse at 5.0 that starts at 3.5, and you beat the market. Do this consistently and you prove mathematical edge. You can be losing money overall—but if your CLV is consistently positive, restriction is inevitable.

### Why CLV Matters More Than Profit

Short-term results involve variance. A punter might lose £2,000 over three months despite positive CLV. The bookmaker's model recognises that this betting pattern will become profitable given sufficient volume. They restrict preemptively.

Professional traders at sharp books like Pinnacle actually use CLV as their primary success metric, not P&L. Bookies apply the same logic in reverse.`
        },
      ],
    },
    {
      groupName: 'Survival Strategies (White Hat)',
      items: [
        {
          id: 'mug-betting-effectiveness',
          title: 'Does "Mug Betting" Work?',
          keyStats: [
            { label: 'Study Duration', value: '12 weeks' },
            { label: 'Non-Mug Gubbings', value: '3.1 per person' },
            { label: 'Mug Bettor Gubbings', value: '1.1 per person' },
          ],
          content: `### The Reality of Camouflage

"Mug Betting" means placing poor-value bets on high-profile events to look like a recreational player.

A controlled experiment tracked 20 matched bettors over 12 weeks. The group using Mug Betting retained accounts **3x longer** than those who didn't.

### Effective Mugging Techniques

- **TV Football:** Bet on matches shown live on Sky or TNT Sports
- **Accumulators:** Bookies love these high-margin products—place one occasionally
- **Casino Cross-Play:** Spinning £10 on slots tags you as a "cross-product" user, increasing trust
- **In-Play Betting:** Recreational punters bet in-play; sharps tend to take early prices

The key is consistency. One mug bet per week won't save an account that hammers every arb opportunity.`
        },
        {
          id: 'privacy-tools-reality',
          title: 'Privacy Tools vs Reality',
          content: `### The VPN Myth

Using a VPN often causes more harm than good.

Datacentre IPs belonging to NordVPN, ExpressVPN, and similar services are well-documented. Bookies flag them as "hiding location" before analysing your bets.

### What Actually Works

- **Residential Proxies:** Safer but expensive (£50-200/month)
- **Mobile Data:** The best camouflage. 4G/5G IPs are dynamic and shared by thousands of users—very hard to blacklist
- **Device Rotation:** A new phone every 6 months is cheaper than losing £5,000 in account value

WebRTC leaks expose your real IP even with a VPN active. Disable WebRTC in browser settings, or use a browser like Brave that blocks it by default.`
        },
        {
          id: 'account-warming',
          title: 'Account Warming',
          content: `### Never Sprint From the Start

New account behaviour sets your initial Stake Factor. Follow this protocol:

1. **Deposit Above Minimum:** Don't deposit exactly £10 for a £10 bonus. Deposit £20 or £50
2. **Wait 24 Hours:** Don't bet instantly after depositing. Let the account breathe
3. **Loss Leader Strategy:** Place a few small bets on high-margin markets (an accumulator, an obscure football special) before hitting valuable offers

### The First 72 Hours

This window determines your account trajectory. Bet exclusively on TV football. Avoid odds comparison sites—some bookies detect referrer traffic from Oddschecker and immediately lower your Stake Factor to 0.45.

Use the mobile app rather than desktop. Mobile users statistically have higher lifetime value, and risk algorithms treat them more favourably.`
        },
      ],
    },
  ],

  faq: [
    {
      q: 'If I intentionally lose some bets, will my limits increase?',
      a: 'No. Once your Stake Factor drops (e.g., to 0.10), restoration to 1.00 is nearly impossible. Algorithms are "sticky"—once marked as sharp, the tag remains even if you lose money later. The system assumes you were unlucky, not that you changed strategy.'
    },
    {
      q: 'Is it legal for bookmakers to keep my money if they ban me?',
      a: 'In UKGC-regulated jurisdictions, they must return deposited funds. They can confiscate winnings only if they prove a breach of terms (like multi-accounting). If restricted purely for winning, your balance is safe—but future betting is limited to pennies.'
    },
    {
      q: 'Can I open a new account if I move house?',
      a: 'Unlikely to work. Changing your address doesn\'t change your Device Fingerprint (Iovation). Log in with the same laptop or phone, and the system links the new account to the old banned one instantly. New device + new address + new payment method is the minimum requirement.'
    },
    {
      q: 'Do bookmakers share data about banned players?',
      a: 'Yes. Through third-party risk providers like Iovation and Sift Science, a "Fraud" or "High Risk" flag at one operator affects your standing at completely different betting sites using the same provider. The consortium model means your reputation follows you.'
    },
    {
      q: 'Why was I limited when I\'m actually losing money?',
      a: 'Because you\'re beating the Closing Line Value (CLV). The bookmaker\'s model predicts that your betting style will become profitable long-term, so they restrict preemptively. Short-term variance (losses) doesn\'t override the pattern of beating closing prices.'
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'Industry Risk Management Documentation (2022)',
      'Iovation Technical Specs',
      'Mug Betting Control Study (2019)',
      'UKGC Regulations',
    ],
  },
};
