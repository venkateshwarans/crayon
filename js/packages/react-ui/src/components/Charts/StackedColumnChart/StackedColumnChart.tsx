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

export type StackedColumnChartData = Array<Record<string, string | number>>;

export interface StackedColumnChartProps<T extends StackedColumnChartData> {
  /**
   * An array of data objects where each object represents a data point.
   * Each object should have a category field (e.g., month) and one or more numeric values for the columns to be stacked.
   */
  data: T;
  /**
   * The key from your data object to be used as the x-axis categories (e.g., 'month', 'year', 'date')
   */
  categoryKey: keyof T[number];
  /**
   * The color palette theme for the chart. Each theme provides a different set of colors for the columns.
   * @default "ocean"
   */
  theme?: "ocean" | "orchid" | "emerald" | "sunset" | "spectrum" | "vivid";
  /**
   * Whether to display the background grid lines in the chart
   * @default true
   */
  grid?: boolean;
  /**
   * Whether to display data point labels above each column
   * @default true
   */
  label?: boolean;
  /**
   * Whether to display the chart legend showing the data series names and their corresponding colors/icons
   * @default true
   */
  legend?: boolean;
  /**
   * The radius of the rounded corners of the columns
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
   * Whether to display the y-axis
   * @default false
   */
  showYAxis?: boolean;
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
 * StackedColumnChart component shows vertical bars stacked on top of each other to display how parts contribute to a whole across categories.
 * It's useful for comparing total values across categories while also showing the composition of each total.
 */
export const StackedColumnChart = <T extends StackedColumnChartData>({
  data,
  categoryKey,
  theme = "ocean",
  grid = true,
  label = true,
  legend = true,
  icons = {},
  radius = 4,
  isAnimationActive = true,
  showYAxis = false,
  xAxisLabel,
  yAxisLabel,
}: StackedColumnChartProps<T>) => {
  // excluding the categoryKey
  const dataKeys = Array.from(
  new Set(
    data.flatMap((d) => Object.keys(d)).filter((k) => k !== categoryKey)
  )
);

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
        default: 5,
        10: 4,
        11: 4,
      },
      tray: {
        default: 5,
        8: 4,
        9: 4,
        10: 4,
        11: 4,
      },
      copilot: {
        default: 5,
        8: 4,
        9: 4,
        10: 4,
        11: 4,
      },
      fullscreen: {
        default: 5,
        11: 4,
      },
    };

    const layoutConfig =
      maxLengthMap[layout as keyof typeof maxLengthMap] || maxLengthMap.fullscreen;

    const maxLength =
      dataLength >= 11
        ? 4
        : layoutConfig[dataLength as keyof typeof layoutConfig] || layoutConfig.default;

    return (value: unknown) => {
      const str = String(value);
      if (str.length > maxLength) {
        return `${str.slice(0, maxLength)}...`;
      }
      return str;
    };
  };
  
  const getAxisAngle = (data: T) => {
    const angleConfig = {
      mobile: {
        default: 0,
        ranges: [
          { min: 6, max: 9, angle: -45 },
          { min: 10, max: 10, angle: -60 },
          { min: 11, max: Infinity, angle: -75 },
        ],
      },
      tray: {
        default: 0,
        ranges: [{ min: 8, max: Infinity, angle: -45 }],
      },
      copilot: {
        default: 0,
        ranges: [{ min: 8, max: Infinity, angle: -45 }],
      },
      fullscreen: {
        default: 0,
        ranges: [{ min: 12, max: Infinity, angle: -45 }],
      },
    };

    const layoutConfig = angleConfig[layout as keyof typeof angleConfig] || angleConfig.fullscreen;
    const dataLength = data.length;

    const matchRange = layoutConfig.ranges.find(
      (range) => dataLength >= range.min && dataLength <= range.max,
    );

    return matchRange?.angle ?? layoutConfig.default;
  };
  
  const getTickMargin = (data: T) => {
    return data.length <= 6 ? 10 : 15;
  };

  return (
    <ChartContainer config={chartConfig}>
      <RechartsBarChart
        accessibilityLayer
        data={data}
        margin={{
          top: label ? 30 : 20,
          right: 30,
          left: showYAxis ? 40 : 15,
          bottom: 40,
        }}
        // Make chart responsive with auto height
        height={400}
        // Control bar width - reduce gap between categories for better space utilization
        barCategoryGap={layout === 'mobile' ? "5%" : "8%"}
        barGap={1}
        // Limit maximum bar size to prevent overly wide bars
        maxBarSize={30}
      >
        {grid && cartesianGrid()}
        <XAxis
          dataKey={categoryKey as string}
          tickLine={false}
          tickMargin={getTickMargin(data)}
          axisLine={false}
          angle={getAxisAngle(data)}
          textAnchor="middle"
          tickFormatter={getTickFormatter(data)}
          interval={layout === 'mobile' ? 0 : 'preserveStartEnd'}
          label={{
            value: xAxisLabel,
            position: "insideBottom",
            offset: -10,
            className: "crayon-chart-axis-label",
          }}
          // Improve mobile responsiveness
          height={40}
          scale="band"
          padding={{ left: 10, right: 10 }}
        />
        {showYAxis && (
          <YAxis
            label={{
              value: yAxisLabel,
              position: "insideLeft",
              angle: -90,
              offset: -10,
              className: "crayon-chart-axis-label",
            }}
            // Ensure y-axis fits within container
            width={50}
            // Adjust tick count based on available height
            tickCount={5}
            // Format numbers for better readability
            tickFormatter={(value) => {
              if (value >= 1000) {
                return `${(value / 1000).toFixed(1)}k`;
              }
              return value;
            }}
          />
        )}
        <ChartTooltip 
          content={<ChartTooltipContent />}
          cursor={false}
          wrapperStyle={{ zIndex: 100 }}
          isAnimationActive={false}
        />
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
                stackId="a" // Always use stackId to create stacked columns
                isAnimationActive={isAnimationActive}
                // Make bars responsive with minimum size to ensure visibility
                minPointSize={4}
                // Responsive bar width based on layout and data length
                barSize={layout === 'mobile' ? 10 : layout === 'tray' ? 15 : data.length > 8 ? 18 : 25}
                // Custom hover effect for better visual feedback
                activeBar={{
                  stroke: color,
                  strokeWidth: 2,
                  fill: color,
                  fillOpacity: 0.9
                }}
              >
                {label && (
                  <LabelList
                    position="top"
                    offset={12}
                    className="crayon-chart-label-list"
                    fontSize={12}
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
              stackId="a" // Always use stackId to create stacked columns
              isAnimationActive={isAnimationActive}
              // Make bars responsive with minimum size to ensure visibility
              minPointSize={4}
              // Responsive bar width based on layout and data length
              barSize={layout === 'mobile' ? 10 : layout === 'tray' ? 15 : data.length > 8 ? 18 : 25}
              // Custom hover effect for better visual feedback
              activeBar={{
                stroke: color,
                strokeWidth: 2,
                fill: color,
                fillOpacity: 0.9
              }}
            />
          );
        })}
        {legend && <ChartLegend content={<ChartLegendContent />} />}
      </RechartsBarChart>
    </ChartContainer>
  );
};
