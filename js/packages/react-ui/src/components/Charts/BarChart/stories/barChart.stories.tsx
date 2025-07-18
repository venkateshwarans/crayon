import type { Meta, StoryObj } from "@storybook/react";
import { Monitor, TabletSmartphone } from "lucide-react";
import { Card } from "../../../Card";
import { BarChart, BarChartProps } from "../BarChart";

const barChartData = [
  { month: "January", desktop: 150, mobile: 90 },
  { month: "February", desktop: 280, mobile: 180 },
  { month: "March", desktop: 220, mobile: 140 },
  { month: "April", desktop: 180, mobile: 160 },
  { month: "May", desktop: 250, mobile: 120 },
  { month: "June", desktop: 300, mobile: 180 },
];

const icons = {
  desktop: Monitor,
  mobile: TabletSmartphone,
} as const;

const meta: Meta<BarChartProps<typeof barChartData>> = {
  title: "Components/Charts/BarChart",
  component: BarChart,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\nimport { BarChart } from '@crayon-ui/react-ui/Charts/BarChart';\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description:
        "An array of data objects where each object represents a data point. Each object should have a category field (e.g., month) and one or more numeric values for the areas to be plotted.",
      control: false,
      table: {
        type: { summary: "Array<Record<string, string | number>>" },
        defaultValue: { summary: "[]" },
        category: "Data",
      },
    },
    categoryKey: {
      description:
        "The key from your data object to be used as the x-axis categories (e.g., 'month', 'year', 'date')",
      control: false,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "string" },
        category: "Data",
      },
    },
    theme: {
      description:
        "The color palette theme for the chart. Each theme provides a different set of colors for the areas.",
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
        "The style of the bar chart. 'grouped' shows bars side by side, while 'stacked' shows bars stacked on top of each other.",
      control: "radio",
      options: ["grouped", "stacked"],
      table: {
        defaultValue: { summary: "grouped" },
        category: "Appearance",
      },
    },
    radius: {
      description: "The radius of the rounded corners of the bars",
      control: false,
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
      description: "Whether to display data point labels above each point on the chart",
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
        defaultValue: { summary: "false" },
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
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BarChartStory: Story = {
  name: "Bar Chart",
  args: {
    data: barChartData,
    categoryKey: "month",
    theme: "ocean",
    variant: "grouped",
    radius: 4,
    grid: true,
    label: true,
    legend: true,
    isAnimationActive: true,
    showYAxis: false,
  },
  render: (args: any) => (
    <Card style={{ width: "500px" }}>
      <BarChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
const barChartData = [
  { month: "January", desktop: 150, mobile: 90 },
  { month: "February", desktop: 280, mobile: 180 },
  { month: "March", desktop: 220, mobile: 140 },
  { month: "April", desktop: 180, mobile: 160 },
  { month: "May", desktop: 250, mobile: 120 },
  { month: "June", desktop: 300, mobile: 180 },
];

<Card
  style={{
    width: '500px'
  }}
>
  <BarChart
    categoryKey="month"
    data={barChartData}
    grid
    label
    legend
    radius={4}
    theme="sunset"
    variant="grouped"
    isAnimationActive
  />
</Card>
`,
      },
    },
  },
};

export const BarChartStoryWithIcons: Story = {
  name: "Bar Chart with Icons",
  args: {
    ...BarChartStory.args,
    icons: icons,
  },
  render: (args: any) => (
    <Card style={{ width: "500px" }}>
      <BarChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
  import { Monitor, TabletSmartphone } from "lucide-react";

    const barChartData = [
      { month: "January", desktop: 150, mobile: 90 },
      { month: "February", desktop: 280, mobile: 180 },
      { month: "March", desktop: 220, mobile: 140 },
      { month: "April", desktop: 180, mobile: 160 },
      { month: "May", desktop: 250, mobile: 120 },
      { month: "June", desktop: 300, mobile: 180 },
    ];

    const icons = {
      desktop: Monitor,
      mobile: TabletSmartphone,
    };

    <Card style={{ width: "500px" }}>
      <BarChart
        categoryKey="month"
        data={barChartData}
        grid
        label
        legend
        radius={4}
        theme="sunset"
        variant="grouped"
        icons={icons}
        isAnimationActive
      />
    </Card>
    `,
      },
    },
  },
};

export const BarChartStoryWithYAxis: Story = {
  name: "Bar Chart with Y-Axis and Axis Labels",
  args: {
    ...BarChartStory.args,
    showYAxis: true,
    xAxisLabel: "Time Period",
    yAxisLabel: "Number of Users",
  },
  render: (args: any) => (
    <Card style={{ width: "500px" }}>
      <BarChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
  import { Monitor, TabletSmartphone } from "lucide-react";

    const barChartData = [
      { month: "January", desktop: 150, mobile: 90 },
      { month: "February", desktop: 280, mobile: 180 },
      { month: "March", desktop: 220, mobile: 140 },
      { month: "April", desktop: 180, mobile: 160 },
      { month: "May", desktop: 250, mobile: 120 },
      { month: "June", desktop: 300, mobile: 180 },
    ];

    <Card style={{ width: "500px" }}>
      <BarChart
        categoryKey="month"
        data={barChartData}
        grid
        label
        legend
        radius={4}
        theme="sunset"
        variant="grouped"
        isAnimationActive
        showYAxis
        xAxisLabel="Time Period"
        yAxisLabel="Number of Users"
      />
    </Card>
    `,
      },
    },
  },
};
