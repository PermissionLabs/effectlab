import type { EffectDefinition } from "../types";
import { meta } from "./meta";
import { usage } from "./usage";
import RNAnimatedGlow from "./RNAnimatedGlow";

export const rnAnimatedGlow: EffectDefinition = {
  ...meta,
  component: RNAnimatedGlow,
  usage,
};
