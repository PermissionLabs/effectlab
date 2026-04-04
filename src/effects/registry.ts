import { rnAnimatedGlow } from "./rn-animated-glow";
import { siriOrb } from "./siri-orb";
import { shaderGradient } from "./shader-gradient";
import { pixiGlowParticles } from "./pixi-glow-particles";
import { framerLayout } from "./framer-layout";
import { reactSpring } from "./react-spring";
import { autoAnimate } from "./auto-animate";
import { scrollParallax } from "./scroll-parallax";
import { typewriter } from "./typewriter";
import { parallaxTilt } from "./parallax-tilt";
import { marquee } from "./marquee";
import { roughNotation } from "./rough-notation";
import { numberFlow } from "./number-flow";
import { countup } from "./countup";
import { confetti } from "./confetti";
import { reactAwesomeReveal } from "./react-awesome-reveal";
import { vaul } from "./vaul";
import { sonner } from "./sonner";
import { reactRewards } from "./react-rewards";
import { emblaCarouselReact } from "./embla-carousel-react";
import { reactLoadingSkeleton } from "./react-loading-skeleton";
import { reactSpinners } from "./react-spinners";
import { cmdk } from "./cmdk";
import { reactThreeDrei } from "./react-three-drei";
import { lottieReact } from "./lottie-react";
import type { EffectDefinition } from "./types";

export const effects: EffectDefinition[] = [
  rnAnimatedGlow,
  siriOrb,
  shaderGradient,
  pixiGlowParticles,
  framerLayout,
  reactSpring,
  autoAnimate,
  scrollParallax,
  typewriter,
  parallaxTilt,
  marquee,
  roughNotation,
  numberFlow,
  countup,
  confetti,
  reactAwesomeReveal,
  vaul,
  sonner,
  reactRewards,
  emblaCarouselReact,
  reactLoadingSkeleton,
  reactSpinners,
  cmdk,
  reactThreeDrei,
  lottieReact,
];
export const categories = [...new Set(effects.map((e) => e.category))];
export const allTags = [...new Set(effects.flatMap((e) => e.tags))].sort();
