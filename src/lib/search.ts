import Fuse from "fuse.js";
import type { EffectDefinition } from "@/effects/types";

export function createSearch(effects: EffectDefinition[]) {
  return new Fuse(effects, {
    keys: [
      { name: "name", weight: 0.20 },
      { name: "description", weight: 0.12 },
      { name: "tags", weight: 0.12 },
      { name: "motionTags", weight: 0.18 },
      { name: "keywords", weight: 0.25 },
      { name: "library.name", weight: 0.13 },
    ],
    threshold: 0.45,
    includeScore: true,
  });
}
