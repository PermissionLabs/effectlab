# EffectLab

**100+ curated visual effects for React — browse, preview, and apply with one click.**

**[Live Demo →](https://permissionlabs.github.io/effectlab)**

## Quick Start

### For Designers & Developers

1. Browse effects at [effectlab](https://permissionlabs.github.io/effectlab)
2. Find an effect you like
3. Click **"Copy for AI"** on the card
4. Paste into Claude Code, Cursor, or your AI coding assistant
5. Done — the AI installs the library and applies the effect to your project

### For Claude Code Users

Install the EffectLab plugin — your AI assistant will automatically find and recommend effects when you ask for animations, transitions, or visual effects.

```
/plugin marketplace add PermissionLabs/effectlab
/plugin install effectlab
```

Then just ask naturally:

```
"Add a 3D tilt hover effect to the cards"
→ EffectLab finds react-parallax-tilt (4.2 kB, 1k stars)
→ Claude Code installs and applies it

"I need a typewriter animation for the hero text"
→ EffectLab finds react-type-animation (3.5 kB)
→ Claude Code implements it
```

## How It Works

```
You: "add a glow border effect"
         ↓
EffectLab plugin searches 100+ curated libraries
         ↓
Match found → recommends library + install command
         ↓
Claude Code installs + applies to your project
         ↓
No match → Claude Code falls back to web search
```

## Why EffectLab?

Visual effects are scattered across dozens of npm packages. EffectLab brings them together:

- **100+ Effects** — Animations, transitions, 3D, particles, text effects, and more
- **Live Preview** — See every effect running before installing
- **Real Libraries** — Every effect is from a real npm package, not a recreation
- **Copy for AI** — One click copies an LLM-friendly prompt with install command + usage code
- **Bundle Size & Stars** — Compare libraries at a glance
- **LLM-Readable** — [`/llms.txt`](https://permissionlabs.github.io/effectlab/llms.txt) and [`/llms-full.txt`](https://permissionlabs.github.io/effectlab/llms-full.txt) for AI assistants
- **Dark/Light Mode** — Toggle in the header

## Featured Effects

| Effect | Library | Size | Stars |
|--------|---------|------|-------|
| Animated Glow | `react-native-animated-glow` | 15 kB | 200 |
| Siri Orb | `smoothui-cli` | 8.9 kB | 500 |
| 3D Shader Gradient | `@shadergradient/react` | ~150 kB | 5.2k |
| Layout Animation | `motion` (Framer) | 45 kB | 25k |
| Spring Physics | `@react-spring/web` | 16.3 kB | 28k |
| Auto Animate | `@formkit/auto-animate` | 3.8 kB | 13k |
| 3D Card Tilt | `react-parallax-tilt` | 4.2 kB | 1k |
| Command Palette | `cmdk` | 14.6 kB | 12.4k |
| Toast Notifications | `sonner` | 9.1 kB | 12.2k |
| Drag & Drop | `@dnd-kit/core` | 12 kB | 13k |
| ...and 90 more | | | |

## Eating Our Own Dog Food

The EffectLab homepage itself uses 6 of its own showcased libraries:

| Library | Where |
|---------|-------|
| `react-type-animation` | Hero subtitle typing effect |
| `@number-flow/react` | Animated effect count |
| `@formkit/auto-animate` | Grid filter transitions |
| `sonner` | Copy toast notifications |
| `react-loading-skeleton` | Card lazy-load placeholders |

## Contributing

### Add a new effect

```bash
bun scripts/add-effect.ts react-hot-toast
# or
bun scripts/add-effect.ts https://github.com/user/repo
```

This auto-fetches metadata from npm + GitHub and scaffolds all files. Then:

1. Implement `DemoComponent.tsx`
2. Expand `meta.ts` keywords to 30+
3. Write `usage.ts` standalone code
4. `bun run build` → `bunx tsx scripts/generate-llms-txt.ts` → `git push`

### For Claude Code contributors

Use the `/add-effect` skill — it runs the CLI and helps complete the files.

## Tech Stack

Next.js 16 · Tailwind CSS v4 · Fuse.js · Shiki · Static Export · GitHub Pages

## License

MIT
