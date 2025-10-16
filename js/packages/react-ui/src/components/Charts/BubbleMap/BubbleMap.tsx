import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type BubbleMapData = Array<{
  name: string;
  x: number;
  y: number;
  value: number;
  [key: string]: any;
}>;

export interface BubbleMapProps {
  data: BubbleMapData;
  theme?: PaletteName;
  maxBubbleSize?: number;
  minBubbleSize?: number;
}

export const BubbleMap: React.FC<BubbleMapProps> = ({
  data,
  theme = "ocean",
  maxBubbleSize = 2000,
  minBubbleSize = 400,
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
        <ScatterChart data={data}>
          <XAxis type="number" dataKey="x" />
          <YAxis type="number" dataKey="y" />
          <Scatter
            dataKey="value"
            fill={palette.colors[0]}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
        </ScatterChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};