# StackedColumnChart Component

The `StackedColumnChart` component displays vertical bars stacked on top of each other to show how parts contribute to a whole across categories. It's useful for comparing total values across categories while also showing the composition of each total.

## Import

```tsx
import { StackedColumnChart } from '@crayon-ui/react-ui/Charts/StackedColumnChart';
```

## Usage

```tsx
import { StackedColumnChart } from '@crayon-ui/react-ui/Charts/StackedColumnChart';
import { Card } from '@crayon-ui/react-ui/Card';
import { Monitor, TabletSmartphone, Smartphone } from 'lucide-react';

// Sample data for the chart
const stackedColumnChartData = [
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
  <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
    <div style={{ width: "100%", height: "100%" }}>
      <StackedColumnChart
        data={stackedColumnChartData}
        categoryKey="month"
        theme="ocean"
      />
    </div>
  </Card>
);

// Advanced usage with all props
const AdvancedExample = () => (
  <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
    <div style={{ width: "100%", height: "100%" }}>
      <StackedColumnChart
        data={stackedColumnChartData}
        categoryKey="month"
        theme="vivid"
        radius={4}
        grid={true}
        legend={true}
        label={true}
        icons={icons}
        isAnimationActive={true}
        showYAxis={true}
        xAxisLabel="Time Period"
        yAxisLabel="Number of Users"
      />
    </div>
  </Card>
);
```

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `data` | `Array<Record<string, string \| number>>` | Required | An array of data objects where each object represents a data point. Each object should have a category field and one or more numeric values for the columns to be stacked. |
| `categoryKey` | `keyof T[number]` | Required | The key from your data object to be used as the x-axis categories (e.g., 'month', 'year', 'date') |
| `theme` | `"ocean" \| "orchid" \| "emerald" \| "sunset" \| "spectrum" \| "vivid"` | `"ocean"` | The color palette theme for the chart. Each theme provides a different set of colors for the columns. |
| `grid` | `boolean` | `true` | Whether to display the background grid lines in the chart |
| `label` | `boolean` | `true` | Whether to display data point labels above each column |
| `legend` | `boolean` | `true` | Whether to display the chart legend showing the data series names and their corresponding colors/icons |
| `radius` | `number` | `4` | The radius of the rounded corners of the columns |
| `icons` | `Partial<Record<keyof T[number], React.ComponentType>>` | `{}` | An object that maps data keys to icon components. These icons will appear in the legend next to their corresponding data series. |
| `isAnimationActive` | `boolean` | `true` | Whether to animate the chart |
| `showYAxis` | `boolean` | `false` | Whether to display the y-axis |
| `xAxisLabel` | `React.ReactNode` | `undefined` | The label for the x-axis |
| `yAxisLabel` | `React.ReactNode` | `undefined` | The label for the y-axis |

## Features

- **Stacked Columns**: Shows how parts contribute to a whole across categories
- **Customizable Themes**: Choose from 6 different color palettes
- **Responsive Design**: Adapts to different screen sizes with auto height
- **Optimized Bar Width**: Responsive bar width with minimum size to ensure visibility
- **Interactive Legend**: Toggle visibility of data series
- **Tooltips**: Display detailed information on hover
- **Animation**: Smooth transitions when data changes
- **Axis Labels**: Add context with custom labels
- **Grid Lines**: Improve readability with optional grid lines
- **Icons**: Add visual indicators in the legend

## Differences from BarChart

The `StackedColumnChart` differs from the regular `BarChart` in that:

1. All columns are stacked by default (there is no "grouped" variant)
2. The y-axis represents the cumulative value of all series at each point
3. The tooltip shows both individual values and the cumulative total
4. The visual effect emphasizes the composition of a whole rather than comparing individual values

## Best Practices

- Use stacked column charts when you want to show how parts contribute to a whole across categories
- Limit the number of data series to 5-7 for best readability
- Arrange data series in a logical order (e.g., largest to smallest)
- Choose colors with good contrast between adjacent segments
- Consider using the `radius` prop to make the columns more visually appealing
- Use a fixed width Card (e.g., `width: "600px"`) with `maxWidth: "100%"` to ensure proper rendering
- Set `height: "auto"` with `minHeight: "300px"` to allow the chart to adjust to its content
- Wrap the chart in a responsive container to ensure it adapts to different screen sizes
- Add meaningful labels to help users understand what they're looking at
- Use the `showYAxis` prop when precise values are important
