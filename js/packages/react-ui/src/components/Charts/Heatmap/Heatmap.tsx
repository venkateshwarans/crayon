import React from "react";
import { ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";
import { GeoChart } from "../GeoChart";

export type HeatmapData = any; // Expecting a google-data-table shape like: [["Country","Value"],["US", 100], ...]

export interface HeatmapProps {
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

export const Heatmap: React.FC<HeatmapProps> = ({
  data,
  theme = 'iq',
  region = "world",
  width = "100%",
  height = 400,
  legend = "none",
  backgroundColor,
  datalessRegionColor,
  defaultColor,
  colorAxis,
}) => {
  const palette = getPalette(theme);
  // Build a gradient from the palette if none provided (use multiple stops for smoother scale)
  const gradient = colorAxis?.colors ?? palette.colors.slice(1);

  const chartConfig: ChartConfig = {
    value: {
      label: "Value",
      color: gradient[Math.min(gradient.length - 1, 2)] ?? palette.colors[0],
    },
  };

  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width={width} height={height as number}>
        <GeoChart
          data={data}
          theme={theme}
          region={region}
          colorAxis={{ colors: gradient }}
          datalessRegionColor={datalessRegionColor ?? palette.colors[0]}
          defaultColor={defaultColor ?? palette.colors[0]}
          backgroundColor={backgroundColor}
          legend={legend}
        />
      </ResponsiveContainer>
    </ChartContainer>
  );
};