export const usage = {
  install: "bun add @splinetool/react-spline @splinetool/runtime",
  tsx: `import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  function onLoad(spline: any) {
    // Access the Spline application instance
    console.log("Spline scene loaded", spline);
  }

  return (
    <div style={{ width: "100%", height: 500 }}>
      <Spline
        scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}`,
};
