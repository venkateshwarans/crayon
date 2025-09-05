import { FC } from "react";
import { Chart as GoogleGeoChart } from "react-google-charts";
import { getPalette, PaletteName } from '../utils/PalletUtils';

export type GeoChartProps = {
  data: any;
  width?: number | string;
  height?: number | string;
  region?: string;
  colorAxis?: { colors: string[] };
  backgroundColor?: string;
  datalessRegionColor?: string;
  defaultColor?: string;
  legend?: string;
  theme?: PaletteName;
}

export const GeoChart: FC<GeoChartProps> = ({
  data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["India", 700],
  ],
  width = "100%",
  height = "500px",
  region = "world",
  colorAxis = { colors: ["#aec6cf", "#034f84"] },
  backgroundColor = "#f8f8f8",
  datalessRegionColor = "#f0f0f0",
  defaultColor = "#f5f5f5",
  legend = "none",
  theme = 'ocean',
}: GeoChartProps) => {
  const palette = getPalette(theme);
  const colors = palette.colors;

  const options = {
    region,
    colorAxis: { colors },
    backgroundColor,
    datalessRegionColor: colors[1],
    defaultColor: colors[2],
    legend,
  };

  return (
    <GoogleGeoChart
      chartType="GeoChart"
      data={data}
      width={width}
      height={height}
      options={options}
    />
  );
};