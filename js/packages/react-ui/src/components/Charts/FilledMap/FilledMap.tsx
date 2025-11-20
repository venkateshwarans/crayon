import React from "react";
import { ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";
import { GeoChart } from "../GeoChart";

export type FilledMapData = Array<{
  region: string;
  value: number;
  [key: string]: any;
}>;

export interface FilledMapProps {
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

export const FilledMap: React.FC<FilledMapProps> = ({
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
  
  const chartConfig: ChartConfig = {
    value: {
      label: "Value",
      color: palette.colors[2],
    },
  };

  return (
    <ChartContainer config={chartConfig} className="sa-filledmap">
      <ResponsiveContainer width={width} height={height as number}>
        <GeoChart data={data} 
          theme={theme}
          region={region}
          colorAxis={{ colors: colorAxis?.colors ?? data.map((item: any) => palette.colors[4]) }}
          backgroundColor={backgroundColor ?? '#fff'}
          datalessRegionColor={datalessRegionColor ?? palette.colors[1]}
          defaultColor={defaultColor ?? palette.colors[1]}
          legend={legend}
          />
      </ResponsiveContainer>
    </ChartContainer>
  );
};