import type { ComponentType } from "react";

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
