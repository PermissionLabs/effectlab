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
import { reactHaiku } from "./react-haiku";
import { reactTransitionState } from "./react-transition-state";
import { reactScrollMotion } from "./react-scroll-motion";
import { lenis } from "./lenis";
import { recharts } from "./recharts";
import { reactCompareSlider } from "./react-compare-slider";
import { notistack } from "./notistack";
import { reactMediumImageZoom } from "./react-medium-image-zoom";
import { reactThreePostprocessing } from "./react-three-postprocessing";
import { twistezoReactTextScramble } from "./twistezo-react-text-scramble";
import { floatingUiReact } from "./floating-ui-react";
import { lucideReact } from "./lucide-react";
import { radixUiReactTabs } from "./radix-ui-react-tabs";
import { rcProgress } from "./rc-progress";
import { radixUiReactCollapsible } from "./radix-ui-react-collapsible";
import { boringAvatars } from "./boring-avatars";
import { reactHotToast } from "./react-hot-toast";
import { useRippleHook } from "./use-ripple-hook";
import { stianlarsenReactLightBeam } from "./stianlarsen-react-light-beam";
import { reactSwitch } from "./react-switch";
import { reactColorful } from "./react-colorful";
import { reactVerticalTimelineComponent } from "./react-vertical-timeline-component";
import { reactContentLoader } from "./react-content-loader";
import { hamburgerReact } from "./hamburger-react";
import { reactBlob } from "./react-blob";
import { simplexNoise } from "./simplex-noise";
import { smastromReactRating } from "./smastrom-react-rating";
import { reactWrapBalancer } from "./react-wrap-balancer";
import { reactActivityCalendar } from "./react-activity-calendar";
import { uidotdevUsehooks } from "./uidotdev-usehooks";
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
  reactHaiku,
  reactTransitionState,
  reactScrollMotion,
  lenis,
  recharts,
  reactCompareSlider,
  notistack,
  reactMediumImageZoom,
  reactThreePostprocessing,
  twistezoReactTextScramble,
  floatingUiReact,
  lucideReact,
  radixUiReactTabs,
  rcProgress,
  radixUiReactCollapsible,
  boringAvatars,
  reactHotToast,
  useRippleHook,
  stianlarsenReactLightBeam,
  reactSwitch,
  reactColorful,
  reactVerticalTimelineComponent,
  reactContentLoader,
  hamburgerReact,
  reactBlob,
  simplexNoise,
  smastromReactRating,
  reactWrapBalancer,
  reactActivityCalendar,
  uidotdevUsehooks,
];
export const categories = [...new Set(effects.map((e) => e.category))];
export const allTags = [...new Set(effects.flatMap((e) => e.tags))].sort();
