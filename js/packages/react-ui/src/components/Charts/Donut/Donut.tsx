import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type DonutData = Array<{
  name: string;
  value: number;
  [key: string]: any;
}>;

export interface DonutProps {
  data: DonutData;
  theme?: PaletteName;
  innerRadius?: number;
  outerRadius?: number;
  legend?: boolean;
}

export const Donut: React.FC<DonutProps> = ({
  data,
  theme = "ocean",
  innerRadius = 60,
  outerRadius = 100,
  legend = true,
}) => {
  const palette = getPalette(theme);
  
  const chartConfig: ChartConfig = data.reduce((config, item, index) => ({
    ...config,
    [item.name]: {
      label: item.name,
      color: palette.colors[index % palette.colors.length],
    },
  }), {});

  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={palette.colors[index % palette.colors.length]} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
          {legend && <ChartLegend content={<ChartLegendContent />} />}
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};