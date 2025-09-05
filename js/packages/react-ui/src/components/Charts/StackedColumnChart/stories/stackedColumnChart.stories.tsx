import type { Meta, StoryObj } from "@storybook/react";
import { Monitor, TabletSmartphone, Smartphone } from "lucide-react";
import { Card } from "../../../Card";
import { StackedColumnChart, StackedColumnChartProps } from "../StackedColumnChart";

const stackedColumnChartData = [
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

const meta: Meta<StackedColumnChartProps<typeof stackedColumnChartData>> = {
  title: "Components/Charts/StackedColumnChart",
  component: StackedColumnChart,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\nimport { StackedColumnChart } from '@crayon-ui/react-ui/Charts/StackedColumnChart';\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description:
        "An array of data objects where each object represents a data point. Each object should have a category field (e.g., month) and one or more numeric values for the columns to be stacked.",
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
        "The color palette theme for the chart. Each theme provides a different set of colors for the columns.",
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
    radius: {
      description: "The radius of the rounded corners of the columns",
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
      description: "Whether to display data point labels above each column",
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
} satisfies Meta<typeof StackedColumnChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StackedColumnChartStory: Story = {
  name: "Stacked Column Chart",
  args: {
    data: stackedColumnChartData,
    categoryKey: "month",
    theme: "ocean",
    radius: 4,
    grid: true,
    label: true,
    legend: true,
    isAnimationActive: true,
    showYAxis: false,
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, categoryKey, ...restArgs } = args;
    
    return (
      <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <StackedColumnChart 
            data={data}
            categoryKey={categoryKey}
            {...restArgs}
          />
        </div>
      </Card>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const stackedColumnChartData = [
  { month: "January", desktop: 150, tablet: 90, mobile: 60 },
  { month: "February", desktop: 280, tablet: 180, mobile: 120 },
  { month: "March", desktop: 220, tablet: 140, mobile: 100 },
  { month: "April", desktop: 180, tablet: 160, mobile: 80 },
  { month: "May", desktop: 250, tablet: 120, mobile: 90 },
  { month: "June", desktop: 300, tablet: 180, mobile: 110 },
];

<Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
  <div style={{ width: "100%", height: "100%" }}>
    <StackedColumnChart
      data={stackedColumnChartData}
      categoryKey="month"
      theme="ocean"
      radius={4}
      grid={true}
      legend={true}
      label={true}
      isAnimationActive
    />
  </div>
</Card>`,
      },
    },
  },
};

export const StackedColumnChartStoryWithIcons: Story = {
  name: "Stacked Column Chart with Icons",
  args: {
    ...StackedColumnChartStory.args,
    icons: icons,
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, categoryKey, ...restArgs } = args;
    
    return (
      <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <StackedColumnChart 
            data={stackedColumnChartData}
            categoryKey="month"
            {...restArgs}
          />
        </div>
      </Card>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Monitor, TabletSmartphone, Smartphone } from "lucide-react";

const stackedColumnChartData = [
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

<Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
  <div style={{ width: "100%", height: "100%" }}>
    <StackedColumnChart
      data={stackedColumnChartData}
      categoryKey="month"
      theme="ocean"
      radius={4}
      grid={true}
      legend={true}
      label={true}
      icons={icons}
      isAnimationActive
    />
  </div>
</Card>`,
      },
    },
  },
};

export const StackedColumnChartStoryWithYAxis: Story = {
  name: "Stacked Column Chart with Y-Axis and Axis Labels",
  args: {
    ...StackedColumnChartStory.args,
    showYAxis: true,
    xAxisLabel: "Time Period",
    yAxisLabel: "Number of Users",
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, categoryKey, ...restArgs } = args;
    
    return (
      <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <StackedColumnChart 
            data={stackedColumnChartData}
            categoryKey="month"
            {...restArgs}
          />
        </div>
      </Card>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
const stackedColumnChartData = [
  { month: "January", desktop: 150, tablet: 90, mobile: 60 },
  { month: "February", desktop: 280, tablet: 180, mobile: 120 },
  { month: "March", desktop: 220, tablet: 140, mobile: 100 },
  { month: "April", desktop: 180, tablet: 160, mobile: 80 },
  { month: "May", desktop: 250, tablet: 120, mobile: 90 },
  { month: "June", desktop: 300, tablet: 180, mobile: 110 },
];

<Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
  <div style={{ width: "100%", height: "100%" }}>
    <StackedColumnChart
      data={stackedColumnChartData}
      categoryKey="month"
      theme="ocean"
      radius={4}
      grid={true}
      legend={true}
      label={true}
      isAnimationActive
      showYAxis
      xAxisLabel="Time Period"
      yAxisLabel="Number of Users"
    />
  </div>
</Card>`,
      },
    },
  },
};

export const StackedColumnChartStoryWithThemes: Story = {
  name: "Stacked Column Chart with Different Themes",
  args: {
    ...StackedColumnChartStory.args,
    theme: "vivid",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
      <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <StackedColumnChart 
            data={stackedColumnChartData} 
            categoryKey="month" 
            theme="ocean" 
            radius={4}
            grid={true}
            label={true}
            legend={true}
            isAnimationActive={true}
            showYAxis={false}
          />
        </div>
      </Card>
      <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <StackedColumnChart 
            data={stackedColumnChartData} 
            categoryKey="month" 
            theme="orchid" 
            radius={4}
            grid={true}
            label={true}
            legend={true}
            isAnimationActive={true}
            showYAxis={false}
          />
        </div>
      </Card>
      <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <StackedColumnChart 
            data={stackedColumnChartData} 
            categoryKey="month" 
            theme="emerald" 
            radius={4}
            grid={true}
            label={true}
            legend={true}
            isAnimationActive={true}
            showYAxis={false}
          />
        </div>
      </Card>
      <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <StackedColumnChart 
            data={stackedColumnChartData} 
            categoryKey="month" 
            theme="sunset" 
            radius={4}
            grid={true}
            label={true}
            legend={true}
            isAnimationActive={true}
            showYAxis={false}
          />
        </div>
      </Card>
      <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <StackedColumnChart 
            data={stackedColumnChartData} 
            categoryKey="month" 
            theme="spectrum" 
            radius={4}
            grid={true}
            label={true}
            legend={true}
            isAnimationActive={true}
            showYAxis={false}
          />
        </div>
      </Card>
      <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <StackedColumnChart 
            data={stackedColumnChartData} 
            categoryKey="month" 
            theme="vivid" 
            radius={4}
            grid={true}
            label={true}
            legend={true}
            isAnimationActive={true}
            showYAxis={false}
          />
        </div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
const stackedColumnChartData = [
  { month: "January", desktop: 150, tablet: 90, mobile: 60 },
  { month: "February", desktop: 280, tablet: 180, mobile: 120 },
  { month: "March", desktop: 220, tablet: 140, mobile: 100 },
  { month: "April", desktop: 180, tablet: 160, mobile: 80 },
  { month: "May", desktop: 250, tablet: 120, mobile: 90 },
  { month: "June", desktop: 300, tablet: 180, mobile: 110 },
];

<div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
  <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
    <div style={{ width: "100%", height: "100%" }}>
      <StackedColumnChart 
        data={stackedColumnChartData} 
        categoryKey="month" 
        theme="ocean" 
        radius={4}
        grid={true}
        label={true}
        legend={true}
        isAnimationActive={true}
        showYAxis={false}
      />
    </div>
  </Card>
  <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
    <div style={{ width: "100%", height: "100%" }}>
      <StackedColumnChart 
        data={stackedColumnChartData} 
        categoryKey="month" 
        theme="orchid" 
        radius={4}
        grid={true}
        label={true}
        legend={true}
        isAnimationActive={true}
        showYAxis={false}
      />
    </div>
  </Card>
  <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
    <div style={{ width: "100%", height: "100%" }}>
      <StackedColumnChart 
        data={stackedColumnChartData} 
        categoryKey="month" 
        theme="emerald" 
        radius={4}
        grid={true}
        label={true}
        legend={true}
        isAnimationActive={true}
        showYAxis={false}
      />
    </div>
  </Card>
  <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
    <div style={{ width: "100%", height: "100%" }}>
      <StackedColumnChart 
        data={stackedColumnChartData} 
        categoryKey="month" 
        theme="sunset" 
        radius={4}
        grid={true}
        label={true}
        legend={true}
        isAnimationActive={true}
        showYAxis={false}
      />
    </div>
  </Card>
  <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
    <div style={{ width: "100%", height: "100%" }}>
      <StackedColumnChart 
        data={stackedColumnChartData} 
        categoryKey="month" 
        theme="spectrum" 
        radius={4}
        grid={true}
        label={true}
        legend={true}
        isAnimationActive={true}
        showYAxis={false}
      />
    </div>
  </Card>
  <Card style={{ width: "600px", maxWidth: "100%", height: "auto", minHeight: "300px" }}>
    <div style={{ width: "100%", height: "100%" }}>
      <StackedColumnChart 
        data={stackedColumnChartData} 
        categoryKey="month" 
        theme="vivid" 
        radius={4}
        grid={true}
        label={true}
        legend={true}
        isAnimationActive={true}
        showYAxis={false}
      />
    </div>
  </Card>
</div>`,
      },
    },
  },
};
