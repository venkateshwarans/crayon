import { FC } from "react";
import { Chart as GoogleGeoChart } from "react-google-charts";
import { getPalette, PaletteName } from '../utils/PalletUtils';

type GeoChartColorAxis = {
  colors: string[];
  minValue?: number;
  maxValue?: number;
};

type GeoChartOptions = {
  region: string;
  colorAxis: GeoChartColorAxis;
  backgroundColor: string;
  datalessRegionColor: string;
  defaultColor: string;
  legend: string;
  displayMode?: string;
  markerOpacity?: number;
  sizeAxis?: { minValue?: number; maxValue?: number; minSize?: number; maxSize?: number };
};

export type GeoChartProps = {
  data?: (string | number)[][];
  width?: number | string;
  height?: number | string;
  region?: string;
  colorAxis?: GeoChartColorAxis;
  backgroundColor?: string;
  datalessRegionColor?: string;
  defaultColor?: string;
  legend?: "none" | "top" | "bottom";
  theme?: PaletteName;
  variant?: "regions" | "bubble" | "heat";
  markerOpacity?: number;
  sizeAxis?: { minValue?: number; maxValue?: number; minSize?: number; maxSize?: number };
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
  colorAxis,
  backgroundColor = "#f8f8f8",
  datalessRegionColor,
  defaultColor,
  legend = "none",
  theme = 'ocean',
  variant = "regions",
  markerOpacity = 0.5,
  sizeAxis,
}: GeoChartProps) => {
  const palette = getPalette(theme);
  const colors = palette.colors;

  const first: string = colors[0] ?? "#cccccc";
  const last: string = colors[colors.length - 1] ?? "#cccccc";
  const autoHeatColors: string[] = palette.lightFirst ? [first, last] : [last, first];
  const autoAxisColors = variant === "heat" ? autoHeatColors : colors;

  const resolvedColorAxis: GeoChartColorAxis = {
    colors: colorAxis?.colors ?? autoAxisColors,
    ...(colorAxis?.minValue !== undefined && { minValue: colorAxis.minValue }),
    ...(colorAxis?.maxValue !== undefined && { maxValue: colorAxis.maxValue }),
  };

  const options: GeoChartOptions = {
    region,
    colorAxis: resolvedColorAxis,
    backgroundColor,
    datalessRegionColor: datalessRegionColor ?? "#e0e0e0",
    defaultColor: defaultColor ?? colors[2] ?? colors[0] ?? "#cccccc",
    legend,
  };

  if (variant === "bubble") {
    options.displayMode = "markers";
    options.markerOpacity = markerOpacity;
    options.sizeAxis = { minSize: 5, maxSize: 30, ...sizeAxis };
  }

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