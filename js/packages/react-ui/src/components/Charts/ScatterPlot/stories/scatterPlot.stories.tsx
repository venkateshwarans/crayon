import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { ScatterPlot, ScatterPlotProps } from "../ScatterPlot";

const scatterPlotData = [
  { age: 5, weight: 20 },
  { age: 8, weight: 25 },
  { age: 12, weight: 30 },
  { age: 15, weight: 45 },
  { age: 20, weight: 60 },
];

const meta: Meta<ScatterPlotProps> = {
  title: "Components/Charts/ScatterPlot",
  component: ScatterPlot,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "```tsx\nimport { ScatterPlot } from '@crayon-ui/react-ui/Charts/ScatterPlot';\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description:
        "Array of data points. Each object must have keys corresponding to `xKey` and `yKey`.",
      control: false,
      table: {
        type: { summary: "Array<Record<string, number>>" },
        category: "Data",
      },
    },
    xKey: {
      description: "Key used for x-axis values.",
      control: false,
      table: {
        type: { summary: "string" },
        category: "Data",
      },
    },
    yKey: {
      description: "Key used for y-axis values.",
      control: false,
      table: {
        type: { summary: "string" },
        category: "Data",
      },
    },
    xAxisLabel: {
      description: "Label for the x-axis.",
      control: "text",
      table: {
        type: { summary: "string" },
        category: "Display",
      },
    },
    yAxisLabel: {
      description: "Label for the y-axis.",
      control: "text",
      table: {
        type: { summary: "string" },
        category: "Display",
      },
    },
    theme: {
      description: "Theme for chart styling.",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid"],
      table: {
        category: "Appearance",
      },
    },
    variant: {
      description: "Variant of point style.",
      control: "select",
      options: ["circle", "square", "diamond"],
      table: {
        category: "Appearance",
      },
    },
    pointSize: {
      description: "Size of each scatter point.",
      control: { type: "number", min: 1, max: 20 },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: '5' },
        category: "Appearance",
      },
    },
    grid: {
      description: "Show grid lines.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: 'true' },
        category: "Display",
      },
    },
    label: {
      description: "Show labels for data points.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: 'true' },
        category: "Display",
      },
    },
    legend: {
      description: "Show chart legend.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: 'true' },
        category: "Display",
      },
    },
    isAnimationActive: {
      description: "Enable chart animation.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: 'true' },
        category: "Display",
      },
    },
    showYAxis: {
      description: "Show Y-axis.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: 'true' },
        category: "Display",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicScatterPlot: Story = {
  name: "Basic Scatter Plot",
  args: {
    data: scatterPlotData,
    xKey: "age",
    yKey: "weight",
    theme: "ocean",
    variant: "circle",
    pointSize: 5,
    grid: true,
    label: true,
    legend: true,
    isAnimationActive: true,
    showYAxis: true,
    xAxisLabel: "Age (years)",
    yAxisLabel: "Weight (kg)",
  },
  render: (args) => (
    <Card style={{ width: "500px", height: "400px" }}>
      <ScatterPlot {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
const scatterPlotData = [
  { age: 5, weight: 20 },
  { age: 8, weight: 25 },
  { age: 12, weight: 30 },
  { age: 15, weight: 45 },
  { age: 20, weight: 60 },
];

<Card style={{ width: "500px", height: "400px" }}>
  <ScatterPlot
    data={scatterPlotData}
    xKey="age"
    yKey="weight"
    theme="ocean"
    variant="circle"
    pointSize={5}
    grid
    label
    legend
    isAnimationActive
    showYAxis
    xAxisLabel="Age (years)"
    yAxisLabel="Weight (kg)"
  />
</Card>
        `,
      },
    },
  },
};
