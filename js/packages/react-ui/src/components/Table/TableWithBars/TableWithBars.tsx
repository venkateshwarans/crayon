import React from "react";
import { ChartConfig, ChartContainer } from "../../Charts/Charts";
import { getPalette, PaletteName } from "../../Charts/utils/PalletUtils";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../Table";

export type TableWithBarsData = Array<{
  name: string;
  value: number;
  [key: string]: any;
}>;

export interface TableWithBarsProps {
  data: TableWithBarsData;
  theme?: PaletteName;
  maxValue?: number;
}

export const TableWithBars: React.FC<TableWithBarsProps> = ({
  data,
  theme = "ocean",
  maxValue,
}) => {
  const palette = getPalette(theme);
  const max = maxValue || Math.max(...data.map(d => d.value));
  
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
              <TableHead>Bar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.value}</TableCell>
                <TableCell>
                  <div style={{ width: 120, height: 8, backgroundColor: "#f0f0f0", borderRadius: 4 }}>
                    <div
                      style={{
                        width: `${(item.value / max) * 100}%`,
                        height: "100%",
                        backgroundColor: palette.colors[0],
                        borderRadius: 4,
                      }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ChartContainer>
  );
};