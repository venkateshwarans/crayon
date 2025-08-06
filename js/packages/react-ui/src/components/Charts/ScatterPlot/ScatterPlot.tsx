import React from "react";
import { Chart } from "react-google-charts";

export interface ScatterPlotProps {
  data: any[];
  xKey: string;
  yKey: string;
  theme?: string;
  variant?: string;
  grid?: boolean;
  label?: boolean;
  legend?: boolean;
  pointSize?: number;
  isAnimationActive?: boolean;
  showYAxis?: boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
}

export const ScatterPlot: React.FC<ScatterPlotProps> = ({
  data,
  xKey,
  yKey,
  theme = "ocean",
  variant = "circle",
  grid = true,
  label = true,
  legend = true,
  pointSize = 5,
  isAnimationActive = true,
  showYAxis = true,
  xAxisLabel,
  yAxisLabel,
}) => {
  const chartData = [
    [xKey, yKey],
    ...data.map((row) => [row[xKey], row[yKey]]),
  ];

  const options = {
    title: "",
    curveType: "function",
    legend: { position: "bottom" },
    hAxis: { title: xAxisLabel },
    vAxis: { title: yAxisLabel },
  };

  return (
    <Chart
      chartType="ScatterChart"
      width="100%"
      height="100%"
      data={chartData}
      options={options}
    />
  );
};