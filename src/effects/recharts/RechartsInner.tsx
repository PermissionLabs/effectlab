"use client";

import { useState, useCallback } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

function generateData() {
  return months.map((name) => ({
    name,
    revenue: Math.floor(Math.random() * 4000) + 1000,
    users: Math.floor(Math.random() * 3000) + 500,
    growth: Math.floor(Math.random() * 100) + 20,
  }));
}

export default function RechartsInner() {
  const [data, setData] = useState(generateData);
  const [key, setKey] = useState(0);

  const randomize = useCallback(() => {
    setData(generateData());
    setKey((k) => k + 1);
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-[#050510] rounded-2xl p-4 gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white text-sm font-semibold">Analytics Dashboard</h3>
          <p className="text-white/40 text-xs">Animated chart demo</p>
        </div>
        <button
          onClick={randomize}
          className="px-3 py-1.5 rounded-lg bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 text-violet-300 text-xs font-medium transition-colors"
        >
          Randomize
        </button>
      </div>

      {/* Area Chart */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="55%">
          <AreaChart key={`area-${key}`} data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(5,5,16,0.9)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                fontSize: "11px",
                color: "#fff",
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8b5cf6"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              animationDuration={1200}
              animationEasing="ease-in-out"
            />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#06b6d4"
              fillOpacity={1}
              fill="url(#colorUsers)"
              animationDuration={1400}
              animationEasing="ease-in-out"
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height="40%">
          <BarChart key={`bar-${key}`} data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(5,5,16,0.9)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                fontSize: "11px",
                color: "#fff",
              }}
            />
            <Bar
              dataKey="growth"
              fill="#8b5cf6"
              radius={[4, 4, 0, 0]}
              animationDuration={1000}
              animationEasing="ease-in-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
