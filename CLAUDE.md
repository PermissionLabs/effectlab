@AGENTS.md

# EffectLab

Curated showcase of React visual effect libraries — for humans and AI agents.

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
