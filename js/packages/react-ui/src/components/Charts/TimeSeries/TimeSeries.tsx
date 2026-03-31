import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type TimeSeriesData = Array<{
  date: string;
  value: number;
  [key: string]: any;
}>;

export interface TimeSeriesProps {
  data: TimeSeriesData;
  theme?: PaletteName;
  dateKey?: string;
  valueKey?: string;
}

export const TimeSeries: React.FC<TimeSeriesProps> = ({
  data,
  theme = "ocean",
  dateKey = "date",
  valueKey = "value",
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
        <LineChart data={data}>
          <XAxis dataKey={dateKey} />
          <YAxis />
          <Line type="monotone" dataKey={valueKey} stroke={palette.colors[0]} />
          <ChartTooltip content={<ChartTooltipContent />} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};