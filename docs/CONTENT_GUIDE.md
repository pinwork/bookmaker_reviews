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
| **Tool Review** | `ToolReview` | `/tools/[slug]` | `SoftwareApplication` | Transactional (Buying) |

### A. Guides Focus
* **Focus:** Storytelling, strategies, psychology, explaining "How it works".
* **SEO:** Target "How to...", "Strategy for...", "Meaning of..." keywords.

### B. Tool Reviews Focus
* **Focus:** Hard facts, comparisons, speed tests, pros/cons.
* **Structure:** Hybrid (Intro + Table + Deep Dive).
* **SEO:** Target "Best [App] for...", "Review", "Comparison".

---

## 3. "Evergreen" Intro Strategy (CRITICAL)

**Rule:** Never mention dynamic rankings or specific brand names in the `intro.content` field.

* **Bad:** *"Flashscore is the best app in 2026, followed by SofaScore..."*
    * *Reason:* If rankings change next month, this text becomes outdated/false.
* **Good:** *"Speed is the #1 factor for live betting. We tested 10 apps to find which API delivers data faster than the TV broadcast..."*
    * *Reason:* This educational context remains valid regardless of which app is currently #1 in the table.

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
