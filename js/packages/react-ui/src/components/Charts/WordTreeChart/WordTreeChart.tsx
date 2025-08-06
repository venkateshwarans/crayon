import React from 'react';
import { Chart } from 'react-google-charts';

export type WordTreeProps = {
  data: any;
  width?: number | string;
  height?: number | string;
  format?: 'implicit' | 'explicit';
  type?: 'suffix' | 'prefix';
  word?: string
};

export const WordTree: React.FC<WordTreeProps> = ({
  data,
  width,
  height,
  format,
  type,
}) => {
  const options = {
    wordtree: {
      format,
      type,
    },
  };

  return (
    <Chart
      chartType="WordTree"
      width={width}
      height={height}
      data={data}
      options={options}
    />
  );
};