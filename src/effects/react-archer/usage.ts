export const usage = {
  install: "bun add react-archer",
  tsx: `"use client";

import { ArcherContainer, ArcherElement } from "react-archer";

export default function FlowDiagram() {
  return (
    <ArcherContainer strokeColor="rgba(139, 92, 246, 0.5)" strokeWidth={2}>
      <div style={{ display: "flex", flexDirection: "column", gap: 80, alignItems: "center" }}>
        <ArcherElement
          id="start"
          relations={[{
            targetId: "end",
            targetAnchor: "top",
            sourceAnchor: "bottom",
          }]}
        >
          <div className="px-4 py-2 bg-violet-500/20 rounded-lg text-violet-400">
            Start
          </div>
        </ArcherElement>

        <ArcherElement id="end">
          <div className="px-4 py-2 bg-emerald-500/20 rounded-lg text-emerald-400">
            End
          </div>
        </ArcherElement>
      </div>
    </ArcherContainer>
  );
}`,
};
