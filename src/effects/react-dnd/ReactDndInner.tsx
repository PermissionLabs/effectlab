"use client";

import { useState, useCallback } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface CardItem {
  id: string;
  label: string;
  color: string;
  accent: string;
}

const ITEM_TYPE = "CARD";

const initialCards: CardItem[] = [
  { id: "1", label: "Design", color: "bg-violet-500/15 border-violet-500/25", accent: "text-violet-400" },
  { id: "2", label: "Develop", color: "bg-emerald-500/15 border-emerald-500/25", accent: "text-emerald-400" },
  { id: "3", label: "Test", color: "bg-amber-500/15 border-amber-500/25", accent: "text-amber-400" },
  { id: "4", label: "Deploy", color: "bg-cyan-500/15 border-cyan-500/25", accent: "text-cyan-400" },
];

function DraggableCard({ item, onRemove }: { item: CardItem; onRemove: (id: string) => void }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { id: item.id },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  return (
    <div
      ref={drag as unknown as React.Ref<HTMLDivElement>}
      className={`px-3 py-2 rounded-lg border ${item.color} cursor-grab active:cursor-grabbing transition-opacity ${
        isDragging ? "opacity-30" : "opacity-100"
      }`}
    >
      <span className={`text-xs font-medium ${item.accent}`}>{item.label}</span>
    </div>
  );
}

function Column({
  title,
  items,
  onDrop,
  onRemove,
  accentColor,
}: {
  title: string;
  items: CardItem[];
  onDrop: (id: string) => void;
  onRemove: (id: string) => void;
  accentColor: string;
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (draggedItem: { id: string }) => onDrop(draggedItem.id),
    collect: (monitor) => ({ isOver: monitor.isOver() }),
  }));

  return (
    <div
      ref={drop as unknown as React.Ref<HTMLDivElement>}
      className={`flex-1 min-h-[160px] rounded-xl border p-3 transition-colors ${
        isOver ? "border-violet-500/40 bg-violet-500/5" : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <p className={`text-[10px] uppercase tracking-widest mb-3 ${accentColor}`}>
        {title}
      </p>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <DraggableCard key={item.id} item={item} onRemove={onRemove} />
        ))}
        {items.length === 0 && (
          <p className="text-white/15 text-xs text-center py-4">Drop here</p>
        )}
      </div>
    </div>
  );
}

function DndBoard() {
  const [left, setLeft] = useState<CardItem[]>(initialCards.slice(0, 2));
  const [right, setRight] = useState<CardItem[]>(initialCards.slice(2));

  const moveToRight = useCallback((id: string) => {
    setLeft((prev) => {
      const card = prev.find((c) => c.id === id);
      if (!card) return prev;
      setRight((r) => (r.find((c) => c.id === id) ? r : [...r, card]));
      return prev.filter((c) => c.id !== id);
    });
  }, []);

  const moveToLeft = useCallback((id: string) => {
    setRight((prev) => {
      const card = prev.find((c) => c.id === id);
      if (!card) return prev;
      setLeft((l) => (l.find((c) => c.id === id) ? l : [...l, card]));
      return prev.filter((c) => c.id !== id);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <p className="text-white/40 text-xs uppercase tracking-widest">
        Drag cards between columns
      </p>
      <div className="flex gap-3 w-full max-w-sm">
        <Column title="To Do" items={left} onDrop={moveToLeft} onRemove={() => {}} accentColor="text-white/30" />
        <Column title="Done" items={right} onDrop={moveToRight} onRemove={() => {}} accentColor="text-emerald-500/50" />
      </div>
    </div>
  );
}

export default function ReactDndInner() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DndBoard />
    </DndProvider>
  );
}
