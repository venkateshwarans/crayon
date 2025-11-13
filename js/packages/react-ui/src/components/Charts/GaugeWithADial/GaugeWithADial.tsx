import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export interface GaugeWithADialProps {
  value: number;
  max?: number;
  min?: number;
  theme?: PaletteName;
  label?: string;
}

export const GaugeWithADial: React.FC<GaugeWithADialProps> = ({
  value,
  max = 100,
  min = 0,
  theme = "ocean",
  label = "Value",
}) => {
  const palette = getPalette(theme);
  const percentage = ((value - min) / (max - min)) * 100;
  
  const data = [
    { name: "filled", value: percentage },
    { name: "empty", value: 100 - percentage },
  ];

  const chartConfig: ChartConfig = {
    filled: {
      label: "Filled",
      color: palette.colors[0],
    },
    empty: {
      label: "Empty",
      color: "#E5E7EB",
    },
  };

  return (
    <ChartContainer config={chartConfig}>
      <div style={{ position: "relative" }}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
            >
              <Cell fill={palette.colors[0]} />
              <Cell fill="#E5E7EB" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div style={{ textAlign: "center", marginTop: "-50px" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</div>
          <div style={{ fontSize: "14px", color: "#666" }}>{label}</div>
        </div>
      </div>
    </ChartContainer>
  );
};