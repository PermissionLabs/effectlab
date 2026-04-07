export const usage = {
  install: "bun add atropos",
  tsx: `import Atropos from "atropos/react";
import "atropos/css";

export default function ParallaxCard() {
  return (
    <Atropos
      className="my-atropos"
      activeOffset={40}
      shadowScale={1.05}
      rotateXMax={15}
      rotateYMax={15}
    >
      <div style={{ padding: 40, borderRadius: 16, background: "#111" }}>
        {/* Background layer — furthest depth */}
        <div data-atropos-offset="-5">
          <div style={{ width: 100, height: 100, borderRadius: "50%", background: "rgba(139,92,246,0.3)", filter: "blur(20px)" }} />
        </div>

        {/* Middle layer */}
        <div data-atropos-offset="5">
          <h2 style={{ color: "white" }}>Hello World</h2>
        </div>

        {/* Front layer — closest to viewer */}
        <div data-atropos-offset="10">
          <button style={{ padding: "8px 16px", background: "#8b5cf6", color: "white", borderRadius: 8 }}>
            Hover me
          </button>
        </div>
      </div>
    </Atropos>
  );
}`,
};
