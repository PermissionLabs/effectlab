export const meta = {
  slug: "dnd-kit-core",
  name: "Core",
  description:
    "dnd kit \u2013 a lightweight React library for building performant and accessible drag and drop experiences",
  category: "interaction" as const,
  tags: ["drag", "drop", "sortable", "reorder", "dnd"],
  keywords: [
    // English — visual descriptions
    "drag and drop", "sortable list", "draggable items", "reorderable list",
    "vertical sort", "drag handle", "drop zone", "drag indicator",
    "smooth drag", "animated reorder", "drag overlay", "sortable cards",
    // English — use cases
    "task reorder", "kanban board", "priority list", "playlist reorder",
    "file organizer", "todo reorder", "menu builder", "form field reorder",
    "layer ordering", "image gallery sort", "dashboard widget reorder",
    // Korean
    "드래그 앤 드롭", "정렬 가능 목록", "드래그 리스트",
    "순서 변경", "재정렬", "칸반 보드", "드래그 카드",
    // Technical
    "dnd-kit", "useSortable", "SortableContext",
    "DndContext", "closestCenter", "arrayMove",
  ],
  library: {
    name: "@dnd-kit/core",
    packageName: "@dnd-kit/core",
    url: "https://github.com/clauderic/dnd-kit#readme",
    installType: "npm" as const,
  },
  packageMeta: {
    bundleSize: "13.9 kB",
    githubStars: 16913,
    weeklyDownloads: 11367106,
    lastUpdated: "2026-04",
  },
};
