---
name: add-effect
description: Add a new visual effect to the EffectLab showcase. Accepts npm package name, GitHub URL, or homepage URL. Scaffolds files, then you customize the demo.
allowed-tools: Bash Read Write Edit Grep Glob WebFetch
argument-hint: "[package name, GitHub URL, or homepage URL]"
---

# Add Effect to EffectLab

## Scope gate — MOTION / ANIMATION / VISUAL EFFECTS ONLY

Before proceeding, verify the library is a **motion, animation, or visual effect** library.

**Allowed:** transitions, spring physics, scroll animations, parallax, particles, glow/beam, morphing, typewriter, reveal animations, loading spinners/skeletons, confetti/rewards, smooth scroll, 3D/WebGL effects, animated counters, carousel motion, Lottie, shader gradients, tilt/hover, ripple, noise visuals, marquee

**Reject immediately:** state management, form handling, UI primitives (modals, dialogs, tabs, sliders, selects), icons, data fetching, charts, tables, drag-and-drop, date/color pickers, toasts/notifications, layout utilities, code highlighting, error boundaries, clipboard, theme switching — anything whose primary purpose is NOT producing a visual/motion effect.

If the library doesn't pass this gate, tell the user it's out of scope and suggest `/effectlab` to search for a matching animation library instead.

## Input

`$ARGUMENTS` — npm package name, GitHub URL, or homepage URL.

Examples:
- `framer-motion`
- `https://github.com/formkit/auto-animate`
- `https://www.react-spring.dev`

## Step 1: Scaffold with CLI

Run the scaffold CLI which auto-fetches npm metadata, GitHub stars, bundle size, and creates all 4 files:

```bash
bun scripts/add-effect.ts $ARGUMENTS
```

This creates `src/effects/<slug>/` with:
- `DemoComponent.tsx` — TODO placeholder
- `meta.ts` — auto-filled from npm/GitHub (keywords need expansion)
- `usage.ts` — TODO placeholder
- `index.ts` — barrel export
- Updates `src/effects/registry.ts`

## Step 2: Install the package

```bash
bun add <package-name>
```

## Step 2.5: Read the container contract (MANDATORY)

Before writing ANY demo code, read `src/components/EffectCard.tsx` lines 79-88. Your component renders inside:

```
Container: absolute inset-0
Parent:    aspect-[4/5] min-h-[360px] bg-[#0a0a0a] overflow-hidden
```

This means:
- **overflow-hidden** — anything outside the box is silently clipped (no negative insets, no canvas bleed)
- **Dark opaque background** — no need for your own bg color
- **Fixed aspect ratio** — your component fills this, doesn't set its own size

### Implementation decision tree

```
Can CSS do it? (gradients, filters, blend-modes, @property animations)
  → YES: Use CSS. Done.
  → NO: Can a lightweight <canvas> do it without overflow issues?
    → YES: Use canvas with explicit width/height from parent bounds.
    → NO: Use the library's own component. Wrap with next/dynamic if SSR fails.
```

**The default is CSS. Canvas/WebGL is the exception, not the starting point.**

## Step 3: Complete the TODO files

### DemoComponent.tsx
- Import the REAL library component
- Make it visually impressive on dark background (`bg-[#0a0a0a]`)
- Must have `"use client"` directive
- Must fill parent (`w-full h-full`) — NO background color, NO centering wrappers, NO layout opinions
- The component is a **leaf**: it fills the parent and renders the effect. That's it.
- If SSR breaks → `next/dynamic({ ssr: false })` with a separate Inner file
- Add interactive elements if possible (buttons, hover states)
- **NEVER import CSS files in DemoComponent** — the build script (`generate-llms-txt.ts`) imports the registry at build time and CSS imports crash Node. Put keyframes/`@property` in `src/app/globals.css` instead.
- If the library provides demo secrets/keys in examples, use obviously fake values (no `sk_live_`, `pk_test_`, etc. — GitHub push protection will block)

### meta.ts — Expand keywords to 30+
The CLI generates basic keywords from npm. You must add:
- English visual descriptions (10+): what it looks like
- English use cases (8+): where to use it
- Korean terms (5+): 한국어 키워드
- Technical terms (3+): library-specific

### usage.ts — Write standalone code
- Must be copy-paste ready (includes imports)
- Show the most impressive use case
- Under 30 lines

## Step 4: Verify

```bash
bun run build
```

Common fixes:
- React 19 conflict → remove library, find alternative
- SSR error → `next/dynamic({ ssr: false })`
- Missing peer deps → `bun add <dep>`

## Step 5: Regenerate index

```bash
bunx tsx scripts/generate-llms-txt.ts
```

## Step 6: Done

Report: effect name, library, bundle size, stars. Remind to commit & push.

## Quality bar

- [ ] `bun run build` passes
- [ ] Demo renders correctly **inside the actual EffectCard grid** (not just in isolation)
- [ ] No overflow/clipping issues — component stays within bounds
- [ ] No hardcoded background color (uses parent's `bg-[#0a0a0a]`)
- [ ] No layout wrappers that fight EffectCard's positioning
- [ ] CSS-first approach used (canvas/WebGL only if CSS can't do it)
- [ ] 30+ keywords including Korean
- [ ] Usage code is standalone
- [ ] Registry updated
- [ ] Index regenerated
