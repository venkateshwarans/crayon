# TreeMap Chart Component

The TreeMap chart component visualizes hierarchical data using nested rectangles, where the area of each rectangle is proportional to the value of the data point. This makes it ideal for comparing proportions within categories and displaying hierarchical structures.

## Import

```tsx
import { TreeMap } from "@crayonai/react-ui/Charts/TreeMap";
```

## Usage

```tsx
import { TreeMap } from "@crayonai/react-ui/Charts/TreeMap";

// Sample data
const data = [
  {
    name: "Electronics",
    value: 5000,
    children: [
      { name: "Smartphones", value: 2000 },
      { name: "Laptops", value: 1800 },
      { name: "Accessories", value: 1200 },
    ],
  },
  {
    name: "Clothing",
    value: 3500,
    children: [
      { name: "Men's", value: 1500 },
      { name: "Women's", value: 1600 },
      { name: "Kids", value: 400 },
    ],
  },
  // More categories...
];

function MyTreeMap() {
  return (
    <TreeMap
      data={data}
      theme="ocean"
      legend={true}
      contentFormat="nameValue"
      layoutAlgorithm="squarify"
    />
  );
}
```

## Features

- Hierarchical data visualization with multiple levels of nesting
- Color-coded categories with customizable themes
- Different layout algorithms for different visualization styles
- Tooltips for detailed information on hover
- Customizable content display within rectangles
- Animation support
- Legend support with optional icons

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `TreeMapData` | Required | Data for the tree map visualization |
| `theme` | `"ocean" \| "orchid" \| "emerald" \| "sunset" \| "spectrum" \| "vivid"` | `"ocean"` | Color theme for the chart |
| `legend` | `boolean` | `true` | Whether to show the legend |
| `isAnimationActive` | `boolean` | `true` | Whether to activate animations |
| `icons` | `Record<string, React.ComponentType>` | `{}` | Custom icons to use for legend items |
| `tooltipFormatter` | `Function` | - | Function to format tooltip values |
| `dataKey` | `string` | `"value"` | Value key for the data |
| `contentFormat` | `"value" \| "name" \| "nameValue" \| Function` | `"nameValue"` | Format for the content inside the tree map rectangles |
| `layoutAlgorithm` | `"squarify" \| "binary" \| "slice" \| "dice" \| "sliceDice"` | `"squarify"` | Layout algorithm for the treemap |
| `aspectRatio` | `number` | `1` | Aspect ratio of the treemap rectangles |
| `stroke` | `string` | `"#fff"` | Stroke color for the rectangles |
| `strokeWidth` | `number` | `1` | Stroke width for the rectangles |
| `tooltipContent` | `React.ComponentType<any>` | - | Custom tooltip content component |

## Data Format

The TreeMap component expects data in the following format:

```typescript
type TreeMapData = Array<{
  name: string;      // Name of the category
  value: number;     // Value determining rectangle size
  children?: Array<{  // Optional children for hierarchical data
    name: string;
    value: number;
    children?: Array<{  // Optional grandchildren
      name: string;
      value: number;
    }>;
  }>;
}>;
```

## Layout Algorithms

The TreeMap component supports several layout algorithms:

- **squarify**: Attempts to create rectangles with aspect ratios close to 1 (default)
- **binary**: Recursively divides the space into two parts at each step
- **slice**: Divides rectangles horizontally
- **dice**: Divides rectangles vertically
- **sliceDice**: Alternates between slice and dice divisions

## Content Format

You can customize how content is displayed inside the TreeMap rectangles:

- **nameValue**: Shows both name and value (default)
- **name**: Shows only the name
- **value**: Shows only the value
- **Custom function**: Provide a function that takes name and value and returns a React node

## Responsive Design

The TreeMap component is fully responsive and will adjust to the size of its container.

## Accessibility

The TreeMap includes appropriate ARIA attributes for accessibility and works well with screen readers.

## Browser Support

The TreeMap component works in all modern browsers, including Chrome, Firefox, Safari, and Edge.
