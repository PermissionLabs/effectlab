"use client";

import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from "react-resizable-panels";

export default function ReactResizablePanelsDemo() {
  return (
    <div className="w-full h-full bg-[#050510] rounded-2xl p-4 flex flex-col">
      <p className="text-white/50 text-xs uppercase tracking-widest mb-3 text-center">
        Drag the purple handles to resize
      </p>
      <PanelGroup orientation="horizontal" className="flex-1 rounded-xl overflow-hidden border border-white/10">
        {/* Sidebar */}
        <Panel defaultSize={20} minSize={10}>
          <div className="h-full bg-[#0a0a1a] p-4 flex flex-col gap-3">
            <span className="text-violet-400 text-xs font-semibold uppercase tracking-wider">
              Sidebar
            </span>
            <div className="flex flex-col gap-2">
              {["Dashboard", "Projects", "Settings", "Users"].map((item) => (
                <div
                  key={item}
                  className="text-white/60 text-sm px-3 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Panel>

        <PanelResizeHandle className="w-1.5 bg-violet-500/30 hover:bg-violet-500/60 transition-colors" />

        {/* Main */}
        <Panel defaultSize={55} minSize={20}>
          <div className="h-full bg-[#0d0d20] p-4 flex flex-col gap-3">
            <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">
              Main Content
            </span>
            <div className="flex-1 grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/5 border border-white/5 flex items-center justify-center"
                >
                  <span className="text-white/20 text-sm">Card {i}</span>
                </div>
              ))}
            </div>
          </div>
        </Panel>

        <PanelResizeHandle className="w-1.5 bg-violet-500/30 hover:bg-violet-500/60 transition-colors" />

        {/* Inspector */}
        <Panel defaultSize={25} minSize={10}>
          <div className="h-full bg-[#0a0a1a] p-4 flex flex-col gap-3">
            <span className="text-violet-400 text-xs font-semibold uppercase tracking-wider">
              Inspector
            </span>
            <div className="flex flex-col gap-2">
              {["Properties", "Styles", "Layout", "Events"].map((item) => (
                <div
                  key={item}
                  className="text-white/40 text-xs px-3 py-2 rounded-lg bg-white/5 border border-white/5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}
