"use client";

import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";

interface ListItem {
  id: string;
  label: string;
  color: string;
  accent: string;
}

const initialItems: ListItem[] = [
  { id: "1", label: "Set up CI/CD pipeline", color: "bg-violet-500/15 border-violet-500/25", accent: "text-violet-400" },
  { id: "2", label: "Write unit tests", color: "bg-emerald-500/15 border-emerald-500/25", accent: "text-emerald-400" },
  { id: "3", label: "Code review PR #42", color: "bg-amber-500/15 border-amber-500/25", accent: "text-amber-400" },
  { id: "4", label: "Deploy to staging", color: "bg-rose-500/15 border-rose-500/25", accent: "text-rose-400" },
  { id: "5", label: "Update documentation", color: "bg-cyan-500/15 border-cyan-500/25", accent: "text-cyan-400" },
];

export default function HelloPangeaInner() {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reordered = Array.from(items);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setItems(reordered);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <p className="text-white/40 text-xs uppercase tracking-widest">
        Drag to reorder
      </p>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="w-full max-w-xs space-y-2"
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(prov, snap) => (
                    <div
                      ref={prov.innerRef}
                      {...prov.draggableProps}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border ${item.color} transition-shadow ${
                        snap.isDragging ? "shadow-lg shadow-white/5" : ""
                      }`}
                    >
                      <div
                        {...prov.dragHandleProps}
                        className="flex flex-col gap-0.5 text-white/25 hover:text-white/50 transition-colors cursor-grab active:cursor-grabbing"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                          <circle cx="3" cy="2" r="1.2" />
                          <circle cx="9" cy="2" r="1.2" />
                          <circle cx="3" cy="6" r="1.2" />
                          <circle cx="9" cy="6" r="1.2" />
                          <circle cx="3" cy="10" r="1.2" />
                          <circle cx="9" cy="10" r="1.2" />
                        </svg>
                      </div>
                      <span className={`text-sm font-medium ${item.accent}`}>
                        {item.label}
                      </span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
