import React from "react";
import { ChartConfig, ChartContainer } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

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
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Value</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Bar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.value}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <div style={{ 
                    width: "100px", 
                    height: "20px", 
                    backgroundColor: "#f0f0f0",
                    position: "relative"
                  }}>
                    <div style={{
                      width: `${(item.value / max) * 100}%`,
                      height: "100%",
                      backgroundColor: palette.colors[0],
                    }} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartContainer>
  );
};