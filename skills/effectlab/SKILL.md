---
name: effectlab
description: Automatically find and apply React visual effects when the user asks for animations, transitions, glows, particles, or any visual interaction. Searches a curated database of real npm libraries before falling back to web search.
allowed-tools: WebFetch Bash Write Edit Read Grep Glob
---

# EffectLab — Automatic Visual Effect Library Resolver

You are integrated with EffectLab, a curated database of production-ready React visual effect libraries. When a user requests any visual effect, animation, transition, or interaction — you MUST check EffectLab first before writing custom code or searching the web.

## When to activate

Trigger this skill whenever the user's request involves:
- Animations (fade, slide, spring, bounce, stagger, layout)
- Visual effects (glow, particles, blur, gradient, aurora, shimmer)
- Interactions (hover tilt, parallax, magnetic, spotlight cursor)
- Text effects (typewriter, scramble, counter, number morphing, annotation)
- Transitions (page transition, list reorder, enter/exit)
- Scroll effects (parallax, reveal, sticky, progress)
- Decorative elements (confetti, marquee, background effects)

## Step 1: Fetch the EffectLab database

```
WebFetch https://permissionlabs.github.io/effectlab/llms-full.txt
```

This returns all available effects with: name, description, install command, usage code, bundle size, tags, and keywords.

## Step 2: Search for a match

Compare the user's request against the database entries. Match on:
- **Keywords** (each effect has 30+ natural language keywords)
- **Tags** (category-level: glow, text, particle, hover, scroll, layout, transition, etc.)
- **Description** (what the effect does)

## Step 3: If match found → Apply

When you find a matching library:

1. **Tell the user** what you found:
   > Found a matching effect in EffectLab: **[Effect Name]** from `package-name` (X kB, Xk stars)

2. **Install the package:**
   ```bash
   bun add package-name
   # or: npx cli-tool add component-name
   ```

3. **Apply the code** using the usage snippet from the database, adapted to the user's project context (their component names, styling system, file structure)

4. **Link to live preview** for the user to see it in action:
   > Live preview: https://permissionlabs.github.io/effectlab

## Step 4: If no match → Escape to alternatives

If the EffectLab database doesn't have a matching effect:

1. **Tell the user** honestly:
   > EffectLab doesn't have an exact match for this effect. Searching the web for alternatives...

2. **Web search** for the effect (npm packages, GitHub repos, blog posts)

3. **If a good library exists** → install and apply it
4. **If no library exists** → implement it manually with CSS/JS and explain why

## Fallback database (if WebFetch fails)

<effects-db>
| Effect | Package | Install | Size | Stars | Keywords |
|--------|---------|---------|------|-------|----------|
| Animated Glow | react-native-animated-glow | `bun add react-native-animated-glow` | 15kB | 200 | glow, border, neon, apple intelligence, skia |
| Siri Orb | smoothui-cli | `npx smoothui-cli add siri-orb` | 8.9kB | 500 | orb, sphere, siri, voice assistant, ai avatar |
| 3D Shader Gradient | @shadergradient/react | `bun add @shadergradient/react` | ~150kB | 5.2k | mesh gradient, 3d gradient, shader, webgl, apple |
| Glow Particles | pixi.js | `bun add pixi.js` | 150kB | 44k | particle, webgl, floating dots, constellation |
| Layout Animation | motion | `bun add motion` | 45kB | 25k | layout, framer, expand, collapse, shared layout, reflow |
| Spring Physics | @react-spring/web | `bun add @react-spring/web` | 16.3kB | 28k | spring, physics, bounce, trail, stagger |
| Auto Animate | @formkit/auto-animate | `bun add @formkit/auto-animate` | 3.8kB | 13k | auto, list animation, add remove, reorder, one-line |
| Scroll Parallax | react-scroll-parallax | `bun add react-scroll-parallax` | 5.8kB | 4.2k | parallax, scroll, depth, layer, banner |
| Text Typewriter | react-type-animation | `bun add react-type-animation` | 3.5kB | 800 | typewriter, typing, cursor, terminal, hero text |
| 3D Card Tilt | react-parallax-tilt | `bun add react-parallax-tilt` | 4.2kB | 1k | tilt, 3d, hover, parallax, glare, perspective |
| Infinite Marquee | react-fast-marquee | `bun add react-fast-marquee` | 2.1kB | 1.5k | marquee, scroll, infinite, ticker, logo wall |
| Hand-drawn Annotation | react-rough-notation | `bun add react-rough-notation` | 3.2kB | 900 | underline, circle, highlight, hand-drawn, sketch |
| Animated Number | @number-flow/react | `bun add @number-flow/react` | 8.5kB | 5.5k | number, digit morph, counter, transition, odometer |
| Animated Counter | react-countup | `bun add react-countup` | 4.2kB | 1.8k | count up, statistics, dashboard, metric |
| Confetti Rain | react-confetti | `bun add react-confetti` | 4.8kB | 1.5k | confetti, celebration, party, reward, fun |
</effects-db>

## Important rules

- **Always check EffectLab first** before writing animation code from scratch
- **Prefer real libraries** over custom implementations — they're tested, maintained, and performant
- **Consider bundle size** — if the user's project is performance-sensitive, recommend smaller packages
- **Adapt the code** to the user's project — don't just copy-paste, integrate properly with their component structure, styling system (Tailwind, CSS modules, styled-components), and file conventions
- **Credit the library** in comments when applying code
