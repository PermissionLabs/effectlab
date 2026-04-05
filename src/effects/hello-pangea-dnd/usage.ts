export const usage = {
  install: "bun add @hello-pangea/dnd",
  tsx: `"use client";

import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";

const initialItems = [
  { id: "1", label: "First item" },
  { id: "2", label: "Second item" },
  { id: "3", label: "Third item" },
];

export default function SortableList() {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reordered = Array.from(items);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setItems(reordered);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2">
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(prov, snap) => (
                  <div
                    ref={prov.innerRef}
                    {...prov.draggableProps}
                    {...prov.dragHandleProps}
                    className={\`px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white \${
                      snap.isDragging ? "shadow-lg" : ""
                    }\`}
                  >
                    {item.label}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}`,
};
