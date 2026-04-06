import { rnAnimatedGlow } from "./rn-animated-glow";
import { siriOrb } from "./siri-orb";
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
import { reactRewards } from "./react-rewards";
import { emblaCarouselReact } from "./embla-carousel-react";
import { reactLoadingSkeleton } from "./react-loading-skeleton";
import { reactSpinners } from "./react-spinners";
import { lottieReact } from "./lottie-react";
import { reactHaiku } from "./react-haiku";
import { reactTransitionState } from "./react-transition-state";
import { reactScrollMotion } from "./react-scroll-motion";
import { lenis } from "./lenis";
import { useRippleHook } from "./use-ripple-hook";
import { stianlarsenReactLightBeam } from "./stianlarsen-react-light-beam";
import { reactContentLoader } from "./react-content-loader";
import { hamburgerReact } from "./hamburger-react";
import { reactBlob } from "./react-blob";
import { simplexNoise } from "./simplex-noise";
import { reactAnimateHeight } from "./react-animate-height";
import { reactThreeDrei } from "./react-three-drei";
import { reactThreePostprocessing } from "./react-three-postprocessing";
import { shaderGradient } from "./shader-gradient";
import { reactCircularProgressbar } from "./react-circular-progressbar";
import { reactVerticalTimelineComponent } from "./react-vertical-timeline-component";
import type { EffectDefinition } from "./types";

export const effects: EffectDefinition[] = [
  rnAnimatedGlow,
  siriOrb,
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
  reactRewards,
  emblaCarouselReact,
  reactLoadingSkeleton,
  reactSpinners,
  lottieReact,
  reactHaiku,
  reactTransitionState,
  reactScrollMotion,
  lenis,
  useRippleHook,
  stianlarsenReactLightBeam,
  reactContentLoader,
  hamburgerReact,
  reactBlob,
  simplexNoise,
  reactAnimateHeight,
  reactThreeDrei,
  reactThreePostprocessing,
  shaderGradient,
  reactCircularProgressbar,
  reactVerticalTimelineComponent,
];
export const categories = [...new Set(effects.map((e) => e.category))];
export const allTags = [...new Set(effects.flatMap((e) => e.tags))].sort();
