import React from "react";
import { ChartConfig, ChartContainer } from "../Charts";

export type PivotTableData = Array<Record<string, any>>;

export interface PivotTableProps {
  data: PivotTableData;
  rows?: string[];
  columns?: string[];
  values?: string[];
}

export const PivotTable: React.FC<PivotTableProps> = ({
  data,
  rows = [],
  columns = [],
  values = [],
}) => {
  const chartConfig: ChartConfig = {};

  return (
    <ChartContainer config={chartConfig}>
      <div style={{ overflow: "auto", maxHeight: "400px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {rows.map(row => (
                <th key={row} style={{ border: "1px solid #ddd", padding: "8px" }}>{row}</th>
              ))}
              {columns.map(col => (
                <th key={col} style={{ border: "1px solid #ddd", padding: "8px" }}>{col}</th>
              ))}
              {values.map(val => (
                <th key={val} style={{ border: "1px solid #ddd", padding: "8px" }}>{val}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {rows.map(row => (
                  <td key={row} style={{ border: "1px solid #ddd", padding: "8px" }}>{item[row]}</td>
                ))}
                {columns.map(col => (
                  <td key={col} style={{ border: "1px solid #ddd", padding: "8px" }}>{item[col]}</td>
                ))}
                {values.map(val => (
                  <td key={val} style={{ border: "1px solid #ddd", padding: "8px" }}>{item[val]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartContainer>
  );
};