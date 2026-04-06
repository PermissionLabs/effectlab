import type { EffectDefinition } from "../types";
import { meta } from "./meta";
import { usage } from "./usage";
import dynamic from "next/dynamic";
const RNAnimatedGlow = dynamic(() => import("./RNAnimatedGlow"), { ssr: false });

export const rnAnimatedGlow: EffectDefinition = {
  ...meta,
  component: RNAnimatedGlow,
  usage,
};
