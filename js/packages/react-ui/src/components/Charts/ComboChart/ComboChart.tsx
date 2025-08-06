import React from "react";
import { Chart } from "react-google-charts";

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
  backgroundColor,
  bar,
  annotations,
}) => {
  return (
    <Chart
      chartType="ComboChart"
      width={width}
      height={height}
      data={data}
      options={{
        seriesType,
        series,
        vAxis,
        hAxis,
        backgroundColor,
        bar,
        annotations,
        legend: {
          position: "bottom",
          alignment: "center",
        },
      }}
    />
  );
};
