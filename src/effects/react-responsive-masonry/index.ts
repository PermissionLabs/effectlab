import type { EffectDefinition } from "../types";
import { meta } from "./meta";
import { usage } from "./usage";
import DemoComponent from "./DemoComponent";

export const reactResponsiveMasonry: EffectDefinition = {
  ...meta,
  component: DemoComponent,
  usage,
};
