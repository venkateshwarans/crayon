import { Cell, LabelList, PolarGrid, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../Charts";
import { getDistributedColors, getPalette } from "../utils/PalletUtils";

type RadialChartData = Array<Record<string, string | number>>;

interface RadialChartProps<T extends RadialChartData> {
  data: T;
  categoryKey: keyof T[number];
  dataKey: keyof T[number];
  theme?: "ocean" | "orchid" | "emerald" | "sunset" | "spectrum" | "vivid";
  variant?: "semicircle" | "circular";
  format?: "percentage" | "number";
  legend?: boolean;
  label?: boolean;
  grid?: boolean;
  outerRadius?: number;
  innerRadius?: number;
  width?: number;
  height?: number;
}

// Helper function to calculate percentage (same as PieChart)
const calculatePercentage = (value: number, total: number): number => {
  if (total === 0) return 0;
  return Number(((value / total) * 100).toFixed(2));
};

export const RadialChart = <T extends RadialChartData>({
  data,
  categoryKey,
  dataKey,
  theme = "ocean",
  variant = "semicircle",
  format = "number",
  legend = true,
  label = true,
  grid = true,
  outerRadius = 150,
  innerRadius = 40,
  width = 800,
  height = 400,
}: RadialChartProps<T>) => {
  // Calculate total for percentage calculations
  const total = data.reduce((sum, item) => sum + Number(item[dataKey]), 0);

  // Transform data with percentages
  const transformedData = data.map((item) => ({
    ...item,
    percentage: calculatePercentage(Number(item[dataKey as string]), total),
    originalValue: item[dataKey as string],
  }));

  // Get color palette and distribute colors
  const palette = getPalette(theme);
  const colors = getDistributedColors(palette, data.length);

  // Create chart configuration
  const chartConfig = data.reduce<ChartConfig>(
    (config, item, index) => ({
      ...config,
      [String(item[categoryKey])]: {
        label: String(item[categoryKey as string]),
        color: colors[index],
      },
    }),
    {},
  );

  const getFontSize = (dataLength: number) => {
    return dataLength <= 5 ? 12 : 7;
  };

  return (
    <ChartContainer config={chartConfig} className="crayon-radial-chart-container">
      <RadialBarChart
        width={width}
        height={height}
        data={transformedData}
        startAngle={variant === "circular" ? -90 : 0}
        endAngle={variant === "circular" ? 270 : 180}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
      >
        {grid && <PolarGrid gridType="circle" />}
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              showPercentage={format === "percentage"}
              nameKey={String(categoryKey)}
            />
          }
        />
        {legend && (
          <ChartLegend
            content={
              <ChartLegendContent nameKey={String(categoryKey)} className="flex-wrap gap-2" />
            }
          />
        )}
        <RadialBar
          dataKey={format === "percentage" ? "percentage" : String(dataKey)}
          background={!grid}
          cornerRadius={10}
        >
          {Object.entries(chartConfig).map(([key, config]) => (
            <Cell key={key} fill={config.color} />
          ))}
          {label && (
            <LabelList
              dataKey={String(categoryKey)}
              position="insideStart"
              offset={12}
              fill="#000000"
              className="capitalize"
              fontSize={getFontSize(data.length)}
              formatter={(value: string) => (value.length > 8 ? `${value.slice(0, 8)}...` : value)}
            />
          )}
        </RadialBar>
      </RadialBarChart>
    </ChartContainer>
  );
};
