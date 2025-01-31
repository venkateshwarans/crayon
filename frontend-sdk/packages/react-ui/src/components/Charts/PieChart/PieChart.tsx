import { Cell, Pie, PieChart as RechartsPieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../Charts";
import { getDistributedColors, getPalette } from "../utils/PalletUtils";

type PieChartData = Array<Record<string, string | number>>;

interface PieChartProps<T extends PieChartData> {
  data: T;
  categoryKey: keyof T[number];
  dataKey: keyof T[number];
  theme?: "ocean" | "orchid" | "emerald" | "sunset" | "spectrum" | "vivid";
  variant?: "pie" | "donut";
  format?: "percentage" | "number";
  legend?: boolean;
  label?: boolean;
  outerRadius?: number;
  innerRadius?: number;
  width?: number;
  height?: number;
}

// Helper function to calculate percentage
const calculatePercentage = (value: number, total: number): number => {
  if (total === 0) {
    return 0;
  }
  return Number(((value / total) * 100).toFixed(2));
};

export const PieChart = <T extends PieChartData>({
  data,
  categoryKey,
  dataKey,
  theme = "ocean",
  variant = "pie",
  format = "number",
  legend = true,
  label = true,
  outerRadius = 120,
  innerRadius = variant === "donut" ? 60 : 0,
  width = 800,
  height = 400,
}: PieChartProps<T>) => {
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

  // Custom label renderer
  const renderCustomLabel = ({ payload, cx, cy, x, y, textAnchor, dominantBaseline }: any) => {
    if (payload.percentage <= 10) return null;
    const displayValue = format === "percentage" ? payload.percentage : payload[dataKey];
    const formattedValue =
      String(displayValue).length > 7 ? `${String(displayValue).slice(0, 7)}...` : displayValue;

    return (
      <g>
        <text
          cx={cx}
          cy={cy}
          x={x}
          y={y}
          textAnchor={textAnchor}
          dominantBaseline={dominantBaseline}
        >
          {formattedValue}
          {format === "percentage" ? "%" : ""}
        </text>
      </g>
    );
  };

  return (
    <ChartContainer config={chartConfig} className="crayon-pie-chart-container">
      <RechartsPieChart width={width} height={height}>
        <ChartTooltip content={<ChartTooltipContent showPercentage={format === "percentage"} />} />
        {legend && <ChartLegend content={<ChartLegendContent nameKey={String(categoryKey)} />} />}
        <Pie
          data={transformedData}
          dataKey={format === "percentage" ? "percentage" : String(dataKey)}
          nameKey={String(categoryKey)}
          labelLine={false}
          outerRadius={outerRadius}
          innerRadius={innerRadius}
          label={label ? renderCustomLabel : false}
        >
          {transformedData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </RechartsPieChart>
    </ChartContainer>
  );
};
