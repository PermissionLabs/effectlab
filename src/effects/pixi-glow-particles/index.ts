import type { EffectDefinition } from "../types";
import { meta } from "./meta";
import { usage } from "./usage";
import dynamic from "next/dynamic";
const PixiGlowParticles = dynamic(() => import("./PixiGlowParticles"), { ssr: false });

export const pixiGlowParticles: EffectDefinition = {
  ...meta,
  component: PixiGlowParticles,
  usage,
};
