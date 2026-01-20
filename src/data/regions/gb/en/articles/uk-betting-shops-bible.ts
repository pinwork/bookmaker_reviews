import { IndustryReport } from '@/types';

export const bettingShopsBible: IndustryReport = {
  slug: 'uk-betting-shops-guide',
  collections: ['guides'],
  h1: 'The 2026 UK Betting Shop Bible: History, Stats & Store Locators',
  metaTitle: 'UK Betting Shops Guide 2026 | From 1961 Legalization to Digi-Hubs',
  metaDescription: "Comprehensive guide to UK betting shops. 65 years of history, 5,789 active stores, store locators, Fred Done's story, and why 13% of Brits still bet in cash.",

  linkedResources: [
    { id: 'betfred', type: 'bookmaker', active: true },
    { id: 'william-hill', type: 'bookmaker', active: true },
    { id: 'ladbrokes', type: 'bookmaker', active: true },
    { id: 'coral', type: 'bookmaker', active: true },
    { id: 'paddy-power', type: 'bookmaker', active: true },
    { id: 'boylesports', type: 'bookmaker', active: true },
  ],

  intro: {
    title: 'More Than Just a High Street Store',
    content: `In 1961, betting shops were legalised to move gambling off the streets, but they were designed to be as unwelcoming as possible—blacked-out windows and no chairs were the law. Fast forward to 2026, and despite a 36% decline in store numbers since 2012, the "bookies" remains a British institution. With 5,789 shops still active and 13% of the population visiting monthly, we explore the evolution from "smoky funeral parlours" to high-tech Digi-Hubs.`
  },

  locators: {
    title: 'Official Store Locators',
    links: [
      { name: 'William Hill Locator', url: 'https://shoplocator.williamhill/', brand: 'william-hill' },
      { name: 'Ladbrokes Locator', url: 'https://sports.ladbrokes.com/shop-locator', brand: 'ladbrokes' },
      { name: 'Coral Locator', url: 'https://www.coral.co.uk/en/sports/shop-locator', brand: 'coral' },
      { name: 'Betfred Locator', url: 'https://www.betfred.com/shop-locator', brand: 'betfred' },
      { name: 'Paddy Power Locator', url: 'https://locator.pponside.com/', brand: 'paddy-power' },
      { name: 'BoyleSports Locator', url: 'https://www.boylesports.com/shoplocator', brand: 'boylesports' }
    ]
  },

  chainsComparison: {
    title: 'UK Betting Chains at a Glance 2026',
    headers: ['Chain', 'Shops', 'Parent', 'Unique Feature'],
    rows: [
      ['William Hill', '~1,350', 'Evoke plc', 'Vegas Gaming Machines & Plus Card'],
      ['Ladbrokes', '~1,400', 'Entain', 'The Grid Partner Discounts & Payouts'],
      ['Coral', '~1,350', 'Entain', 'Connect Rewards & BOG up to £10,000'],
      ['Betfred', '~1,300', 'Private (Done family)', 'Inventors of Lucky 15 & Double Delight'],
      ['Paddy Power', '~550', 'Flutter', 'Humorous Markets & Instant Cash Card']
    ]
  },

  statistics: {
    title: 'UK Betting Shops by the Numbers (2025/26)',
    mainStats: [
      { label: 'Active Shops (Q1 2025)', value: '5,789', change: '-36% since 2012' },
      { label: 'Peak Number (1970s)', value: '16,000+', change: 'Historic High' },
      { label: 'FOBT Impact (2019)', value: '1,209 closures', note: 'In just 12 months' },
      { label: 'Police Callouts', value: '-40%', note: 'Drop recorded after £2 stake cap' },
      { label: 'Market Value (GGY)', value: '£16.8 Billion', source: 'UKGC 2025' }
    ],
    demographics: {
      title: 'Who Still Visits Shops?',
      data: [
        { group: '25-34 Year Olds', value: '25%+', note: 'Highest attendance age group' },
        { group: 'Gender Split', value: '20% Men / 6% Women', note: 'Monthly visitors' },
        { group: 'Income Profile', value: '86% of profits', note: 'From just 5% of customers' }
      ]
    }
  },

  employment: {
    title: 'The Human Cost: Jobs in Retail Betting',
    stats: [
      { label: 'Current Sector Jobs (2024)', value: '58,000' },
      { label: 'At Risk (if 2,000 shops close)', value: '10,000+' },
      { label: 'William Hill UK Staff', value: '~8,000' },
      { label: 'Betfred Staff', value: '~7,500' }
    ]
  },

  history: {
    title: 'The Dark Origins: 65 Years of History',
    description: 'For decades, betting shops were deliberately designed to deter loitering.',
    timeline: [
      { year: 1961, event: 'Legalisation', detail: '10,000 shops opened in 6 months. Windows had to be blacked out; no seating or TVs allowed.' },
      { year: 1986, event: 'The Great Deregulation', detail: 'Chairs, live TV, and refreshments finally allowed. The "funeral parlour" era ends.' },
      { year: 1994, event: 'Sunday Trading', detail: 'Sunday betting becomes legal 31 years after the first shops opened.' },
      { year: 2002, event: 'Tax Abolished', detail: 'Gordon Brown removes the 10% betting tax on winnings.' },
      { year: 2019, event: 'The FOBT Crash', detail: 'Max stakes cut from £100 to £2. 1,209 shops close within a year.' },
      { year: 2025, event: 'The Digi-Hub Era', detail: 'Entain rolls out 200 "Digi-Hubs" with interactive screens and premium Wi-Fi.' }
    ]
  },

  trivia: {
    title: 'Betting Shop Trivia You Didn’t Know',
    facts: [
      { topic: 'The Blackout Era', text: 'Between 1961 and 1986, it was illegal for passers-by to see inside a shop. Windows were darkened to make them look like "funeral parlours".' },
      { topic: 'Highest Density', text: 'Grimsby has the UK’s highest shop density (1 per 6,721 people). Oxford has the lowest (1 per 11,398).' },
      { topic: 'The First Millionaire', text: 'In 2004, a Betfred customer became the first betting shop millionaire, winning £1.13m.' },
      { topic: 'Police & FOBTs', text: 'After the £2 stake cap in 2019, police callouts to betting shops dropped by a massive 40%.' },
      { topic: 'Live Frequency', text: 'SIS broadcasts a live racing event every 7-8 minutes, 24/7.' }
    ]
  },

  realStories: {
    title: 'The Men Behind the Counter',
    stories: [
      {
        name: 'Fred & Peter Done',
        company: 'Betfred',
        story: 'Fred Done started Betfred in 1967 with money won from a bet on England to win the 1966 World Cup. He famously invented the "Lucky 15" bet in 1984. Today, Fred Done’s net worth is estimated at £2.29 billion.',
        impact: 'Betfred remains the UK’s largest independent bookmaker with ~1,300 shops.'
      },
      {
        name: 'John Boyle',
        company: 'BoyleSports',
        story: 'Founded in 1982 in Markethill, Co. Armagh. John Boyle grew the company into Ireland’s largest independent bookmaker, expanding significantly into the UK Midlands and Northern Ireland.',
        impact: 'Currently operates 277 shops in Ireland, 45 in Northern Ireland, and 46 in the UK mainland.'
      }
    ]
  },

  whyVisit: {
    title: 'Why 13% of Brits Still Bet in Person',
    reasons: [
      { title: 'Anonymity & Cash', detail: 'No digital footprint, no bank statements, and no KYC verification for small cash bets.' },
      { title: 'Instant Payouts', detail: 'Collect winnings in cash immediately. No 3-5 day bank processing times.' },
      { title: 'Social Community', detail: 'For many, the "bookies" is a social club to watch racing and chat with regulars.' },
      { title: 'No Technology Required', detail: 'Accessible to older demographics who prefer paper slips over betting apps.' }
    ]
  },

  technology: {
    title: 'The Tech Powering 2026 Shops',
    items: [
      { name: 'SSBTs vs OTC', detail: 'SSBTs now account for 40.5 million bets per quarter, while Over-The-Counter (OTC) slips still handle 129 million transactions.' },
      { name: 'Omnichannel Connection', detail: 'William Hill Plus and Ladbrokes Grid allow you to withdraw online winnings as cash in-shop instantly.' },
      { name: 'FOBTs', detail: 'Category B2 machines are now limited to £2 spins, significantly reducing industry revenue but also police callouts.' }
    ]
  },

  future: {
    title: 'The Future: Survival of the Fittest',
    content: 'Analysts predict another 2,000-3,000 closures by 2030. Operators like Entain are pivoting to "Digi-Hubs"—premium venues with high-brightness screens, bet builders, and digital window displays to attract a younger audience.'
  },

  faq: [
    { q: 'When did betting shops become legal?', a: 'They became legal on May 1, 1961, following the Betting and Gaming Act 1960.' },
    { q: 'Why were windows blacked out in early shops?', a: 'It was a legal requirement to deter people from being attracted to gambling by seeing inside.' },
    { q: 'Can I withdraw online money in a shop?', a: 'Yes, using omnichannel cards like William Hill Plus or Ladbrokes Grid, you can get instant cash.' },
    { q: 'What is the maximum stake on a machine?', a: 'Since April 2019, the maximum stake on a FOBT is £2 per spin.' },
    { q: 'Who is the largest independent bookmaker?', a: 'Betfred, owned by Fred Done, is the largest with approximately 1,300 shops.' },
    { q: 'What is MOSES?', a: 'It is the Multi-Operator Self-Exclusion Scheme for betting shops. Call 0800 294 2060 to exclude.' },
    { q: 'Do shops open on Sundays?', a: 'Yes, but only since 1994. Hours are usually shorter than weekdays.' },
    { q: 'Are betting shop winnings taxed?', a: 'No. Gordon Brown abolished the 10% tax on winnings in 2002.' },
    { q: 'What is an SSBT?', a: 'A Self-Service Betting Terminal, a touchscreen machine for placing sports bets in-shop.' },
    { q: 'How many betting shops are left?', a: 'There are approximately 5,789 active shops in the UK as of Q1 2025.' },
    { q: 'What is the average problem gambler debt?', a: 'Research by Gordon Moody indicates an average debt of £17,000 for treatment-seeking individuals.' },
    { q: 'Who invented the Lucky 15 bet?', a: 'Betfred founder Fred Done invented the Lucky 15 bet in 1984.' }
  ],

  tooltips: {
    ssbt: "Self-Service Betting Terminal: Touchscreens for placing bets without a paper slip.",
    fobt: "Fixed Odds Betting Terminal: Electronic gaming machines, now limited to £2 stakes.",
    moses: "Multi-Operator Self-Exclusion Scheme: The system for excluding from physical shops.",
    ggy: "Gross Gambling Yield: Total amount retained by operators after payouts.",
    ukgc: "United Kingdom Gambling Commission: The official industry regulator.",
    omnichannel: "A system linking your online, mobile, and physical shop accounts and balances.",
    sis: "Sports Information Services: The provider of live data and TV feeds to UK bookmakers.",
    bog: "Best Odds Guaranteed: Get paid at the higher price if the SP drifts in your favour.",
    lucky_15: "A bet invented by Betfred consisting of 15 bets across 4 selections.",
    sp: "Starting Price: The final official odds of a horse when the race starts.",
    otc: "Over-The-Counter: Traditional betting by handing a slip to a staff member.",
    kyc: "Know Your Customer: Identity verification required by law for gambling.",
    aml: "Anti-Money Laundering: Regulations to prevent criminal funds from entering the industry.",
    category_b2: "The technical classification for FOBT gaming machines.",
    think_25: "The industry standard for age verification in physical retail stores."
  },

  footer: {
    helpline: 'If you need to talk, call the National Gambling Helpline: 0808 8020 133.',
    lastUpdated: 'January 2026'
  }
};