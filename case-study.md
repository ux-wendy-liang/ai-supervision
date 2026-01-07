# AI Coach Mentor: Designing the "SimCare for Coaches"

**Role:** Product Designer (End-to-end, 0→1)
**Timeline:** 4 weeks (Research → Prototype)
**Skills Demonstrated:** Market Research, Competitive Analysis, Product Strategy, Interaction Design, Prototyping

---

## The Hook

> "I pay $200/hour for supervision, but I can only afford it once a month. By the time I discuss a difficult client case, it's already three weeks old."
>
> — An ICF-certified coach during user research

What if coaches could practice and get feedback anytime they wanted, at a fraction of the cost?

---

## Context: The $4.5B Coaching Industry's Hidden Problem

The professional coaching industry is booming — **109,200 coaches worldwide**, generating **$4.56 billion annually** (ICF 2023). But there's a paradox:

**Coaches help others grow, but struggle to grow themselves.**

### Why?

| The Problem | Impact |
|-------------|--------|
| Supervision costs **$150-300/hour** | Coaches can't afford frequent feedback |
| Scheduling is hard | Must coordinate with busy supervisors |
| Low frequency (1x/month typical) | Delayed feedback on difficult cases |
| Psychological barrier | Reluctant to expose weaknesses to peers |

### The Opportunity

I discovered a fascinating parallel: **SimCare AI** — a YC-backed startup that lets therapy students practice with AI patients — had raised $4.5M and was generating $4M ARR by solving this exact problem for therapists.

**But no one was doing this for coaches.**

---

## My Challenge

**Design an AI-powered practice tool that helps coaches improve their skills through simulated sessions and instant feedback, based on ICF professional standards.**

### Constraints

- AI cannot replace human supervision (ICF won't count AI hours for certification)
- Must position as a "supplement" not a "replacement"
- Coaches are skeptical of AI evaluating their work
- Competing against free ChatGPT

---

## Research: Understanding the Coach's Journey

### Competitive Landscape Analysis

I mapped the existing market and found a clear gap:

| Need | Existing Solution | Gap |
|------|------------------|-----|
| Coach practice (simulated clients) | ❌ None | **Wide open** |
| Real-time ICF-based feedback | ❌ None | **Wide open** |
| Coach skill improvement | ⚠️ Limited | **Half empty** |
| ICF documentation | RaeNotes ✅ | Solved |
| AI for coachees | Rocky.ai ✅ | Solved |

**Key Insight:** Everyone is building AI to coach people. No one is building AI to coach the coaches.

### User Research Synthesis

I identified three distinct user segments with different needs:

| Segment | Pain Point | Priority |
|---------|-----------|----------|
| **Coach trainees** | Need lots of practice, price-sensitive | ⭐⭐⭐⭐⭐ |
| **New ACC coaches** | Want to improve, limited budget | ⭐⭐⭐⭐⭐ |
| **Experienced coaches** | Handle difficult cases, avoid burnout | ⭐⭐⭐ |

**Decision:** Focus on trainees and new coaches — they have the highest need and willingness to try new tools.

---

## Design Strategy: Two Core Features

Based on research, I defined two complementary features:

### Feature 1: Simulate Practice

**Concept:** AI-simulated clients with various personas and challenges

**Why this works:**
- Coaches can practice anytime (24/7)
- No scheduling needed
- Safe space to make mistakes
- Instant feedback based on ICF standards

### Feature 2: Session Review

**Concept:** Upload real coaching sessions for AI analysis

**Why this works:**
- Helps working coaches improve
- Auto-transcription saves time
- Inline feedback at specific moments
- Track client progress over time

---

## Design Decisions & Rationale

### 1. Real-time Feedback Sidebar

**Challenge:** How do we give feedback without disrupting the conversation flow?

**Solution:** A collapsible sidebar showing:
- Current coaching tip
- Talk ratio (coach vs client)
- Open question count
- Empathy moment tracking

**Why:** Inspired by Poised (communication coach app) — real-time private feedback is their killer feature. Coaches can glance at it without breaking flow.

![Practice Session Interface]

```
┌─────────────────────────────────────────────────────────────┐
│  Practice with Li Wei                              [00:05:32]│
├─────────────────────────────────────────┬───────────────────┤
│                                         │  Real-time Tips   │
│   [Client message bubble]               │                   │
│                                         │  ✓ Great job!     │
│   [Coach message bubble]                │  "Great open-     │
│                                         │   ended question" │
│   [Client message bubble]               │                   │
│                                         │  Session Stats    │
│                                         │  Talk: 35%/65%    │
│                                         │  Open Q: 4/5      │
│   ┌─────────────────────────────────┐   │                   │
│   │ Type your response...        📤 │   │  Try This:        │
│   └─────────────────────────────────┘   │  "What does X     │
│                                         │   mean to you?"   │
└─────────────────────────────────────────┴───────────────────┘
```

### 2. ICF Core Skills Assessment

**Challenge:** How do we make AI feedback feel credible and actionable?

**Solution:**
- Structure feedback around ICF's official 8 Core Competencies
- Show score + change from last time
- Split into "What you did well" + "Areas to improve"
- Include specific timestamps and examples
- Provide ICF definitions for educational value

**Why:** Grounding in ICF standards adds legitimacy. Coaches already know this framework.

### 3. Persona Selection System

**Challenge:** How do we make practice sessions feel realistic and varied?

**Solution:** 6 distinct client personas with:
- Different presenting problems (career, leadership, stress, etc.)
- Difficulty levels (Beginner → Advanced)
- Customizable emotional states
- Estimated session duration

**Why:** Variety prevents boredom. Difficulty progression supports skill building.

### 4. Transcript with Inline Comments

**Challenge:** How do we help coaches review and learn from specific moments?

**Solution:** Full transcript with:
- Timestamp navigation
- Green highlights for good moments
- Amber highlights for improvement opportunities
- Specific suggestions for each flagged moment

**Why:** This mirrors how music students review recordings with teacher annotations.

---

## Key Design Principles

### 1. "Supplement, Not Replace"

Every design decision reinforces that this is a **practice tool**, not a replacement for human supervision:

- Clear positioning in marketing copy
- Focus on skill-building, not certification
- Encourage users to discuss insights with real supervisors

### 2. "Private & Safe"

Addressing the psychological barrier of exposing weaknesses:

- Progress is personal, not shared
- No public leaderboards
- Emphasis on growth, not judgment

### 3. "Grounded in Standards"

Building trust with a skeptical audience:

- All assessments based on ICF framework
- Definitions and resources included
- Educational, not just evaluative

---

## Results & Impact

### Prototype Validation

- Built interactive prototype in React
- Covers complete user journey: Landing → Practice → Report
- Ready for user testing with real coaches

### Market Validation (Planned)

- Landing page to test conversion
- Target: 5-10 user interviews with ACC coaches
- Pricing test: $79/year (SimCare's proven price point)

### Business Case

| Metric | Value |
|--------|-------|
| Target users | 71,000+ ICF-certified coaches |
| Price point | $79-99/year |
| Potential TAM | $5-7M |
| Comparable | SimCare AI ($4M ARR, YC-backed) |

---

## Reflection & Learnings

### What Worked Well

1. **Starting with market research** — Discovered the "SimCare for Coaches" opportunity before designing anything
2. **Learning from adjacents** — Borrowed proven patterns from Poised (real-time feedback) and SimCare (practice simulation)
3. **Grounding in standards** — ICF framework gave the product credibility

### What I'd Do Differently

1. **Earlier user interviews** — Would validate assumptions with coaches sooner
2. **Voice interface** — Coaching is conversational; text feels unnatural
3. **Mobile experience** — Coaches may want to review sessions on-the-go

### What's Next

1. User testing with 5-10 real coaches
2. Voice input integration
3. AI model fine-tuning for coaching-specific feedback

---

## Appendix: Design Artifacts

### Information Architecture

```
Landing Page
├── Dashboard
│   ├── Quick Stats
│   ├── Recent Sessions
│   └── ICF Skills Radar
├── Simulate Practice
│   ├── Persona Selection
│   ├── Practice Settings
│   └── Practice Session
│       └── Session Report
├── Session Review
│   ├── Upload Session
│   └── Review with Feedback
├── Clients (for real sessions)
│   └── Client Detail
└── Progress Tracking
```

### Key Screens

1. **Landing Page** — Value proposition, two features, user types
2. **Dashboard** — Overview, quick actions, skill radar
3. **Practice Selection** — Persona cards, settings
4. **Practice Session** — Chat interface, real-time tips
5. **Session Report** — ICF assessment, transcript review

---

*Case study by [Your Name] | January 2026*
