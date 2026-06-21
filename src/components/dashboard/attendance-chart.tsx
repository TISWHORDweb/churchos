"use client";

import {
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

const data = [
  { period: "Mon", attendance: 120, trend: 115 },
  { period: "Tue", attendance: 45, trend: 42 },
  { period: "Wed", attendance: 180, trend: 170 },
  { period: "Thu", attendance: 60, trend: 58 },
  { period: "Fri", attendance: 55, trend: 52 },
  { period: "Sat", attendance: 90, trend: 85 },
  { period: "Sun", attendance: 420, trend: 400 },
];

export function AttendanceChart() {
  return (
    <div className="rounded-[8px] bg-white p-6 hairline border-neutral-200">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-neutral-900">
            Weekly Attendance
          </h3>
          <p className="text-sm text-neutral-500">Last 7 days overview</p>
        </div>
        <div className="flex gap-4 text-xs text-neutral-500">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-gold-400" />
            Current
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            Trend
          </span>
        </div>
      </div>

      <div className="h-[280px] w-full" role="img" aria-label="Weekly attendance chart">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(0,0,0,0.06)"
              vertical={false}
            />
            <XAxis
              dataKey="period"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#737373" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#737373" }}
            />
            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "0.5px solid rgba(0,0,0,0.08)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Bar
              dataKey="attendance"
              radius={[4, 4, 0, 0]}
              fill="#E5E5E5"
              activeBar={{ fill: "#EF9F27" }}
            />
            <Line
              type="monotone"
              dataKey="trend"
              stroke="#1D9E75"
              strokeWidth={2}
              dot={{ fill: "#1D9E75", r: 3 }}
              activeDot={{ fill: "#EF9F27", r: 5 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Screen reader fallback */}
      <table className="sr-only">
        <caption>Weekly attendance data</caption>
        <thead>
          <tr>
            <th>Day</th>
            <th>Attendance</th>
            <th>Trend</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.period}>
              <td>{row.period}</td>
              <td>{row.attendance}</td>
              <td>{row.trend}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
