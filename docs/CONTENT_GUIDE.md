# Content Guide & Strategy

## 1. Global Rules (Voice & Tone)

* **Language:** British English (en-GB). Use terms like "Punter", "Bookie", "Accumulator", "Cheque".
* **Tone:** Expert, "Geeky" but accessible. We are the "nerdy friend" who knows the math behind the bet.
* **Formatting:**
    * No "walls of text". Use bullet points every 2-3 paragraphs.
    * Use **Bold** for key takeaways, not for entire sentences.
    * **No emojis.** Never use emojis in article content. Use text symbols (✓ ✗) only for pros/cons lists.

---

## 2. Content Types Strategy

We have **two distinct article types** for different user intents:

| Content Type | TypeScript Type | Route | SEO Schema | User Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Guide** | `GuideArticle` | `/guides/[slug]` | `Article` | Informational (Learning) |
| **Tool Review** | `ToolReviewArticle` | `/bettor-resources/[slug]` | `SoftwareApplication` | Transactional (Buying) |

**Schema Reference:** See `src/types/schemas.ts` for field requirements and validation.

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

### B. Tool Reviews (ToolReviewArticle)

Affiliate product reviews with strict structure. Each item requires rating, pros, cons, affiliate URL.

* **Focus:** Hard facts, comparisons, speed tests, pros/cons
* **SEO:** Target "Best [App] for...", "Review", "Comparison"
* **Rendering:** Review cards with collapsible details, "Visit Site" buttons, star ratings
* **Structure:** Single `groups` entry named "Reviews", items have strict required fields

### C. Global: No Markdown Tables in `content`

**Applies to both Guides and Tool Reviews.**

ReactMarkdown does not render tables. Use `comparisonTables` field instead (renders after intro).

* *Good:* Write pricing in prose: `"Three tiers: Lite (€17/mo), Deluxe (€37/mo), Platinum (€77/mo)."`
* *Bad:* `"| Tier | Price |..."` → renders as raw text

---

## 3. Intro & Examples Strategy: Real-World Specificity

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

## 4. Editorial Rating System (E-E-A-T)

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

## 5. Comparison Table Logic

Tables drive clicks. Optimize for scanning.

* **Best For:** Max 2-3 words. Use nouns.
    * *Good:* "Live Betting", "Horse Racing".
    * *Bad:* "Good for people who like to bet in play".
* **Price:** Standardize format.
    * *Examples:* "Free", "£10/mo", "Freemium", "Free (Ads)".
* **Key Feature:** The single most unique selling point (USP).

---

## 6. Collections Strategy

Use the `collections` array to control **which listing page** the content appears on.

| Collection | Corresponding Listing Page | Intended Content |
| :--- | :--- | :--- |
| `guides` | `/guides/` | Guides only |
| `bettor-resources` | `/bettor-resources/` | Tool Reviews only |

**Simple Rule:**
* If you write a Guide -> use `['guides']`.
* If you write a Tool Review -> use `['bettor-resources']`.

---

## 7. Bettor Resources: Editorial Standards

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

**Clean Bold Rule:**
* Bold only at the **start** of bullet points (feature names, labels)
* Never bold inside sentences or mid-text

*Good:*
```markdown
- **Speed:** Updates arrive 5-20 seconds after live events
- **Follow Player:** Track up to 100 individual players
```

*Bad:*
```markdown
- Updates arrive **5-20 seconds** after live events — the fastest in testing
```

**Feature: Benefit Logic:**
Every Key Feature bullet must answer: "What does the user gain?"
* *Good:* "**Live xG:** Expected goals updated in real-time during matches"
* *Bad:* "**Live xG:** Shows xG data" (no benefit explained)

### E. Logo & bgColor

* `id` matches filename: `public/images/partners/{id}.svg` or `.jpg`
* JPG logos: bgColor auto-detected from edge pixel
* SVG/PNG: use `bgColor` from article, default `#ffffff`
