import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type StackedBarData = Array<Record<string, any>>;

export interface StackedBarProps {
  data: StackedBarData;
  theme?: PaletteName;
  xAxisKey?: string;
  stackKeys?: string[];
}

export const StackedBar: React.FC<StackedBarProps> = ({
  data,
  theme = "ocean",
  xAxisKey = "name",
  stackKeys = [],
}) => {
  const palette = getPalette(theme);
  
  const chartConfig: ChartConfig = stackKeys.reduce((config, key, index) => ({
    ...config,
    [key]: {
      label: key,
      color: palette.colors[index % palette.colors.length],
    },
  }), {});

  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          {stackKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="stack"
              fill={palette.colors[index % palette.colors.length]}
            />
          ))}
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};