"use client";

import { ArcherContainer, ArcherElement } from "react-archer";

const boxStyle =
  "px-4 py-3 rounded-xl border flex items-center justify-center text-xs font-semibold";

export default function ReactArcherDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-6">
        Flow diagram with arrows
      </p>
      <ArcherContainer
        strokeColor="rgba(139, 92, 246, 0.5)"
        strokeWidth={2}
        endShape={{ arrow: { arrowLength: 8, arrowThickness: 6 } }}
      >
        <div className="flex flex-col items-center gap-16 w-full max-w-xs">
          <ArcherElement
            id="start"
            relations={[
              {
                targetId: "process",
                targetAnchor: "top",
                sourceAnchor: "bottom",
                style: { strokeColor: "rgba(139, 92, 246, 0.5)" },
              },
            ]}
          >
            <div
              className={`${boxStyle} bg-violet-500/15 border-violet-500/30 text-violet-400`}
            >
              Input Data
            </div>
          </ArcherElement>

          <ArcherElement
            id="process"
            relations={[
              {
                targetId: "end",
                targetAnchor: "top",
                sourceAnchor: "bottom",
                style: { strokeColor: "rgba(16, 185, 129, 0.5)" },
              },
            ]}
          >
            <div
              className={`${boxStyle} bg-emerald-500/15 border-emerald-500/30 text-emerald-400`}
            >
              Process & Transform
            </div>
          </ArcherElement>

          <ArcherElement id="end">
            <div
              className={`${boxStyle} bg-amber-500/15 border-amber-500/30 text-amber-400`}
            >
              Output Result
            </div>
          </ArcherElement>
        </div>
      </ArcherContainer>
    </div>
  );
}
