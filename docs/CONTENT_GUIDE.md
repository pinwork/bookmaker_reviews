# Content Guide & Strategy

**Purpose:** Rules for WHAT to write — structure, fields, SEO, affiliate linking.

**Companion:** See `WRITING_STYLE.md` for HOW to write (voice, banned words, bold rules, rhythm).

---

## 1. Content Types Strategy

We have **three distinct article types** for different user intents:

| Content Type | TypeScript Type | Route | SEO Schema | User Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Guide** | `GuideArticle` | `/guides/[slug]` | `Article` | Informational (Learning) |
| **Tool Review** | `ToolReviewArticle` | `/bettor-resources/[slug]` | `SoftwareApplication` | Transactional (Buying) |
| **Competition** | `CompetitionArticle` | `/competitions/[slug]` | `Article` | Betting Guide (Research) |

**Schema Reference:** See `src/types/schemas.ts` for field requirements and validation.

**Runtime Validation:** In development mode (`npm run dev`), all articles are validated against their schema on load. Check the console for validation errors including the slug and specific field issues.

### A. Guides (GuideArticle)

Educational content with flexible structure. No affiliate links or product ratings.

* **Focus:** Storytelling, strategies, psychology, explaining "How it works"
* **SEO:** Target "How to...", "Strategy for...", "Meaning of..." keywords
* **Rendering:** Prose sections with h2 headers, no collapsible cards
* **Structure:** Multiple `groups` (sections), each with `items` containing markdown `content`

**Group Usage:**
Groups are **major chapters**, not fine divisions. Use sparingly (3-7 per article).

* *Good:* "Part 1: The Kickstart", "Part 2: Ongoing Rewards", "Part 3: Protection"
* *Bad:* Creating a new group for every small topic

Within `content`, use markdown for structure: `###` headers, bullet lists, bold text. Don't create multiple groups where one group with rich markdown would work better.

**Field Guidelines:** See Section 6 for `keyStats`, `quickVerdict`, and Content Block details.

**linkedResources (reserved):** Article-level array for future contextual bookmaker banners. Structure: `{ id: 'bet365', type: 'bookmaker', active: true }`. Not currently rendered.

### B. Tool Reviews (ToolReviewArticle)

Affiliate product reviews with strict structure. Each item requires rating, pros, cons, affiliate URL.

* **Focus:** Hard facts, comparisons, speed tests, pros/cons
* **SEO:** Target "Best [App] for...", "Review", "Comparison"
* **Rendering:** Review cards with collapsible details, "Visit Site" buttons, star ratings
* **Structure:** Single `groups` entry named "Reviews", items have strict required fields

### C. Competition Articles (CompetitionArticle)

Betting guides for specific sports competitions (Premier League, Wimbledon, NFL, etc.).

* **Focus:** Competition-specific betting strategies, market analysis, data-backed insights
* **SEO:** Target "[Competition] betting guide", "[Competition] odds", "[Competition] tips"
* **Rendering:** QuickFacts box, market tags, edge patterns cards, comparison tables, markdown body
* **Structure:** Flat schema with specialized fields (no `groups`)

**Entity Link:** Each article links to a Competition entity via `competitionId`. Valid IDs are defined in `src/data/competitions.ts`.

**Key Fields:**

| Field | Required | Purpose |
| :--- | :--- | :--- |
| `competitionId` | Yes | Links to Competition entity (e.g., `pl`, `wimbledon`) |
| `quickFacts` | Yes (min 3) | At-a-glance facts (Founded, Teams, Season, etc.) |
| `popularMarkets` | Yes | Main betting markets (1X2, BTTS, Asian Handicap) |
| `microMarkets` | No | Niche prop markets for SEO differentiation |
| `edgePatterns` | No | Data-backed betting insights with source/sample size |
| `comparisonTables` | No | Statistical tables (season stats, hit rates) |
| `body` | Yes | Markdown prose (market explanations, strategies) |
| `faq` | Yes (min 1) | Common questions about betting on this competition |

**EdgePatterns Format:**

Each pattern must include credibility signals:

```typescript
edgePatterns: [
  {
    pattern: 'Big 6 teams cover -1.5 AH in 68% of home matches vs newly promoted',
    source: 'FBref',           // Data source (required)
    period: '2019-2024',       // Time period (required)
    sampleSize: 94,            // n=X (required, positive integer)
  },
]
```

**MicroMarkets Strategy:**

Use for niche prop markets with less competitor coverage (SEO opportunity):
- Football: Player Fouls, Team Corners, Booking Points
- Tennis: Total Aces, Tiebreak in Match, Double Faults
- Golf: Top 10 Finish, Nationality Winner

### E. Global: No Markdown Tables in `content`

**Applies to all article types.**

ReactMarkdown does not render tables. Use `comparisonTables` field instead (renders after intro).

* *Good:* Write pricing in prose: `"Three tiers: Lite (€17/mo), Deluxe (€37/mo), Platinum (€77/mo)."`
* *Bad:* `"| Tier | Price |..."` → renders as raw text

### F. Global: No Indented Paragraphs in Template Literals

**CRITICAL:** In markdown, 4+ spaces at line start = code block (`<pre><code>`).

When using template literals (backticks) in `.ts` files, **do NOT indent continuation paragraphs** for code readability — it breaks rendering.

```typescript
// ❌ BAD — second paragraph has 4 spaces, renders as code block
content: `First paragraph here.

    Second paragraph with indentation for "nice" code formatting.`

// ✅ GOOD — no indentation on continuation
content: `First paragraph here.

Second paragraph flush left.`
```

---

## 2. Intro & Examples Strategy: Real-World Specificity

**Philosophy:** Users trust specific examples over abstract theory.
**Rule:** Use real brand names, real numbers, and real scenarios in ALL content.

### A. Tool Reviews → Editor's Choice

Name the winner immediately in the Intro.

* **Good:** *"After testing 10 apps, **Flashscore** remains #1 for speed in 2026."*
* **Bad:** *"We tested many apps and found a good one..."* (too vague)

### B. Guides → Real Examples

Use specific brands to explain features.

* **Good:** *"To understand Asian Handicaps, let's look at the market on **Bet365**..."*
* **Bad:** *"Look for this market on your preferred bookmaker..."* (abstract)

### Maintenance Commitment

By using specific names, we commit to manual updates.
* If a partner changes → update text references
* Benefit: Higher engagement, better SEO, more trust

---

## 3. Editorial Rating System (E-E-A-T)

We use **ReviewRating** (Editorial), not AggregateRating. Be honest to build trust.

| Rating | Meaning | When to use |
| :--- | :--- | :--- |
| **5.0** | **Perfection** | Rare. Industry standard-setter (e.g., Bet365 in 2024). |
| **4.5 - 4.9** | **Excellent** | Top-tier tools with minor flaws. Most "Recommended" apps fall here. |
| **4.0 - 4.4** | **Good** | Solid choice, but has visible UX issues or missing features. |
| **3.0 - 3.9** | **Average** | Usable but outdated. Only for niche needs. |
| **< 3.0** | **Poor** | Do not review unless high search volume demands a warning. |

**Verdict Summary:**
Must be 2-3 short sentences summarizing *why* the rating was given.
* *Example:* "Unmatched speed for in-play betting. However, the lack of detailed player stats makes it less useful for pre-match research."

---

## 4. Comparison Table Logic

Tables drive clicks. Optimize for scanning.

* **Best For:** Max 2-3 words. Use nouns.
    * *Good:* "Live Betting", "Horse Racing".
    * *Bad:* "Good for people who like to bet in play".
* **Price:** Standardize format.
    * *Examples:* "Free", "£10/mo", "Freemium", "Free (Ads)".
* **Key Feature:** The single most unique selling point (USP).

---

## 5. Bettor Resources: Editorial Standards

**Schema:** `src/types/schemas.ts` → `ToolReviewArticleSchema`, `ReviewItemSchema`

Articles in `/bettor-resources/` are affiliate product reviews. Field requirements are enforced by Zod schema. This section covers **editorial guidance** beyond validation.

### A. Item Count & Order

**Count:** 5-7 optimal.

**Order:** Best first, weakest last. Based on editorial assessment (value, reliability, features), NOT on `rating` field or price.

* First item = top recommendation (often `badge: "Editor's Pick"`)
* Last item = still worth mentioning, but has drawbacks
* Equal quality? Better-value option first

### B. Field Guidelines

#### quickVerdict Formula

One-line editorial verdict shown as italic quote below title. Answers: "Why pick this one?"

**Structure:** `[What it's best at] — [proof/metric]`

**Rules:** Max 75 chars. Start with "The..." or "Best...". Include metric after dash. No generic praise.

* *Good:* "The industry veteran — 50,000 games of backtesting data."
* *Good:* "The budget champion — pro features at £10/month."
* *Bad:* "Great tool, highly recommended!" (no specifics)
* *Bad:* "The best scanner for serious bettors" (no metric after dash)

#### keyStats Labels

Choose metrics popular in the niche. Context determines what matters:
* **Apps:** Price, Users, Sports, Speed
* **Racing tools:** Price, Coverage, Data type, History
* **Stats platforms:** Price, Leagues, Players, Metrics

**Never include ratings** (ours or external) in keyStats — only practical metrics users scan for.

#### rating Field

Editorial rating (1.0-5.0) for Google Rich Snippets. Never display as feature.
* Powers Schema.org star ratings in search results
* Use for internal sorting when items have equal editorial quality
* **Never** reference external ratings (Trustpilot, G2, etc.) in content — we are the authority

#### bestFor Field

1-2 sentences describing the ideal user persona. Extract from content, do not duplicate in markdown.

* *Good:* "Multi-sport live bettors who prioritize speed above all else. Essential for in-play betting where seconds matter."
* *Bad:* "Good for people who bet" (too vague, no persona)

#### badge Field

Use sparingly — max 2-3 badges per article. Badges appear as yellow ribbon above the card.

| Badge Value | When to Use |
| :--- | :--- |
| `Editor's Pick` | #1 overall choice in the article |
| `Best Free` | Best free option (when paid alternatives exist) |
| `Best Value` | Best price/quality ratio (budget champion) |
| `Best for Beginners` | Easiest onboarding, best support, gentlest learning curve |
| `Upgrade Pick` | Premium option for power users who outgrow basics |

### C. Content Structure: Micro-Review Format

Each `content` field is a **Micro-Review** (Wirecutter/TechRadar style). Target: **150-250 words**.

```markdown
### Overview
[3-4 sentences: what it is, reputation, key differentiator]

### Key Features
- **Feature Name:** Benefit to user
- **Feature Name:** Benefit to user

### Price
[Pricing details: Free, £X/mo, Freemium model]
```

**Note:** `Best For` is now a separate field (`bestFor`), not part of markdown content.

### D. Editorial Style & Formatting

**See `WRITING_STYLE.md`** for bold rules, list formatting, and sentence structure.

**Feature: Benefit Logic:**
Every Key Feature bullet must answer: "What does the user gain?"
* *Good:* "**Live xG:** Expected goals updated in real-time during matches"
* *Bad:* "**Live xG:** Shows xG data" (no benefit explained)

### E. Logo & bgColor

* `id` matches filename: `public/images/partners/{id}.svg` or `.jpg`
* JPG logos: bgColor auto-detected from edge pixel
* SVG/PNG: use `bgColor` from article, default `#ffffff`

---

## 6. Guides: Editorial Standards

**Schema:** `src/types/schemas.ts` → `GuideArticleSchema`, `GuideItemSchema`

### A. Understanding the Item: Content Block

In Guides, an `item` is a **Content Block** — a topic or concept within a chapter.

| Aspect | Tool Review (Review Card) | Guide (Content Block) |
| :--- | :--- | :--- |
| **Purpose** | Compare → Choose → Click | Explain → Teach |
| **Represents** | A product/service | A topic/concept |
| **Example** | "Flashscore", "OddsMonkey" | "Deposit Bonus", "The 1988 Merger" |

**Visual:** Content Blocks render as simple cards (title + optional keyStats + prose). No collapsible sections — all text visible immediately.

### B. Field Guidelines

#### keyStats (optional)

Use for **quantifiable facts** that benefit from visual emphasis.

* **Use when:** Industry stats, market data, comparisons with numbers
* **Skip when:** Conceptual explanations, narratives, strategies without hard metrics

*Good:*
```typescript
keyStats: [
  { label: 'Active Shops', value: '721' },
  { label: 'Peak (2008)', value: '1,385' }
]
```

*Bad:* Adding keyStats to "How Betting Odds Work" — no meaningful metrics to display.

#### quickVerdict (optional)

One-line teaser shown below the title. Use when title alone is too short or abstract.

* **Use when:** Generic title needs context ("Deposit Bonus" → "The biggest bankroll booster")
* **Skip when:** Title is self-explanatory ("Industry Statistics 2025")

**Formula:** `[What it is] — [key benefit or context]`

* *Good:* `"The classic risk-free start — get your stake back if first bet loses"`
* *Bad:* `"A great bonus type"` (no specifics)

### C. Content Structure

**Two-Level Reading Principle:**
- **Level 1 (Scanners):** H1 + Intro + keyStats + Tables + FAQ — must deliver value in 30 seconds
- **Level 2 (Readers):** Full prose in `content` for those who want depth

Unlike Tool Reviews (strict micro-review format), Guides use **flexible prose**.

Use `###` headers within `content` for subsections. Include real brand names and specific numbers (see Section 2). Group guidelines already covered in Section 1.A.

### D. faq (required, min 3)

FAQ in guides serves as **quick clarifications** — explaining terms, edge cases, or common misunderstandings.

**Purpose:** Answer questions that arise *while reading* the article.

* *Good:* "What happens if my bet is voided?", "How is rollover calculated?"
* *Bad:* "Which bookmaker is best?" (that's Tool Review territory)

---

## 7. Footer Standards

### A. lastUpdated

**When to update:** Any content edit, price change, or fact verification.

### B. sources (optional)

Array of source names for credibility signals. No URLs needed.

| Content Type | sources Example |
|--------------|-----------------|
| Industry Report | `['UKGC 2024-25', 'Regulus Partners']` |
| Responsible Gambling | `['ESRI 2023', 'GambleAware']` |
| Tool Reviews | `['Official websites', 'Hands-on testing']` |
| Bonus Guide | Omit (general knowledge) |

---

## 8. Key Takeaways

Summary block after ArticleHeader. Complements intro (context) with facts (verdict).

| Field | Purpose | Style |
|-------|---------|-------|
| `intro` | Context, hook, "why this matters" | Narrative prose |
| `keyTakeaways` | Facts, numbers, verdict | Telegraphic bullets |

### A. Rules

* **Telegraphic style:** Facts over fluff. Include numbers/metrics.
* **No overlap with intro:** Different information, not rephrased intro.

### B. Formula by Content Type

**Guides:**
1. Key legal/factual answer
2. Most important statistic
3. Practical recommendation

**Tool Reviews:**
1. Editor's Pick + key metric
2. Best free/budget alternative
3. Who it's for or key limitation

### C. Examples

**Guide (Industry Report):**
```typescript
keyTakeaways: [
  '£16.8bn market dominated by Flutter (30%) and bet365 (20%)',
  '40% Remote Gaming Duty from April 2026 will squeeze bonuses',
  'New £150 affordability checks reshape bettor-bookmaker relationship',
]
```

**Tool Review:**
```typescript
keyTakeaways: [
  'Flashscore leads for in-play speed (5-20 second updates)',
  'SofaScore offers unique betting features: live xG, dropping odds',
  'Power users combine 2-3 apps: speed + stats + sport-specific',
]
```

### D. Anti-Patterns

* ❌ `"Great guide for bettors"` — no specifics
* ❌ Repeating intro text verbatim
* ❌ Generic claims without numbers

---

## 9. Partner Lifecycle (Activation/Deactivation)

When a partner (bookmaker, tool, app) is removed from the affiliate program or becomes unavailable, you must update content manually.

### A. What `active: false` Controls

Setting `active: false` in `linkedResources` or removing an item from `groups` **only** affects:
- Review cards (hidden)
- Comparison table rows (hidden)
- Banner placements (hidden)

### B. What Requires Manual Update

These sections **are NOT automatically filtered** and must be edited manually:

| Section | Action Required |
|---------|-----------------|
| `intro` | Remove brand mentions, update "Editor's Pick" claims |
| `keyTakeaways` | Remove specific recommendations (e.g., "Flashscore leads...") |
| `content` | Remove brand references in prose |
| `faq` | Update answers mentioning the partner |
| SEO `reviewContext` | Update if deactivated partner was the primary review subject |

### C. Deactivation Checklist

When deactivating a partner:

1. Set `active: false` in `linkedResources` (or remove from `groups`)
2. Search article for brand name mentions
3. Update `intro` if partner was highlighted
4. Update `keyTakeaways` if partner was recommended
5. Update `footer.lastUpdated` to current date
6. Run `npm run build` to verify no broken references

### D. Example

**Before deactivation (Flashscore removed):**
```typescript
keyTakeaways: [
  'Flashscore leads for in-play speed (5-20 second updates)',  // ❌ Must update
  'SofaScore offers unique betting features: live xG',
  'Power users combine 2-3 apps for complete coverage',
]
```

**After deactivation:**
```typescript
keyTakeaways: [
  'SofaScore leads for in-play speed with live xG updates',  // ✅ Updated
  'FotMob excels for football-specific deep stats',
  'Power users combine 2-3 apps for complete coverage',
]
```

---

## 10. Inline Affiliate Linking

When bookmaker names appear in article text, we can link them to our affiliate redirect system. This section defines when and how to do it.

### A. Architecture Overview

**Route:** `/[region]/go/[slug]` → 307 Redirect → Affiliate URL

```
User clicks [Bet365](/gb/go/bet365)
  → Server looks up bet365 in GB config
  → Returns 307 redirect to affiliate link
  → User lands on bet365.com with tracking
```

**Why region in URL?** Affiliate programs differ by market. GB and IE may have different tracking IDs. The explicit region ensures correct attribution.

### B. Valid Bookmaker Slugs

**Source of Truth:** `src/data/bookmakers.ts` → `bookmakerConfigs` array

Each bookmaker has:
- `slug` - URL identifier (e.g., `bet365`, `paddy-power`)
- `name` - Display name
- `display.isActive` - Whether bookmaker is active

⚠️ **CRITICAL:** Before adding ANY `/go/` link, you MUST verify the slug exists in `bookmakerConfigs`.

**Common mistake:** An article's `linkedResources` may contain IDs that do NOT exist in `bookmakerConfigs`. The `linkedResources` array is for future UI components and is NOT validated against the bookmaker list. Never assume a brand in `linkedResources` has a valid `/go/` route.

**Unknown or inactive slug → 404.**

### C. Syntax

**Format:** `**[Brand Name](/[region]/go/[slug])**` (always bold)

**Region Rule:** Match the article's region.
- Article in `src/data/regions/gb/` → use `/gb/go/...`
- Article in `src/data/regions/ie/` → use `/ie/go/...`

**Context Rule:** Include relevant context INSIDE the link text, not outside.

```markdown
// ❌ BAD — context outside link
She built **[bet365](/gb/go/bet365)**.com from scratch.
Join the **[Sky Bet](/gb/go/sky-bet)** Club for rewards.

// ✅ GOOD — context inside link
She built **[bet365.com](/gb/go/bet365)** from scratch.
Join the **[Sky Bet Club](/gb/go/sky-bet)** for rewards.
```

### D. Field Restrictions (Where Links Can Go)

**✅ Allowed:**
- `intro.content` — High visibility, natural CTA placement
- `content` fields — Markdown sections in groups/items where context flows

**❌ Not Allowed:**
- `faq` answers — Keep clean, quick-answer format; links clutter
- `keyTakeaways` — Bullets only, no markdown links
- `quickVerdict` — Short summary text, no links

**Rationale:** FAQ and takeaways serve informational purposes. Affiliate links there feel spammy and break reading flow.

### E. When to Link (✓)

| Context | Example | Why Link |
|---------|---------|----------|
| **First mention** | "For live betting, **[Bet365](/gb/go/bet365)** offers..." | High intent, user just met the brand |
| **Recommendation** | "We recommend **[Sky Bet](/gb/go/sky-bet)** for..." | Direct call to action |
| **Specific offer** | "Claim **[Betfred's](/gb/go/betfred)** welcome bonus..." | Transactional intent |
| **Comparison winner** | "In our tests, **[Unibet](/gb/go/unibet)** came first..." | Editorial endorsement |

### F. When NOT to Link (✗)

| Context | Example | Why No Link |
|---------|---------|-------------|
| **Negative news** | "William Hill was fined £19m for..." | Don't monetize bad press |
| **Every mention** | "Bet365 is great. Bet365 also..." | Spam, hurts readability |
| **Generic context** | "Sites like Bet365 exist..." | No clear user intent |
| **Competitor comparison** | "Unlike 888sport, Betfair..." | Don't link the "loser" |

### G. Frequency Rule

**Max 1 link per brand per content unit (item).**

Article structure: `groups[]` → `items[]` (cards). The smallest content unit is an **item** (card), not the group.

Link the first meaningful mention within each item. Use plain text for subsequent mentions in the same item.

```markdown
// ✓ Good (same item)
**[Bet365](/gb/go/bet365)** offers the best live interface.
Bet365 also has excellent odds on football.  // No link, same item

// ✓ Good (different items in same group)
// Item 1: "**[Bet365](/gb/go/bet365)** leads early payout..."
// Item 2: "**[Bet365](/gb/go/bet365)** voids the whole builder..."  // OK, different item

// ✗ Bad (same item)
**[Bet365](/gb/go/bet365)** is great. We love **[Bet365](/gb/go/bet365)**
because **[Bet365](/gb/go/bet365)** works well.  // Spam
```

### H. linkedResources vs Inline Links

**Two separate systems with DIFFERENT validation:**

| Mechanism | Purpose | Validation |
|-----------|---------|------------|
| `linkedResources` | Future UI components | NOT validated - can contain any ID |
| Inline `/go/` links | Text links in markdown | MUST exist in `bookmakerConfigs` |

⚠️ **WARNING:** `linkedResources` may contain IDs (e.g., `quinnbet`) that do NOT have a `/go/` route. Never copy IDs from `linkedResources` to create `/go/` links without verifying they exist in `bookmakerConfigs`.

They can coexist in an article:
- `linkedResources: [{ id: 'bet365', type: 'bookmaker' }]` for future card rendering
- `[Bet365](/gb/go/bet365)` in markdown for text links

### I. Checklist for Content Authors

Before publishing, verify:

1. ✓ All `/go/` slugs exist in the bookmaker list (Section B)
2. ✓ Region in URL matches article region (`/gb/` for GB articles)
3. ✓ No links in negative contexts (fines, scandals, layoffs)
4. ✓ Max 1 link per brand per item (content unit)
5. ✓ First mention linked, subsequent mentions plain text
6. ✓ Affiliate links are bold: `**[Brand](/region/go/slug)**` (see `WRITING_STYLE.md`)

---

## 11. Regional Content & File Naming

### A. Folder Structure

```
src/data/articles/
  en/                    ← Universal (all EN regions)
  overrides/gb/en/       ← GB only
  overrides/ie/en/       ← IE only
```

**Lookup:** Override first → then language master. No cross-language fallback.

### B. Universal vs Regional

**Universal** (no regional version needed):
- Tool reviews, technical guides, industry explainers
- No region-specific regulations, stats, or bookmaker focus

**Regional** (separate version needed):
- Different regulations (UKGC vs Irish Revenue)
- Region-specific stats or market data
- SEO targeting (`uk-*` vs `ireland-*`)

### C. File Naming

**Rule:** `filename.ts` = `slug` = URL path

| Guideline | Example |
|-----------|---------|
| Filename = slug | `uk-betting-bonus-guide.ts` → `slug: 'uk-betting-bonus-guide'` |
| SEO-descriptive | ✓ `betting-account-restrictions-guide` ❌ `gubbing-info` |
| No years | ✓ `uk-betting-bonus-guide` ❌ `uk-betting-bonus-guide-2026` |
| Regional prefix for SEO | Universal: none, GB: `uk-`, IE: `ireland-` |

**Competition Article Naming Convention:**

Competition articles follow a strict `{sportSlug}-{competitionSlug}-betting-guide` pattern:

| Component | Source | Example |
|-----------|--------|---------|
| `sportSlug` | From `competitions.ts` grouping | `football`, `tennis`, `horse-racing` |
| `competitionSlug` | Cleaned competition slug (no sport suffix) | `premier-league`, `us-open`, `heavyweight` |

**Deduplication rules:**
- Remove sport from competition slug if redundant: `us-open-tennis` → `tennis-us-open`
- Remove sport suffix: `heavyweight-boxing` → `boxing-heavyweight`
- Keep sport if part of official name: `rugby-world-cup` → `rugby-world-cup`

**Examples:**

| Old Slug | New Slug | Reason |
|----------|----------|--------|
| `premier-league-betting-guide` | `football-premier-league-betting-guide` | Added sport prefix |
| `us-open-tennis-betting-guide` | `tennis-us-open-betting-guide` | Prefix + removed `-tennis` suffix |
| `world-snooker-championship-betting-guide` | `snooker-world-championship-betting-guide` | Prefix + removed `snooker-` from middle |

### D. Creating Regional Override

1. Create: `overrides/{region}/en/guides/{filename}.ts`
2. Export from `overrides/{region}/en/guides/index.ts`
3. Add to `src/data/articles.ts` in `getGuidesData()`

Override is a **complete replacement** — copy all required fields.

### E. Currency

- Universal: € or both ("£10 / €12")
- GB: £
- IE: €
