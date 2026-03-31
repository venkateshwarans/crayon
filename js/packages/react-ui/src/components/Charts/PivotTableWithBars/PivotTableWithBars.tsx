import React from "react";
import { ChartConfig, ChartContainer } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

export type PivotTableWithBarsData = Array<Record<string, any>>;

export interface PivotTableWithBarsProps {
  data: PivotTableWithBarsData;
  theme?: PaletteName;
  rows?: string[];
  columns?: string[];
  values?: string[];
}

export const PivotTableWithBars: React.FC<PivotTableWithBarsProps> = ({
  data,
  theme = "ocean",
  rows = [],
  columns = [],
  values = [],
}) => {
  const palette = getPalette(theme);
  const maxValue = Math.max(...data.flatMap(item => values.map(val => Number(item[val]) || 0)));
  
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
                {values.map((val, valIndex) => (
                  <td key={val} style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>{item[val]}</span>
                      <div style={{ 
                        width: "50px", 
                        height: "10px", 
                        backgroundColor: "#f0f0f0",
                        position: "relative"
                      }}>
                        <div style={{
                          width: `${(Number(item[val]) / maxValue) * 100}%`,
                          height: "100%",
                          backgroundColor: palette.colors[valIndex % palette.colors.length],
                        }} />
                      </div>
                    </div>
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