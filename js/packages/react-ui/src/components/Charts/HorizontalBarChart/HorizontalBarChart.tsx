import React from "react";
import { Bar, LabelList, BarChart as RechartsBarChart, XAxis, YAxis } from "recharts";
import { useLayoutContext } from "../../../context/LayoutContext";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  keyTransform,
} from "../Charts";
import { cartesianGrid } from "../cartesianGrid";
import { getDistributedColors, getPalette } from "../utils/PalletUtils";

export type HorizontalBarChartData = Array<Record<string, string | number>>;

export interface HorizontalBarChartProps<T extends HorizontalBarChartData> {
  /**
   * An array of data objects where each object represents a data point.
   * Each object should have a category field (e.g., month) and one or more numeric values for the bars.
   */
  data: T;
  /**
   * The key from your data object to be used as the y-axis categories (e.g., 'month', 'year', 'date')
   */
  categoryKey: keyof T[number];
  /**
   * The color palette theme for the chart. Each theme provides a different set of colors for the bars.
   * @default "ocean"
   */
  theme?: "ocean" | "orchid" | "emerald" | "sunset" | "spectrum" | "vivid" | "iq";
  /**
   * The style of the bar chart. 'grouped' shows bars side by side, while 'stacked' shows bars stacked.
   * @default "grouped"
   */
  variant?: "grouped" | "stacked";
  /**
   * Whether to display the background grid lines in the chart
   * @default true
   */
  grid?: boolean;
  /**
   * Whether to display data point labels at the end of each bar
   * @default true
   */
  label?: boolean;
  /**
   * Whether to display the chart legend showing the data series names and their corresponding colors/icons
   * @default true
   */
  legend?: boolean;
  /**
   * The radius of the rounded corners of the bars
   * @default 4
   */
  radius?: number;
  /**
   * An object that maps data keys to icon components. These icons will appear in the legend next to their corresponding data series.
   * @default {}
   */
  icons?: Partial<Record<keyof T[number], React.ComponentType>>;
  /**
   * Whether to animate the chart
   * @default true
   */
  isAnimationActive?: boolean;
  /**
   * Whether to display the x-axis
   * @default false
   */
  showXAxis?: boolean;
  /**
   * The label for the x-axis
   */
  xAxisLabel?: React.ReactNode;
  /**
   * The label for the y-axis
   */
  yAxisLabel?: React.ReactNode;
}

/**
 * HorizontalBarChart component displays data horizontally to show comparisons among categories.
 * It's particularly useful when category names are long or when comparing values across multiple categories.
 */
export const HorizontalBarChart = <T extends HorizontalBarChartData>({
  data,
  categoryKey,
  theme = "ocean",
  variant = "grouped",
  grid = true,
  label = true,
  legend = true,
  icons = {},
  radius = 4,
  isAnimationActive = true,
  showXAxis = false,
  xAxisLabel,
  yAxisLabel,
}: HorizontalBarChartProps<T>) => {
  // excluding the categoryKey
  const dataKeys = Object.keys(data[0] || {}).filter((key) => key !== categoryKey);

  const palette = getPalette(theme);
  const colors = getDistributedColors(palette, dataKeys.length);
  const { layout } = useLayoutContext();

  // Create Config
  const chartConfig: ChartConfig = dataKeys.reduce(
    (config, key, index) => ({
      ...config,
      [key]: {
        label: key,
        icon: icons[key],
        color: colors[index],
      },
    }),
    {},
  );

  const getTickFormatter = (data: T) => {
    const dataLength = data.length;
    const maxLengthMap = {
      mobile: {
        default: 10,
        10: 8,
        11: 7,
      },
      tray: {
        default: 12,
        8: 10,
        9: 9,
        10: 8,
        11: 7,
      },
      copilot: {
        default: 12,
        8: 10,
        9: 9,
        10: 8,
        11: 7,
      },
      fullscreen: {
        default: 15,
        11: 12,
      },
    };

    const layoutConfig =
      maxLengthMap[layout as keyof typeof maxLengthMap] || maxLengthMap.fullscreen;

    const maxLength =
      dataLength >= 11
        ? 7
        : layoutConfig[dataLength as keyof typeof layoutConfig] || layoutConfig.default;

    return (value: string) => {
      if (value.length > maxLength) {
        return `${value.slice(0, maxLength)}...`;
      }
      return value;
    };
  };

  return (
    <ChartContainer config={chartConfig}>
      <RechartsBarChart
        accessibilityLayer
        data={data}
        layout="vertical" // This is what makes the bar chart horizontal
        margin={{
          top: 20,
          right: label ? 70 : 40, // Increased right margin to accommodate labels
          left: 100, // Increased left margin to align Y-axis labels
          bottom: 10,
        }}
      >
        {grid && cartesianGrid()}
        <XAxis 
          type="number"
          axisLine={false}
          tickLine={false}
          domain={[0, 'dataMax']} // Ensure the domain starts at 0 and ends at the maximum value
          padding={{ left: 0, right: 10 }} // Add padding to prevent bars from touching the edge
          label={
            xAxisLabel ? {
              value: xAxisLabel,
              position: "insideBottom",
              offset: -10,
              className: "crayon-chart-axis-label",
            } : undefined
          }
        />
        <YAxis
          dataKey={categoryKey as string}
          type="category"
          tickLine={false}
          axisLine={false}
          tickFormatter={getTickFormatter(data)}
          width={90} // Increased width for better alignment
          tick={{ textAnchor: 'end', alignmentBaseline: 'middle' }} // Improve text alignment
          label={
            yAxisLabel ? {
              value: yAxisLabel,
              position: "insideLeft",
              angle: -90,
              offset: -80, // Adjusted offset for better positioning
              className: "crayon-chart-axis-label",
            } : undefined
          }
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        {dataKeys.map((key) => {
          const transformedKey = keyTransform(key);
          const color = `var(--color-${transformedKey})`;
          if (label) {
            return (
              <Bar
                key={key}
                dataKey={key}
                fill={color}
                radius={radius}
                stackId={variant === "stacked" ? "a" : undefined}
                isAnimationActive={isAnimationActive}
              >
                {label && (
                  <LabelList
                    position="right"
                    offset={5} // Reduced offset to keep labels closer to bars
                    className="crayon-chart-label-list"
                    fontSize={12}
                    formatter={(value: number | string) => value} // Fixed TypeScript error
                  />
                )}
              </Bar>
            );
          }
          return (
            <Bar
              key={key}
              dataKey={key}
              fill={color}
              radius={radius}
              stackId={variant === "stacked" ? "a" : undefined}
              isAnimationActive={isAnimationActive}
            />
          );
        })}
        {legend && <ChartLegend content={<ChartLegendContent />} />}
      </RechartsBarChart>
    </ChartContainer>
  );
};
