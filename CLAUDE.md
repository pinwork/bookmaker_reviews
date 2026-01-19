# CLAUDE.md

This file provides guidance to Claude (claude.ai and Claude Code) when working with code in this repository.

## Project Overview

FreeBetGeek — Multi-regional betting affiliate platform serving GB (United Kingdom) and IE (Ireland) markets. Content-focused affiliate site for sports bettors seeking bookmaker reviews, welcome bonuses, and betting guides. Mid-tier positioning: professional but simple, competing through content quality rather than feature complexity.

### Project Description

**What:** Affiliate review site for UKGC and Irish Revenue licensed bookmakers. Displays bookmaker cards with welcome offers, ratings, features, and affiliate CTAs. Monetization via affiliate commissions when users sign up through our links.

**Target Audience:** Sports bettors (18+) in GB and IE regions looking for:
- Best welcome bonuses and free bets
- Bookmaker comparisons and reviews
- Betting guides and educational content
- Payment method filtering (PayPal, Apple Pay, etc.)

**Business Goal:** Get approved by bookmaker affiliate programs by presenting a professional, active-looking site with quality content and proper regional compliance messaging (UKGC for GB, Revenue Commissioners for IE).

**Design Philosophy:**
- Mobile-first, clean, minimal design
- Content-heavy, feature-light (no calculators, odds comparison, user accounts)
- Card-based bookmaker displays with prominent green CTAs
- Trust signals throughout (18+, BeGambleAware, UKGC licenses, author attribution)

**Color Scheme:**
- Primary: Trust blue (#007bff) or Betting green (#28a745)
- CTA buttons: Green (#28a745)
- Backgrounds: White (#ffffff), Light grey (#f8f9fa)
- Text: Dark grey (#212529)
- T&Cs/Fine print: Muted grey (#6c757d)

**Pages:**
All user-facing pages use dynamic routing via `src/app/[region]/`:
1. **Homepage** `[region]/` — Hero + featured bookmakers + full comparison list + FAQ + trust section
2. **Reviews** `[region]/reviews/[slug]` — Individual bookmaker review pages (bet365, betfair, william-hill, etc.)
3. **Free Bets** `[region]/free-bets` — Aggregated welcome offers list
4. **Sports** `[region]/sports/[sport]` — Sport-specific bookmaker recommendations (football, horse-racing, etc.)
5. **Guides** `[region]/guides/[slug]` — Educational content and industry reports
6. **Static pages** `[region]/about`, `[region]/contact`, etc. — About, Contact, Privacy Policy, Terms, Responsible Gambling, Affiliate Disclosure

**Navigation:**
- Primary: Betting Sites | Free Bets | Reviews | Sports | Guides
- Footer: About | Contact | Privacy | T&Cs | Responsible Gambling | Affiliate Disclosure

**Core Components:**
- `BookmakerCard` — Logo, name, rating (stars), welcome offer, features, payment icons, CTA button, T&Cs
- `BookmakerList` — Grid/list of BookmakerCards with optional filtering
- `ComparisonTable` — Sortable table view (desktop) converting to cards (mobile)
- `RatingStars` — Visual star rating (X/5 format)
- `CTAButton` — Green "Claim Offer" button (min 44px height for touch)
- `FAQAccordion` — Expandable FAQ section
- `TrustFooter` — Compliance badges (BeGambleAware, GamCare, GamStop, 18+)
- `ReviewSection` — Reusable content block for review pages

**Data Entity — Bookmaker:**
```typescript
interface Bookmaker {
  id: string;
  slug: string;                    // "bet365"
  name: string;                    // "bet365"
  logo: string;                    // URL to logo image
  
  welcomeOffer: {
    title: string;                 // "Bet £10 Get £30 in Free Bets"
    depositRequired: number;       // 10
    bonusAmount: number;           // 30
    promoCode: string | null;      // "CODE" or null
    termsShort: string;            // "18+. New customers only..."
  };
  
  features: {
    cashOut: boolean;
    liveStreaming: boolean;
    betBuilder: boolean;
    mobileApp: boolean;
  };
  
  payments: string[];              // ["Visa", "PayPal", "Apple Pay"]
  minDeposit: number;              // 5
  
  rating: number;                  // 4.8 (out of 5)
  ukgcLicense: string;             // "044107"
  
  pros: string[];
  cons: string[];
  
  affiliateLink: string;           // Tracking URL
  isActive: boolean;
  isFeatured: boolean;
  displayOrder: number;
}
```

**Initial Bookmakers (15-20):**
Tier 1: bet365, Betfair, William Hill, Ladbrokes, Coral, Paddy Power, Sky Bet, Betfred, 888sport, Unibet
Tier 2: BetVictor, Betway, BoyleSports, LiveScore Bet, Kwiff, Virgin Bet, Spreadex

**Trust Signals (REQUIRED on every page):**
- Header: "18+ | T&Cs Apply | BeGambleAware.org"
- Per bookmaker: UKGC license number, full T&Cs expandable
- Footer: GambleAware, GamCare, GamStop logos with links
- Content: Author name, "Last Updated" timestamp

**SEO Patterns:**
- URL structure: `[region]/reviews/bet365`, `[region]/free-bets`, `[region]/guides/how-free-bets-work`
- Meta title: "[Bookmaker] Review [Region] 2026 – Bonus, Features & Verdict"
- Include current month/year in homepage H1

**Reference Documentation:** See `/docs/research.md` for detailed competitor analysis, bookmaker data, visual specifications, and content examples. See `/docs/DATA_STRUCTURE_MAP.md` for complete `src/data` architecture and regional data flow.

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Runtime**: React 19
- **Database**: MongoDB (optional)

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

## Project Structure

### Routing
- `src/app/[region]/` - All user-facing pages with dynamic region routing (gb, ie)
- `src/app/api/` - API routes (if needed)

### Data Layer (Inherit & Transform Architecture)
- `src/data/index.ts` - **Public API** (components must import from here only)
- `src/data/regions/gb/en/` - **Master Data** (Single Source of Truth)
  - `reviews/` - 18 bookmaker review files
  - `welcomeOffers.ts` - Welcome offers array
  - `extraPromotions.ts` - Extra promotions array
  - `siteConfig.ts` - Site configuration
  - `sports.ts` - Sport categories
  - `events/` - Sport events by date
  - `promoGuides/` - Industry reports and guides
- `src/data/regions/ie/en/` - Ireland overrides
  - `bookmakerData.ts` - Technical overrides (affiliate links, licenses)
  - `promoGuides/` - Ireland-specific guides
  - `index.ts` - Inherits GB data via `adaptObjectToRegion()`
- `src/data/bookmakers.ts` - Bookmaker assembly logic
- `src/data/welcomeOffers.ts` - Offer validation and filtering
- `src/data/cache.ts` - In-memory caching system

### Utilities
- `src/utils/` - Shared utilities
  - `localization.ts` - Regional text adaptation (£→€, UK→Ireland, etc.)
  - `seo.ts` - Schema.org JSON-LD generators

### Types
- `src/types/` - TypeScript types and Zod schemas
  - `index.ts` - All type exports
  - `schemas.ts` - Zod validation schemas

### Components
- `src/components/` - React components
- `src/components/ui/` - shadcn/ui components
- `src/lib/` - Utility functions (cn, etc.)

### Branding
- `public/images/branding/` - Logo and brand assets
- `public/favicon.ico`, `public/apple-touch-icon.png` - Site icons

## Import Aliases

```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

## Data Access Rules

**CRITICAL:** Components must **only** import data through the public API:

```typescript
// ✅ Correct - Public API
import { getActiveBookmakers, getBestValueOffers } from '@/data'
import { adaptObjectToRegion } from '@/utils'

// ❌ Wrong - Direct imports forbidden
import { bookmakers } from '@/data/bookmakers'
import { welcomeOffers } from '@/data/regions/gb/en/welcomeOffers'
```

**Regional Data Flow:**
1. GB (`src/data/regions/gb/en/`) is Master Data
2. Other regions (IE) inherit via `adaptObjectToRegion()` utility
3. Regional folders contain only technical overrides (affiliate links, licenses)
4. All data functions accept `region` parameter (defaults to 'gb')

---

# 🎨 UI Development

## Design Principles

- **Minimalism**: Every element serves a function
- **Hierarchy**: Visual hierarchy through typography, spacing, contrast
- **Consistency**: Unified design language
- **Accessibility**: WCAG 2.1 AA, semantic HTML, ARIA labels
- **Responsive**: Mobile-first approach

## Tailwind CSS

- Use CSS variables from `globals.css`: `background`, `foreground`, `border`, `primary`, `muted`, `accent`, `destructive`
- Prefer rem-based spacing
- Dark mode via CSS variables

## shadcn/ui Pattern

```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ComponentProps {
  className?: string
}

export function Component({ className }: ComponentProps) {
  return (
    <Card className={cn("border-border", className)}>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default" size="lg">Action</Button>
      </CardContent>
    </Card>
  )
}
```

Add components: `npx shadcn@latest add [component-name]`

---

# 🗄️ MongoDB

## Usage

```typescript
import { getDb } from '@/lib/mongodb'

const db = await getDb('yourDatabaseName')

interface User {
  _id: ObjectId
  name: string
  email: string
}

const users = await db
  .collection<User>('users')
  .find({ active: true })
  .project({ name: 1, email: 1 })
  .toArray()
```

## Best Practices

- Use projection to limit fields
- Define TypeScript interfaces
- Create indexes for queried fields
- Place `$match` early in aggregations

---

# ⚛️ React & Next.js

## Server vs Client Components

**Default to Server Components unless you need:**
- Event handlers (`onClick`, `onChange`)
- State (`useState`, `useReducer`)
- Effects (`useEffect`)
- Browser APIs (`localStorage`, `window`)

```typescript
// Server Component (default)
export default async function Page() {
  const data = await fetchData()
  return <ClientComponent data={data} />
}

// Client Component
'use client'
export function ClientComponent({ data }) {
  const [state, setState] = useState()
  // ...
}
```

---

# 🔄 Ralph Agent Mode

When running autonomously via `./scripts/ralph/ralph.sh`:

## Each Iteration

1. Read `prd.json` → find highest priority story where `passes: false`
2. Read `progress.txt` → check Codebase Patterns section first
3. Implement ONE user story
4. Run quality checks (`npm run lint`, `npm run build`)
5. If checks pass → commit (do NOT push)
6. Update `prd.json` → set `passes: true`
7. Append to `progress.txt`

## Git Rules

- **Branch:** Always work in `main`
- **Commit only:** Do NOT run `git push` — user will push manually via GitHub Desktop
- **Commit format:** `feat: Story [ID] - [Title]`

Example:
```bash
git add .
git commit -m "feat: Story 1 - Layout and Header"
```

## Progress Report Format

APPEND to `progress.txt` (never replace):

```
## [Date/Time] - [Story ID]
- What was implemented
- Files changed
- **Learnings:**
  - Patterns discovered
  - Gotchas encountered
---
```

## Codebase Patterns

Reusable patterns go to `## Codebase Patterns` at TOP of `progress.txt`:

```
## Codebase Patterns
- Use `cn()` for conditional classNames
- Always use `@/` import aliases
- shadcn/ui Button: variant="default" for primary actions
```

## Stop Condition

- If ALL stories `passes: true` → output `<promise>COMPLETE</promise>`
- If stories remain → end normally (next iteration continues)

## PRD Format

```json
{
  "featureName": "Feature Name",
  "branchName": "feat/feature-name",
  "userStories": [
    {
      "id": 1,
      "title": "Story title",
      "acceptanceCriteria": [
        "Component in src/components/Name.tsx",
        "Uses shadcn/ui Button",
        "npm run lint passes"
      ],
      "priority": 1,
      "passes": false
    }
  ]
}
```

Note: `branchName` is for reference only — all work happens in `main` branch.

## Rules

- ONE story per iteration
- ALL commits must pass quality checks
- Do NOT commit broken code
- Keep changes focused and minimal

---

# 💡 Code Quality

**ALWAYS verify before completing any task:**

```bash
npm run lint     # Fix ALL errors
npm run build    # Must succeed
```

- Proper TypeScript typing (no `any`)
- Correct React hooks usage
- Use `@/` import aliases
- Follow patterns from this file