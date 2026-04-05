export const usage = {
  install: "bun add react-resizable-panels",
  tsx: `"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function ResizablePanelsExample() {
  return (
    <PanelGroup direction="horizontal" className="h-screen">
      <Panel defaultSize={25} minSize={10}>
        <div className="h-full p-4 bg-gray-900">
          <h2 className="text-sm font-semibold text-gray-400">Sidebar</h2>
        </div>
      </Panel>

      <PanelResizeHandle className="w-1 bg-gray-700 hover:bg-blue-500 transition-colors" />

      <Panel defaultSize={50} minSize={20}>
        <div className="h-full p-4 bg-gray-950">
          <h2 className="text-sm font-semibold text-gray-400">Main Content</h2>
        </div>
      </Panel>

      <PanelResizeHandle className="w-1 bg-gray-700 hover:bg-blue-500 transition-colors" />

      <Panel defaultSize={25} minSize={10}>
        <div className="h-full p-4 bg-gray-900">
          <h2 className="text-sm font-semibold text-gray-400">Inspector</h2>
        </div>
      </Panel>
    </PanelGroup>
  );
}`,
};
