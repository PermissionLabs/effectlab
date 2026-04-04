@AGENTS.md

# EffectLab

Curated showcase of React visual effect libraries.

## Project skills

- `/add-effect <library>` — Add a new effect to the showcase. Creates all files (DemoComponent, meta, usage, index), updates registry, rebuilds index. Use this whenever adding a new effect.

## Key conventions

- Every effect MUST use a REAL npm library — no custom recreations
- All demo components need `"use client"` and must look good on dark bg (#050510)
- Libraries must be React 19 compatible (no bundled React copies)
- If SSR breaks, use `next/dynamic({ ssr: false })`
- After any effect change: `bunx tsx scripts/generate-llms-txt.ts` to rebuild the index
- Deploy: push to main → GitHub Actions auto-deploys to Pages

## Structure

```
src/effects/<slug>/
  DemoComponent.tsx  — Live preview (imports real library)
  meta.ts            — Name, description, tags, 30+ keywords, library info, packageMeta
  usage.ts           — Install command + standalone usage code
  index.ts           — Barrel export
```
