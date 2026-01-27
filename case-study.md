# AI Coach Mentor
## Building a Platform for the $7.3B Coaching Industry

**Role:** Product Designer (End-to-End)
**Timeline:** 4 weeks
**Scope:** Market Research → Strategy → Product Design → Prototype

---

## Impact Summary

| Metric | Result |
|--------|--------|
| Market size validated | **$7.3B** global, **$16B** US |
| Target users identified | **167,000+** coaches worldwide |
| Pain point discovered | **Acquisition cost $200-500/client** |
| Business model validated | Similar product (SimCare) at **$4M ARR** |

---

## The Story

### 1. The Spark: A Paradox in Coaching

I started researching the coaching industry and found a surprising paradox:

> **Coaches help others grow. But who helps the coaches grow?**

The answer: **supervision sessions** at $150-300/hour. Most coaches can only afford one session per month. I thought this was the opportunity.

**Then I found SimCare AI** — a YC-backed startup ($4.5M raised, $4M revenue) letting therapy students practice with AI patients.

**My initial hypothesis:** Build "SimCare for Coaches" — an AI practice tool.

---

### 2. The Pivot: Discovering the Real Pain Point

Through deeper research, I discovered something unexpected:

> **The #1 challenge for coaches isn't expensive supervision. It's getting clients.**

| Research Finding | Data |
|------------------|------|
| Customer acquisition cost | **$200-500** per client |
| Clients needed to go full-time | **25-35** people |
| Sales cycle | **6-12 touchpoints** before purchase |

**The "Feast or Famine" Cycle:**
```
Great month (5 clients) → Next month: crickets →
Relying on referrals → Unpredictable income → Anxiety
```

**Why is acquisition so hard?**
- Coach training teaches coaching skills, **not marketing**
- 232,000+ coaches in the US alone = oversaturated market
- Self-promotion feels awkward ("I AM the product")
- Long sales cycles due to high prices + trust dependency

---

### 3. The Strategy: From Tool to Ecosystem

This insight changed my entire approach:

| Original Idea | New Strategy |
|---------------|--------------|
| AI Supervision tool | **Coach Ecosystem Platform** |
| Single pain point | **Two-sided marketplace** |
| B2C only | **B2C + B2B** |

**The new vision:**
```
┌─────────────────────────────────────────────────────────┐
│                  Coach Ecosystem Platform                │
├─────────────────────────┬───────────────────────────────┤
│     Client Side         │         Coach Side            │
│     ──────────          │         ──────────            │
│  • Search/filter coaches│  • Profile & visibility       │
│  • View profiles        │  • Booking management         │
│  • Book sessions        │  • Client management          │
│  • Leave reviews        │  • AI Supervision growth      │
└─────────────────────────┴───────────────────────────────┘
                          ↓
         Flywheel: Better coaches → Happier clients →
                   More coaches join → More clients come
```

**Why combine directory + AI supervision?**

| Standalone | Problem | Combined |
|------------|---------|----------|
| Directory only | Competing with Noomii, no differentiation | AI Supervision is unique value |
| AI Supervision only | Hard to acquire coach users | Directory brings organic traffic |

---

### 4. Market Validation

#### 4.1 The Market is Huge

| Metric | Data | Source |
|--------|------|--------|
| Global coaching market | **$7.3B** | ICF 2025 |
| US market | **$16B** | ResearchAndMarkets |
| Global coaches | **167,000+** | ICF estimate |
| US coaches | **232,000+** | Industry reports |
| Growth rate | **17% CAGR** | 2019-2023 |

#### 4.2 Demand is Real (SEO Research)

| Search Term | Monthly Volume | Insight |
|-------------|----------------|---------|
| "Life Coach" | 22,000 | High interest |
| "Career Coach" | 14,000 | Strong demand |
| "Find a Life Coach" | 500 | **High purchase intent** |
| "Hire a Coach" | 100 | **Ready to buy** |

**Key insight:** Search traffic converts at **14.6%** vs paid ads at **1.7%** — 8.5x better!

#### 4.3 Competitive Landscape

| Competitor | Directory | Booking | AI Supervision |
|------------|-----------|---------|----------------|
| Noomii | ✅ | ❌ | ❌ |
| BetterUp | ✅ | ✅ | ❌ |
| ADPList | ✅ | ✅ | ❌ |
| **Our Platform** | ✅ | ✅ | ✅ ← **Differentiator** |

**The gap in AI tools:**
- Therapy field has Eleos Health, Lyssn, Mentalyc for AI supervision
- Coaching field has nothing equivalent
- Existing AI coaching tools (Rocky.ai, CoachHub) serve **coachees**, not coaches

---

### 5. User Research

#### 5.1 Primary Personas

| Persona | Description | Key Need | Priority |
|---------|-------------|----------|----------|
| **New ACC Coach** | Just certified, building practice | Clients + skill improvement | ⭐⭐⭐⭐⭐ |
| **Coach Trainee** | In certification program | Practice opportunities | ⭐⭐⭐⭐⭐ |
| **Training Institution** | Coach schools (B2B) | Better student outcomes | ⭐⭐⭐⭐ |

#### 5.2 User Journey (Current State)

```
Coach completes training
        ↓
🔴 Struggles to find clients (spends hours on marketing)
        ↓
Finally gets a few clients
        ↓
🔴 Uncertain about their own performance
        ↓
Books supervision ($200/session)
        ↓
🔴 4 weeks later, the case is already stale
        ↓
Gets feedback, tries to apply
        ↓
🔴 No way to practice immediately
        ↓
🔴 Income unstable (feast or famine cycle)
```

#### 5.3 Value Proposition

**For Clients:**
| Pain | Solution |
|------|----------|
| Don't know where to find a coach | Directory + smart matching |
| Don't know which coach fits | Filters + review system |
| Scheduling is annoying | Built-in booking |

**For Coaches:**
| Pain | Solution |
|------|----------|
| Client acquisition is hard ($200-500/client) | Directory exposure + platform traffic |
| Supervision is expensive ($150-300/hr) | AI Supervision at $79/month |
| Don't know what to improve | ICF-based analysis |
| Writing session notes takes time | Auto-generated summaries |

---

### 6. Key Design Decisions

#### Decision 1: Real-time Feedback Without Disruption

**Challenge:** How to give feedback during practice without breaking conversation flow?

**Explorations:**
| Approach | Result |
|----------|--------|
| Pop-up notifications | Too distracting |
| Post-session only | Too late, coach forgets |
| Voice interruption | Unnatural |

**Solution:** Collapsible sidebar with live stats (talk ratio, question quality, empathy moments). Coach can glance without losing focus.

```
┌──────────────────────────────────┬───────────────┐
│                                  │ Real-time     │
│    Conversation Area             │ Stats Panel   │
│                                  │               │
│    Coach: "What brings you..."   │ Talk: 35/65 ✓ │
│                                  │ Questions: 4  │
│    Client: "I've been feeling..."│ Empathy: 2    │
│                                  │               │
│                                  │ ┌───────────┐ │
│                                  │ │ Try This: │ │
│                                  │ │ "What     │ │
│                                  │ │ does that │ │
│                                  │ │ mean to   │ │
│                                  │ │ you?"     │ │
│                                  │ └───────────┘ │
└──────────────────────────────────┴───────────────┘
```

**Why it works:** Like a car dashboard — peripheral visibility without requiring focus.

---

#### Decision 2: Building Trust Through ICF Framework

**Challenge:** Coaches are skeptical of AI evaluating their "soft skills."

**Explorations:**
| Approach | Result |
|----------|--------|
| Generic AI feedback | Felt arbitrary |
| Star ratings | Too gamified |
| Percentage scores alone | Meaningless without context |

**Solution:** Ground everything in ICF's official 8 Core Competencies with:
1. **Evidence** — Exact timestamps and quotes
2. **ICF Definition** — What the competency means officially
3. **Specific praise** — What they did well
4. **Actionable improvement** — Concrete next step

```
┌─────────────────────────────────────────────────────────┐
│  Active Listening  ████████░░  80%                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Why 80%?                                               │
│                                                         │
│  ✅ What you did well:                                  │
│     • Client spoke 65% of the time (target: >60%)       │
│     • Accurately paraphrased 3 times                    │
│     • Caught emotional shift at 04:20                   │
│                                                         │
│  ⚠️ Areas to improve:                                   │
│     • Interrupted at 02:15 and 08:30                    │
│     • Missed exploring "I feel..." at 03:10            │
│                                                         │
│  💡 Try this: Wait 3-5 seconds when client pauses       │
│                                                         │
│  📖 ICF Definition: Fully focusing on what the client   │
│     is saying and not saying...                         │
└─────────────────────────────────────────────────────────┘
```

**Why it works:** ICF is the industry authority. Coaches already know and trust this framework.

---

#### Decision 3: Inline Transcript Feedback

**Challenge:** Traditional feedback summarizes at the end, but coaches learn best seeing exactly *where* they did well.

**Solution:** Annotated transcript with inline comments (like Google Docs).

| Time | Speaker | Content | AI Comment |
|------|---------|---------|------------|
| 00:50 | Coach | "It sounds like you're carrying a lot. Can you tell me more?" | ✅ Great empathy + open question |
| 02:20 | Coach | "Have you tried talking to your boss?" | ⚠️ This is advice, not a question |
| 03:28 | | *(8 seconds of silence)* | ✅ Great use of silence |

**Why it works:** Connects abstract feedback to specific moments. Creates "aha" moments.

---

#### Decision 4: Platform Flywheel

**Challenge:** How to solve the chicken-and-egg problem of a two-sided marketplace?

**Solution:** Design for flywheel effect:

```
More coaches join (supply)
        ↓
More content → Better SEO
        ↓
More clients find the platform (demand)
        ↓
Coaches get clients → They're happy
        ↓
AI Supervision makes coaches better
        ↓
Better sessions → Better reviews
        ↓
More clients trust the platform
        ↓
More coaches want to join... (repeat)
```

**Key insight:** AI Supervision isn't just a feature — it makes coaches better, which drives the flywheel.

---

### 7. Product Architecture

#### 7.1 Four Core Modules

| Module | For | Key Features |
|--------|-----|--------------|
| **Coach Directory** | Clients | Search, filter, view profiles |
| **Booking System** | Both | Calendar, scheduling, reminders |
| **AI Supervision** | Coaches | Practice, review, feedback, progress |
| **Coach Dashboard** | Coaches | Bookings, clients, revenue |

#### 7.2 AI Supervision Features

| Feature | Description | User Value |
|---------|-------------|------------|
| Real-time Coaching Tips | Live feedback during practice | Improve in the moment |
| Post-Session Review | Transcript + inline comments | See exactly where to improve |
| Auto Session Notes | AI-generated summaries | Save 30+ min per session |
| Progress Tracking | ICF skill radar chart over time | Visualize growth |
| Client Growth Profiles | Track each client's progress | Prove coaching value |

---

### 8. Business Model

#### 8.1 Why Coaches Will Pay

> **$79/month subscription < $200-500 client acquisition cost**
>
> If the platform brings stable clients, the subscription pays for itself.

#### 8.2 Pricing Strategy

| Tier | Price | Includes |
|------|-------|----------|
| Free | $0 | Basic profile, 3 bookings/month, 3 AI practices |
| Pro | $29/month | Full profile, unlimited bookings, 15% commission |
| Premium | $79/month | Pro + full AI Supervision, 10% commission |

**Reference:** Noomii charges $447/year for directory listing alone — no booking, no AI.

---

### 9. MVP Roadmap

```
Phase 1: Directory + Booking (Core Platform)
        ↓
Phase 2: AI Supervision (Differentiation)
        ↓
Phase 3: Payments + Commission (Monetization)
        ↓
Phase 4: Mobile App, Zoom Integration (Scale)
```

---

### 10. Reflection

#### What Worked

| Decision | Outcome |
|----------|---------|
| Deep market research before design | Discovered real pain point (acquisition, not just supervision) |
| Pivoting from tool to platform | Created stronger value proposition and moat |
| SEO research for demand validation | Proved client-side demand exists |
| ICF framework for credibility | Built trust mechanism into product |

#### What I'd Explore Next

| Area | Reason |
|------|--------|
| Voice interface | Coaching is conversational; text feels unnatural |
| User testing with real coaches | Validate assumptions |
| B2B sales to training institutions | Higher willingness to pay, bulk users |

#### Key Takeaways

1. **Research can change direction** — The original "AI supervision" idea became one piece of a larger platform
2. **Pain points have layers** — Supervision cost was a symptom; acquisition was the root cause
3. **Flywheel thinking** — AI Supervision isn't just a feature, it makes the whole platform better
4. **Authority builds trust** — Grounding AI feedback in ICF standards overcomes skepticism

---

## Prototype

**Tech stack:** React, TypeScript, Tailwind CSS, Recharts

**Key screens:**
- Landing page
- Coach directory with search/filter
- Coach profile with booking
- Practice session with real-time tips
- Report with inline transcript feedback
- Progress tracking with ICF radar chart

[View Prototype →](https://ruliang.github.io/ai-supervision/)

---

## Appendix

### ICF 8 Core Competencies

| # | Competency | Description |
|---|------------|-------------|
| 1 | Demonstrates Ethical Practice | Ethics and confidentiality |
| 2 | Embodies a Coaching Mindset | Curiosity and openness |
| 3 | Establishes Agreements | Clear goal setting |
| 4 | Cultivates Trust and Safety | Safe conversation space |
| 5 | Maintains Presence | Fully present and attentive |
| 6 | Listens Actively | Hearing said and unsaid |
| 7 | Evokes Awareness | New insights |
| 8 | Facilitates Client Growth | Action and accountability |

### Research Documents

- [Market Size Research](research/market-size-research.md)
- [SEO Keyword Research](research/seo-keyword-research.md)
- [Coach Acquisition Pain Analysis](research/coach-acquisition-pain.md)
- [Competitor Analysis](competitor-analysis.md)

---

*[Your Name] · Product Designer · 2026*
