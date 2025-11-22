import React from "react";
import { ChartConfig, ChartContainer } from "../../Charts/Charts";
import { getPalette, PaletteName } from "../../Charts/utils/PalletUtils";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../Table";

export type TableWithHeatmapData = Array<{
  name: string;
  value: number;
  [key: string]: any;
}>;

export interface TableWithHeatmapProps {
  data: TableWithHeatmapData;
  theme?: PaletteName;
  maxValue?: number;
}

export const TableWithHeatmap: React.FC<TableWithHeatmapProps> = ({
  data,
  theme = "ocean",
  maxValue,
}) => {
  const base = getPalette(theme);
  const palette = { ...base, colors: theme === 'iq' ? [...base.colors].reverse() : base.colors };
  const max = maxValue || Math.max(...data.map(d => d.value));
  
  const getHeatmapColor = (value: number) => {
    const intensity = value / max;
    return `${palette.colors[0]}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}`;
  };
  
  const chartConfig: ChartConfig = {
    value: {
      label: "Value",
      color: palette.colors[0],
    },
  };

  return (
    <ChartContainer config={chartConfig}>
      <div style={{ overflow: "auto", maxHeight: "400px" }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell
                  style={{
                    backgroundColor: getHeatmapColor(item.value),
                    color: item.value / max > 0.5 ? "white" : "black",
                  }}
                >
                  {item.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ChartContainer>
  );
};