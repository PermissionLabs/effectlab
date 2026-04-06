export const usage = {
  install: "bun add react-animated-cursor",
  tsx: `import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.3}
        innerStyle={{ backgroundColor: "#a78bfa" }}
        outerStyle={{ border: "2px solid #a78bfa" }}
        showSystemCursor={false}
        trailingSpeed={8}
        clickables={["a", "button", ".link"]}
      />
      <h1>Hover around the page!</h1>
      <button>Click me</button>
    </div>
  );
}`,
};
