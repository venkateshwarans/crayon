import React from 'react';
import { Chart } from 'react-google-charts';
import { getPalette, PaletteName } from '../utils/PalletUtils';

export type HistogramProps = {
  data: any;
  width?: number | string;
  height?: number | string;
  title?: string;
  legend?: {
    position: string;
    alignment: string;
  };
  theme?: PaletteName;
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
  theme = "ocean",
  backgroundColor,
  hAxis,
  vAxis,
  histogram,
}) => {
  const palette = getPalette(theme);

  const options = {
    title,
    legend,
    colors: palette.colors,
    backgroundColor: backgroundColor,
    hAxis,
    vAxis,
    histogram,
  };

  return (
    <Chart
      chartType="Histogram"
      width={width}
      height={height}
      data={data}
      options={options}
    />
  );
};