import type { EffectDefinition } from "../types";
import { meta } from "./meta";
import { usage } from "./usage";
import dynamic from "next/dynamic";
const SiriOrb = dynamic(() => import("./SiriOrb"), { ssr: false });

export const siriOrb: EffectDefinition = {
  ...meta,
  component: SiriOrb,
  usage,
};
