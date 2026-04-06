export const usage = {
  install: "bun add react-moving-text",
  tsx: `import MovingText from "react-moving-text";

export default function AnimatedHeading() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <MovingText
        type="bounce"
        duration="1000ms"
        delay="0s"
        direction="alternate"
        timing="ease"
        iteration="infinite"
      >
        Bounce
      </MovingText>
      <MovingText
        type="fadeIn"
        duration="1200ms"
        delay="0.2s"
        direction="alternate"
        timing="ease-in-out"
        iteration="infinite"
      >
        Fade In
      </MovingText>
    </div>
  );
}`,
};
