import React from "react";
import { Chart } from "react-google-charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type BubbleMapChartProps = {
  data: any;
  width?: number | string;
  height?: number | string;
  title?: string;
  legend?: string;
  colorAxis?: {
    colors: string[];
  };
  bubble?: {
    textStyle: {
      fontSize: number;
    };
  };
  theme?: PaletteName;
};

export const BubbleMapChart: React.FC<BubbleMapChartProps> = ({
  data,
  width,
  height,
  title,
  legend,
  colorAxis,
  bubble,
  theme = "ocean",
}) => {
  const palette = getPalette(theme);
  const colors = palette.colors;

  const options = {
    title,
    legend,
    colorAxis: {
      colors: colorAxis ? colorAxis.colors : [colors[0], colors[1]],
    },
    bubble: {
      textStyle: {
        fontSize: bubble ? bubble.textStyle.fontSize : 11,
      },
    },
  };

  return (
    <Chart
      chartType="BubbleChart"
      width={width}
      height={height}
      data={[
        ["ID", "X", "Y", "Radius"],
        ["A", 20, 30, 10],
        ["B", 40, 50, 20],
        ["C", 60, 70, 30],
        ["D", 80, 90, 40],
      ]}
      options={options}
    />
  );
};
