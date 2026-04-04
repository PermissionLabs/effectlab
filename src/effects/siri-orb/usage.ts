export const usage = {
  install: "npx smoothui-cli add siri-orb",
  tsx: `import SiriOrb from "@/components/ui/smoothui/siri-orb";

export default function Example() {
  return (
    <SiriOrb
      size="192px"
      colors={{
        bg: "oklch(10% 0.02 264.695)",
        c1: "oklch(75% 0.15 350)",    // Pastel pink
        c2: "oklch(80% 0.12 200)",    // Pastel blue
        c3: "oklch(78% 0.14 280)",    // Pastel purple
      }}
      animationDuration={20}
    />
  );
}`,
};
