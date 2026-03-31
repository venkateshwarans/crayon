import React from "react";
import { ComposedChart, Bar, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type StackedComboData = Array<Record<string, any>>;

export interface StackedComboProps {
  data: StackedComboData;
  theme?: PaletteName;
  xAxisKey?: string;
  barKeys?: string[];
  lineKeys?: string[];
}

export const StackedCombo: React.FC<StackedComboProps> = ({
  data,
  theme = "ocean",
  xAxisKey = "name",
  barKeys = [],
  lineKeys = [],
}) => {
  const palette = getPalette(theme);
  
  const chartConfig: ChartConfig = [...barKeys, ...lineKeys].reduce((config, key, index) => ({
    ...config,
    [key]: {
      label: key,
      color: palette.colors[index % palette.colors.length],
    },
  }), {});

  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          {barKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="stack"
              fill={palette.colors[index % palette.colors.length]}
            />
          ))}
          {lineKeys.map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={palette.colors[(barKeys.length + index) % palette.colors.length]}
            />
          ))}
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};