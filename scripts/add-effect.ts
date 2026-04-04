#!/usr/bin/env bun
/**
 * CLI to add a new effect to EffectLab.
 *
 * Usage:
 *   bun scripts/add-effect.ts <npm-package-name | github-url | homepage-url>
 *
 * Examples:
 *   bun scripts/add-effect.ts react-hot-toast
 *   bun scripts/add-effect.ts https://github.com/timolins/react-hot-toast
 *   bun scripts/add-effect.ts https://react-hot-toast.com
 *
 * What it does:
 *   1. Resolves the npm package name from URL or direct input
 *   2. Fetches metadata from npm registry + GitHub
 *   3. Scaffolds src/effects/<slug>/ with 4 files
 *   4. Opens the files for manual review (DemoComponent needs customization)
 *   5. Prints next steps
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";

const input = process.argv[2];
if (!input) {
  console.error("Usage: bun scripts/add-effect.ts <package-name | github-url | homepage-url>");
  process.exit(1);
}

// --- Resolve package name from input ---
async function resolvePackageName(input: string): Promise<string> {
  // Direct npm package name
  if (!input.startsWith("http")) return input;

  // GitHub URL: https://github.com/user/repo
  const ghMatch = input.match(/github\.com\/[\w-]+\/([\w.-]+)/);
  if (ghMatch) {
    const repoName = ghMatch[1].replace(/\.git$/, "");
    // Try npm with repo name
    const res = await fetch(`https://registry.npmjs.org/${repoName}`);
    if (res.ok) return repoName;
    // Try with @ scope variations
    console.log(`'${repoName}' not found on npm directly. You may need to specify the exact package name.`);
    return repoName;
  }

  // Homepage URL: try to find package.json or npm link
  console.log(`Could not auto-resolve package name from URL: ${input}`);
  console.log("Please provide the npm package name directly.");
  process.exit(1);
}

// --- Fetch npm metadata ---
async function fetchNpmMeta(pkg: string) {
  const res = await fetch(`https://registry.npmjs.org/${pkg}`);
  if (!res.ok) {
    console.error(`Package '${pkg}' not found on npm.`);
    process.exit(1);
  }
  const data = await res.json() as any;
  const latest = data["dist-tags"]?.latest;
  const version = data.versions?.[latest];

  // Weekly downloads
  const dlRes = await fetch(`https://api.npmjs.org/downloads/point/last-week/${pkg}`);
  const dlData = dlRes.ok ? (await dlRes.json() as any) : null;

  return {
    name: data.name as string,
    description: (data.description || "") as string,
    homepage: (data.homepage || version?.homepage || "") as string,
    repository: extractRepoUrl(data.repository || version?.repository),
    version: latest as string,
    lastPublish: version?.publishConfig?.time || data.time?.[latest] || "",
    weeklyDownloads: dlData?.downloads ?? 0,
    keywords: (data.keywords || []) as string[],
    peerDeps: version?.peerDependencies || {},
  };
}

function extractRepoUrl(repo: any): string {
  if (!repo) return "";
  if (typeof repo === "string") return repo;
  return (repo.url || "").replace(/^git\+/, "").replace(/\.git$/, "");
}

// --- Fetch GitHub metadata ---
async function fetchGitHubMeta(repoUrl: string) {
  const match = repoUrl.match(/github\.com\/([^/]+\/[^/]+)/);
  if (!match) return null;
  const res = await fetch(`https://api.github.com/repos/${match[1]}`, {
    headers: { "Accept": "application/vnd.github.v3+json" },
  });
  if (!res.ok) return null;
  const data = await res.json() as any;
  return {
    stars: data.stargazers_count as number,
    updatedAt: (data.pushed_at as string).slice(0, 7), // YYYY-MM
  };
}

// --- Fetch bundle size from bundlephobia ---
async function fetchBundleSize(pkg: string): Promise<string> {
  try {
    const res = await fetch(`https://bundlephobia.com/api/size?package=${pkg}`);
    if (!res.ok) return "unknown";
    const data = await res.json() as any;
    const gzip = data.gzip;
    if (gzip > 1024 * 1024) return `${(gzip / 1024 / 1024).toFixed(1)} MB`;
    return `${(gzip / 1024).toFixed(1)} kB`;
  } catch {
    return "unknown";
  }
}

// --- Scaffold files ---
function toSlug(name: string): string {
  return name.replace(/^@/, "").replace(/\//g, "-").replace(/[^a-z0-9-]/g, "");
}

function toCamelCase(slug: string): string {
  return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function toDisplayName(pkg: string): string {
  return pkg
    .replace(/^@[\w-]+\//, "")
    .replace(/^react-/, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function guessCategory(keywords: string[], description: string): string {
  const all = [...keywords, description].join(" ").toLowerCase();
  if (all.includes("glow") || all.includes("neon")) return "glow";
  if (all.includes("particle") || all.includes("confetti")) return "particle";
  if (all.includes("gradient") || all.includes("shader")) return "gradient";
  if (all.includes("text") || all.includes("type") || all.includes("counter")) return "text";
  if (all.includes("scroll") || all.includes("parallax")) return "scroll";
  if (all.includes("3d") || all.includes("tilt") || all.includes("three")) return "3d";
  if (all.includes("hover") || all.includes("cursor")) return "hover";
  if (all.includes("layout") || all.includes("reorder")) return "layout";
  if (all.includes("transition") || all.includes("spring")) return "transition";
  if (all.includes("border") || all.includes("outline")) return "border";
  return "interaction";
}

// --- Main ---
async function main() {
  console.log(`\n🔍 Resolving: ${input}\n`);

  const pkg = await resolvePackageName(input);
  console.log(`📦 Package: ${pkg}`);

  const npm = await fetchNpmMeta(pkg);
  console.log(`✓ npm: ${npm.name}@${npm.version} — ${npm.description}`);

  // Check React 19 compat
  const reactPeer = npm.peerDeps?.react || npm.peerDeps?.["react"];
  if (reactPeer && /^[<>=]*1[0-7]\./.test(reactPeer)) {
    console.warn(`⚠️  WARNING: peerDependencies.react = "${reactPeer}" — may not work with React 19!`);
  }

  const gh = await fetchGitHubMeta(npm.repository || npm.homepage);
  if (gh) console.log(`✓ GitHub: ${gh.stars} stars, last push ${gh.updatedAt}`);

  const bundleSize = await fetchBundleSize(pkg);
  console.log(`✓ Bundle: ${bundleSize}`);

  const slug = toSlug(pkg);
  const exportName = toCamelCase(slug);
  const displayName = toDisplayName(pkg);
  const category = guessCategory(npm.keywords, npm.description);
  const dir = `src/effects/${slug}`;

  // Check duplicate
  const registryPath = "src/effects/registry.ts";
  const registry = readFileSync(registryPath, "utf-8");
  if (registry.includes(`"./${slug}"`)) {
    console.error(`\n❌ '${slug}' already exists in registry. Aborting.`);
    process.exit(1);
  }

  console.log(`\n📁 Creating ${dir}/\n`);
  mkdirSync(dir, { recursive: true });

  // meta.ts
  writeFileSync(`${dir}/meta.ts`, `export const meta = {
  slug: "${slug}",
  name: "${displayName}",
  description:
    "${npm.description.replace(/"/g, '\\"')}",
  category: "${category}" as const,
  tags: ${JSON.stringify(npm.keywords.slice(0, 7))},
  keywords: [
    // TODO: Add 30+ keywords
    // English — visual descriptions (10+)
    // English — use cases (8+)
    // Korean (5+)
    // Technical (3+)
    ${npm.keywords.map((k: string) => `"${k}"`).join(", ")},
  ],
  library: {
    name: "${npm.name}",
    packageName: "${npm.name}",
    url: "${npm.homepage || npm.repository || `https://www.npmjs.com/package/${npm.name}`}",
    installType: "npm" as const,
  },
  packageMeta: {
    bundleSize: "${bundleSize}",
    githubStars: ${gh?.stars ?? 0},
    weeklyDownloads: ${npm.weeklyDownloads},
    lastUpdated: "${gh?.updatedAt ?? new Date().toISOString().slice(0, 7)}",
  },
};
`);

  // usage.ts
  writeFileSync(`${dir}/usage.ts`, `export const usage = {
  install: "bun add ${npm.name}",
  tsx: \`// TODO: Add standalone usage example
import { /* Component */ } from "${npm.name}";

export default function Example() {
  return (
    <div>
      {/* TODO: Render the library component */}
    </div>
  );
}\`,
};
`);

  // DemoComponent.tsx
  writeFileSync(`${dir}/DemoComponent.tsx`, `"use client";

// TODO: Import from "${npm.name}" and create an impressive demo
// import { SomeComponent } from "${npm.name}";

export default function ${exportName.charAt(0).toUpperCase() + exportName.slice(1)}Demo() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-4">
      <span className="text-white/50 text-sm">TODO: Implement ${displayName} demo</span>
    </div>
  );
}
`);

  // index.ts
  writeFileSync(`${dir}/index.ts`, `import type { EffectDefinition } from "../types";
import { meta } from "./meta";
import { usage } from "./usage";
import DemoComponent from "./DemoComponent";

export const ${exportName}: EffectDefinition = {
  ...meta,
  component: DemoComponent,
  usage,
};
`);

  console.log(`  ✓ ${dir}/meta.ts`);
  console.log(`  ✓ ${dir}/usage.ts`);
  console.log(`  ✓ ${dir}/DemoComponent.tsx  ← NEEDS MANUAL EDIT`);
  console.log(`  ✓ ${dir}/index.ts`);

  // Update registry
  const importLine = `import { ${exportName} } from "./${slug}";`;
  const updatedRegistry = registry
    .replace(
      'import type { EffectDefinition }',
      `${importLine}\nimport type { EffectDefinition }`
    )
    .replace(
      /(\];)\s*$/m,
      `  ${exportName},\n$1`
    );
  writeFileSync(registryPath, updatedRegistry);
  console.log(`  ✓ registry.ts updated`);

  console.log(`
✅ Scaffold complete!

Next steps:
  1. Edit ${dir}/DemoComponent.tsx — implement the actual demo
  2. Edit ${dir}/meta.ts — add 30+ keywords (including Korean)
  3. Edit ${dir}/usage.ts — add standalone usage code
  4. bun run build — verify it compiles
  5. bunx tsx scripts/generate-llms-txt.ts — regenerate index
  6. git add -A && git commit && git push — deploy
`);
}

main().catch(console.error);
