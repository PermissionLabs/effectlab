---
name: add-effect
description: Add a new visual effect to the EffectLab showcase. Creates all required files with consistent structure, updates registry, and regenerates the index.
allowed-tools: Bash Read Write Edit Grep Glob WebFetch
argument-hint: "[library name or npm package, e.g. 'react-parallax-tilt' or 'gsap scroll trigger']"
---

# Add Effect to EffectLab

Add a new visual effect showcase entry from a real npm library. This skill ensures every effect follows the exact same structure and quality bar.

## Input

`$ARGUMENTS` — the npm package name, library name, or description of the effect to add.

## Process

### 1. Research the library

- If given a package name: `WebFetch` the npm page or GitHub repo to get: description, install command, basic usage, bundle size, stars, last updated
- If given a description: search npm/GitHub for the best matching library first
- **CRITICAL**: Verify the library is React 19 compatible. Check peer deps. If it bundles its own React copy, it WILL break — skip it and find an alternative.

### 2. Check for duplicates

Read `src/effects/registry.ts` — if this library is already showcased, stop and inform the user.

### 3. Install the package

```bash
bun add <package-name>
```

If it's a CLI-based library (shadcn-style):
```bash
npx <cli-name> add <component-name>
```

### 4. Create the effect folder

Create `src/effects/<slug>/` with exactly 4 files:

#### 4a. `DemoComponent.tsx`

```tsx
"use client";

import { SomeComponent } from "library-name";

export default function <Name>Demo() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-4">
      {/* Render the REAL library component with good demo props */}
    </div>
  );
}
```

Rules for DemoComponent:
- MUST have `"use client"` directive
- MUST import from the REAL library (never recreate)
- MUST fill the parent container (`w-full h-full`)
- MUST look good on dark background (`bg-[#050510]`)
- If library has SSR issues, use `next/dynamic` with `{ ssr: false }`
- Include interactive elements if the library supports them (buttons, hover states)
- Keep it visually impressive but self-contained

#### 4b. `meta.ts`

```typescript
export const meta = {
  slug: "<kebab-case-slug>",
  name: "<Display Name>",
  description: "<One-line description of the effect>",
  category: "<category>" as const,  // See Category type in types.ts
  tags: ["<tag1>", "<tag2>", ...],   // 5-8 tags
  keywords: [
    // English — visual descriptions (10+)
    "...",
    // English — use cases (8+)
    "...",
    // Korean (5+)
    "...",
    // Technical (3+)
    "...",
  ],  // Total 30+ keywords for natural language search
  library: {
    name: "<Library Display Name>",
    packageName: "<npm-package-name>",
    url: "<homepage or github url>",
    installType: "npm" as const,  // or "cli"
  },
  packageMeta: {
    bundleSize: "<X kB>",        // minified + gzipped, from bundlephobia
    githubStars: <number>,        // approximate
    weeklyDownloads: <number>,    // from npm
    lastUpdated: "<YYYY-MM>",     // last publish date
  },
};
```

Rules for meta:
- `slug` must be unique, kebab-case, match the folder name
- `keywords` must include Korean translations (5+ terms)
- `keywords` must have 30+ entries across all categories
- `packageMeta` values should be real/approximate, not fabricated
- `category` must be one of the types defined in `src/effects/types.ts`

#### 4c. `usage.ts`

```typescript
export const usage = {
  install: "bun add <package-name>",
  tsx: `import { Component } from "<package-name>";

export default function Example() {
  return (
    <Component prop1="value" prop2="value">
      Content
    </Component>
  );
}`,
  css: `/* Only if CSS is needed */`,  // optional
};
```

Rules for usage:
- `tsx` must be STANDALONE — copy-paste into any React project and it works
- Include import statements
- Show the most common/impressive use case
- Keep it concise (under 30 lines)

#### 4d. `index.ts`

```typescript
import type { EffectDefinition } from "../types";
import { meta } from "./meta";
import { usage } from "./usage";
import DemoComponent from "./DemoComponent";

export const <camelCaseExportName>: EffectDefinition = {
  ...meta,
  component: DemoComponent,
  usage,
};
```

### 5. Update the registry

Edit `src/effects/registry.ts`:
- Add the import at the top
- Add the export name to the `effects` array

### 6. Verify build

```bash
bun run build
```

If build fails, fix the issue. Common problems:
- SSR incompatibility → wrap with `next/dynamic({ ssr: false })`
- React version conflict → remove the library and find an alternative
- Missing peer deps → install them

### 7. Regenerate the index

```bash
bunx tsx scripts/generate-llms-txt.ts
```

This updates `public/effects-index.json` and `public/llms-full.txt` so the EffectLab skill can find the new effect.

### 8. Report

Tell the user:
- Effect name and library
- Bundle size and stars
- That it's ready at `http://localhost:3000`
- Remind to `git commit && git push` to deploy to GitHub Pages

## Quality checklist

Before marking as done, verify:
- [ ] `bun run build` passes
- [ ] DemoComponent renders on dark background
- [ ] meta.ts has 30+ keywords including Korean
- [ ] usage.ts code is standalone copy-paste ready
- [ ] Registry is updated
- [ ] effects-index.json is regenerated
