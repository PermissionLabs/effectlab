export const usage = {
  install: "bun add recharts",
  tsx: `"use client";

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

const data = [
  { name: "Jan", revenue: 4000, users: 2400 },
  { name: "Feb", revenue: 3000, users: 1398 },
  { name: "Mar", revenue: 2000, users: 9800 },
  { name: "Apr", revenue: 2780, users: 3908 },
  { name: "May", revenue: 1890, users: 4800 },
  { name: "Jun", revenue: 2390, users: 3800 },
];

export default function ChartExample() {
  return (
    <div className="w-full space-y-8 p-4">
      {/* Area Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.3}
            animationDuration={1200}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="users"
            fill="#06b6d4"
            radius={[4, 4, 0, 0]}
            animationDuration={1000}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}`,
};
