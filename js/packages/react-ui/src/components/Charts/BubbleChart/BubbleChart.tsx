import React from "react";
import { ScatterChart as RechartsScatterChart, Scatter, XAxis, YAxis, ZAxis } from "recharts";
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

export type BubbleChartData = Array<Record<string, string | number>>;

export interface BubbleChartProps<T extends BubbleChartData> {
  data: T;
  xAxisKey: keyof T[number];
  yAxisKey: keyof T[number];
  zAxisKey?: keyof T[number]; // For bubble size
  nameKey?: keyof T[number]; // For identifying each bubble (used in tooltip)
  theme?: "ocean" | "orchid" | "emerald" | "sunset" | "spectrum" | "vivid" | "iq";
  grid?: boolean;
  legend?: boolean;
  isAnimationActive?: boolean;
  showYAxis?: boolean;
  showXAxis?: boolean;
  xAxisLabel?: React.ReactNode;
  yAxisLabel?: React.ReactNode;
  zAxisRange?: [number, number]; // Min and max size for bubbles
  icons?: Partial<Record<string, React.ComponentType>>;
  seriesKey?: string; // Key to group data points by series
}

export const BubbleChart = <T extends BubbleChartData>({
  data,
  xAxisKey,
  yAxisKey,
  zAxisKey,
  nameKey,
  theme = "ocean",
  grid = true,
  legend = true,
  isAnimationActive = true,
  showYAxis = true,
  showXAxis = true,
  xAxisLabel,
  yAxisLabel,
  zAxisRange = [400, 2000],
  icons = {},
  seriesKey,
}: BubbleChartProps<T>) => {
  // Transform data for bubble chart
  const transformedData = React.useMemo(() => {
    if (!seriesKey) {
      // If no seriesKey is provided, treat all data as one series
      return [
        {
          name: "default",
          data: data.map((item) => ({
            x: item[xAxisKey as string],
            y: item[yAxisKey as string],
            z: zAxisKey ? item[zAxisKey as string] : 1,
            name: nameKey ? item[nameKey as string] : undefined,
            ...item, // Include original data for tooltip
          })),
        },
      ];
    }

    // Group data by seriesKey
    const groupedData: Record<string, any[]> = {};
    
    data.forEach((item) => {
      const series = String(item[seriesKey as string] || "default");
      if (!groupedData[series]) {
        groupedData[series] = [];
      }
      
      groupedData[series].push({
        x: item[xAxisKey as string],
        y: item[yAxisKey as string],
        z: zAxisKey ? item[zAxisKey as string] : 1,
        name: nameKey ? item[nameKey as string] : undefined,
        ...item, // Include original data for tooltip
      });
    });

    return Object.entries(groupedData).map(([key, items]) => ({
      name: key,
      data: items,
    }));
  }, [data, xAxisKey, yAxisKey, zAxisKey, nameKey, seriesKey]);

  const seriesNames = transformedData.map((series) => series.name);
  const palette = getPalette(theme);
  const colors = getDistributedColors(palette, seriesNames.length);
  const { layout } = useLayoutContext();

  // Create Config
  const chartConfig: ChartConfig = seriesNames.reduce(
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

  const getTickFormatter = (maxLength: number) => {
    return (value: string) => {
      if (value && value.length > maxLength) {
        return `${value.slice(0, maxLength)}...`;
      }
      return value;
    };
  };

  const getAxisAngle = () => {
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

  const getTickMargin = () => {
    return data.length <= 6 ? 10 : 15;
  };

  // Custom tooltip formatter for bubble chart
  const bubbleTooltipFormatter = (value: any, name: any, props: any) => {
    if (name === 'x') return [props.payload.x, String(xAxisKey)];
    if (name === 'y') return [props.payload.y, String(yAxisKey)];
    if (name === 'z' && zAxisKey) return [props.payload.z, String(zAxisKey)];
    return [value, name];
  };

  return (
    <ChartContainer config={chartConfig}>
      <RechartsScatterChart
        accessibilityLayer
        margin={{
          top: 60,
          left: showYAxis ? 30 : 20,
          right: 30,
          bottom: showXAxis ? 30 : 20,
        }}
      >
        {grid && cartesianGrid()}
        
        {showXAxis && (
          <XAxis
            type="number"
            dataKey="x"
            name={String(xAxisKey)}
            tickLine={false}
            tickMargin={getTickMargin()}
            axisLine={false}
            angle={getAxisAngle()}
            textAnchor="middle"
            tickFormatter={getTickFormatter(10)}
            label={{
              value: xAxisLabel,
              position: "insideBottom",
              offset: -5,
              dy: 15,
              className: "crayon-chart-axis-label",
            }}
          />
        )}
        
        {showYAxis && (
          <YAxis
            type="number"
            dataKey="y"
            name={String(yAxisKey)}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            label={{
              value: yAxisLabel,
              position: "insideLeft",
              angle: -90,
              dx: -10,
              className: "crayon-chart-axis-label",
            }}
          />
        )}
        
        {zAxisKey && (
          <ZAxis
            type="number"
            dataKey="z"
            range={zAxisRange}
            name={String(zAxisKey)}
          />
        )}

        <ChartTooltip 
          content={<ChartTooltipContent indicator="dot" formatter={bubbleTooltipFormatter} />} 
        />
        
        {transformedData.map((series) => {
          const transformedKey = keyTransform(series.name);
          const color = `var(--color-${transformedKey})`;
          
          return (
            <Scatter
              key={series.name}
              name={series.name}
              data={series.data}
              fill={color}
              isAnimationActive={isAnimationActive}
            />
          );
        })}
        
        {legend && <ChartLegend 
          content={<ChartLegendContent />} 
          verticalAlign="bottom" 
          align="center"
          wrapperStyle={{ paddingTop: 20 }}
        />}
      </RechartsScatterChart>
    </ChartContainer>
  );
};
