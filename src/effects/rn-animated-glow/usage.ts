export const usage = {
  install: "bun add react-native-animated-glow",
  tsx: `// React Native usage (requires RN + Skia)
import { AnimatedGlow, glowPresets } from 'react-native-animated-glow';

export default function Example() {
  return (
    <AnimatedGlow
      preset={glowPresets.defaultRainbow}
      initialState="default"
      style={{ borderRadius: 30 }}
    >
      <Text>Glowing Button</Text>
    </AnimatedGlow>
  );
}

// Web alternative (CSS recreation):
// See the demo component for a pure CSS version
// that recreates the glow presets for web projects.`,
};
