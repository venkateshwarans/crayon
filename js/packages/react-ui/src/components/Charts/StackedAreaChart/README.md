# StackedAreaChart Component

The `StackedAreaChart` component shows data's change over time, stacked to show how parts contribute to a whole in two dimensions. It extends the functionality of a regular area chart by stacking areas on top of each other.

## Import

```tsx
import { StackedAreaChart } from '@crayon-ui/react-ui/Charts/StackedAreaChart';
```

## Usage

```tsx
import { StackedAreaChart } from '@crayon-ui/react-ui/Charts/StackedAreaChart';
import { Card } from '@crayon-ui/react-ui/Card';
import { Monitor, TabletSmartphone, Smartphone } from 'lucide-react';

// Sample data for the chart
const stackedAreaChartData = [
  { month: "January", desktop: 150, tablet: 90, mobile: 60 },
  { month: "February", desktop: 280, tablet: 180, mobile: 120 },
  { month: "March", desktop: 220, tablet: 140, mobile: 100 },
  { month: "April", desktop: 180, tablet: 160, mobile: 80 },
  { month: "May", desktop: 250, tablet: 120, mobile: 90 },
  { month: "June", desktop: 300, tablet: 180, mobile: 110 },
];

// Optional icons for the legend
const icons = {
  desktop: Monitor,
  tablet: TabletSmartphone,
  mobile: Smartphone,
};

// Basic usage
const BasicExample = () => (
  <Card style={{ width: "500px" }}>
    <StackedAreaChart
      data={stackedAreaChartData}
      categoryKey="month"
      theme="ocean"
    />
  </Card>
);

// Advanced usage with all props
const AdvancedExample = () => (
  <Card style={{ width: "500px" }}>
    <StackedAreaChart
      data={stackedAreaChartData}
      categoryKey="month"
      theme="vivid"
      variant="natural"
      opacity={0.6}
      grid={true}
      legend={true}
      label={true}
      icons={icons}
      isAnimationActive={true}
      showYAxis={true}
      xAxisLabel="Time Period"
      yAxisLabel="Number of Users"
    />
  </Card>
);
```

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `data` | `Array<Record<string, string \| number>>` | Required | An array of data objects where each object represents a data point. Each object should have a category field (e.g., month) and one or more numeric values for the areas to be stacked. |
| `categoryKey` | `keyof T[number]` | Required | The key from your data object to be used as the x-axis categories (e.g., 'month', 'year', 'date') |
| `theme` | `"ocean" \| "orchid" \| "emerald" \| "sunset" \| "spectrum" \| "vivid"` | `"ocean"` | The color palette theme for the chart. Each theme provides a different set of colors for the areas. |
| `variant` | `"linear" \| "natural" \| "step"` | `"natural"` | The interpolation method used to create the area curves. 'linear' creates straight lines between points, 'natural' creates smooth curves, and 'step' creates a stepped area. |
| `grid` | `boolean` | `true` | Whether to display the background grid lines in the chart |
| `label` | `boolean` | `true` | Whether to display data point labels above each point on the chart |
| `legend` | `boolean` | `true` | Whether to display the chart legend showing the data series names and their corresponding colors/icons |
| `opacity` | `number` | `0.5` | The opacity of the filled area beneath each line (0 = fully transparent, 1 = fully opaque) |
| `icons` | `Partial<Record<keyof T[number], React.ComponentType>>` | `{}` | An object that maps data keys to icon components. These icons will appear in the legend next to their corresponding data series. |
| `isAnimationActive` | `boolean` | `true` | Whether to animate the chart |
| `showYAxis` | `boolean` | `false` | Whether to display the y-axis |
| `xAxisLabel` | `React.ReactNode` | `undefined` | The label for the x-axis |
| `yAxisLabel` | `React.ReactNode` | `undefined` | The label for the y-axis |

## Features

- **Stacked Areas**: Shows how parts contribute to a whole across categories
- **Customizable Themes**: Choose from 6 different color palettes
- **Responsive Design**: Adapts to different screen sizes
- **Interactive Legend**: Toggle visibility of data series
- **Tooltips**: Display detailed information on hover
- **Animation**: Smooth transitions when data changes
- **Axis Labels**: Add context with custom labels
- **Grid Lines**: Improve readability with optional grid lines
- **Icons**: Add visual indicators in the legend

## Differences from AreaChart

The `StackedAreaChart` differs from the regular `AreaChart` in that:

1. All areas are stacked on top of each other using a common `stackId`
2. The y-axis represents the cumulative value of all series at each point
3. The tooltip shows both individual values and the cumulative total
4. The visual effect emphasizes the composition of a whole rather than comparing individual trends

## Best Practices

- Use stacked area charts when you want to show how parts contribute to a whole over time
- Limit the number of data series to 5-7 for best readability
- Choose colors with good contrast between adjacent areas
- Consider using the `opacity` prop to make overlapping areas more distinguishable
- Add meaningful labels to help users understand what they're looking at
