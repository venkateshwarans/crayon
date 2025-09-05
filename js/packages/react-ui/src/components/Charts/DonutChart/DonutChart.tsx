import React from "react";
import { PieChart } from "../PieChart";
import { PaletteName } from "../utils/PalletUtils";

export type DonutChartProps = {
  data: any[];
  categoryKey?: string;
  dataKey?: string;
  width?: number | string;
  height?: number | string;
  title?: string;
  legend?: boolean;
  pieHole?: number;
  colors?: string[];
  theme?: PaletteName;
  isAnimationActive?: boolean;
  cornerRadius?: number;
  paddingAngle?: number;
  appearance?: "circular" | "semiCircular";
  format?: "percentage" | "number";
  legendVariant?: "default" | "stacked";
  onMouseEnter?: (data: any, index: number) => void;
  onMouseLeave?: () => void;
  onClick?: (data: any, index: number) => void;
  className?: string;
  maxChartSize?: number;
  minChartSize?: number;
};

export const DonutChart: React.FC<DonutChartProps> = ({
  data,
  categoryKey = "0",
  dataKey = "1",
  theme = "ocean",
  colors,
  legend = true,
  pieHole,
  isAnimationActive = true,
  cornerRadius = 0,
  paddingAngle = 0,
  appearance = "circular",
  format = "number",
  legendVariant = "stacked",
  onMouseEnter,
  onMouseLeave,
  onClick,
  className,
  maxChartSize,
  minChartSize,
}) => {
  // Transform Google Charts format data if needed
  const transformedData = React.useMemo(() => {
    if (Array.isArray(data) && data.length > 0) {
      // Check if data is in Google Charts format (array of arrays)
      if (Array.isArray(data[0])) {
        // Skip the header row and transform to object format
        return data.slice(1).map((row) => ({
          [categoryKey]: row[0],
          [dataKey]: row[1],
        }));
      }
    }
    return data;
  }, [data, categoryKey, dataKey]);

  return (
    <PieChart
      data={transformedData}
      categoryKey={categoryKey}
      dataKey={dataKey}
      theme={theme}
      customPalette={colors}
      variant="donut"
      format={format}
      legend={legend}
      legendVariant={legendVariant}
      isAnimationActive={isAnimationActive}
      appearance={appearance}
      cornerRadius={cornerRadius}
      paddingAngle={paddingAngle || (pieHole ? pieHole * 10 : 0)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={className}
      maxChartSize={maxChartSize}
      minChartSize={minChartSize}
    />
  );
};
