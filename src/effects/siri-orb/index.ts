import type { EffectDefinition } from "../types";
import { meta } from "./meta";
import { usage } from "./usage";
import SiriOrb from "./SiriOrb";

export const siriOrb: EffectDefinition = {
  ...meta,
  component: SiriOrb,
  usage,
};
