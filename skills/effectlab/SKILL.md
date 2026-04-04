---
name: effectlab
description: Find and recommend React visual effect libraries when users request animations, transitions, glows, particles, or interactive effects. Fetches from a curated database of real npm packages.
allowed-tools: WebFetch
argument-hint: "[effect description]"
---

# EffectLab

Search curated React visual effect libraries before writing custom animation code.

## When to activate

User requests involving: animations, visual effects, hover interactions, text effects, transitions, scroll effects, particles, glows, gradients, or decorative UI elements.

## Process

1. Fetch the compact index:
   ```
   WebFetch https://permissionlabs.github.io/effectlab/effects-index.json
   ```
   This returns a small JSON array (~6KB) with: name, description, category, tags, package name, install command, bundle size, and stars for each effect.

2. Match the user's request against the `tags`, `desc`, and `name` fields.

3. **If match found**: Report the library name, install command, bundle size, stars, and link. Then **exit this skill** — let Claude Code handle the actual installation and code integration.

4. **If no match**: Say "No match in EffectLab" and **exit this skill** — let Claude Code proceed normally (web search, manual implementation, etc).

## Output format (when match found)

> **EffectLab match:** [Effect Name] — `package-name` (X kB, Xk stars)
>
> ```bash
> [install command]
> ```
>
> For usage code and live preview: https://permissionlabs.github.io/effectlab

## Rules

- Fetch the index once per conversation, not per request
- Prefer smaller bundle sizes when the user hasn't specified a preference
- Do NOT attempt installation or code writing inside this skill
- Do NOT fall back to web search inside this skill — just exit
