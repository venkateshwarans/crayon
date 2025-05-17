# HorizontalBarChart Component

The `HorizontalBarChart` component displays data horizontally to show comparisons among categories. It's particularly useful when category names are long or when comparing values across multiple categories.

## Import

```tsx
import { HorizontalBarChart } from '@crayon-ui/react-ui/Charts/HorizontalBarChart';
```

## Usage

```tsx
import { HorizontalBarChart } from '@crayon-ui/react-ui/Charts/HorizontalBarChart';
import { Card } from '@crayon-ui/react-ui/Card';
import { Monitor, TabletSmartphone, Smartphone } from 'lucide-react';

// Sample data for the chart
const horizontalBarChartData = [
  { category: "Category A", value1: 150, value2: 90, value3: 60 },
  { category: "Category B", value1: 280, value2: 180, value3: 120 },
  { category: "Category C", value1: 220, value2: 140, value3: 100 },
  { category: "Category D", value1: 180, value2: 160, value3: 80 },
  { category: "Category E", value1: 250, value2: 120, value3: 90 },
  { category: "Category F", value1: 300, value2: 180, value3: 110 },
];

// Optional icons for the legend
const icons = {
  value1: Monitor,
  value2: TabletSmartphone,
  value3: Smartphone,
};

// Basic usage
const BasicExample = () => (
  <Card style={{ width: "600px", height: "auto" }}>
    <HorizontalBarChart
      data={horizontalBarChartData}
      categoryKey="category"
      theme="ocean"
    />
  </Card>
);

// Advanced usage with all props
const AdvancedExample = () => (
  <Card style={{ width: "600px", height: "auto" }}>
    <HorizontalBarChart
      data={horizontalBarChartData}
      categoryKey="category"
      theme="vivid"
      variant="stacked"
      radius={4}
      grid={true}
      legend={true}
      label={true}
      icons={icons}
      isAnimationActive={true}
      showXAxis={true}
      xAxisLabel="Values"
      yAxisLabel="Categories"
    />
  </Card>
);
```

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `data` | `Array<Record<string, string \| number>>` | Required | An array of data objects where each object represents a data point. Each object should have a category field and one or more numeric values for the bars. |
| `categoryKey` | `keyof T[number]` | Required | The key from your data object to be used as the y-axis categories |
| `theme` | `"ocean" \| "orchid" \| "emerald" \| "sunset" \| "spectrum" \| "vivid"` | `"ocean"` | The color palette theme for the chart. Each theme provides a different set of colors for the bars. |
| `variant` | `"grouped" \| "stacked"` | `"grouped"` | The style of the bar chart. 'grouped' shows bars side by side, while 'stacked' shows bars stacked. |
| `grid` | `boolean` | `true` | Whether to display the background grid lines in the chart |
| `label` | `boolean` | `true` | Whether to display data point labels at the end of each bar |
| `legend` | `boolean` | `true` | Whether to display the chart legend showing the data series names and their corresponding colors/icons |
| `radius` | `number` | `4` | The radius of the rounded corners of the bars |
| `icons` | `Partial<Record<keyof T[number], React.ComponentType>>` | `{}` | An object that maps data keys to icon components. These icons will appear in the legend next to their corresponding data series. |
| `isAnimationActive` | `boolean` | `true` | Whether to animate the chart |
| `showXAxis` | `boolean` | `false` | Whether to display the x-axis |
| `xAxisLabel` | `React.ReactNode` | `undefined` | The label for the x-axis |
| `yAxisLabel` | `React.ReactNode` | `undefined` | The label for the y-axis |

## Features

- **Horizontal Layout**: Displays bars horizontally, making it easier to read long category names
- **Grouped or Stacked**: Choose between grouped bars (side by side) or stacked bars
- **Customizable Themes**: Choose from 6 different color palettes
- **Responsive Design**: Adapts to different screen sizes
- **Interactive Legend**: Toggle visibility of data series
- **Tooltips**: Display detailed information on hover
- **Animation**: Smooth transitions when data changes
- **Axis Labels**: Add context with custom labels
- **Grid Lines**: Improve readability with optional grid lines
- **Icons**: Add visual indicators in the legend

## Differences from BarChart

The `HorizontalBarChart` differs from the regular `BarChart` in that:

1. Bars are displayed horizontally rather than vertically
2. The category axis is on the y-axis instead of the x-axis
3. Labels are positioned at the end of each bar rather than on top
4. The layout is optimized for longer category names
5. The chart takes up more horizontal space but can accommodate more categories vertically

## Best Practices

- Use horizontal bar charts when you have long category names
- Use horizontal bar charts when you have many categories (more than 6-8)
- Limit the number of data series to 3-5 for best readability
- Consider using the "stacked" variant when comparing parts of a whole
- Use the "grouped" variant when comparing individual values across categories
- Add meaningful labels to help users understand what they're looking at
- Consider increasing the chart height when displaying many categories
