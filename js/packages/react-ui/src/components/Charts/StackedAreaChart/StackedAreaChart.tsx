import React from "react";
import { Area, LabelList, AreaChart as RechartsAreaChart, XAxis, YAxis } from "recharts";
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

export type StackedAreaChartData = Array<Record<string, string | number>>;

export interface StackedAreaChartProps<T extends StackedAreaChartData> {
  /**
   * An array of data objects where each object represents a data point.
   * Each object should have a category field (e.g., month) and one or more numeric values for the areas to be stacked.
   */
  data: T;
  /**
   * The key from your data object to be used as the x-axis categories (e.g., 'month', 'year', 'date')
   */
  categoryKey: keyof T[number];
  /**
   * The color palette theme for the chart. Each theme provides a different set of colors for the areas.
   * @default "ocean"
   */
  theme?: "ocean" | "orchid" | "emerald" | "sunset" | "spectrum" | "vivid";
  /**
   * The interpolation method used to create the area curves.
   * 'linear' creates straight lines between points, 'natural' creates smooth curves, and 'step' creates a stepped area.
   * @default "natural"
   */
  variant?: "linear" | "natural" | "step";
  /**
   * Whether to display the background grid lines in the chart
   * @default true
   */
  grid?: boolean;
  /**
   * Whether to display data point labels above each point on the chart
   * @default true
   */
  label?: boolean;
  /**
   * Whether to display the chart legend showing the data series names and their corresponding colors/icons
   * @default true
   */
  legend?: boolean;
  /**
   * The opacity of the filled area beneath each line (0 = fully transparent, 1 = fully opaque)
   * @default 0.5
   */
  opacity?: number;
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
 * StackedAreaChart component shows data's change over time, stacked to show how parts contribute to a whole in two dimensions.
 * It extends the functionality of a regular area chart by stacking areas on top of each other.
 */
export const StackedAreaChart = <T extends StackedAreaChartData>({
  data,
  categoryKey,
  theme = "ocean",
  variant = "natural",
  grid = true,
  label = true,
  legend = true,
  opacity = 0.5,
  icons = {},
  isAnimationActive = true,
  showYAxis = false,
  xAxisLabel,
  yAxisLabel,
}: StackedAreaChartProps<T>) => {
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

    return (value: string) => {
      if (value.length > maxLength) {
        return `${value.slice(0, maxLength)}...`;
      }
      return value;
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
      <RechartsAreaChart
        accessibilityLayer
        data={data}
        margin={{
          top: label ? 20 : 10,
          left: showYAxis ? 0 : 12,
          right: 12,
        }}
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
          interval="preserveStartEnd"
          label={{
            value: xAxisLabel,
            position: "insideBottom",
            offset: -10,
            className: "crayon-chart-axis-label",
          }}
        />
        {showYAxis && (
          <YAxis
            label={{
              value: yAxisLabel,
              position: "insideLeft",
              angle: -90,
              className: "crayon-chart-axis-label",
            }}
          />
        )}

        <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
        {dataKeys.map((key) => {
          const transformedKey = keyTransform(key);
          const color = `var(--color-${transformedKey})`;
          if (label) {
            return (
              <Area
                key={key}
                dataKey={key}
                type={variant}
                stroke={color}
                fill={color}
                fillOpacity={opacity}
                stackId="1" // Ensure all areas are stacked together
                dot={{
                  fill: color,
                }}
                activeDot={{
                  r: 6,
                }}
                isAnimationActive={isAnimationActive}
              >
                {label && (
                  <LabelList
                    position="top"
                    offset={12}
                    className="crayon-chart-label-list"
                    fontSize={12}
                  />
                )}
              </Area>
            );
          }
          return (
            <Area
              key={key}
              dataKey={key}
              type={variant}
              stroke={color}
              fill={color}
              fillOpacity={opacity}
              stackId="1" // Ensure all areas are stacked together
              dot={{
                fill: color,
              }}
              activeDot={{
                r: 6,
              }}
              isAnimationActive={isAnimationActive}
            />
          );
        })}
        {legend && <ChartLegend content={<ChartLegendContent />} />}
      </RechartsAreaChart>
    </ChartContainer>
  );
};
