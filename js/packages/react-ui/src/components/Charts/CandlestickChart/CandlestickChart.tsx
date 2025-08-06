import React from 'react';
import { Chart } from 'react-google-charts';

export type CandlestickChartProps = {
  data: any;
  width?: number | string;
  height?: number | string;
  title?: string;
  legend?: {
    position: string;
    alignment: string;
  };
  colors?: string[];
  backgroundColor?: string;
  hAxis?: { title: string };
  vAxis?: { title: string };
  candlestick?: {
    fallingColor: string;
    risingColor: string;
  };
};

export const CandlestickChart: React.FC<CandlestickChartProps> = ({
  data,
  width,
  height,
  title,
  legend,
  colors,
  backgroundColor,
  hAxis,
  vAxis,
  candlestick,
}) => {
  return (
    <Chart
      chartType="CandlestickChart"
      width={width}
      height={height}
      data={data}
      options={{
        title,
        legend,
        colors,
        backgroundColor,
        hAxis,
        vAxis,
        candlestick,
      }}
    />
  );
};