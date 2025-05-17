# Bubble Chart

A Bubble Chart component that displays data points as bubbles in a two-dimensional space, where the size of each bubble can represent a third dimension of data.

## Import

```tsx
import { BubbleChart } from '@crayonai/react-ui/Charts/BubbleChart';
```

## Usage

```tsx
import { BubbleChart } from '@crayonai/react-ui/Charts/BubbleChart';
import { Card } from '@crayonai/react-ui/Card';
import { Monitor, TabletSmartphone, Smartphone, Laptop } from 'lucide-react';

// Sample data
const bubbleChartData = [
  { category: "Mobile", sales: 120, users: 1500, size: 30, device: "Smartphone" },
  { category: "Tablet", sales: 300, users: 2200, size: 45, device: "Tablet" },
  { category: "Desktop", sales: 450, users: 3000, size: 60, device: "Desktop" },
  { category: "Laptop", sales: 280, users: 2800, size: 50, device: "Laptop" },
];

// Icons for the legend
const icons = {
  Smartphone: Smartphone,
  Tablet: TabletSmartphone,
  Desktop: Monitor,
  Laptop: Laptop,
};

// Render the component
<Card style={{ width: "600px", height: "400px" }}>
  <BubbleChart
    data={bubbleChartData}
    xAxisKey="sales"
    yAxisKey="users"
    zAxisKey="size"
    nameKey="category"
    theme="ocean"
    grid={true}
    legend={true}
    isAnimationActive={true}
    showYAxis={true}
    showXAxis={true}
    xAxisLabel="Sales"
    yAxisLabel="Users"
    seriesKey="device"
    icons={icons}
  />
</Card>
```

## Features

- Display data points as bubbles in a two-dimensional space
- Customize bubble size based on a third data dimension
- Group bubbles into different series with distinct colors
- Show/hide grid, axes, and legend
- Customize colors with different themes
- Interactive tooltips showing data details
- Animation support
- Responsive design that adapts to different screen sizes

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Array<Record<string, string \| number>>` | Required | Array of data objects where each object represents a data point |
| `xAxisKey` | `keyof T[number]` | Required | Key from data object to use for x-axis values |
| `yAxisKey` | `keyof T[number]` | Required | Key from data object to use for y-axis values |
| `zAxisKey` | `keyof T[number]` | `undefined` | Key from data object to use for bubble size |
| `nameKey` | `keyof T[number]` | `undefined` | Key from data object to use as the name in tooltips |
| `seriesKey` | `string` | `undefined` | Key to group data points into different series |
| `theme` | `"ocean" \| "orchid" \| "emerald" \| "sunset" \| "spectrum" \| "vivid"` | `"ocean"` | Color palette theme for the chart |
| `grid` | `boolean` | `true` | Whether to display background grid lines |
| `legend` | `boolean` | `true` | Whether to display the chart legend |
| `isAnimationActive` | `boolean` | `true` | Whether to animate the chart |
| `showYAxis` | `boolean` | `true` | Whether to display the y-axis |
| `showXAxis` | `boolean` | `true` | Whether to display the x-axis |
| `xAxisLabel` | `React.ReactNode` | `undefined` | Label for the x-axis |
| `yAxisLabel` | `React.ReactNode` | `undefined` | Label for the y-axis |
| `zAxisRange` | `[number, number]` | `[400, 2000]` | Min and max size range for bubbles |
| `icons` | `Partial<Record<string, React.ComponentType>>` | `{}` | Icons to display in the legend for each series |

## Examples

### Basic Bubble Chart

```tsx
<BubbleChart
  data={bubbleChartData}
  xAxisKey="sales"
  yAxisKey="users"
  zAxisKey="size"
  nameKey="category"
/>
```

### Grouped by Series

```tsx
<BubbleChart
  data={bubbleChartData}
  xAxisKey="sales"
  yAxisKey="users"
  zAxisKey="size"
  nameKey="category"
  seriesKey="device"
  icons={icons}
/>
```

### Custom Theme

```tsx
<BubbleChart
  data={bubbleChartData}
  xAxisKey="sales"
  yAxisKey="users"
  zAxisKey="size"
  nameKey="category"
  theme="sunset"
/>
```

## Accessibility

The Bubble Chart component includes an accessibility layer to ensure it can be navigated and understood by users with assistive technologies. The chart includes proper ARIA attributes and keyboard navigation support.
