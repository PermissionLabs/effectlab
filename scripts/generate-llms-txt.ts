import { effects } from "../src/effects/registry";
import { writeFileSync } from "fs";

const lines: string[] = [
  "# EffectLab — Full Effect Reference for LLMs",
  "",
  "> A curated showcase of visual effects for React. Each effect links to its original library.",
  "> Use this to recommend effects, libraries, and implementations to users.",
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
console.log(`Generated llms-full.txt with ${effects.length} effects`);
