import React from 'react';
import { Chart } from 'react-google-charts';

export type HistogramProps = {
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
  histogram?: {
    bucketSize: number;
    maxNumBuckets: number;
    minValue: number;
    maxValue: number;
  };
};

export const Histogram: React.FC<HistogramProps> = ({
  data,
  width,
  height,
  title,
  legend,
  colors,
  backgroundColor,
  hAxis,
  vAxis,
  histogram,
}) => {
  return (
    <Chart
      chartType="Histogram"
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
        histogram,
      }}
    />
  );
};