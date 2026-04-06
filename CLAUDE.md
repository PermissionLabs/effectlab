@AGENTS.md

# EffectLab

Curated showcase of React **motion / animation / visual effect** libraries — for humans and AI agents.

Users browse this gallery to get visual inspiration or find a library that matches the effect in their head.

## Scope — MOTION & ANIMATION ONLY

This project **exclusively** covers libraries that produce visible motion, animation, or visual effects:

**IN scope:** transitions, spring physics, scroll animations, parallax, particles, glow/beam effects, morphing shapes, typewriter, reveal animations, loading spinners/skeletons, confetti/rewards, smooth scroll, 3D/WebGL effects, animated counters, carousel motion, Lottie, shader gradients, tilt/hover effects, ripple, noise-based visuals, marquee

**OUT of scope (do NOT add):**
- State management (zustand, jotai, valtio, recoil …)
- Form handling (react-hook-form, formik …)
- UI primitives (radix, headless-ui, modals, dialogs, tabs, sliders, selects, switches …)
- Icons (lucide, react-icons …)
- Data fetching (swr, tanstack-query …)
- Charts & tables (recharts, tanstack-table …)
- Drag-and-drop (dnd-kit, react-dnd …)
- Date pickers, calendars, color pickers
- Notifications/toasts (sonner, react-hot-toast, notistack …)
- Layout utilities (masonry, grid-layout, resizable-panels, virtual scroll …)
- Code highlighting, error boundaries, clipboard, theme switching
- Any library whose primary purpose is NOT producing a visual/motion effect

When in doubt: if you can't demo the library as a visually impressive animation on a dark background, it doesn't belong here.

## Adding new effects

Use the `/add-effect` skill or the CLI directly:

```bash
# By package name
bun scripts/add-effect.ts react-hot-toast

# By GitHub URL
bun scripts/add-effect.ts https://github.com/timolins/react-hot-toast

# By homepage URL
bun scripts/add-effect.ts https://react-hot-toast.com
```

This auto-scaffolds all files from npm/GitHub metadata. Then customize:
1. `DemoComponent.tsx` — implement the actual live demo
2. `meta.ts` — expand to 30+ keywords (including Korean)
3. `usage.ts` — write standalone copy-paste code
4. `bun run build` → `bunx tsx scripts/generate-llms-txt.ts` → commit & push

## Key conventions

- Every effect MUST use a REAL npm library — no custom recreations
- All demo components need `"use client"` and must look good on dark bg (#050510)
- Libraries must be React 19 compatible (no bundled React copies)
- If SSR breaks, use `next/dynamic({ ssr: false })`
- After any change: `bunx tsx scripts/generate-llms-txt.ts` to rebuild the index
- Deploy: push to main → GitHub Actions auto-deploys to Pages

## Demo component contract (MUST READ before implementing)

Every demo renders inside `EffectCard.tsx`'s preview area. Know the constraints:

```
Container: absolute inset-0, inside aspect-[4/5] min-h-[360px]
Background: bg-[#0a0a0a] (dark, opaque)
Overflow: overflow-hidden on the container — nothing bleeds out
```

### Rules

1. **CSS-first** — Start with the simplest CSS approach (gradients, filters, keyframes). Only escalate to canvas/WebGL if CSS literally cannot produce the effect. A rotating glow is `conic-gradient` + `blur()`, not a WebGL shader.
2. **Leaf component** — Your demo has NO opinions about layout. No background color. No centering wrapper. Fill the parent (`w-full h-full`) and let `EffectCard` handle the rest.
3. **Stay inside the box** — No negative insets, no absolute positioning outside parent bounds. The container has `overflow-hidden`. Anything outside is clipped silently — you won't see it, you'll just debug for hours.
4. **No CSS imports in components** — Put keyframes/`@property` in `globals.css`. Build script imports the registry at Node level; CSS imports crash it.
5. **Test in the real card** — Run `bun dev` and verify inside the actual grid. Never assume it works from an isolated preview.

## Structure

```
src/effects/<slug>/
  DemoComponent.tsx  — Live preview (imports real library)
  meta.ts            — Name, description, tags, 30+ keywords, library info, packageMeta
  usage.ts           — Install command + standalone usage code
  index.ts           — Barrel export
```

## Skills

- `/add-effect <pkg|url>` — Scaffold + customize new effect
- `/effectlab <description>` — Search effects database (user-facing skill, in skills/ dir)
