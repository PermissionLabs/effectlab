export const usage = {
  install: "bun add @rive-app/react-canvas",
  tsx: `import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function RiveAnimation() {
  const { RiveComponent } = useRive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    stateMachines: "bumpy",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return (
    <div style={{ width: 500, height: 500 }}>
      <RiveComponent />
    </div>
  );
}`,
};
