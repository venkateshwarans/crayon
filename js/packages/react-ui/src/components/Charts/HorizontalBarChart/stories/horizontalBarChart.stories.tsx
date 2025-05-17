import type { Meta, StoryObj } from "@storybook/react";
import { Monitor, TabletSmartphone, Smartphone } from "lucide-react";
import { Card } from "../../../Card";
import { HorizontalBarChart, HorizontalBarChartProps } from "../HorizontalBarChart";

const horizontalBarChartData = [
  { category: "Category A", value1: 150, value2: 90, value3: 60 },
  { category: "Category B", value1: 280, value2: 180, value3: 120 },
  { category: "Category C", value1: 220, value2: 140, value3: 100 },
  { category: "Category D", value1: 180, value2: 160, value3: 80 },
  { category: "Category E", value1: 250, value2: 120, value3: 90 },
  { category: "Category F", value1: 300, value2: 180, value3: 110 },
];

const icons = {
  value1: Monitor,
  value2: TabletSmartphone,
  value3: Smartphone,
} as const;

const meta: Meta<HorizontalBarChartProps<typeof horizontalBarChartData>> = {
  title: "Components/Charts/HorizontalBarChart",
  component: HorizontalBarChart,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\nimport { HorizontalBarChart } from '@crayon-ui/react-ui/Charts/HorizontalBarChart';\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description:
        "An array of data objects where each object represents a data point. Each object should have a category field and one or more numeric values for the bars.",
      control: false,
      table: {
        type: { summary: "Array<Record<string, string | number>>" },
        defaultValue: { summary: "[]" },
        category: "Data",
      },
    },
    categoryKey: {
      description:
        "The key from your data object to be used as the y-axis categories",
      control: false,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "string" },
        category: "Data",
      },
    },
    theme: {
      description:
        "The color palette theme for the chart. Each theme provides a different set of colors for the bars.",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid"],
      table: {
        defaultValue: { summary: "ocean" },
        category: "Appearance",
      },
    },
    icons: {
      description:
        "An object that maps data keys to icon components. These icons will appear in the legend next to their corresponding data series.",
      control: false,
      table: {
        type: { summary: "Record<string, React.ComponentType>" },
        defaultValue: { summary: "{}" },
        category: "Appearance",
      },
    },
    variant: {
      description:
        "The style of the bar chart. 'grouped' shows bars side by side, while 'stacked' shows bars stacked.",
      control: "radio",
      options: ["grouped", "stacked"],
      table: {
        defaultValue: { summary: "grouped" },
        category: "Appearance",
      },
    },
    radius: {
      description: "The radius of the rounded corners of the bars",
      control: { type: "range", min: 0, max: 20, step: 1 },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "4" },
        category: "Appearance",
      },
    },
    grid: {
      description: "Whether to display the background grid lines in the chart",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Display",
      },
    },
    label: {
      description: "Whether to display data point labels at the end of each bar",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Display",
      },
    },
    legend: {
      description:
        "Whether to display the chart legend showing the data series names and their corresponding colors/icons",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Display",
      },
    },
    isAnimationActive: {
      description: "Whether to animate the chart",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Display",
      },
    },
    showXAxis: {
      description: "Whether to display the x-axis",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Display",
      },
    },
    xAxisLabel: {
      description: "The label for the x-axis",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Data",
      },
    },
    yAxisLabel: {
      description: "The label for the y-axis",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Data",
      },
    },
  },
} satisfies Meta<typeof HorizontalBarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalBarChartStory: Story = {
  name: "Horizontal Bar Chart",
  args: {
    data: horizontalBarChartData,
    categoryKey: "category",
    theme: "ocean",
    variant: "grouped",
    radius: 4,
    grid: true,
    label: true,
    legend: true,
    isAnimationActive: true,
    showXAxis: false,
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <HorizontalBarChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
const horizontalBarChartData = [
  { category: "Category A", value1: 150, value2: 90, value3: 60 },
  { category: "Category B", value1: 280, value2: 180, value3: 120 },
  { category: "Category C", value1: 220, value2: 140, value3: 100 },
  { category: "Category D", value1: 180, value2: 160, value3: 80 },
  { category: "Category E", value1: 250, value2: 120, value3: 90 },
  { category: "Category F", value1: 300, value2: 180, value3: 110 },
];

<Card style={{ width: "600px", height: "auto" }}>
  <HorizontalBarChart
    data={horizontalBarChartData}
    categoryKey="category"
    theme="ocean"
    variant="grouped"
    radius={4}
    grid={true}
    legend={true}
    label={true}
    isAnimationActive
  />
</Card>`,
      },
    },
  },
};

export const HorizontalBarChartStoryWithIcons: Story = {
  name: "Horizontal Bar Chart with Icons",
  args: {
    ...HorizontalBarChartStory.args,
    icons: icons,
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <HorizontalBarChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
import { Monitor, TabletSmartphone, Smartphone } from "lucide-react";

const horizontalBarChartData = [
  { category: "Category A", value1: 150, value2: 90, value3: 60 },
  { category: "Category B", value1: 280, value2: 180, value3: 120 },
  { category: "Category C", value1: 220, value2: 140, value3: 100 },
  { category: "Category D", value1: 180, value2: 160, value3: 80 },
  { category: "Category E", value1: 250, value2: 120, value3: 90 },
  { category: "Category F", value1: 300, value2: 180, value3: 110 },
];

const icons = {
  value1: Monitor,
  value2: TabletSmartphone,
  value3: Smartphone,
};

<Card style={{ width: "600px", height: "auto" }}>
  <HorizontalBarChart
    data={horizontalBarChartData}
    categoryKey="category"
    theme="ocean"
    variant="grouped"
    radius={4}
    grid={true}
    legend={true}
    label={true}
    icons={icons}
    isAnimationActive
  />
</Card>`,
      },
    },
  },
};

export const HorizontalBarChartStoryStacked: Story = {
  name: "Stacked Horizontal Bar Chart",
  args: {
    ...HorizontalBarChartStory.args,
    variant: "stacked",
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <HorizontalBarChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
const horizontalBarChartData = [
  { category: "Category A", value1: 150, value2: 90, value3: 60 },
  { category: "Category B", value1: 280, value2: 180, value3: 120 },
  { category: "Category C", value1: 220, value2: 140, value3: 100 },
  { category: "Category D", value1: 180, value2: 160, value3: 80 },
  { category: "Category E", value1: 250, value2: 120, value3: 90 },
  { category: "Category F", value1: 300, value2: 180, value3: 110 },
];

<Card style={{ width: "600px", height: "auto" }}>
  <HorizontalBarChart
    data={horizontalBarChartData}
    categoryKey="category"
    theme="ocean"
    variant="stacked"
    radius={4}
    grid={true}
    legend={true}
    label={true}
    isAnimationActive
  />
</Card>`,
      },
    },
  },
};

export const HorizontalBarChartStoryWithAxisLabels: Story = {
  name: "Horizontal Bar Chart with Axis Labels",
  args: {
    ...HorizontalBarChartStory.args,
    showXAxis: true,
    xAxisLabel: "Values",
    yAxisLabel: "Categories",
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <HorizontalBarChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
const horizontalBarChartData = [
  { category: "Category A", value1: 150, value2: 90, value3: 60 },
  { category: "Category B", value1: 280, value2: 180, value3: 120 },
  { category: "Category C", value1: 220, value2: 140, value3: 100 },
  { category: "Category D", value1: 180, value2: 160, value3: 80 },
  { category: "Category E", value1: 250, value2: 120, value3: 90 },
  { category: "Category F", value1: 300, value2: 180, value3: 110 },
];

<Card style={{ width: "400px", height: "auto" }}>
  <HorizontalBarChart
    data={horizontalBarChartData}
    categoryKey="category"
    theme="ocean"
    variant="grouped"
    radius={4}
    grid={true}
    legend={true}
    label={true}
    isAnimationActive
    showXAxis
    xAxisLabel="Values"
    yAxisLabel="Categories"
  />
</Card>`,
      },
    },
  },
};
