export const usage = {
  install: "bun add react-type-animation",
  tsx: `import { TypeAnimation } from "react-type-animation";

export default function TypingDemo() {
  return (
    <TypeAnimation
      sequence={[
        "Hello, world!",
        2000,
        "Welcome to my site",
        2000,
        "Built with React",
        2000,
      ]}
      wrapper="h1"
      speed={50}
      repeat={Infinity}
      style={{ fontSize: "2rem", fontWeight: "bold" }}
    />
  );
}`,
};
