import React from "react";
import { Chart } from "react-google-charts";
import { getPalette } from "../utils/PalletUtils";

export type DonutChartProps = {
  data: any;
  width?: number | string;
  height?: number | string;
  title?: string;
  legend?: string;
  pieHole?: number;
  colors?: string[];
  theme?: "ocean" | "orchid" | "emerald" | "sunset" | "spectrum" | "vivid";
};

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  width,
  height,
  title,
  legend,
  pieHole,
  colors,
  theme = "ocean",
}) => {
  const palette = getPalette(theme);
  const chartColors = colors || palette.colors;

  const options = {
    title,
    legend,
    pieHole,
    colors: chartColors,
  };

  return <Chart chartType="PieChart" width={width} height={height} data={data} options={options} />;
};
