export const usage = {
  install: "bun add @theatre/core @theatre/react",
  tsx: `"use client";
import { getProject, types } from "@theatre/core";
import { useEffect, useRef, useState } from "react";

// Create a Theatre.js project and sheet
const project = getProject("My Project");
const sheet = project.sheet("Scene");

// Define animated objects with typed props
const box1 = sheet.object("Box 1", {
  x: types.number(0, { range: [-200, 200] }),
  y: types.number(0, { range: [-200, 200] }),
  rotation: types.number(0, { range: [0, 360] }),
  scale: types.number(1, { range: [0, 2] }),
  opacity: types.number(1, { range: [0, 1] }),
});

const box2 = sheet.object("Box 2", {
  x: types.number(0, { range: [-200, 200] }),
  y: types.number(0, { range: [-200, 200] }),
  rotation: types.number(0, { range: [0, 360] }),
  scale: types.number(1, { range: [0, 2] }),
  opacity: types.number(1, { range: [0, 1] }),
});

export default function TheatreExample() {
  const [vals1, setVals1] = useState({ x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 });
  const [vals2, setVals2] = useState({ x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 });

  useEffect(() => {
    const unsub1 = box1.onValuesChange((v) => setVals1(v));
    const unsub2 = box2.onValuesChange((v) => setVals2(v));

    // Play the sequence (0 to 3 seconds, looping)
    project.ready.then(() => {
      sheet.sequence.play({ iterationCount: Infinity, range: [0, 3] });
    });

    return () => { unsub1(); unsub2(); };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: 300 }}>
      <div
        style={{
          position: "absolute",
          left: "30%",
          top: "50%",
          width: 60,
          height: 60,
          borderRadius: 8,
          backgroundColor: "#8b5cf6",
          transform: \`translate(\${vals1.x}px, \${vals1.y}px) rotate(\${vals1.rotation}deg) scale(\${vals1.scale})\`,
          opacity: vals1.opacity,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "60%",
          top: "50%",
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: "#06b6d4",
          transform: \`translate(\${vals2.x}px, \${vals2.y}px) rotate(\${vals2.rotation}deg) scale(\${vals2.scale})\`,
          opacity: vals2.opacity,
        }}
      />
    </div>
  );
}`,
};
