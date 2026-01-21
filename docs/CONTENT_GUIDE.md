# Content Guide & Strategy

## 1. Global Rules (Voice & Tone)

* **Language:** British English (en-GB). Use terms like "Punter", "Bookie", "Accumulator", "Cheque".
* **Tone:** Expert, "Geeky" but accessible. We are the "nerdy friend" who knows the math behind the bet.
* **Formatting:**
    * No "walls of text". Use bullet points every 2-3 paragraphs.
    * Use **Bold** for key takeaways, not for entire sentences.

---

## 2. Content Types Strategy & Data Map

We distinguish between **Learning** and **Buying** intents.

| Content Type | TypeScript Type | Route | Schema (SEO) | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Guide** | `IndustryReport` | `/guides/[slug]` | `Article` | Informational (Learning) |
| **Tool Review** | `IndustryReport` | `/bettor-resources/[slug]` | `SoftwareApplication` | Transactional (Buying) |

### A. Guides Focus
* **Focus:** Storytelling, strategies, psychology, explaining "How it works".
* **SEO:** Target "How to...", "Strategy for...", "Meaning of..." keywords.

### B. Tool Reviews Focus
* **Focus:** Hard facts, comparisons, speed tests, pros/cons.
* **Structure:** Hybrid (Intro + Table + Deep Dive).
* **SEO:** Target "Best [App] for...", "Review", "Comparison".

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

**Schema reference:** `src/types/schemas.ts` → `BonusGroupItemSchema`, `ComparisonTableSchema`

Articles in `/bettor-resources/` are affiliate product reviews. This section covers **editorial minimums** not enforced by schema.

### A. Structure

* `groups`: use single group `{ groupName: 'Reviews', items: [...] }`
* `comparisonTables`: use new format `{ id: 'item-id', cells: [...] }` for URL linking
* `reviewContext`: required for Google Rich Snippets (star ratings)

### B. Item Count & Order

**Order:** Ranked by editorial rating. Best item (#1) appears first.

**Count:**
* **Minimum:** 2 items (for niche topics with few quality options)
* **Optimal:** 5-7 items (covers the market without overwhelming)
* **Maximum:** 10+ items (only if explicitly requested or market demands it)

### C. Editorial Minimums

| Field | Minimum | Why |
| :--- | :--- | :--- |
| `pros` | 3 items | Builds trust |
| `cons` | 1 item | Honesty signal |
| `keyStats` | 2 items | Quick scanning |
| `faq` | 3 questions | SEO + user doubts |
| `quickVerdict` | ≤10 words | Fits header layout |
| `bestFor` | Required | Qualifying filter - user decides instantly if this is for them |

### D. Field Guidelines

#### quickVerdict Formula

Use the pattern: **"The [Adjective] [Noun] for [Persona/Use-Case]."**

* *Good:* "The fastest live score app with the widest sport coverage."
* *Good:* "The best free statistics app with live xG and dropping odds."
* *Bad:* "Great app, highly recommended!" (no specifics)

#### keyStats Labels

Choose metrics popular in the niche. Context determines what matters:
* **Apps:** Price, Users, Sports, Speed
* **Racing tools:** Price, Coverage, Data type, History
* **Stats platforms:** Price, Leagues, Players, Metrics

#### bestFor Field

1-2 sentences describing the ideal user persona. Extract from content, do not duplicate in markdown.

* *Good:* "Multi-sport live bettors who prioritize speed above all else. Essential for in-play betting where seconds matter."
* *Bad:* "Good for people who bet" (too vague, no persona)

#### badge Field

Use sparingly — max 1-2 badges per article. Badges appear as yellow ribbon above the card.

| Badge Value | When to Use |
| :--- | :--- |
| `Editor's Pick` | #1 overall choice in the article |
| `Best Free` | Best free option (when paid alternatives exist) |
| `Best Value` | Best price/quality ratio |

### E. Content Structure: Micro-Review Format

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

### F. Editorial Style & Formatting

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

### G. Logo & bgColor

* `id` matches filename: `public/images/partners/{id}.svg` or `.jpg`
* JPG logos: bgColor auto-detected from edge pixel
* SVG/PNG: use `bgColor` from article, default `#ffffff`
