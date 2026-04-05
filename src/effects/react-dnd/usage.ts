export const usage = {
  install: "bun add react-dnd react-dnd-html5-backend",
  tsx: `"use client";

import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ITEM_TYPE = "CARD";

function DraggableCard({ label }: { label: string }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { label },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  return (
    <div
      ref={drag as any}
      className={\`px-4 py-2 bg-white/5 border border-white/10 rounded-lg cursor-grab \${
        isDragging ? "opacity-30" : ""
      }\`}
    >
      <span className="text-white text-sm">{label}</span>
    </div>
  );
}

function DropZone({ onDrop }: { onDrop: (label: string) => void }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item: { label: string }) => onDrop(item.label),
    collect: (monitor) => ({ isOver: monitor.isOver() }),
  }));

  return (
    <div
      ref={drop as any}
      className={\`min-h-[120px] border border-dashed rounded-xl p-4 \${
        isOver ? "border-violet-500/50 bg-violet-500/5" : "border-white/10"
      }\`}
    >
      <p className="text-white/30 text-sm">Drop here</p>
    </div>
  );
}

export default function DndExample() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-4">
        <DraggableCard label="Drag me" />
        <DropZone onDrop={(label) => console.log("Dropped:", label)} />
      </div>
    </DndProvider>
  );
}`,
};
