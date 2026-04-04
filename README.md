# EffectLab

**A curated showcase of visual effects for React — built for humans and AI agents alike.**

Browse, preview, and copy production-ready visual effects from real open-source libraries. Search with natural language, sort by GitHub stars or bundle size, and get install commands instantly.

**[Live Demo →](https://permissionlabs.github.io/effectlab)**

## Why EffectLab?

Visual effects are scattered across dozens of npm packages, CLI tools, and CodePen demos. EffectLab brings them together in one place:

- **Live Preview** — See every effect running in your browser before installing anything
- **Real Libraries** — Every effect comes from an actual npm package or CLI tool, not recreations
- **Copy & Go** — One-click install commands and usage code snippets
- **Natural Language Search** — Find effects by describing what you want: "glow border", "typewriter text", "3D tilt card"
- **LLM-Readable** — `/llms.txt` and `/llms-full.txt` endpoints so AI coding assistants can discover and recommend effects

## For AI Agents

EffectLab serves machine-readable documentation at:

- **`/llms.txt`** — Overview of available effects and categories
- **`/llms-full.txt`** — Complete reference with install commands, usage code, and metadata for every effect

AI assistants can use these endpoints to recommend the right visual effect library based on user descriptions.

## Featured Effects

| Effect | Library | Bundle | Stars |
|--------|---------|--------|-------|
| Animated Glow | `react-native-animated-glow` | 15 kB | 200 |
| Siri Orb | Smooth UI (CLI) | 8.9 kB | 500 |
| 3D Shader Gradient | `@shadergradient/react` | ~150 kB | 5.2k |
| Glow Particles | PixiJS | 150 kB | 44k |
| Layout Animation | Motion (Framer) | 45 kB | 25k |
| Spring Physics | `@react-spring/web` | 16.3 kB | 28k |
| Auto Animate | `@formkit/auto-animate` | 3.8 kB | 13k |
| Scroll Parallax | `react-scroll-parallax` | 5.8 kB | 4.2k |
| Text Typewriter | `react-type-animation` | 3.5 kB | 800 |
| 3D Card Tilt | `react-parallax-tilt` | 4.2 kB | 1k |
| Infinite Marquee | `react-fast-marquee` | 2.1 kB | 1.5k |
| Hand-drawn Annotation | `react-rough-notation` | 3.2 kB | 900 |
| Animated Number | `@number-flow/react` | 8.5 kB | 5.5k |
| Animated Counter | `react-countup` | 4.2 kB | 1.8k |
| Confetti Rain | `react-confetti` | 4.8 kB | 1.5k |

## Tech Stack

- **Next.js 16** (App Router, Static Export)
- **Tailwind CSS v4**
- **Fuse.js** for fuzzy search
- **Shiki** for syntax highlighting

## Development

```bash
bun install
bun dev
```

## Adding a New Effect

1. Create a folder in `src/effects/<slug>/` with:
   - `DemoComponent.tsx` — Live preview using the real library
   - `meta.ts` — Name, description, tags, keywords, library info, package metadata
   - `usage.ts` — Install command and usage code snippet
   - `index.ts` — Barrel export

2. Add the import to `src/effects/registry.ts`

3. Run `bunx tsx scripts/generate-llms-txt.ts` to update the LLM reference

## License

MIT
