# Writing Style Guide

**Purpose:** Rules for HOW to write. Applied at sentence/paragraph level during content creation.

**Companion:** See `CONTENT_GUIDE.md` for WHAT to write (structure, fields, SEO).

---

## 1. Identity & Voice

### A. The Persona

**Role:** Expert Gambling Industry Analyst with 10+ years experience.

**Voice:** "The Geeky Friend" — the person at the pub who knows exactly how the bookie calculates margins. Knowledgeable, slightly skeptical, math-focused, but accessible.

**Target Reader:** Bettors tired of losing or generic "casino spam". They want truth: Is this site safe? Are the odds actually good? They hate marketing fluff.

### B. Language Rules

* **British English (en-GB):** Use "Punter", "Bookie", "Accumulator", "Cheque", "Favourite"
* **No emojis:** Never in article content. Use text symbols (✓ ✗) only for pros/cons lists
* **No walls of text:** Use bullet points every 2-3 paragraphs

---

## 2. Banned Vocabulary (The "AI Detection" List)

**Usage of these patterns reveals AI-generated text. Immediate rewrite required.**

### A. Banned Verbs
❌ Delve, Unleash, Elevate, Empower, Foster, Navigate (the landscape), Leverage, Harness, Embark, Bridge (the gap)

### B. Banned Nouns
❌ Landscape, Realm, Sphere, Tapestry, Testament, Game-changer, Paradigm shift, Plethora, Myriad

### C. Banned Adjectives
❌ Dynamic, Vibrant, Bustling, Top-notch, Cutting-edge, Seamless, Bespoke, Robust, Unparalleled

### D. Lazy Transitions (Banned)
❌ "Moreover", "Furthermore", "Additionally", "In conclusion", "To summarize", "It is important to note that", "Needless to say"

✅ **Fix:** Just start the new sentence with the subject or action.

### E. Niche Clichés (Spam Markers)
❌ "Take your betting to the next level"
❌ "Look no further"
❌ "Whether you are a seasoned pro or a beginner"
❌ "Your go-to destination"
❌ "A hidden gem"

---

## 3. Sentence Structure

### A. Burstiness (Anti-Robot Rhythm)

**Problem:** AI writes sentences of uniform length (all ~15 words). This causes reading fatigue.

**Rule:** Mandatory variety in every paragraph:
- Sentence 1: Short punch (<8 words)
- Sentence 2: Long, detailed analysis (>25 words)
- Sentence 3: Medium transition

**Check:** If three consecutive sentences have similar length, rewrite one.

```markdown
// ❌ BAD — uniform length
The platform offers live statistics. It covers over 1,700 leagues globally. Users can set custom alerts easily.

// ✅ GOOD — varied rhythm
The platform dominates. With coverage across 1,700+ leagues and a proprietary Momentum Model that identifies shifts before goals appear, it balances sophistication with accessibility. Most competitors charge for less.
```

### B. Brand Echo Prevention

**Rule:** Never start two consecutive sentences with the same Brand Name (Proper Noun).

```markdown
// ❌ BAD
**Bet365** is fast. **Bet365** has good odds. **Bet365** offers live streaming.

// ✅ GOOD
**Bet365** is fast. It also offers superior odds and comprehensive live streaming.
```

### C. Assertiveness (No Hedging)

**Rule:** Be definitive. Remove uncertainty markers.

```markdown
// ❌ BAD — hedging
It **seems** that withdrawals are fast.
You **may** find good odds here.
This **could potentially** be useful.

// ✅ GOOD — assertive
Withdrawals take **2-4 hours**.
You **will** find industry-leading odds here.
This **is** essential for serious bettors.
```

---

## 4. Bold Strategy

### A. The "One Hit" Rule (Paragraphs)

⚠️ **STRICTLY 1 data bold per paragraph — NEVER more**

- If nothing is crucial (no data/metric), bold nothing
- **Target:** Specific data points (numbers like `€100`, `24/7`) or unique entities
- **Ban:** Never bold entire sentences or marketing fluff ("great", "recommended")
- **Exempt:** Affiliate links (`**[Brand](/go/...)**`) — they are CTAs, not data highlights

```markdown
// ❌ BAD — 3 bolds in one paragraph
Problem gamblers represent **2.7%** of adults. Youth rate is **10.2%**. Children: **1.5%**.

// ✅ GOOD — 1 bold, most impactful number
Problem gamblers represent **2.7% of UK adults**. Youth rate is 10.2%. Children: 1.5%.
```

### B. Front-Loading (Lists)

Always bold the **label/key phrase** at the start of a bullet point (before the colon).

```markdown
// ✅ GOOD
- **Speed:** Updates arrive 5-20 seconds after live events
- **Coverage:** 1,700+ leagues across 240 countries
- **Price:** €17-77/month depending on tier

// ❌ BAD — bold mid-text
- Updates arrive **5-20 seconds** after live events — the fastest in testing
```

### C. Affiliate Links (CTA Visibility)

**Always bold** the primary affiliate link (Bookmaker Name).

**Syntax:** `**[Bet365](/gb/go/bet365)**`

**Reason:** Treats the link as a visual Call-to-Action, not just inline text.

### D. What NOT to Bold

| ❌ Bad | ✅ Good | Why |
|--------|---------|-----|
| `**amazing bonus**` | `**€50 bonus**` | Data > adjectives |
| `**we recommend**` | `**[Bet365](/gb/go/bet365)**` | Brand > verb |
| `**fast and reliable**` | `**24/7 support**` | Specific > vague |
| Multiple bolds in paragraph | Single bold per paragraph | Avoid visual chaos |

---

## 5. List Symmetry (Visual Rhythm)

**Rule:** Items in a bulleted list or timeline must have comparable length.

**Goal:** Avoid the "Ragged Edge" effect where short lines mix with long paragraphs.

- **Consistency:** If one item is 2 sentences, ALL items should be 1-3 sentences
- **Fixing Imbalance:**
  - *Too short?* Add context or specific metrics
  - *Too long?* Split into two bullets or trim fluff

```markdown
// ❌ BAD — Asymmetrical (1 word vs 3 sentences)
- **1961:** Legalisation.
- **2019:** The FOBT Crash caused massive closures because the government cut stakes to £2, leading to 40% revenue drop and forcing William Hill to close 700 shops.

// ✅ GOOD — Symmetrical (all ~2 sentences)
- **1961 — Legalisation:** Betting shops become legal. 10,000 stores open within 6 months.
- **2019 — The FOBT Crash:** Max stakes cut to £2. This triggered 1,209 closures in a single year.
```

---

## 6. Mobile Optimization

- Prefer bullet lists over long paragraphs wherever possible
- Lists naturally trigger the "Front-Loading" rule
- Short paragraphs (2-3 sentences max) allow single bold to stand out
- First paragraph MUST contain at least one bolded entity (Brand or Key Metric) — hooks the scanning eye

---

## 7. Pre-Output Checklist

Before finalizing any content block, verify:

1. ✓ No banned vocabulary (Section 2)
2. ✓ Burstiness — sentence lengths vary (Section 3.A)
3. ✓ No Brand Echo — consecutive sentences don't start with same brand (Section 3.B)
4. ✓ No hedging — assertive language (Section 3.C)
5. ✓ One Hit Rule — max 1 data bold per paragraph (Section 4.A)
6. ✓ Lists front-loaded — labels bold at start (Section 4.B)
7. ✓ List symmetry — items have comparable length (Section 5)
