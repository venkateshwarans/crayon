# Gauge Chart

A Gauge Chart component that displays a single value within a range, often with color-coded sections to indicate performance levels.

## Import

```tsx
import { GaugeChart } from '@crayonai/react-ui/Charts/GaugeChart';
```

## Usage

```tsx
import { GaugeChart } from '@crayonai/react-ui/Charts/GaugeChart';
import { Card } from '@crayonai/react-ui/Card';

// Basic usage
<Card style={{ width: "300px", height: "auto" }}>
  <GaugeChart
    value={65}
    min={0}
    max={100}
    unit="%"
    theme="ocean"
  />
</Card>

// With custom color ranges
<Card style={{ width: "300px", height: "auto" }}>
  <GaugeChart
    value={75}
    min={0}
    max={100}
    unit="%"
    ranges={[
      { min: 0, max: 25, color: "#FF5252" },
      { min: 25, max: 50, color: "#FFC107" },
      { min: 50, max: 75, color: "#4CAF50" },
      { min: 75, max: 100, color: "#2196F3" },
    ]}
  />
</Card>

// Custom angle gauge
<Card style={{ width: "300px", height: "auto" }}>
  <GaugeChart
    value={85}
    min={0}
    max={100}
    theme="vivid"
    startAngle={210}
    endAngle={-30}
    arcWidth={25}
  />
</Card>
```

## Features

- Display a single value within a specified range
- Color-coded sections based on value ranges
- Customizable start and end angles
- Adjustable arc width
- Multiple theme options
- Custom color ranges
- Responsive design that adapts to different screen sizes
- Animation support
- Customizable value and unit display

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | Required | The value to display on the gauge (between min and max) |
| `min` | `number` | `0` | The minimum value of the gauge |
| `max` | `number` | `100` | The maximum value of the gauge |
| `unit` | `string` | `"%"` | The unit to display after the value |
| `theme` | `"ocean" \| "orchid" \| "emerald" \| "sunset" \| "spectrum" \| "vivid"` | `"ocean"` | The color theme for the gauge |
| `isAnimationActive` | `boolean` | `true` | Whether to animate the gauge |
| `startAngle` | `number` | `180` | The angle to start the gauge from (in degrees, 0 is at 12 o'clock) |
| `endAngle` | `number` | `0` | The angle to end the gauge at (in degrees) |
| `arcWidth` | `number` | `20` | The width of the gauge arc |
| `ranges` | `Array<{min: number, max: number, color: string}>` | `undefined` | The color ranges for the gauge (overrides theme) |
| `label` | `React.ReactNode` | `undefined` | The label to display in the center of the gauge |
| `valueSize` | `number` | `32` | The size of the value text |
| `unitSize` | `number` | `16` | The size of the unit text |
| `showValue` | `boolean` | `true` | Whether to show the value in the center of the gauge |

## Examples

### Default Gauge

```tsx
<GaugeChart
  value={65}
  min={0}
  max={100}
  unit="%"
  theme="ocean"
/>
```

### Custom Color Ranges

```tsx
<GaugeChart
  value={75}
  min={0}
  max={100}
  unit="%"
  ranges={[
    { min: 0, max: 25, color: "#FF5252" },
    { min: 25, max: 50, color: "#FFC107" },
    { min: 50, max: 75, color: "#4CAF50" },
    { min: 75, max: 100, color: "#2196F3" },
  ]}
/>
```

### Semi-Circle Gauge

```tsx
<GaugeChart
  value={42}
  min={0}
  max={100}
  unit="°C"
  theme="sunset"
  arcWidth={30}
  valueSize={36}
  unitSize={18}
/>
```

### Custom Angle Gauge

```tsx
<GaugeChart
  value={85}
  min={0}
  max={100}
  theme="vivid"
  startAngle={210}
  endAngle={-30}
  arcWidth={25}
/>
```

## Accessibility

The Gauge Chart component includes proper ARIA attributes to ensure it can be understood by users with assistive technologies. The value is clearly displayed in the center of the gauge for easy reading.
