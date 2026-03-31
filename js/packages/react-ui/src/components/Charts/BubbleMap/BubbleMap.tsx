import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";
import { GeoChart } from "../GeoChart";

export type BubbleMapData = Array<{
  name: string;
  x: number;
  y: number;
  value: number;
  [key: string]: any;
}>;

export interface BubbleMapProps {
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

export const BubbleMap: React.FC<BubbleMapProps> = ({
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