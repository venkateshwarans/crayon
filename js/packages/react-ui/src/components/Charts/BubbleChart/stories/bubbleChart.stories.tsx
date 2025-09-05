import type { Meta, StoryObj } from "@storybook/react";
import { Monitor, TabletSmartphone, Smartphone, Laptop } from "lucide-react";
import { Card } from "../../../Card";
import { BubbleChart, BubbleChartProps } from "../BubbleChart";

const bubbleChartData = [
  { category: "Mobile", sales: 120, users: 1500, size: 30, device: "Smartphone" },
  { category: "Tablet", sales: 300, users: 2200, size: 45, device: "Tablet" },
  { category: "Desktop", sales: 450, users: 3000, size: 60, device: "Desktop" },
  { category: "Laptop", sales: 280, users: 2800, size: 50, device: "Laptop" },
  { category: "Mobile", sales: 200, users: 1800, size: 35, device: "Smartphone" },
  { category: "Desktop", sales: 500, users: 3200, size: 65, device: "Desktop" },
  { category: "Tablet", sales: 250, users: 2000, size: 40, device: "Tablet" },
  { category: "Laptop", sales: 320, users: 2600, size: 55, device: "Laptop" },
];

const icons = {
  Smartphone: Smartphone,
  Tablet: TabletSmartphone,
  Desktop: Monitor,
  Laptop: Laptop,
} as const;

const meta: Meta<BubbleChartProps<typeof bubbleChartData>> = {
  title: "Components/Charts/BubbleChart",
  component: BubbleChart,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\nimport { BubbleChart } from '@crayon-ui/react-ui/Charts/BubbleChart';\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description:
        "An array of data objects where each object represents a data point with x, y, and optionally z values for the bubble size.",
      control: false,
      table: {
        type: { summary: "Array<Record<string, string | number>>" },
        defaultValue: { summary: "[]" },
        category: "Data",
      },
    },
    xAxisKey: {
      description:
        "The key from your data object to be used as the x-axis values.",
      control: false,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "string" },
        category: "Data",
      },
    },
    yAxisKey: {
      description:
        "The key from your data object to be used as the y-axis values.",
      control: false,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "string" },
        category: "Data",
      },
    },
    zAxisKey: {
      description:
        "The key from your data object to be used for the bubble size (optional).",
      control: false,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Data",
      },
    },
    nameKey: {
      description:
        "The key from your data object to be used as the name for each bubble in tooltips (optional).",
      control: false,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Data",
      },
    },
    seriesKey: {
      description:
        "The key from your data object to group data points into different series (optional).",
      control: false,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
        category: "Data",
      },
    },
    theme: {
      description:
        "The color palette theme for the chart. Each theme provides a different set of colors for the bubbles.",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid", "iq"],
      table: {
        defaultValue: { summary: "ocean" },
        category: "Appearance",
      },
    },
    icons: {
      description:
        "An object that maps series names to icon components. These icons will appear in the legend next to their corresponding data series.",
      control: false,
      table: {
        type: { summary: "Record<string, React.ComponentType>" },
        defaultValue: { summary: "{}" },
        category: "Appearance",
      },
    },
    zAxisRange: {
      description:
        "The minimum and maximum size range for the bubbles [min, max].",
      control: false,
      table: {
        type: { summary: "[number, number]" },
        defaultValue: { summary: "[400, 2000]" },
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
    showYAxis: {
      description: "Whether to display the y-axis",
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
        defaultValue: { summary: "true" },
        category: "Display",
      },
    },
    xAxisLabel: {
      description: "The label for the x-axis",
      control: false,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "string" },
        category: "Data",
      },
    },
    yAxisLabel: {
      description: "The label for the y-axis",
      control: false,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "string" },
        category: "Data",
      },
    },
  },
} satisfies Meta<typeof BubbleChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BubbleChartStory: Story = {
  name: "Bubble Chart",
  args: {
    data: bubbleChartData,
    xAxisKey: "sales",
    yAxisKey: "users",
    zAxisKey: "size",
    nameKey: "category",
    theme: "ocean",
    grid: true,
    legend: true,
    isAnimationActive: true,
    showYAxis: true,
    showXAxis: true,
    xAxisLabel: "Sales",
    yAxisLabel: "Users",
    seriesKey: "device",
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, xAxisKey, yAxisKey, ...restArgs } = args;
    
    return (
      <Card style={{ width: "600px", height: "auto" }}>
        <BubbleChart data={data} xAxisKey={xAxisKey} yAxisKey={yAxisKey} {...restArgs} icons={icons} />
      </Card>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const bubbleChartData = [
  { category: "Mobile", sales: 120, users: 1500, size: 30, device: "Smartphone" },
  { category: "Tablet", sales: 300, users: 2200, size: 45, device: "Tablet" },
  { category: "Desktop", sales: 450, users: 3000, size: 60, device: "Desktop" },
  { category: "Laptop", sales: 280, users: 2800, size: 50, device: "Laptop" },
  { category: "Mobile", sales: 200, users: 1800, size: 35, device: "Smartphone" },
  { category: "Desktop", sales: 500, users: 3200, size: 65, device: "Desktop" },
  { category: "Tablet", sales: 250, users: 2000, size: 40, device: "Tablet" },
  { category: "Laptop", sales: 320, users: 2600, size: 55, device: "Laptop" },
];

const icons = {
  Smartphone: Smartphone,
  Tablet: TabletSmartphone,
  Desktop: Monitor,
  Laptop: Laptop,
};

<Card style={{ width: "600px", height: "auto" }}>
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
`,
      },
    },
  },
};

export const WithoutSeries: Story = {
  name: "Without Series Grouping",
  args: {
    data: bubbleChartData,
    xAxisKey: "sales",
    yAxisKey: "users",
    zAxisKey: "size",
    nameKey: "category",
    theme: "emerald",
    grid: true,
    legend: true,
    isAnimationActive: true,
    showYAxis: true,
    showXAxis: true,
    xAxisLabel: "Sales",
    yAxisLabel: "Users",
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, xAxisKey, yAxisKey, ...restArgs } = args;
    
    return (
      <Card style={{ width: "600px", height: "auto" }}>
        <BubbleChart data={data} xAxisKey={xAxisKey} yAxisKey={yAxisKey} {...restArgs} />
      </Card>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const bubbleChartData = [
  { category: "Mobile", sales: 120, users: 1500, size: 30, device: "Smartphone" },
  { category: "Tablet", sales: 300, users: 2200, size: 45, device: "Tablet" },
  { category: "Desktop", sales: 450, users: 3000, size: 60, device: "Desktop" },
  { category: "Laptop", sales: 280, users: 2800, size: 50, device: "Laptop" },
  { category: "Mobile", sales: 200, users: 1800, size: 35, device: "Smartphone" },
  { category: "Desktop", sales: 500, users: 3200, size: 65, device: "Desktop" },
  { category: "Tablet", sales: 250, users: 2000, size: 40, device: "Tablet" },
  { category: "Laptop", sales: 320, users: 2600, size: 55, device: "Laptop" },
];

<Card style={{ width: "600px", height: "auto" }}>
  <BubbleChart
    data={bubbleChartData}
    xAxisKey="sales"
    yAxisKey="users"
    zAxisKey="size"
    nameKey="category"
    theme="emerald"
    grid={true}
    legend={true}
    isAnimationActive={true}
    showYAxis={true}
    showXAxis={true}
    xAxisLabel="Sales"
    yAxisLabel="Users"
  />
</Card>
`,
      },
    },
  },
};

export const CustomTheme: Story = {
  name: "Custom Theme",
  args: {
    data: bubbleChartData,
    xAxisKey: "sales",
    yAxisKey: "users",
    zAxisKey: "size",
    nameKey: "category",
    theme: "sunset",
    grid: true,
    legend: true,
    isAnimationActive: true,
    showYAxis: true,
    showXAxis: true,
    seriesKey: "device",
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, xAxisKey, yAxisKey, ...restArgs } = args;
    
    return (
      <Card style={{ width: "600px", height: "auto" }}>
        <BubbleChart data={data} xAxisKey={xAxisKey} yAxisKey={yAxisKey} {...restArgs} icons={icons} />
      </Card>
    );
  },
};
