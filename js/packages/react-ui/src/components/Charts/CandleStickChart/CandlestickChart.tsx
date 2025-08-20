import React from "react";
import { Chart } from "react-google-charts";

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
};

export const CandleStickChart: React.FC<CandleStickChartProps> = ({
  data,
  width,
  height,
  title,
  legend,
  bar,
  candlestick,
}) => {
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
      options={{
        title,
        legend,
        bar,
        candlestick,
      }}
    />
  );
};

export const options = {
  legend: "none",
  bar: { groupWidth: "100%" },
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" },
    risingColor: { strokeWidth: 0, fill: "#0f9d58" },
  },
};
