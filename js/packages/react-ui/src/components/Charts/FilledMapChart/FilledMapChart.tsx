import React from "react";
import { Chart } from "react-google-charts";
import { getPalette } from "../utils/PalletUtils";

export type FilledMapChartProps = {
  data: any;
  width?: number | string;
  height?: number | string;
  title?: string;
  legend?: string;
  region?: string;
  colors?: string[];
  theme?: "ocean" | "orchid" | "emerald" | "sunset" | "spectrum" | "vivid";
};

export const FilledMapChart: React.FC<FilledMapChartProps> = ({
  data,
  width,
  height,
  title,
  legend,
  region,
  colors,
  theme = "ocean",
}) => {
  const palette = getPalette(theme);
  const chartColors = colors || palette.colors;

  const options = {
    title,
    legend,
    region,
    colors: chartColors,
  };

  return <Chart chartType="GeoChart" width={width} height={height} data={data} options={options} />;
};
