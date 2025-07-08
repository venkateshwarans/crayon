# Scorecard Component

A versatile KPI/Scorecard component for displaying single metrics with optional comparison indicators, progress bars, and sparklines.

## Installation

```tsx
import { Scorecard } from '@crayonai/react-ui/Charts/Scorecard';
```

## Features

- Display numeric values with customizable formatting
- Show comparison values as percentage changes or progress towards targets
- Include optional sparklines to visualize trends
- Support for various themes and size variants
- Customizable colors for positive and negative indicators

## Basic Usage

```tsx
// Basic scorecard with just a value and title
<Scorecard 
  value={62} 
  title="Qty Sold" 
/>

// Scorecard with comparison indicator
<Scorecard 
  value={44811} 
  title="New Users" 
  comparisonValue={58000}
  valueFormat="number"
  comparisonFormat="percentage"
/>

// Scorecard with progress bar
<Scorecard 
  value={44811} 
  title="New Users" 
  comparisonValue={50000}
  showAsProgress={true}
  valueFormat="number"
  comparisonFormat="percentage"
/>

// Scorecard with sparkline
<Scorecard 
  value={354.7} 
  title="Views" 
  valueFormat="compact"
  showSparkline={true}
  sparklineData={[
    { value: 40 },
    { value: 60 },
    { value: 45 },
    // ... more data points
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number \| string` | - | The primary value to display in the scorecard |
| `title` | `string` | - | Optional title/label for the value |
| `comparisonValue` | `number` | - | Optional comparison value to show trend/progress |
| `comparisonLabel` | `string` | - | Optional label for the comparison value |
| `valueFormat` | `"number" \| "currency" \| "percentage" \| "compact" \| ((value: number \| string) => string)` | `"number"` | Format for displaying the value |
| `comparisonFormat` | `"number" \| "currency" \| "percentage" \| "compact" \| ((value: number) => string)` | `"percentage"` | Format for displaying the comparison value |
| `showAsProgress` | `boolean` | `false` | Whether to show the comparison as progress towards a target |
| `showSparkline` | `boolean` | `false` | Whether to show a sparkline below the main value |
| `sparklineData` | `Array<{ value: number }>` | `[]` | Data for the sparkline if enabled |
| `theme` | `"ocean" \| "orchid" \| "emerald" \| "sunset" \| "spectrum" \| "vivid"` | `"ocean"` | Color theme for the scorecard |
| `positiveColor` | `string` | - | Color for positive changes/values (overrides theme) |
| `negativeColor` | `string` | - | Color for negative changes/values (overrides theme) |
| `valueColor` | `string` | - | Color for the primary value (overrides theme) |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Size variant of the scorecard |
| `hideComparison` | `boolean` | `false` | Whether to hide the comparison indicator |
| `style` | `React.CSSProperties` | - | Custom styles for the container |
| `className` | `string` | - | Custom className for the container |

## Value Formatting

The component supports several built-in formatting options:

- `number`: Standard number formatting with thousands separators
- `currency`: Currency formatting with dollar sign and decimal places
- `percentage`: Percentage formatting with % symbol
- `compact`: Compact notation for large numbers (e.g., "354.7K")

You can also provide a custom formatting function:

```tsx
<Scorecard
  value={1234567}
  valueFormat={(value) => `${value.toLocaleString()} units`}
/>
```

## Comparison Indicators

The component automatically determines whether a comparison is positive or negative and applies appropriate styling:

- Positive changes: Displayed in green with an up arrow
- Negative changes: Displayed in red with a down arrow
- Progress bars: Color-coded based on progress percentage

## Sparklines

Sparklines provide a compact visualization of trends over time. To use sparklines:

```tsx
<Scorecard
  value={354.7}
  title="Views"
  showSparkline={true}
  sparklineData={[
    { value: 40 },
    { value: 60 },
    { value: 45 },
    // ... more data points
  ]}
/>
```

## Accessibility

The component uses semantic HTML and appropriate ARIA attributes to ensure accessibility for screen readers and keyboard navigation.
