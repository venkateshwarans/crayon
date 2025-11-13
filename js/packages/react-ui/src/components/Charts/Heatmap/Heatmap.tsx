import React from "react";
import { ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type HeatmapData = Array<{
  x: string | number;
  y: string | number;
  value: number;
  [key: string]: any;
}>;

export interface HeatmapProps {
  data: HeatmapData;
  theme?: PaletteName;
  cellSize?: number;
}

export const Heatmap: React.FC<HeatmapProps> = ({
  data,
  theme = "ocean",
  cellSize = 20,
}) => {
  const palette = getPalette(theme);
  const maxValue = Math.max(...data.map(d => d.value));
  
  const getColor = (value: number) => {
    const intensity = value / maxValue;
    return `${palette.colors[0]}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}`;
  };

  const chartConfig: ChartConfig = {
    value: {
      label: "Value",
      color: palette.colors[0],
    },
  };

  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={400}>
        <svg>
          {data.map((item, index) => (
            <rect
              key={index}
              x={Number(item.x) * cellSize}
              y={Number(item.y) * cellSize}
              width={cellSize}
              height={cellSize}
              fill={getColor(item.value)}
            />
          ))}
        </svg>
      </ResponsiveContainer>
    </ChartContainer>
  );
};