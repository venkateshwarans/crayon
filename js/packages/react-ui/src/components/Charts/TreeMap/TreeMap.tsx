import React, { useMemo } from "react";
import { Treemap as RechartsTreemap, ResponsiveContainer, Tooltip } from "recharts";
import { useLayoutContext } from "../../../context/LayoutContext";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  keyTransform,
} from "../Charts";
import { getDistributedColors, getPalette, PaletteName } from "../utils/PalletUtils";

export type TreeMapData = Array<{
  name: string;
  value: number;
  children?: Array<{
    name: string;
    value: number;
    children?: Array<{
      name: string;
      value: number;
    }>;
  }>;
}>;

export interface TreeMapProps {
  /**
   * Data for the tree map visualization
   */
  data: TreeMapData;
  /**
   * Color theme for the chart
   */
  theme?: PaletteName;
  /**
   * Whether to show the legend
   */
  legend?: boolean;
  /**
   * Whether to activate animations
   */
  isAnimationActive?: boolean;
  /**
   * Custom icons to use for legend items
   */
  icons?: Record<string, React.ComponentType>;
  /**
   * Value key for the data
   */
  dataKey?: string;
  /**
   * Format for the content inside the tree map rectangles
   * Can be "value", "name", "nameValue", or a custom function
   */
  contentFormat?: "value" | "name" | "nameValue" | ((name: string, value: number) => React.ReactNode);
  /**
   * Aspect ratio of the treemap rectangles
   */
  aspectRatio?: number;
  /**
   * Stroke color for the rectangles
   */
  stroke?: string;
  /**
   * Stroke width for the rectangles
   */
  strokeWidth?: number;
}

/**
 * TreeMap Component
 * 
 * Displays hierarchical data using nested rectangles, where the area of each rectangle
 * corresponds to the value of the data point. Useful for comparing proportions within categories.
 */
export const TreeMap: React.FC<TreeMapProps> = ({
  data,
  theme = "ocean",
  legend = true,
  isAnimationActive = true,
  icons = {},
  dataKey = "value",
  contentFormat = "nameValue",
  aspectRatio = 0.5,
  stroke = "#fff",
  strokeWidth = 1,
}) => {
  const { layout } = useLayoutContext();

  // Get unique category names for color assignment
  const categoryNames = useMemo(() => {
    const names: string[] = [];
    data.forEach(item => {
      if (!names.includes(item.name)) {
        names.push(item.name);
      }
    });
    return names;
  }, [data]);

  // Create color palette
  const palette = getPalette(theme);
  const colors = getDistributedColors(palette.colors, categoryNames.length);

  // Create chart config
  const chartConfig: ChartConfig = categoryNames.reduce(
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

  // Custom content for treemap rectangles
  const CustomContent = (props: any) => {
    const { x, y, width, height, index, name, value, root } = props;
    
    // Don't render text for very small rectangles
    if (width < 30 || height < 30) return null;

    // Generate text content based on the contentFormat prop
    let content: React.ReactNode;
    if (typeof contentFormat === 'function') {
      content = contentFormat(name, value);
    } else {
      switch (contentFormat) {
        case 'value':
          content = value;
          break;
        case 'name':
          content = name;
          break;
        case 'nameValue':
        default:
          content = (
            <>
              <tspan x={x + width / 2} y={y + height / 2 - 7} textAnchor="middle" fill="#fff" fontSize={12}>
                {name}
              </tspan>
              <tspan x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={11}>
                {value}
              </tspan>
            </>
          );
      }
    }

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: props.color || root.children?.[index]?.color || '#000',
            fillOpacity: props.fillOpacity || 1,
            stroke,
            strokeWidth,
            strokeOpacity: 1,
          }}
        />
        <text x={x + width / 2} y={y + height / 2} textAnchor="middle" dominantBaseline="middle">
          {content}
        </text>
      </g>
    );
  };

  // Process data to add colors
  const processedData = useMemo(() => {
    const result = [...data];
    categoryNames.forEach((category, index) => {
      // Use the actual color value from the colors array instead of CSS variable
      const color = colors[index];
      const item = result.find(item => item.name === category);
      if (item) {
        (item as any).color = color;
        
        // If there are children, assign different shades of the same color
        if (item.children?.length) {
          item.children.forEach((child, childIndex) => {
            const opacity = 0.7 + (childIndex % 3) * 0.1; // Varying opacity for children
            (child as any).color = color;
            (child as any).fillOpacity = opacity;
            
            // If there are grandchildren, assign even more varied shades
            if (child.children?.length) {
              child.children.forEach((grandchild, grandchildIndex) => {
                const grandchildOpacity = 0.6 + (grandchildIndex % 5) * 0.08;
                (grandchild as any).color = color;
                (grandchild as any).fillOpacity = grandchildOpacity;
              });
            }
          });
        }
      }
    });
    return result;
  }, [data, categoryNames, colors]);

  return (
    <ChartContainer config={chartConfig}>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <RechartsTreemap
            data={processedData}
            dataKey={dataKey}
            aspectRatio={aspectRatio}
            isAnimationActive={isAnimationActive}
            animationDuration={500}
            animationEasing="ease-out"
            content={<CustomContent />}
          >
            <Tooltip />
            {legend && (
              <ChartLegend
                content={<ChartLegendContent />}
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ paddingTop: 20 }}
              />
            )}
          </RechartsTreemap>
        </ResponsiveContainer>
      </div>
    </ChartContainer>
  );
};
