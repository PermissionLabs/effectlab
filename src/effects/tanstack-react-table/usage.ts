export const usage = {
  install: "bun add @tanstack/react-table",
  tsx: `"use client";

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
  type SortingState,
} from "@tanstack/react-table";

interface User {
  name: string;
  email: string;
  role: string;
}

const data: User[] = [
  { name: "Alice", email: "alice@example.com", role: "Engineer" },
  { name: "Bob", email: "bob@example.com", role: "Designer" },
  { name: "Charlie", email: "charlie@example.com", role: "PM" },
];

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("name", { header: "Name" }),
  columnHelper.accessor("email", { header: "Email" }),
  columnHelper.accessor("role", { header: "Role" }),
];

export default function TableExample() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table className="w-full text-sm">
      <thead>
        {table.getHeaderGroups().map((hg) => (
          <tr key={hg.id}>
            {hg.headers.map((h) => (
              <th
                key={h.id}
                onClick={h.column.getToggleSortingHandler()}
                className="px-4 py-2 text-left cursor-pointer text-white/60"
              >
                {flexRender(h.column.columnDef.header, h.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-t border-white/10">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-4 py-2 text-white">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}`,
};
