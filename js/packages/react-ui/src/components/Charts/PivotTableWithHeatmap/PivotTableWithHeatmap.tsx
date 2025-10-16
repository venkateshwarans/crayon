import React from "react";
import { ChartConfig, ChartContainer } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type PivotTableWithHeatmapData = Array<Record<string, any>>;

export interface PivotTableWithHeatmapProps {
  data: PivotTableWithHeatmapData;
  theme?: PaletteName;
  rows?: string[];
  columns?: string[];
  values?: string[];
}

export const PivotTableWithHeatmap: React.FC<PivotTableWithHeatmapProps> = ({
  data,
  theme = "ocean",
  rows = [],
  columns = [],
  values = [],
}) => {
  const palette = getPalette(theme);
  const maxValue = Math.max(...data.flatMap(item => values.map(val => Number(item[val]) || 0)));
  
  const getHeatmapColor = (value: number) => {
    const intensity = value / maxValue;
    return `${palette.colors[0]}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}`;
  };
  
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
                  <td 
                    key={val} 
                    style={{ 
                      border: "1px solid #ddd", 
                      padding: "8px",
                      backgroundColor: getHeatmapColor(Number(item[val]) || 0),
                      color: Number(item[val]) / maxValue > 0.5 ? "white" : "black"
                    }}
                  >
                    {item[val]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartContainer>
  );
};