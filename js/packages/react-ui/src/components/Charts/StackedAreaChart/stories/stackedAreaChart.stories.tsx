import type { Meta, StoryObj } from "@storybook/react";
import { Monitor, TabletSmartphone, Smartphone } from "lucide-react";
import { Card } from "../../../Card";
import { StackedAreaChart, StackedAreaChartProps } from "../StackedAreaChart";

const stackedAreaChartData = [
  { month: "January", desktop: 150, tablet: 90, mobile: 60 },
  { month: "February", desktop: 280, tablet: 180, mobile: 120 },
  { month: "March", desktop: 220, tablet: 140, mobile: 100 },
  { month: "April", desktop: 180, tablet: 160, mobile: 80 },
  { month: "May", desktop: 250, tablet: 120, mobile: 90 },
  { month: "June", desktop: 300, tablet: 180, mobile: 110 },
];

const icons = {
  desktop: Monitor,
  tablet: TabletSmartphone,
  mobile: Smartphone,
} as const;

const meta: Meta<StackedAreaChartProps<typeof stackedAreaChartData>> = {
  title: "Components/Charts/StackedAreaChart",
  component: StackedAreaChart,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\nimport { StackedAreaChart } from '@crayon-ui/react-ui/Charts/StackedAreaChart';\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description:
        "An array of data objects where each object represents a data point. Each object should have a category field (e.g., month) and one or more numeric values for the areas to be stacked.",
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
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid", "iq"],
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
        "The interpolation method used to create the area curves. 'linear' creates straight lines between points, 'natural' creates smooth curves, and 'step' creates a stepped area.",
      control: "radio",
      options: ["linear", "natural", "step"],
      table: {
        defaultValue: { summary: "natural" },
        category: "Appearance",
      },
    },
    opacity: {
      description:
        "The opacity of the filled area beneath each line (0 = fully transparent, 1 = fully opaque)",
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0.5" },
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
} satisfies Meta<typeof StackedAreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StackedAreaChartStory: Story = {
  name: "Stacked Area Chart",
  args: {
    data: stackedAreaChartData,
    categoryKey: "month",
    theme: "ocean",
    variant: "linear",
    opacity: 0.5,
    grid: true,
    legend: true,
    label: true,
    isAnimationActive: true,
    showYAxis: false,
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, categoryKey, ...restArgs } = args;
    
    return (
      <Card style={{ width: "500px" }}>
        <StackedAreaChart data={data} categoryKey={categoryKey} {...restArgs} />
      </Card>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const stackedAreaChartData = [
  { month: "January", desktop: 150, tablet: 90, mobile: 60 },
  { month: "February", desktop: 280, tablet: 180, mobile: 120 },
  { month: "March", desktop: 220, tablet: 140, mobile: 100 },
  { month: "April", desktop: 180, tablet: 160, mobile: 80 },
  { month: "May", desktop: 250, tablet: 120, mobile: 90 },
  { month: "June", desktop: 300, tablet: 180, mobile: 110 },
];

<Card style={{ width: "500px" }}>
  <StackedAreaChart
    data={stackedAreaChartData}
    categoryKey="month"
    theme="ocean"
    variant="linear"
    opacity={0.5}
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

export const StackedAreaChartStoryWithIcons: Story = {
  name: "Stacked Area Chart with Icons",
  args: {
    ...StackedAreaChartStory.args,
    icons: icons,
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, categoryKey, ...restArgs } = args;
    
    return (
      <Card style={{ width: "500px" }}>
        <StackedAreaChart data={data} categoryKey={categoryKey} {...restArgs} />
      </Card>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Monitor, TabletSmartphone, Smartphone } from "lucide-react";

const stackedAreaChartData = [
  { month: "January", desktop: 150, tablet: 90, mobile: 60 },
  { month: "February", desktop: 280, tablet: 180, mobile: 120 },
  { month: "March", desktop: 220, tablet: 140, mobile: 100 },
  { month: "April", desktop: 180, tablet: 160, mobile: 80 },
  { month: "May", desktop: 250, tablet: 120, mobile: 90 },
  { month: "June", desktop: 300, tablet: 180, mobile: 110 },
];

const icons = {
  desktop: Monitor,
  tablet: TabletSmartphone,
  mobile: Smartphone,
};

<Card style={{ width: "500px" }}>
  <StackedAreaChart
    data={stackedAreaChartData}
    categoryKey="month"
    theme="ocean"
    variant="linear"
    opacity={0.5}
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

export const StackedAreaChartStoryWithYAxis: Story = {
  name: "Stacked Area Chart with Y-Axis and Axis Labels",
  args: {
    ...StackedAreaChartStory.args,
    showYAxis: true,
    xAxisLabel: "Time Period",
    yAxisLabel: "Number of Users",
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, categoryKey, ...restArgs } = args;
    
    return (
      <Card style={{ width: "500px" }}>
        <StackedAreaChart data={data} categoryKey={categoryKey} {...restArgs} />
      </Card>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const stackedAreaChartData = [
  { month: "January", desktop: 150, tablet: 90, mobile: 60 },
  { month: "February", desktop: 280, tablet: 180, mobile: 120 },
  { month: "March", desktop: 220, tablet: 140, mobile: 100 },
  { month: "April", desktop: 180, tablet: 160, mobile: 80 },
  { month: "May", desktop: 250, tablet: 120, mobile: 90 },
  { month: "June", desktop: 300, tablet: 180, mobile: 110 },
];

<Card style={{ width: "500px" }}>
  <StackedAreaChart
    data={stackedAreaChartData}
    categoryKey="month"
    theme="ocean"
    variant="linear"
    opacity={0.5}
    grid={true}
    legend={true}
    label={true}
    isAnimationActive
    showYAxis
    xAxisLabel="Time Period"
    yAxisLabel="Number of Users"
  />
</Card>`,
      },
    },
  },
};

export const StackedAreaChartStoryWithThemes: Story = {
  name: "Stacked Area Chart with Different Themes",
  args: {
    ...StackedAreaChartStory.args,
    theme: "vivid",
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, categoryKey, ...restArgs } = args;
    
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Card style={{ width: "500px" }}>
          <StackedAreaChart data={data} categoryKey={categoryKey} {...restArgs} theme="ocean" />
        </Card>
        <Card style={{ width: "500px" }}>
          <StackedAreaChart data={data} categoryKey={categoryKey} {...restArgs} theme="orchid" />
        </Card>
        <Card style={{ width: "500px" }}>
          <StackedAreaChart data={data} categoryKey={categoryKey} {...restArgs} theme="emerald" />
        </Card>
        <Card style={{ width: "500px" }}>
          <StackedAreaChart data={data} categoryKey={categoryKey} {...restArgs} theme="sunset" />
        </Card>
        <Card style={{ width: "500px" }}>
          <StackedAreaChart data={data} categoryKey={categoryKey} {...restArgs} theme="spectrum" />
        </Card>
        <Card style={{ width: "500px" }}>
          <StackedAreaChart data={data} categoryKey={categoryKey} {...restArgs} theme="vivid" />
        </Card>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const stackedAreaChartData = [
  { month: "January", desktop: 150, tablet: 90, mobile: 60 },
  { month: "February", desktop: 280, tablet: 180, mobile: 120 },
  { month: "March", desktop: 220, tablet: 140, mobile: 100 },
  { month: "April", desktop: 180, tablet: 160, mobile: 80 },
  { month: "May", desktop: 250, tablet: 120, mobile: 90 },
  { month: "June", desktop: 300, tablet: 180, mobile: 110 },
];

<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
  <Card style={{ width: "500px" }}>
    <StackedAreaChart data={stackedAreaChartData} categoryKey="month" theme="ocean" />
  </Card>
  <Card style={{ width: "500px" }}>
    <StackedAreaChart data={stackedAreaChartData} categoryKey="month" theme="orchid" />
  </Card>
  <Card style={{ width: "500px" }}>
    <StackedAreaChart data={stackedAreaChartData} categoryKey="month" theme="emerald" />
  </Card>
  <Card style={{ width: "500px" }}>
    <StackedAreaChart data={stackedAreaChartData} categoryKey="month" theme="sunset" />
  </Card>
  <Card style={{ width: "500px" }}>
    <StackedAreaChart data={stackedAreaChartData} categoryKey="month" theme="spectrum" />
  </Card>
  <Card style={{ width: "500px" }}>
    <StackedAreaChart data={stackedAreaChartData} categoryKey="month" theme="vivid" />
  </Card>
</div>`,
      },
    },
  },
};
