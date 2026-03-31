import { FC } from "react";
import { Chart as GoogleGeoChart } from "react-google-charts";
import { getPalette, PaletteName } from '../utils/PalletUtils';

export type GeoChartProps = {
  data: any;
  width?: number | string;
  height?: number | string;
  region?: string;
  colorAxis?: { colors?: string[]; minValue?: number; maxValue?: number };
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
  const paletteColors = palette.colors;
  const colors = colorAxis?.colors ?? paletteColors;
  const resolvedDataless = datalessRegionColor ?? "#e0e0e0";
  const resolvedDefault = defaultColor ?? paletteColors[2] ?? "#f5f5f5";

  const autoHeatColors = palette.lightFirst
    ? [colors[0], colors[colors.length - 1]]
    : [colors[colors.length - 1], colors[0]];
  const autoAxisColors = variant === "heat" ? autoHeatColors : colors;

  const resolvedColorAxis: Record<string, any> = {
    colors: colorAxis?.colors ?? autoAxisColors,
    ...(colorAxis?.minValue !== undefined && { minValue: colorAxis.minValue }),
    ...(colorAxis?.maxValue !== undefined && { maxValue: colorAxis.maxValue }),
  };

  const options: Record<string, any> = {
    region,
    colorAxis: resolvedColorAxis,
    backgroundColor,
    datalessRegionColor: resolvedDataless,
    defaultColor: resolvedDefault,
    legend,
  };

  if (variant === "bubble") {
    options["displayMode"] = "markers";
    options["markerOpacity"] = markerOpacity;
    options["sizeAxis"] = { minSize: 5, maxSize: 30, ...sizeAxis };
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