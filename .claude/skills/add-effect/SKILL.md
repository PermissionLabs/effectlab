---
name: add-effect
description: Add a new visual effect to the EffectLab showcase. Accepts npm package name, GitHub URL, or homepage URL. Scaffolds files, then you customize the demo.
allowed-tools: Bash Read Write Edit Grep Glob WebFetch
argument-hint: "[package name, GitHub URL, or homepage URL]"
---

# Add Effect to EffectLab

## Input

`$ARGUMENTS` — npm package name, GitHub URL, or homepage URL.

Examples:
- `react-hot-toast`
- `https://github.com/timolins/react-hot-toast`
- `https://react-hot-toast.com`

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

## Step 3: Complete the TODO files

### DemoComponent.tsx
- Import the REAL library component
- Make it visually impressive on dark background (`bg-[#050510]`)
- Must have `"use client"` directive
- Must fill parent (`w-full h-full`)
- If SSR breaks → `next/dynamic({ ssr: false })` with a separate Inner file
- Add interactive elements if possible (buttons, hover states)
- **NEVER import CSS files in DemoComponent** — the build script (`generate-llms-txt.ts`) imports the registry at build time and CSS imports crash Node. Put all CSS imports in `src/app/globals.css` instead.
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
- [ ] Demo renders well on dark background
- [ ] 30+ keywords including Korean
- [ ] Usage code is standalone
- [ ] Registry updated
- [ ] Index regenerated
