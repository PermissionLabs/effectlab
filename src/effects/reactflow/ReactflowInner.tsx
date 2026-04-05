"use client";

import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  type Connection,
  type Node,
  type Edge,
  Background,
  Controls,
} from "reactflow";

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 50, y: 0 },
    data: { label: "Data Source" },
    style: {
      background: "rgba(139, 92, 246, 0.15)",
      border: "1px solid rgba(139, 92, 246, 0.3)",
      color: "#a78bfa",
      borderRadius: 12,
      fontSize: 12,
      fontWeight: 600,
    },
  },
  {
    id: "2",
    position: { x: -50, y: 120 },
    data: { label: "Transform" },
    style: {
      background: "rgba(16, 185, 129, 0.15)",
      border: "1px solid rgba(16, 185, 129, 0.3)",
      color: "#34d399",
      borderRadius: 12,
      fontSize: 12,
      fontWeight: 600,
    },
  },
  {
    id: "3",
    position: { x: 150, y: 120 },
    data: { label: "Validate" },
    style: {
      background: "rgba(245, 158, 11, 0.15)",
      border: "1px solid rgba(245, 158, 11, 0.3)",
      color: "#fbbf24",
      borderRadius: 12,
      fontSize: 12,
      fontWeight: 600,
    },
  },
  {
    id: "4",
    position: { x: 50, y: 240 },
    data: { label: "Output" },
    style: {
      background: "rgba(244, 63, 94, 0.15)",
      border: "1px solid rgba(244, 63, 94, 0.3)",
      color: "#fb7185",
      borderRadius: 12,
      fontSize: 12,
      fontWeight: 600,
    },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "rgba(139, 92, 246, 0.4)" } },
  { id: "e1-3", source: "1", target: "3", animated: true, style: { stroke: "rgba(245, 158, 11, 0.4)" } },
  { id: "e2-4", source: "2", target: "4", style: { stroke: "rgba(16, 185, 129, 0.4)" } },
  { id: "e3-4", source: "3", target: "4", style: { stroke: "rgba(244, 63, 94, 0.4)" } },
];

const nodeTypes = {};
const edgeTypes = {};

export default function ReactflowInner() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-full bg-[#050510] rounded-2xl overflow-hidden">
      <div className="w-full h-full">
        <ReactFlow
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          proOptions={{ hideAttribution: true }}
          style={{ background: "#050510" }}
        >
          <Background color="rgba(255,255,255,0.03)" gap={20} />
          <Controls
            showInteractive={false}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
            }}
          />
        </ReactFlow>
      </div>
    </div>
  );
}
