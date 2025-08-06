# Chart Data Schemas

This document defines the JSON schemas for data formats used by various chart components in the Crayon UI library. These schemas ensure consistent data structure and validation for chart visualizations.

## Overview

Each chart schema follows a consistent pattern with three main properties:
- `title`: A descriptive title for the chart
- `description`: A detailed description of what the chart represents
- `data`: The specific data structure required by the chart component

## Bar Chart Schema

### Schema Definition

The Bar Chart schema defines the data format for the `BarChart` component, which displays categorical data with rectangular bars.

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of the bar chart visualization"
    },
    "description": {
      "type": "string",
      "description": "Description of what the bar chart represents"
    },
    "data": {
      "type": "array",
      "description": "Array of data objects where each object represents a data point with a category and one or more numeric values",
      "items": {
        "type": "object",
        "properties": {
          "category": {
            "type": "string",
            "description": "The category label for this data point (e.g., month, year, product name)"
          }
        },
        "patternProperties": {
          "^(?!category$).*": {
            "type": "number",
            "description": "Numeric values for different series to be plotted as bars"
          }
        },
        "required": ["category"],
        "additionalProperties": false
      },
      "minItems": 1
    }
  },
  "required": ["title", "description", "data"],
  "additionalProperties": false
}
```

### Data Structure

- **title** (string, required): Chart title
- **description** (string, required): Chart description
- **data** (array, required): Array of data objects where:
  - Each object must have a `category` field (string) for x-axis labels
  - Additional numeric fields represent different data series for the bars
  - Minimum 1 data point required

### Sample Data

```json
{
  "title": "Monthly Sales Performance",
  "description": "Comparison of desktop and mobile sales across different months showing revenue trends",
  "data": [
    {
      "category": "January",
      "desktop": 150,
      "mobile": 90
    },
    {
      "category": "February", 
      "desktop": 280,
      "mobile": 180
    },
    {
      "category": "March",
      "desktop": 220,
      "mobile": 140
    },
    {
      "category": "April",
      "desktop": 180,
      "mobile": 160
    },
    {
      "category": "May",
      "desktop": 250,
      "mobile": 120
    },
    {
      "category": "June",
      "desktop": 300,
      "mobile": 180
    }
  ]
}
```

---

## Area Chart Schema

### Schema Definition

The Area Chart schema defines the data format for the `AreaChart` component, which displays quantitative data over time with filled areas under the line.

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of the area chart visualization"
    },
    "description": {
      "type": "string",
      "description": "Description of what the area chart represents"
    },
    "data": {
      "type": "array",
      "description": "Array of data objects where each object represents a data point with a category and one or more numeric values for the areas to be plotted",
      "items": {
        "type": "object",
        "properties": {
          "category": {
            "type": "string",
            "description": "The category label for this data point (e.g., month, year, date)"
          }
        },
        "patternProperties": {
          "^(?!category$).*": {
            "type": "number",
            "description": "Numeric values for different series to be plotted as areas"
          }
        },
        "required": ["category"],
        "additionalProperties": false
      },
      "minItems": 1
    }
  },
  "required": ["title", "description", "data"],
  "additionalProperties": false
}
```

### Data Structure

- **title** (string, required): Chart title
- **description** (string, required): Chart description
- **data** (array, required): Array of data objects where:
  - Each object must have a `category` field (string) for x-axis labels
  - Additional numeric fields represent different data series for the areas
  - Minimum 1 data point required

### Sample Data

```json
{
  "title": "Monthly Traffic Trends",
  "description": "Website traffic comparison between desktop and mobile users over time showing growth patterns",
  "data": [
    {
      "category": "January",
      "desktop": 150,
      "mobile": 90
    },
    {
      "category": "February",
      "desktop": 280,
      "mobile": 180
    },
    {
      "category": "March",
      "desktop": 220,
      "mobile": 140
    },
    {
      "category": "April",
      "desktop": 180,
      "mobile": 160
    },
    {
      "category": "May",
      "desktop": 250,
      "mobile": 120
    },
    {
      "category": "June",
      "desktop": 300,
      "mobile": 180
    }
  ]
}
```

---

## Line Chart Schema

### Schema Definition

The Line Chart schema defines the data format for the `LineChart` component, which displays data points connected by straight line segments.

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of the line chart visualization"
    },
    "description": {
      "type": "string",
      "description": "Description of what the line chart represents"
    },
    "data": {
      "type": "array",
      "description": "Array of data objects where each object represents a data point with a category and one or more numeric values for the lines to be plotted",
      "items": {
        "type": "object",
        "properties": {
          "category": {
            "type": "string",
            "description": "The category label for this data point (e.g., month, year, date)"
          }
        },
        "patternProperties": {
          "^(?!category$).*": {
            "type": "number",
            "description": "Numeric values for different series to be plotted as lines"
          }
        },
        "required": ["category"],
        "additionalProperties": false
      },
      "minItems": 1
    }
  },
  "required": ["title", "description", "data"],
  "additionalProperties": false
}
```

### Data Structure

- **title** (string, required): Chart title
- **description** (string, required): Chart description
- **data** (array, required): Array of data objects where:
  - Each object must have a `category` field (string) for x-axis labels
  - Additional numeric fields represent different data series for the lines
  - Minimum 1 data point required

### Sample Data

```json
{
  "title": "Stock Price Trends",
  "description": "Daily stock price comparison between desktop and mobile trading platforms over time",
  "data": [
    {
      "category": "January",
      "desktop": 150,
      "mobile": 90
    },
    {
      "category": "February",
      "desktop": 280,
      "mobile": 180
    },
    {
      "category": "March",
      "desktop": 220,
      "mobile": 140
    },
    {
      "category": "April",
      "desktop": 180,
      "mobile": 160
    },
    {
      "category": "May",
      "desktop": 250,
      "mobile": 120
    },
    {
      "category": "June",
      "desktop": 300,
      "mobile": 180
    }
  ]
}
```

---

## Pie Chart Schema

### Schema Definition

The Pie Chart schema defines the data format for the `PieChart` component, which displays data as slices of a circular chart.

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of the pie chart visualization"
    },
    "description": {
      "type": "string",
      "description": "Description of what the pie chart represents"
    },
    "data": {
      "type": "array",
      "description": "Array of data objects where each object represents a slice of the pie with a category and a single numeric value",
      "items": {
        "type": "object",
        "properties": {
          "category": {
            "type": "string",
            "description": "The category label for this slice (e.g., month, product, region)"
          },
          "value": {
            "type": "number",
            "description": "The numeric value for this slice"
          }
        },
        "required": ["category", "value"],
        "additionalProperties": false
      },
      "minItems": 1
    }
  },
  "required": ["title", "description", "data"],
  "additionalProperties": false
}
```

### Data Structure

- **title** (string, required): Chart title
- **description** (string, required): Chart description
- **data** (array, required): Array of data objects where:
  - Each object must have a `category` field (string) for slice labels
  - Each object must have a `value` field (number) for slice size
  - Minimum 1 data point required

### Sample Data

```json
{
  "title": "Monthly Revenue Distribution",
  "description": "Revenue breakdown by month showing relative contribution to total annual revenue",
  "data": [
    {
      "category": "January",
      "value": 4250
    },
    {
      "category": "February",
      "value": 3820
    },
    {
      "category": "March",
      "value": 4680
    },
    {
      "category": "April",
      "value": 4120
    },
    {
      "category": "May",
      "value": 5340
    },
    {
      "category": "June",
      "value": 6250
    },
    {
      "category": "July",
      "value": 5890
    }
  ]
}
```

---

## Radar Chart Schema

### Schema Definition

The Radar Chart schema defines the data format for the `RadarChart` component, which displays multivariate data on a two-dimensional chart with multiple axes.

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of the radar chart visualization"
    },
    "description": {
      "type": "string",
      "description": "Description of what the radar chart represents"
    },
    "data": {
      "type": "array",
      "description": "Array of data objects where each object represents a data point with a category and one or more numeric values for the radar axes",
      "items": {
        "type": "object",
        "properties": {
          "category": {
            "type": "string",
            "description": "The category label for this data point (e.g., skill, metric, dimension)"
          }
        },
        "patternProperties": {
          "^(?!category$).*": {
            "type": "number",
            "description": "Numeric values for different series to be plotted on the radar"
          }
        },
        "required": ["category"],
        "additionalProperties": false
      },
      "minItems": 1
    }
  },
  "required": ["title", "description", "data"],
  "additionalProperties": false
}
```

### Data Structure

- **title** (string, required): Chart title
- **description** (string, required): Chart description
- **data** (array, required): Array of data objects where:
  - Each object must have a `category` field (string) for axis labels
  - Additional numeric fields represent different data series for the radar
  - Minimum 1 data point required

### Sample Data

```json
{
  "title": "Performance Metrics Comparison",
  "description": "Multi-dimensional performance comparison between desktop and mobile platforms across different metrics",
  "data": [
    {
      "category": "Speed",
      "desktop": 250,
      "mobile": 150
    },
    {
      "category": "Reliability",
      "desktop": 280,
      "mobile": 180
    },
    {
      "category": "Usability",
      "desktop": 220,
      "mobile": 140
    },
    {
      "category": "Security",
      "desktop": 180,
      "mobile": 160
    },
    {
      "category": "Performance",
      "desktop": 250,
      "mobile": 120
    },
    {
      "category": "Scalability",
      "desktop": 300,
      "mobile": 180
    }
  ]
}
```

---

## Radial Chart Schema

### Schema Definition

The Radial Chart schema defines the data format for the `RadialChart` component, which displays data in a circular bar format.

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of the radial chart visualization"
    },
    "description": {
      "type": "string",
      "description": "Description of what the radial chart represents"
    },
    "data": {
      "type": "array",
      "description": "Array of data objects where each object represents a radial bar with a category and a single numeric value",
      "items": {
        "type": "object",
        "properties": {
          "category": {
            "type": "string",
            "description": "The category label for this radial bar (e.g., month, product, region)"
          },
          "value": {
            "type": "number",
            "description": "The numeric value for this radial bar"
          }
        },
        "required": ["category", "value"],
        "additionalProperties": false
      },
      "minItems": 1
    }
  },
  "required": ["title", "description", "data"],
  "additionalProperties": false
}
```

### Data Structure

- **title** (string, required): Chart title
- **description** (string, required): Chart description
- **data** (array, required): Array of data objects where:
  - Each object must have a `category` field (string) for radial bar labels
  - Each object must have a `value` field (number) for radial bar size
  - Minimum 1 data point required

### Sample Data

```json
{
  "title": "Monthly Progress Tracking",
  "description": "Monthly progress values displayed in a radial format showing completion levels",
  "data": [
    {
      "category": "January",
      "value": 400
    },
    {
      "category": "February",
      "value": 300
    },
    {
      "category": "March",
      "value": 300
    },
    {
      "category": "April",
      "value": 400
    },
    {
      "category": "May",
      "value": 300
    },
    {
      "category": "June",
      "value": 300
    },
    {
      "category": "July",
      "value": 300
    }
  ]
}
```

---

## Table Schema

### Schema Definition

The Table schema defines the data format for the `Table` component, which displays structured data in rows and columns.

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of the table"
    },
    "description": {
      "type": "string",
      "description": "Description of what the table represents"
    },
    "headers": {
      "type": "array",
      "description": "Array of column headers for the table",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "description": "Unique identifier for the column"
          },
          "label": {
            "type": "string",
            "description": "Display label for the column header"
          },
          "icon": {
            "type": "string",
            "description": "Optional icon name for the column header"
          }
        },
        "required": ["key", "label"],
        "additionalProperties": false
      },
      "minItems": 1
    },
    "data": {
      "type": "array",
      "description": "Array of row data objects where each object represents a row with values for each column",
      "items": {
        "type": "object",
        "description": "Row data object with keys matching the header keys",
        "additionalProperties": {
          "oneOf": [
            {"type": "string"},
            {"type": "number"},
            {"type": "boolean"},
            {"type": "null"}
          ]
        }
      },
      "minItems": 1
    }
  },
  "required": ["title", "description", "headers", "data"],
  "additionalProperties": false
}
```

### Data Structure

- **title** (string, required): Table title
- **description** (string, required): Table description
- **headers** (array, required): Array of column header objects where:
  - Each header must have a `key` field (string) for column identification
  - Each header must have a `label` field (string) for display
  - Each header can have an optional `icon` field (string) for header icons
  - Minimum 1 header required
- **data** (array, required): Array of row objects where:
  - Each row object contains key-value pairs matching header keys
  - Values can be strings, numbers, or booleans
  - Minimum 1 row required

### Sample Data

```json
{
  "title": "Invoice Management",
  "description": "A comprehensive list of recent invoices with payment status and details",
  "headers": [
    {
      "key": "invoice",
      "label": "Invoice",
      "icon": "stamp"
    },
    {
      "key": "status",
      "label": "Status",
      "icon": "circle-check"
    },
    {
      "key": "method",
      "label": "Method",
      "icon": "credit-card"
    },
    {
      "key": "amount",
      "label": "Amount",
      "icon": "dollar-sign"
    }
  ],
  "data": [
    {
      "invoice": "INV001",
      "status": "Paid",
      "method": "Credit Card",
      "amount": "$250.00"
    },
    {
      "invoice": "INV002",
      "status": "Pending",
      "method": "PayPal",
      "amount": "$150.00"
    },
    {
      "invoice": "INV003",
      "status": "Unpaid",
      "method": "Bank Transfer",
      "amount": "$350.00"
    },
    {
      "invoice": "INV004",
      "status": "Paid",
      "method": "Credit Card",
      "amount": "$450.00"
    }
  ]
}
```

---

## Adding New Chart Schemas

When adding schemas for new chart components:

1. Add the schema definition and sample data to this document following the pattern above
2. Ensure the schema follows the consistent structure with `title`, `description`, and `data` properties

### Schema Guidelines

- Keep schemas focused on data format only (no component props)
- Use descriptive field names and descriptions
- Include validation rules (required fields, data types, constraints)
- Provide clear examples in sample data
- Follow JSON Schema specification standards

---

## Scorecard Schema

### Schema Definition

The Scorecard schema defines the data format for the `Scorecard` component, which displays a single KPI value with optional comparison indicator and sparkline.

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of the scorecard visualization"
    },
    "description": {
      "type": "string",
      "description": "Description of what the scorecard represents"
    },
    "data": {
      "type": "object",
      "description": "Object containing the primary value, optional comparison value, and optional sparkline data",
      "properties": {
        "value": {
          "oneOf": [
            { "type": "number" },
            { "type": "string" },
            { "type": "boolean" },
            { "type": "null" }
          ],
          "description": "The primary value to display in the scorecard"
        },
        "comparisonValue": {
          "type": "number",
          "description": "Optional comparison value to show trend/progress"
        },
        "comparisonLabel": {
          "type": "string",
          "description": "Optional label for the comparison value"
        },
        "showAsProgress": {
          "type": "boolean",
          "description": "Whether to show the comparison as progress towards a target",
          "default": false
        },
        "sparklineData": {
          "type": "array",
          "description": "Data for the sparkline if enabled",
          "items": {
            "type": "object",
            "properties": {
              "value": {
                "type": "number",
                "description": "Numeric value for the sparkline data point"
              }
            },
            "required": ["value"],
            "additionalProperties": false
          }
        },
        "valueFormat": {
          "type": "string",
          "enum": ["number", "currency", "percentage", "compact"],
          "description": "Format for displaying the value",
          "default": "number"
        },
        "comparisonFormat": {
          "type": "string",
          "enum": ["number", "currency", "percentage", "compact"],
          "description": "Format for displaying the comparison value",
          "default": "percentage"
        }
      },
      "required": ["value"],
      "additionalProperties": false
    },
    "theme": {
      "type": "string",
      "enum": ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid"],
      "description": "Color theme for the scorecard",
      "default": "ocean"
    },
    "size": {
      "type": "string",
      "enum": ["compact", "small", "medium", "large", "hero"],
      "description": "Size variant of the scorecard",
      "default": "medium"
    }
  },
  "required": ["title", "description", "data"],
  "additionalProperties": false
}
```

### Data Structure

- **title** (string, required): Scorecard title
- **description** (string, required): Scorecard description
- **data** (object, required): Object containing:
  - **value** (number|string, required): The primary value to display
  - **comparisonValue** (number, optional): Comparison value for trend/progress
  - **comparisonLabel** (string, optional): Label for the comparison value
  - **showAsProgress** (boolean, optional): Whether to show as progress towards target
  - **sparklineData** (array, optional): Array of data points for sparkline
  - **valueFormat** (string, optional): Format for displaying the main value
  - **comparisonFormat** (string, optional): Format for displaying the comparison value
- **theme** (string, optional): Color theme for the scorecard
- **size** (string, optional): Size variant of the scorecard

### Sample Data

```json
{
  "title": "Monthly Active Users",
  "description": "Number of active users this month with comparison to previous month",
  "data": {
    "value": 44811,
    "comparisonValue": 38500,
    "comparisonLabel": "Previous month",
    "showAsProgress": false,
    "valueFormat": "number",
    "comparisonFormat": "percentage",
    "sparklineData": [
      { "value": 32500 },
      { "value": 34800 },
      { "value": 36200 },
      { "value": 35400 },
      { "value": 37800 },
      { "value": 38500 },
      { "value": 44811 }
    ]
  },
  "theme": "ocean",
  "size": "medium"
}
```

Another example with progress bar:

```json
{
  "title": "Sales Target",
  "description": "Progress towards quarterly sales target",
  "data": {
    "value": 856420,
    "comparisonValue": 1000000,
    "comparisonLabel": "Q3 Target",
    "showAsProgress": true,
    "valueFormat": "currency",
    "comparisonFormat": "percentage"
  },
  "theme": "emerald",
  "size": "large"
}
```
