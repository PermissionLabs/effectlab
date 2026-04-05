"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Item {
  id: string;
  label: string;
  color: string;
  accent: string;
}

const initialItems: Item[] = [
  { id: "1", label: "Design System", color: "bg-violet-500/15 border-violet-500/25", accent: "text-violet-400" },
  { id: "2", label: "Authentication", color: "bg-emerald-500/15 border-emerald-500/25", accent: "text-emerald-400" },
  { id: "3", label: "Dashboard UI", color: "bg-amber-500/15 border-amber-500/25", accent: "text-amber-400" },
  { id: "4", label: "API Integration", color: "bg-rose-500/15 border-rose-500/25", accent: "text-rose-400" },
  { id: "5", label: "Deployment", color: "bg-cyan-500/15 border-cyan-500/25", accent: "text-cyan-400" },
];

function SortableItem({ item }: { item: Item }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : 0,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${item.color} cursor-grab active:cursor-grabbing transition-shadow ${isDragging ? "shadow-lg shadow-white/5" : ""}`}
    >
      <div className="flex flex-col gap-0.5 text-white/30">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <circle cx="3" cy="3" r="1.5" />
          <circle cx="9" cy="3" r="1.5" />
          <circle cx="3" cy="9" r="1.5" />
          <circle cx="9" cy="9" r="1.5" />
        </svg>
      </div>
      <span className={`text-sm font-medium ${item.accent}`}>
        {item.label}
      </span>
    </div>
  );
}

export default function DndKitInner() {
  const [items, setItems] = useState(initialItems);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((prev) => {
        const oldIndex = prev.findIndex((i) => i.id === active.id);
        const newIndex = prev.findIndex((i) => i.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
        Drag to reorder
      </p>
      <div className="w-full max-w-xs space-y-2">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={items.map((i) => i.id)}
            strategy={verticalListSortingStrategy}
          >
            {items.map((item) => (
              <SortableItem key={item.id} item={item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
