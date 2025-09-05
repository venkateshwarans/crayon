import React from "react";
import { Chart } from "react-google-charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type ComboChartProps = {
  data: any;
  width?: number | string;
  height?: number | string;
  seriesType?: string;
  series?: { [key: number]: { type: string; color: string } };
  vAxis?: { title: string };
  hAxis?: { title: string };
  legend?: {
    position: string;
    alignment: string;
  };
  theme?: PaletteName;
  backgroundColor?: string;
  bar?: { groupWidth: string };
  annotations?: {
    alwaysOutside: boolean;
    textStyle: {
      fontSize: number;
      color: string;
      auraColor: string;
    };
  };
};

export const ComboChart: React.FC<ComboChartProps> = ({
  data,
  width,
  height,
  seriesType,
  series,
  vAxis,
  hAxis,
  legend,
  theme = "ocean",
  backgroundColor,
  bar,
  annotations,
}) => {
  const palette = getPalette(theme);
  const colors = palette.colors;

  const options = {
    seriesType,
    series: series || {
      0: { type: "bars", color: colors[0] },
      1: { type: "line", color: colors[1] },
    },
    vAxis,
    hAxis,
    backgroundColor: backgroundColor || colors[2],
    bar,
    annotations,
    legend: {
      position: "bottom",
      alignment: "center",
    },
  };

  return (
    <Chart
      chartType="ComboChart"
      width={width}
      height={height}
      data={data}
      options={options}
    />
  );
};