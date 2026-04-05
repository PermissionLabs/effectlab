"use client";

import { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
  type SortingState,
} from "@tanstack/react-table";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}

const data: User[] = [
  { id: 1, name: "Alice Kim", email: "alice@example.com", role: "Engineer", status: "active" },
  { id: 2, name: "Bob Park", email: "bob@example.com", role: "Designer", status: "active" },
  { id: 3, name: "Charlie Lee", email: "charlie@example.com", role: "PM", status: "inactive" },
  { id: 4, name: "Dana Choi", email: "dana@example.com", role: "Engineer", status: "active" },
  { id: 5, name: "Eve Yoon", email: "eve@example.com", role: "DevOps", status: "inactive" },
  { id: 6, name: "Frank Han", email: "frank@example.com", role: "Designer", status: "active" },
];

const columnHelper = createColumnHelper<User>();

export default function TanstackTableInner() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Name",
        cell: (info) => (
          <span className="text-white font-medium">{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor("email", {
        header: "Email",
        cell: (info) => (
          <span className="text-white/50 text-xs font-mono">{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor("role", {
        header: "Role",
        cell: (info) => (
          <span className="px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400 text-xs">
            {info.getValue()}
          </span>
        ),
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => {
          const active = info.getValue() === "active";
          return (
            <span className={`flex items-center gap-1.5 text-xs ${active ? "text-emerald-400" : "text-white/30"}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-emerald-400" : "bg-white/20"}`} />
              {active ? "Active" : "Inactive"}
            </span>
          );
        },
      }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-4">
      <p className="text-white/40 text-xs uppercase tracking-widest">
        Sortable data table
      </p>

      <div className="w-full max-w-lg overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-white/10 bg-white/[0.02]">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-4 py-3 text-left text-xs font-medium text-white/40 uppercase tracking-wider cursor-pointer hover:text-white/60 select-none transition-colors"
                  >
                    <span className="flex items-center gap-1">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: " \u2191",
                        desc: " \u2193",
                      }[header.column.getIsSorted() as string] ?? ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
