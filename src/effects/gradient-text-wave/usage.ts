export const usage = {
  install: "bun add react-text-gradients-and-animations",
  tsx: `import { LinearTextGradient } from "react-text-gradients-and-animations";

export default function GradientTitle() {
  return (
    <LinearTextGradient
      angle={90}
      colors={["#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"]}
      animate
      animateDuration={4}
      animateDirection="horizontal"
    >
      <h1 className="text-4xl font-bold">Your Title Here</h1>
    </LinearTextGradient>
  );
}`,
};
