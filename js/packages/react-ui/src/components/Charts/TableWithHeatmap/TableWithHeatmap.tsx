import React from "react";
import { ChartConfig, ChartContainer } from "../Charts";
import { getPalette, PaletteName } from "../utils/PalletUtils";

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
  const palette = getPalette(theme);
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
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.name}</td>
                <td style={{ 
                  border: "1px solid #ddd", 
                  padding: "8px",
                  backgroundColor: getHeatmapColor(item.value),
                  color: item.value / max > 0.5 ? "white" : "black"
                }}>
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartContainer>
  );
};