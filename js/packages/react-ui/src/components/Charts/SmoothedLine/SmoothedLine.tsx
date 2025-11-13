import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type SmoothedLineData = Array<{
  name: string;
  value: number;
  [key: string]: any;
}>;

export interface SmoothedLineProps {
  data: SmoothedLineData;
  theme?: PaletteName;
  smooth?: boolean;
}

export const SmoothedLine: React.FC<SmoothedLineProps> = ({
  data,
  theme = "ocean",
  smooth = true,
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
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line 
            type={smooth ? "monotone" : "linear"} 
            dataKey="value" 
            stroke={palette.colors[0]} 
            strokeWidth={2}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};