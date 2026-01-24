# Research Prompt: Competition Betting Guide

## Before You Start

**You may only ask to clarify the competition name** if genuinely ambiguous between different competitions (e.g., "Champions League" — UEFA or AFC?). Provide options for user to pick.

**Do NOT ask about:**
- Year/edition
- Men's/Women's
- Senior/Youth
- "What's your focus?"

**Default assumption:** Major, senior, men's version. User would specify otherwise.

Everything else is clear from the prompt. Start researching immediately.

## Your Task

You are researching **[World Snooker Championship]** to gather factual data for a betting guide. Your research will be used by a content writer to create an authoritative, data-driven article.

---

## 1. Quick Facts

Find verified factual information:
- Founded / first edition
- Number of teams/players
- Format (matches, rounds, duration)
- Season dates / when it takes place
- Venue / country
- Key statistics (avg goals, avg total points, service hold %, etc.)

**Sources:** Official competition website, Wikipedia, established sports databases.

---

## 2. Betting Markets

### A. Main Markets
List high-volume markets that bookmakers prominently feature.

### B. Micro-Markets (Opportunity Analysis)

Find niche markets with potential edge. Assess each:

| Market | Type | Competitor Content | Bettor Interest | Data Available | Opportunity |
|--------|------|-------------------|-----------------|----------------|-------------|
| [Market] | Micro | Sparse/Some/Saturated | High/Med/Low | Yes/Partial/No | HIGH/Med/Low |

**HIGH opportunity = Low competitor coverage + Medium-High bettor interest + Data available**

**Sources:** bet365, Betfair, DraftKings menus; Reddit r/sportsbook; betting forums.

---

## 3. Edge Patterns (CRITICAL)

An Edge Pattern is a specific, data-backed statistical trend that creates betting value.

### Format
```
[WHO] + [SITUATION] + [OUTCOME] + [PERCENTAGE] + [SAMPLE SIZE]
```

### Examples
- "Home favourites win 70.5% vs road favourites at 58.4% (n=1,498)"
- "Stalls 7-12 produced 10/13 Derby winners since 2003 (76.9%)"
- "First-time Grand Slam finalists lose 78% of finals (Open Era, n=23)"
- "Teams playing Thursday Europa then Sunday average 1.27 PPG vs 1.68 league average (n=27,000)"

### NOT Edge Patterns (generic, already priced in)
- ❌ "Home teams win more" — no specifics
- ❌ "Favourites usually cover" — no situation, no %
- ❌ "Top seeds advance more often" — obvious
- ❌ "Form matters" — vague, not actionable
- ❌ "Defence wins championships" — cliché

### Sample Size Guidelines
- **n < 20:** Flag as "limited sample" — include only if pattern is very strong
- **n = 20-50:** Acceptable for rare events (annual finals, single races)
- **n = 50-200:** Good for seasonal patterns
- **n > 200:** Strong for market-wide trends

### What to Look For
- Home/away splits by team quality tier
- Performance in specific situations (after loss, in playoffs, vs top/bottom opponents)
- Tournament stage patterns (early rounds vs finals)
- Seasonal timing (start of season, fixture congestion, dead rubbers)
- Surface/venue/conditions impact
- Rest days / travel impact

**Sources:** FBref, Transfermarkt, ESPN Stats, Opta, official competition stats, academic papers, Reddit betting communities.

---

## 4. Counter-Intuitive Findings (HIGH VALUE)

Search for patterns that contradict common assumptions:
- Market overvalues obvious metrics (serve speed, goal-scoring form, seed ranking)
- "Obvious" leads convert at lower rates than expected
- Underdogs outperform in specific situations
- Secondary metrics predict better than primary metrics

### Examples
- "Mid-price each-way bets (8-14/1) have worst place rate — 12.5% vs 55% for short prices"
- "Slower-paced teams have higher offensive efficiency (negative correlation)"
- "Away teams in double-week scheduling cover better than home teams (53% vs 50%)"
- "Leaders entering the straight win only 11% — market overprices positional advantage"

### Format
```
[Finding] — contradicts assumption that [X]
```

---

## 5. Anomalies (Entities Behaving Opposite to Expectations)

Search for teams/players with 15%+ deviation from expected:

| Entity | Expected | Actual | Gap | Possible Driver |
|--------|----------|--------|-----|-----------------|
| [Team/Player] | X% | Y% | ±Zpp | [Hypothesis] |

### Examples
- Team performs better away than home
- Player wins fewer matches but covers more spreads
- High-scoring team has low BTTS rate
- Favourite underperforms in specific situation

---

## 6. Comeback & Momentum Data

Research win probability from various lead positions:

| Lead Position | Conversion Rate | Market Implied | Edge |
|---------------|-----------------|----------------|------|
| [Position] | X% | Y% | ±Zpp on [side] |

### CRITICAL: Break Down by Quality Tier
Markets price all leads similarly. Tier breakdown reveals edge:
- Top-tier teams converting leads: X%
- Mid-tier teams: Y%
- Bottom-tier teams: Z%

### What to Research
- At what point do leads become "safe"?
- Momentum shift triggers (break of serve, first goal, power play)
- Fatigue/psychology in extended play (5th sets, overtime)

---

## 7. Context Factors

### A. Format & Rules Affecting Betting
- Match length (40 min vs 48 min, best-of-3 vs best-of-5)
- Scoring/tiebreak rules
- Retirement/abandonment policies
- Weather/conditions protocols

### B. Venue & Surface
- Surface characteristics (speed, bounce, grip)
- Venue-specific data (altitude, indoor/outdoor, crowd capacity)
- How technical factors shift advantage between styles

### C. Home Advantage (Quantified)
- Home win rate with specific number
- Crowd effect (with vs without fans if data exists)
- Venue-specific advantages (hostile crowds, travel distances)

### D. Preparation & Form Correlations
- Warm-up event correlation with main event
- Impact of skipping preparation events
- Recent form vs season form — which is more predictive?
- Travel / timezone adjustment impact

---

## 8. Official/Referee Patterns

**Skip if:** Individual sports (tennis, golf, darts), racing, esports

**Research by NAME, not aggregate:**

| Official | Cards/Game | Fouls/Game | Home Bias | Notes |
|----------|------------|------------|-----------|-------|
| [Name] | X | Y | ±Z% | [Style note] |

### What to Track
- Strictest vs most lenient officials (with numbers)
- Home team bias by official
- Big match vs routine fixture tendencies
- VAR/review tendencies

---

## 9. Manager/Coach Impact

**Skip if:** Individual sports, events without coaches

| Manager | Style | Market Affected | Edge |
|---------|-------|-----------------|------|
| [Name] | [Style description] | [Market] | [Specific edge] |

### What to Research
- Tactical tendencies creating predictable patterns
- New manager bounce duration
- Manager vs specific opponents (H2H)
- Cup vs league performance differences

---

## 10. Live Betting Windows

For each window, provide:
- **Trigger:** What event starts the window
- **Duration:** How long edge lasts (seconds/minutes)
- **Edge:** What to bet
- **Mechanism:** Why algorithm/market lags

### Examples
```
Trigger: Red card shown
Duration: 90-180 seconds
Edge: Back trailing team
Mechanism: Algorithms take 90+ seconds to recalculate win probability

Trigger: Roof closure (tennis)
Duration: 2-3 minutes
Edge: Back server
Mechanism: Models lag in adjusting serve hold probability (+3-5%)

Trigger: Leader at Tattenham Corner (Derby)
Duration: Until 2f out
Edge: Lay leader
Mechanism: Crowd/visual bias overrates positional advantage; leaders win only 11%
```

---

## 11. Seasonal/Timing Patterns

- When do odds open and move? (sharp money timing)
- Seasonal trends (early season unpredictability, late motivation)
- Round/stage patterns (Round 1 upsets vs Final predictability)
- Day of week / time of day patterns
- Key dates when lines shift (draw announcements, injury news windows)

---

## 12. FAQ Research (Dual Strategy)

### A. SEO Questions (for traffic)
Questions with search volume that could trigger Featured Snippets:
- "Which bookmaker is best for [X]?"
- "How many [goals/points/games] in [competition]?"
- "When does [competition] start?"
- "What is [specific rule/market]?"

### B. Pain Point Questions (for trust)
Real frustrations from betting communities:
- "Why does [pattern] always fail?"
- "Is [market] still profitable?"
- Questions where people share losing experiences

| Question | Type | Volume/Freq | Existing Answers | Priority |
|----------|------|-------------|------------------|----------|
| [Question] | SEO/Pain | High/Med/Low | Good/Weak/Missing | HIGH/Med/Low |

**HIGH priority = High volume/frequency + Weak or missing existing answers**

---

## 13. Statistical Tables Data

Collect raw data for tables. Include:
- Minimum 3 seasons/years where possible
- Sample size (n=X) for each dataset
- Source citation
- Flag anomalies (COVID seasons, rule changes)

### Types Needed

**Season-by-Season:**
```
| Season | Metric 1 | Metric 2 | Metric 3 |
```

**Market Hit Rates:**
```
| Market | Hit Rate | Sample | Notes |
```

**Team/Player Tiers:**
```
| Tier | Win % | Cover % | Best Market |
```

**Round/Stage Breakdown:**
```
| Round | Favourite Win % | Upset Rate | Avg Duration |
```

---

## Output Format

```
## [COMPETITION NAME] Research Findings

### Quick Facts
- Fact 1: [value]
- Fact 2: [value]

### Popular Markets
1. [Market] — [description]

### Micro-Markets Opportunity Analysis
| Market | Type | Competitor Content | Bettor Interest | Data Available | Opportunity |

### Edge Patterns Found
1. [Pattern with %] (Source: X, Period: Y, n=Z)
2. ...

### Counter-Intuitive Findings
1. [Finding] — contradicts [assumption]
2. ...

### Anomalies Detected
| Entity | Expected | Actual | Gap | Driver |

### Comeback / Momentum Data
| Lead Position | Conversion Rate | Market Implied | Edge |

### Context Factors
- [Factor]: [data]

### Official/Referee Patterns (if applicable)
| Name | Metric | Home Bias | Notes |

### Manager Impact (if applicable)
| Manager | Style | Market | Edge |

### Live Betting Windows
- Trigger: [X] | Duration: [Y] | Edge: [Z] | Mechanism: [W]

### Timing Patterns
- [Pattern]

### FAQ Questions
| Question | Type | Volume | Existing | Priority |

### Statistical Tables Data
[Raw data in table format]

### Sources Used
- [Source] (URL)
```

---

## Quality Checklist

Before submitting:

- [ ] All Edge Patterns have % AND sample size (n=X)
- [ ] Sample sizes flagged if n < 20
- [ ] At least 3 counter-intuitive findings
- [ ] Anomalies identified (15%+ deviation from expected)
- [ ] Comeback data broken down by quality tier
- [ ] Live betting windows have trigger + duration + mechanism
- [ ] Officials/Managers researched by NAME (if applicable)
- [ ] FAQ has both SEO and pain point questions
- [ ] Tables have 3+ data points
- [ ] Sources cited for key claims
- [ ] No generic insights presented as edge patterns