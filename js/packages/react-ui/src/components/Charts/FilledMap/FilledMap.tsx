import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type FilledMapData = Array<{
  region: string;
  value: number;
  [key: string]: any;
}>;

export interface FilledMapProps {
  data: FilledMapData;
  theme?: PaletteName;
  valueKey?: string;
  regionKey?: string;
}

export const FilledMap: React.FC<FilledMapProps> = ({
  data,
  theme = "ocean",
  valueKey = "value",
  regionKey = "region",
}) => {
  const palette = getPalette(theme);
  
  const chartConfig: ChartConfig = {
    [valueKey]: {
      label: "Value",
      color: palette.colors[0],
    },
  };

  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey={regionKey} />
          <YAxis />
          <Bar dataKey={valueKey} fill={palette.colors[0]} />
          <ChartTooltip content={<ChartTooltipContent />} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};