import React from "react";
import { PieChart as RechartsPieChart, Pie, Cell, Sector, Tooltip, ResponsiveContainer } from "recharts";
import { useLayoutContext } from "../../../context/LayoutContext";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../Charts";
import { getPalette } from "../utils/PalletUtils";

export interface GaugeChartProps {
  /**
   * The value to display on the gauge (between min and max)
   */
  value: number;
  /**
   * The minimum value of the gauge
   */
  min?: number;
  /**
   * The maximum value of the gauge
   */
  max?: number;
  /**
   * The unit to display after the value
   */
  unit?: string;
  /**
   * The color theme for the gauge
   */
  theme?: "ocean" | "orchid" | "emerald" | "sunset" | "spectrum" | "vivid";
  /**
   * Whether to animate the gauge
   */
  isAnimationActive?: boolean;
  /**
   * The angle to start the gauge from (in degrees, 0 is at 12 o'clock)
   */
  startAngle?: number;
  /**
   * The angle to end the gauge at (in degrees)
   */
  endAngle?: number;
  /**
   * The width of the gauge arc
   */
  arcWidth?: number;
  /**
   * The color ranges for the gauge (overrides theme)
   * Each range should have a min, max, and color
   */
  ranges?: Array<{
    min: number;
    max: number;
    color: string;
  }>;
  /**
   * The label to display in the center of the gauge
   */
  label?: React.ReactNode;
  /**
   * The size of the value text
   */
  valueSize?: number;
  /**
   * The size of the unit text
   */
  unitSize?: number;
  /**
   * Whether to show the value in the center of the gauge
   */
  showValue?: boolean;
  /**
   * Whether to show a tooltip when hovering over the gauge
   */
  showTooltip?: boolean;
  /**
   * Custom tooltip content
   */
  tooltipContent?: React.ReactNode;
  /**
   * Whether to show min and max values on the gauge
   */
  showMinMax?: boolean;
  /**
   * The size of the min/max labels
   */
  minMaxLabelSize?: number;
  /**
   * Custom formatter for min/max values
   */
  minMaxFormatter?: (value: number) => string;
}

/**
 * Gauge Chart component for displaying a single value within a range
 */
export const GaugeChart: React.FC<GaugeChartProps> = ({
  value,
  min = 0,
  max = 100,
  unit = "%",
  theme = "ocean",
  isAnimationActive = true,
  startAngle = 180,
  endAngle = 0,
  arcWidth = 20,
  ranges,
  label,
  valueSize = 32,
  unitSize = 16,
  showValue = true,
  showTooltip = true,
  tooltipContent,
  showMinMax = false,
  minMaxLabelSize = 12,
  minMaxFormatter = (value) => value.toString(),
}) => {
  const { layout } = useLayoutContext();
  const normalizedValue = Math.min(Math.max(value, min), max);
  const percentage = ((normalizedValue - min) / (max - min)) * 100;
  
  // Calculate the background and foreground data for the gauge
  const gaugeData = [
    { name: "value", value: percentage, displayName: "Value" },
    { name: "background", value: 100 - percentage, displayName: "" },
  ];

  // Get colors from theme or use provided ranges
  const palette = getPalette(theme);
  const themeColors = palette.colors;

  // Default ranges based on theme
  const defaultRanges = [
    { min: 0, max: 33, color: themeColors[0] },
    { min: 33, max: 66, color: themeColors[Math.floor(themeColors.length / 2)] },
    { min: 66, max: 100, color: themeColors[themeColors.length - 1] },
  ];

  const colorRanges = ranges || defaultRanges;

  // Find the color for the current value
  const getValueColor = () => {
    const percentageValue = ((normalizedValue - min) / (max - min)) * 100;
    const range = colorRanges.find(
      (range) => percentageValue >= range.min && percentageValue <= range.max
    );
    return range ? range.color : themeColors[0];
  };

  const valueColor = getValueColor();

  // Create config for the chart container
  const chartConfig: ChartConfig = {
    value: {
      color: valueColor,
    },
    background: {
      color: "#e0e0e0",
    },
  };

  // Custom active shape for the gauge that only shows for the value part
  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, name } = props;
    
    // Only render active shape for the value part, not the background
    if (name === "background") return null;
    
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  // Calculate responsive dimensions
  const getResponsiveDimensions = () => {
    switch (layout) {
      case "mobile":
        return {
          valueSize: valueSize * 0.8,
          unitSize: unitSize * 0.8,
          arcWidth: arcWidth * 0.8,
        };
      case "tray":
      case "copilot":
        return {
          valueSize: valueSize * 0.9,
          unitSize: unitSize * 0.9,
          arcWidth: arcWidth * 0.9,
        };
      default:
        return {
          valueSize,
          unitSize,
          arcWidth,
        };
    }
  };
  
  // Custom tooltip formatter
  const gaugeTooltipFormatter = (value: any, name: any, props: any) => {
    // Only show the value and unit, ignore the 'background' data point
    if (name === 'value') {
      return [normalizedValue, unit ? `${unit}` : ''];
    }
    // Return null for background data point to hide it
    return null;
  };

  const { valueSize: responsiveValueSize, unitSize: responsiveUnitSize, arcWidth: responsiveArcWidth } = getResponsiveDimensions();

  // Render the gauge chart
  return (
    <ChartContainer config={chartConfig}>
      <RechartsPieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        {/* Background Pie (no tooltip) */}
        <Pie
          data={[{ name: "background", value: 100 }]}
          cx="50%"
          cy="50%"
          innerRadius={80 - responsiveArcWidth}
          outerRadius={80}
          startAngle={startAngle}
          endAngle={endAngle}
          paddingAngle={0}
          dataKey="value"
          isAnimationActive={false}
          fill={chartConfig['background']?.color || '#e0e0e0'}
        />
        
        {/* Value Pie (with tooltip) */}
        <Pie
          data={[{ name: "value", value: percentage }]}
          cx="50%"
          cy="50%"
          innerRadius={80 - responsiveArcWidth}
          outerRadius={80}
          startAngle={startAngle}
          endAngle={startAngle + (endAngle - startAngle) * percentage / 100}
          paddingAngle={0}
          dataKey="value"
          isAnimationActive={isAnimationActive}
          fill={valueColor}
        />
        
        {/* Tooltip */}
        {showTooltip && (
          <ChartTooltip 
            content={tooltipContent ? 
              <div className="crayon-chart-gauge-tooltip">{tooltipContent}</div> : 
              <ChartTooltipContent formatter={() => [normalizedValue, unit ? ` ${unit}` : '']} />}
            cursor={false}
          />
        )}
        
        {/* Center text */}
        {showValue && (
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="crayon-chart-gauge-value"
            style={{ fontSize: responsiveValueSize, fontWeight: 600, fill: valueColor }}
          >
            {normalizedValue}
          </text>
        )}
        
        {/* Unit text */}
        {showValue && unit && (
          <text
            x="50%"
            y={`${50 + responsiveValueSize / 2}%`}
            textAnchor="middle"
            dominantBaseline="hanging"
            className="crayon-chart-gauge-unit"
            style={{ 
              fontSize: responsiveUnitSize, 
              fill: valueColor,
              wordBreak: "break-word",
              width: "80%",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {unit.length > 20 ? `${unit.substring(0, 20)}...` : unit}
          </text>
        )}
        
        {/* Custom label */}
        {label && !showValue && (
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="crayon-chart-gauge-label"
          >
            {label}
          </text>
        )}
        
        {/* Min and Max labels */}
        {showMinMax && (
          <>
            {/* Min value label */}
            <text
              x={`${50 - Math.cos((startAngle * Math.PI) / 180) * 85}%`}
              y={`${50 + Math.sin((startAngle * Math.PI) / 180) * 85}%`}
              textAnchor={startAngle > 90 && startAngle < 270 ? "end" : "start"}
              dominantBaseline="middle"
              className="crayon-chart-gauge-min-label"
              style={{ 
                fontSize: minMaxLabelSize, 
                fill: chartConfig['text'] ? chartConfig['text'].color : '#666',
                fontWeight: 500
              }}
            >
              {minMaxFormatter(min)}
            </text>
            
            {/* Max value label */}
            <text
              x={`${50 - Math.cos((endAngle * Math.PI) / 180) * 85}%`}
              y={`${50 + Math.sin((endAngle * Math.PI) / 180) * 85}%`}
              textAnchor={endAngle > 90 && endAngle < 270 ? "end" : "start"}
              dominantBaseline="middle"
              className="crayon-chart-gauge-max-label"
              style={{ 
                fontSize: minMaxLabelSize, 
                fill: chartConfig['text'] ? chartConfig['text'].color : '#666',
                fontWeight: 500
              }}
            >
              {minMaxFormatter(max)}
            </text>
          </>
        )}
      </RechartsPieChart>
    </ChartContainer>
  );
};
