---
name: effectlab
description: Automatically find and apply React visual effects when the user asks for animations, transitions, glows, particles, or any visual interaction. Searches a curated database of real npm libraries.
allowed-tools: WebFetch
argument-hint: "[describe the effect you need]"
---

# EffectLab — Automatic Visual Effect Library Resolver

You are integrated with EffectLab, a curated database of production-ready React visual effect libraries.

When a user requests any visual effect, animation, transition, or interaction — check EffectLab first before writing custom code.

## When to activate

Trigger when the user's request involves:
- Animations (fade, slide, spring, bounce, stagger, layout)
- Visual effects (glow, particles, blur, gradient, aurora, shimmer)
- Interactions (hover tilt, parallax, magnetic, spotlight cursor)
- Text effects (typewriter, scramble, counter, number morphing, annotation)
- Transitions (page transition, list reorder, enter/exit)
- Scroll effects (parallax, reveal, sticky, progress)
- Decorative elements (confetti, marquee, background effects)

## Step 1: Search for a match

First check the fallback database below. If you need more detail (usage code, full keywords), fetch the full reference:

```
WebFetch https://permissionlabs.github.io/effectlab/llms-full.txt
```

## Step 2: If match found → Recommend and hand off

When you find a matching library, report back with:

1. **What you found**: effect name, package name, bundle size, stars
2. **Install command**: copy-paste ready
3. **Usage snippet**: from the database
4. **Live preview link**: https://permissionlabs.github.io/effectlab

Then **exit this skill** and let the normal Claude Code flow handle the actual installation and code integration into the user's project.

## Step 3: If no match → Exit cleanly

If EffectLab doesn't have a matching effect:

> EffectLab doesn't have a match for this. Proceeding with standard approach.

Then **exit this skill immediately**. Do NOT attempt web search or manual implementation inside this skill. Let Claude Code handle it with its normal tools and judgment.

## Effect Database

| Effect | Package | Install | Size | Stars | Match Keywords |
|--------|---------|---------|------|-------|----------------|
| Animated Glow | react-native-animated-glow | `bun add react-native-animated-glow` | 15kB | 200 | glow, border, neon, apple intelligence, skia, glowing border, neon border |
| Siri Orb | smoothui-cli | `npx smoothui-cli add siri-orb` | 8.9kB | 500 | orb, sphere, siri, voice assistant, ai avatar, glowing ball |
| 3D Shader Gradient | @shadergradient/react | `bun add @shadergradient/react` | ~150kB | 5.2k | mesh gradient, 3d gradient, shader, webgl, animated background, aurora |
| Glow Particles | pixi.js | `bun add pixi.js` | 150kB | 44k | particle, webgl, floating dots, constellation, star field, firefly |
| Layout Animation | motion | `bun add motion` | 45kB | 25k | layout, framer, expand, collapse, shared layout, reflow, gesture |
| Spring Physics | @react-spring/web | `bun add @react-spring/web` | 16.3kB | 28k | spring, physics, bounce, trail, stagger, elastic |
| Auto Animate | @formkit/auto-animate | `bun add @formkit/auto-animate` | 3.8kB | 13k | auto animate, list animation, add remove, reorder, one-line, magic |
| Scroll Parallax | react-scroll-parallax | `bun add react-scroll-parallax` | 5.8kB | 4.2k | parallax, scroll, depth, layer, banner, scroll-driven |
| Text Typewriter | react-type-animation | `bun add react-type-animation` | 3.5kB | 800 | typewriter, typing, cursor, terminal, hero text, type out |
| 3D Card Tilt | react-parallax-tilt | `bun add react-parallax-tilt` | 4.2kB | 1k | tilt, 3d card, hover, parallax, glare, perspective, card hover |
| Infinite Marquee | react-fast-marquee | `bun add react-fast-marquee` | 2.1kB | 1.5k | marquee, scroll, infinite, ticker, logo wall, scrolling text |
| Hand-drawn Annotation | react-rough-notation | `bun add react-rough-notation` | 3.2kB | 900 | underline, circle, highlight, hand-drawn, sketch, annotation |
| Animated Number | @number-flow/react | `bun add @number-flow/react` | 8.5kB | 5.5k | number, digit morph, counter, transition, odometer, price |
| Animated Counter | react-countup | `bun add react-countup` | 4.2kB | 1.8k | count up, statistics, dashboard, metric, number scroll |
| Confetti Rain | react-confetti | `bun add react-confetti` | 4.8kB | 1.5k | confetti, celebration, party, reward, success animation |

## Rules

- **Check this database first** before writing animation code from scratch
- **Prefer real libraries** over custom implementations
- **Exit cleanly** after recommending — don't try to do everything inside this skill
- **Consider bundle size** when the user cares about performance
