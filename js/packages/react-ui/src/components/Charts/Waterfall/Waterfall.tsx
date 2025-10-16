import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type WaterfallData = Array<{
  name: string;
  value: number;
  cumulative?: number;
  [key: string]: any;
}>;

export interface WaterfallProps {
  data: WaterfallData;
  theme?: PaletteName;
}

export const Waterfall: React.FC<WaterfallProps> = ({
  data,
  theme = "ocean",
}) => {
  const palette = getPalette(theme);
  
  const chartConfig: ChartConfig = {
    value: {
      label: "Value",
      color: palette.colors[0],
    },
  };

  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value" fill={palette.colors[0]} />
          <ChartTooltip content={<ChartTooltipContent />} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};