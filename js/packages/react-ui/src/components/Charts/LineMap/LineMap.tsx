import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type LineMapData = Array<{
  name: string;
  value: number;
  [key: string]: any;
}>;

export interface LineMapProps {
  data: LineMapData;
  theme?: PaletteName;
  dataKey?: string;
  nameKey?: string;
}

export const LineMap: React.FC<LineMapProps> = ({
  data,
  theme = "ocean",
  dataKey = "value",
  nameKey = "name",
}) => {
  const palette = getPalette(theme);
  
  const chartConfig: ChartConfig = {
    [dataKey]: {
      label: "Value",
      color: palette.colors[0],
    },
  };

  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey={nameKey} />
          <YAxis />
          <Line type="monotone" dataKey={dataKey} stroke={palette.colors[0]} />
          <ChartTooltip content={<ChartTooltipContent />} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};