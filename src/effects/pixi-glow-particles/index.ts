import type { EffectDefinition } from "../types";
import { meta } from "./meta";
import { usage } from "./usage";
import PixiGlowParticles from "./PixiGlowParticles";

export const pixiGlowParticles: EffectDefinition = {
  ...meta,
  component: PixiGlowParticles,
  usage,
};
