import type { EffectDefinition } from "../types";
import { meta } from "./meta";
import { usage } from "./usage";
import dynamic from "next/dynamic";
const DemoComponent = dynamic(() => import("./DemoComponent"), { ssr: false });

export const roughNotation: EffectDefinition = {
  ...meta,
  component: DemoComponent,
  usage,
};
