import { effects } from "../src/effects/registry";
import { writeFileSync } from "fs";

// 1. Generate llms-full.txt (full reference with code)
const lines: string[] = [
  "# EffectLab — Full Effect Reference for LLMs",
  "",
  "> A curated showcase of visual effects for React. Each effect links to its original library.",
  "",
  `> Total effects: ${effects.length}`,
  "",
  "---",
  "",
];

for (const effect of effects) {
  lines.push(`## ${effect.name}`);
  lines.push("");
  lines.push(`- **Slug**: ${effect.slug}`);
  lines.push(`- **Category**: ${effect.category}`);
  lines.push(`- **Description**: ${effect.description}`);
  lines.push(`- **Library**: ${effect.library.name} (${effect.library.packageName})`);
  lines.push(`- **Library URL**: ${effect.library.url}`);
  lines.push(`- **Install type**: ${effect.library.installType}`);
  if (effect.packageMeta) {
    const m = effect.packageMeta;
    lines.push(`- **Bundle size**: ${m.bundleSize ?? "N/A"}`);
    lines.push(`- **GitHub stars**: ${m.githubStars ?? "N/A"}`);
    lines.push(`- **Weekly downloads**: ${m.weeklyDownloads ?? "N/A"}`);
    lines.push(`- **Last updated**: ${m.lastUpdated ?? "N/A"}`);
  }
  lines.push(`- **Tags**: ${effect.tags.join(", ")}`);
  lines.push(`- **Keywords**: ${effect.keywords.join(", ")}`);
  lines.push("");
  lines.push("### Install");
  lines.push("```bash");
  lines.push(effect.usage.install);
  lines.push("```");
  lines.push("");
  lines.push("### Usage");
  lines.push("```tsx");
  lines.push(effect.usage.tsx);
  lines.push("```");
  if (effect.usage.css) {
    lines.push("");
    lines.push("### CSS");
    lines.push("```css");
    lines.push(effect.usage.css);
    lines.push("```");
  }
  lines.push("");
  lines.push("---");
  lines.push("");
}

writeFileSync("public/llms-full.txt", lines.join("\n"));

// 2. Generate effects-index.json (compact index for skill matching)
const index = effects.map((e) => ({
  slug: e.slug,
  name: e.name,
  desc: e.description,
  cat: e.category,
  tags: e.tags,
  pkg: e.library.packageName,
  install: e.usage.install,
  size: e.packageMeta?.bundleSize ?? null,
  stars: e.packageMeta?.githubStars ?? null,
  url: e.library.url,
}));

writeFileSync("public/effects-index.json", JSON.stringify(index));

console.log(`Generated llms-full.txt and effects-index.json with ${effects.length} effects`);
