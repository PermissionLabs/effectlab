import type { ComponentType } from "react";

export const MOTION_TAGS = [
  // Easing & Physics
  "spring", "bounce", "elastic", "easing", "inertia", "physics",
  // Transition Types
  "fade", "slide", "scale", "rotate", "flip", "morph", "reveal", "collapse",
  // Scroll
  "parallax", "scroll-linked", "scroll-triggered", "smooth-scroll", "sticky",
  // Micro-interactions
  "hover", "ripple", "pulse", "shake", "drag", "gesture",
  // Text & Numbers
  "typewriter", "scramble", "counter", "marquee", "kinetic-type",
  // Particles & Generative
  "particles", "confetti", "noise", "flow-field", "generative",
  // Visual Effects
  "glow", "gradient", "blur", "neon", "aurora", "beam", "glassmorphism", "shadow",
  // Structural & Rendering
  "layout", "stagger", "timeline", "lottie", "svg-draw", "3d", "shader",
] as const;

export type MotionTag = (typeof MOTION_TAGS)[number];

export type Category =
  | "glow"
  | "orb"
  | "gradient"
  | "border"
  | "hover"
  | "text"
  | "background"
  | "button"
  | "particle"
  | "scroll"
  | "interaction"
  | "3d"
  | "layout"
  | "transition";

export interface LibraryInfo {
  name: string;
  packageName: string;
  url: string;
  icon?: string;
  installType: "npm" | "cli";
}

export interface PackageMeta {
  /** Bundle size (minified + gzipped), e.g. "12.5 kB" */
  bundleSize?: string;
  /** GitHub stars count */
  githubStars?: number;
  /** npm weekly downloads */
  weeklyDownloads?: number;
  /** Last publish date, e.g. "2024-12-15" */
  lastUpdated?: string;
}

export interface EffectDefinition {
  slug: string;
  name: string;
  description: string;
  category: Category;
  tags: string[];
  motionTags: (MotionTag | (string & {}))[];
  keywords: string[];
  library: LibraryInfo;
  packageMeta?: PackageMeta;
  component: ComponentType;
  usage: {
    install: string;
    tsx: string;
    css?: string;
  };
}
