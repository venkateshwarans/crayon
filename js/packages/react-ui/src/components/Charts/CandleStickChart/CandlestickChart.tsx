import React from "react";
import { Chart } from "react-google-charts";
import { getPalette } from '../utils/PalletUtils';

export type CandleStickChartProps = {
  data: any;
  width?: number | string;
  height?: number | string;
  title?: string;
  legend?: string;
  bar?: { groupWidth: string };
  candlestick?: {
    fallingColor: {
      strokeWidth: number;
      fill: string;
    };
    risingColor: {
      strokeWidth: number;
      fill: string;
    };
  };
  theme?: "ocean" | "orchid" | "emerald" | "sunset" | "spectrum" | "vivid";
};

export const CandleStickChart: React.FC<CandleStickChartProps> = ({
  data,
  width,
  height,
  title,
  legend,
  bar,
  candlestick,
  theme = 'ocean',
}) => {
  const palette = getPalette(theme);
  const colors = palette.colors;

  const options = {
    title,
    legend,
    bar,
    candlestick: {
      fallingColor: {
        strokeWidth: 0,
        fill: colors[0],
      },
      risingColor: {
        strokeWidth: 0,
        fill: colors[1],
      },
    },
  };

  return (
    <Chart
      chartType="CandlestickChart"
      width={width}
      height={height}
      data={[
        ["Day", "", "", "", ""],
        ["Mon", 20, 28, 38, 45],
        ["Tue", 31, 38, 55, 66],
        ["Wed", 50, 55, 77, 80],
        ["Thu", 77, 77, 66, 50],
        ["Fri", 68, 66, 22, 15],
      ]}
      options={options}
    />
  );
};