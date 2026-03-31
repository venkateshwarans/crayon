import React from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type StackAreaHundredPercentageData = Array<Record<string, any>>;

export interface StackAreaHundredPercentageProps {
  data: StackAreaHundredPercentageData;
  theme?: PaletteName;
  xAxisKey?: string;
  stackKeys?: string[];
}

export const StackAreaHundredPercentage: React.FC<StackAreaHundredPercentageProps> = ({
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
        <AreaChart data={data}>
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          {stackKeys.map((key, index) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stackId="1"
              fill={palette.colors[index % palette.colors.length]}
            />
          ))}
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};