
import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 20000 },
  { month: "Jun", revenue: 28000 },
  { month: "Jul", revenue: 25000 },
  { month: "Aug", revenue: 32000 },
  { month: "Sep", revenue: 30000 },
  { month: "Oct", revenue: 38000 },
  { month: "Nov", revenue: 35000 },
  { month: "Dec", revenue: 45000 },
];

function RevenueChart() {
  const [period, setPeriod] = useState("6months");

  const displayedRevenue =
    period === "3months"
      ? revenueData.slice(-3)
      : period === "6months"
        ? revenueData.slice(-6)
        : revenueData;

  return (
    <section className="analytics-section">
      <div className="chart-header">
        <h2>Revenue Overview</h2>

        <select
          value={period}
          onChange={(event) => setPeriod(event.target.value)}
        >
          <option value="3months">Last 3 months</option>
          <option value="6months">Last 6 months</option>
          <option value="12months">Last 12 months</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={displayedRevenue}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            fill="#6366f1"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}

export default RevenueChart;
