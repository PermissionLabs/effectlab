import Fuse from "fuse.js";
import type { EffectDefinition } from "@/effects/types";

export function createSearch(effects: EffectDefinition[]) {
  return new Fuse(effects, {
    keys: [
      { name: "name", weight: 0.25 },
      { name: "description", weight: 0.15 },
      { name: "tags", weight: 0.15 },
      { name: "keywords", weight: 0.3 },
      { name: "library.name", weight: 0.15 },
    ],
    threshold: 0.45,
    includeScore: true,
  });
}
