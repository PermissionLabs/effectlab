# EffectLab — Effect Evaluation Framework

## Scoring Criteria (each 1-5)

| Criteria | Weight | Description |
|----------|--------|-------------|
| **Popularity** | 20% | GitHub stars, npm weekly downloads, community adoption |
| **Visual Impact** | 20% | How impressive/beautiful the effect looks in the showcase |
| **Ease of Integration** | 15% | Install complexity, API simplicity, docs quality |
| **Bundle Efficiency** | 10% | Size vs what it delivers. Smaller = better for the same impact |
| **Maintenance** | 15% | Last update recency, issue response, release frequency |
| **Searchability** | 10% | How often people search for this pattern. Familiar UI concept? |
| **Uniqueness** | 10% | Novel, hard-to-find, or unexpectedly useful. Hidden gems score high |

**Score = weighted average → max 5.0**

### Rating Guide

| Score | Meaning |
|-------|---------|
| 5 | Exceptional — must-have, industry standard |
| 4 | Strong — widely used, high quality |
| 3 | Good — solid option, some trade-offs |
| 2 | Okay — works but has notable downsides |
| 1 | Weak — outdated, niche, or poor DX |

---

## Batch 1 Evaluation (25 effects)

### Tier S — Homepage-worthy, apply to EffectLab itself

| # | Effect | Pop | Visual | Easy | Bundle | Maint | Search | Unique | **Score** | Notes |
|---|--------|-----|--------|------|--------|-------|--------|--------|-----------|-------|
| 1 | **Motion (Framer)** | 5 | 5 | 4 | 3 | 5 | 5 | 3 | **4.45** | Industry standard. Already powers half the web. Apply to card animations. |
| 2 | **Sonner** | 5 | 5 | 5 | 4 | 5 | 4 | 4 | **4.65** | Best toast library. Apply for copy feedback. Emil Kowalski quality. |
| 3 | **cmdk** | 5 | 4 | 4 | 3 | 5 | 5 | 4 | **4.35** | Cmd+K is now standard UX. Replace our search with cmdk. |
| 4 | **@number-flow/react** | 4 | 5 | 5 | 4 | 5 | 3 | 5 | **4.40** | Uniquely beautiful number morphing. Show in stats section. |
| 5 | **Vaul** | 5 | 4 | 5 | 3 | 5 | 4 | 4 | **4.30** | Best drawer. Use for mobile effect detail view. Same author as Sonner. |

### Tier A — High quality, strong showcase pieces

| # | Effect | Pop | Visual | Easy | Bundle | Maint | Search | Unique | **Score** | Notes |
|---|--------|-----|--------|------|--------|-------|--------|--------|-----------|-------|
| 6 | **@react-spring/web** | 5 | 4 | 3 | 3 | 4 | 5 | 3 | **3.95** | Physics-based alternative to Framer. Huge ecosystem. |
| 7 | **Auto Animate** | 4 | 4 | 5 | 5 | 4 | 4 | 4 | **4.20** | Magic one-liner. 3.8kB for automatic animations. Great DX. |
| 8 | **Embla Carousel** | 4 | 4 | 4 | 4 | 5 | 5 | 3 | **4.10** | Best carousel library. Everyone needs carousels. |
| 9 | **@shadergradient/react** | 4 | 5 | 3 | 2 | 4 | 3 | 5 | **3.80** | Stunning 3D gradients. Heavy but visually unmatched. |
| 10 | **@react-three/drei** | 5 | 5 | 3 | 1 | 5 | 4 | 4 | **3.90** | 3D powerhouse. 484kB but unbeatable for 3D effects. |
| 11 | **react-awesome-reveal** | 3 | 4 | 5 | 4 | 3 | 5 | 2 | **3.65** | Solid scroll reveals. Common pattern, easy to use. |
| 12 | **Animated Glow (RN)** | 2 | 5 | 2 | 3 | 4 | 4 | 5 | **3.55** | WebGL shader port. Unique visual, but RN-origin limits web DX. |
| 13 | **Siri Orb (SmoothUI)** | 2 | 5 | 4 | 4 | 4 | 3 | 5 | **3.70** | Beautiful and unique. Niche but eye-catching. |

### Tier B — Solid utilities, good for specific use cases

| # | Effect | Pop | Visual | Easy | Bundle | Maint | Search | Unique | **Score** | Notes |
|---|--------|-----|--------|------|--------|-------|--------|--------|-----------|-------|
| 14 | **PixiJS Particles** | 5 | 4 | 2 | 2 | 5 | 3 | 3 | **3.40** | Powerful engine but overkill for simple effects. 150kB. |
| 15 | **Scroll Parallax** | 3 | 4 | 4 | 4 | 4 | 5 | 2 | **3.60** | Classic pattern. Everyone knows parallax. |
| 16 | **Text Typewriter** | 3 | 3 | 5 | 5 | 3 | 5 | 2 | **3.55** | Ubiquitous hero effect. 3.5kB, dead simple. |
| 17 | **3D Card Tilt** | 3 | 4 | 5 | 5 | 4 | 4 | 3 | **3.80** | Impressive hover effect, zero deps, tiny bundle. |
| 18 | **Infinite Marquee** | 3 | 3 | 5 | 5 | 3 | 4 | 2 | **3.40** | Logo ticker pattern. 2.1kB champion. |
| 19 | **React Confetti** | 3 | 4 | 5 | 4 | 3 | 4 | 2 | **3.45** | Fun celebration feedback. Widely known. |
| 20 | **React Rewards** | 3 | 4 | 5 | 5 | 3 | 3 | 4 | **3.60** | More targeted than confetti. Emoji + balloons unique. |
| 21 | **Animated Counter** | 3 | 3 | 5 | 5 | 3 | 4 | 2 | **3.40** | Classic dashboard pattern. Solid but not exciting. |
| 22 | **Loading Skeleton** | 4 | 3 | 5 | 5 | 4 | 5 | 2 | **3.75** | 0.9kB! Essential loading pattern. Apply to our grid. |
| 23 | **React Spinners** | 3 | 3 | 5 | 4 | 4 | 5 | 1 | **3.40** | Classic spinners. Nothing new but people search for it. |
| 24 | **Hand-drawn Annotation** | 2 | 4 | 4 | 5 | 2 | 3 | 5 | **3.40** | Unique sketchy aesthetic. Niche but delightful. |
| 25 | **Lottie Animations** | 4 | 4 | 3 | 2 | 4 | 4 | 3 | **3.50** | After Effects → web pipeline. Heavy but powerful. |

---

## Homepage Application Plan

Based on Tier S evaluations, apply these to EffectLab itself:

| Effect | Where to Apply | Priority |
|--------|---------------|----------|
| **Sonner** | Replace CopyButton alert with toast notification | P0 |
| **cmdk** | Replace search bar with Cmd+K command palette | P0 |
| **Motion (Framer)** | Card enter/exit animations in grid | P1 |
| **Loading Skeleton** | Placeholder while effects load | P1 |
| **Vaul** | Mobile detail view drawer | P2 |
| **@number-flow/react** | Animated effect count in header | P2 |
| **Auto Animate** | Smooth filter/sort transitions in grid | P2 |

---

## What to Look For in Next Batches

### High priority (fill gaps)
- **Cursor effects** — custom cursor, cursor trail (no good library yet)
- **Page transitions** — next-view-transitions, barba.js-like
- **Scroll-driven animations** — scroll timeline, sticky sections
- **Background effects** — animated noise/grain, dot grid, gradient mesh
- **Micro-interactions** — button press, toggle, checkbox animations
- **Data visualization** — animated charts (recharts, visx)

### Hidden gems to find
- Korean/Asian design community effects
- Figma-to-code animation tools
- AI-generated animation libraries
- WebGPU-based effects (next-gen)
- Accessibility-first animation libraries (prefers-reduced-motion)
