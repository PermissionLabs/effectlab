declare module "react-moving-text" {
  import { ReactNode } from "react";

  interface MovingTextProps {
    type?: string;
    duration?: string;
    delay?: string;
    direction?: string;
    timing?: string;
    iteration?: number | string;
    fillMode?: string;
    children?: ReactNode;
    onAnimationEnd?: () => void;
  }

  const MovingText: React.FC<MovingTextProps>;
  export default MovingText;
}
