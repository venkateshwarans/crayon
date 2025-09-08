import React from 'react';
import { Chart } from 'react-google-charts';
import { getPalette, PaletteName } from '../utils/PalletUtils';

export type WordTreeProps = {
  data: any;
  width?: number | string;
  height?: number | string;
  format?: 'implicit' | 'explicit';
  type?: 'suffix' | 'prefix';
  word?: string
  theme?: PaletteName;
};

export const WordTree: React.FC<WordTreeProps> = ({
  data,
  width,
  height,
  format,
  type,
  theme = "ocean",
}) => {
  const palette = getPalette(theme);
  const colors = palette.colors;

  const options = {
    wordtree: {
      format,
      type,
    },
    colors: colors,
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