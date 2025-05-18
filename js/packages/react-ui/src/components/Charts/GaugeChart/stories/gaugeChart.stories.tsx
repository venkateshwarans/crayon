import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { GaugeChart, GaugeChartProps } from "../GaugeChart";

const meta: Meta<GaugeChartProps> = {
  title: "Components/Charts/GaugeChart",
  component: GaugeChart,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\nimport { GaugeChart } from '@crayonai/react-ui/Charts/GaugeChart';\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    value: {
      description: "The value to display on the gauge (between min and max)",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        category: "Data",
      },
    },
    min: {
      description: "The minimum value of the gauge",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Data",
      },
    },
    max: {
      description: "The maximum value of the gauge",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
        category: "Data",
      },
    },
    unit: {
      description: "The unit to display after the value",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "%" },
        category: "Display",
      },
    },
    theme: {
      description: "The color theme for the gauge",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid"],
      table: {
        defaultValue: { summary: "ocean" },
        category: "Appearance",
      },
    },
    isAnimationActive: {
      description: "Whether to animate the gauge",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Display",
      },
    },
    startAngle: {
      description: "The angle to start the gauge from (in degrees, 0 is at 12 o'clock)",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "180" },
        category: "Appearance",
      },
    },
    endAngle: {
      description: "The angle to end the gauge at (in degrees)",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Appearance",
      },
    },
    arcWidth: {
      description: "The width of the gauge arc",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "20" },
        category: "Appearance",
      },
    },
    showMinMax: {
      description: "Whether to show min and max values on the gauge",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Display",
      },
    },
    minMaxLabelSize: {
      description: "The size of the min/max labels",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "12" },
        category: "Display",
      },
    },
    minMaxFormatter: {
      description: "Custom formatter for min/max values",
      table: {
        type: { summary: "(value: number) => string" },
        category: "Display",
      },
    },
    showRanges: {
      description: "Whether to show range segments on the gauge",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Display",
      },
    },
    showRangeDividers: {
      description: "Whether to show range divider lines",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Display",
      },
    },
    ranges: {
      description: "The color ranges for the gauge (overrides theme)",
      control: "object",
      table: {
        type: { summary: "Array<{min: number, max: number, color: string}>" },
        defaultValue: { summary: "undefined" },
        category: "Appearance",
      },
    },
    label: {
      description: "The label to display in the center of the gauge",
      control: false,
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Display",
      },
    },
    valueSize: {
      description: "The size of the value text",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "32" },
        category: "Appearance",
      },
    },
    unitSize: {
      description: "The size of the unit text",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "16" },
        category: "Appearance",
      },
    },
    showValue: {
      description: "Whether to show the value in the center of the gauge",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Display",
      },
    },
    showTooltip: {
      description: "Whether to show a tooltip when hovering over the gauge",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Display",
      },
    },
    tooltipContent: {
      description: "Custom tooltip content",
      control: false,
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
        category: "Display",
      },
    },
  },
} satisfies Meta<typeof GaugeChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example of a custom tooltip component
const CustomTooltipContent = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ 
        backgroundColor: '#fff', 
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '4px'
      }}>
        <p style={{ margin: 0 }}><strong>Value:</strong> {payload[0].value}</p>
        <p style={{ margin: 0 }}><strong>Range:</strong> {payload[0].payload.min} - {payload[0].payload.max}</p>
      </div>
    );
  }
  return null;
};

export const DefaultGauge: Story = {
  name: "Default Gauge",
  args: {
    value: 12,
    min: 0,
    max: 100,
    unit: "%",
    theme: "ocean",
    isAnimationActive: true,
    startAngle: 180,
    endAngle: 0,
    arcWidth: 20,
    valueSize: 32,
    unitSize: 16,
    showValue: true,
    showTooltip: true,
  },
  render: (args) => (
    <Card style={{ width: "300px", height: "auto" }}>
      <GaugeChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card style={{ width: "300px", height: "auto" }}>
  <GaugeChart
    value={65}
    min={0}
    max={100}
    unit="%"
    theme="ocean"
    isAnimationActive={true}
    startAngle={180}
    endAngle={0}
    arcWidth={20}
    valueSize={32}
    unitSize={16}
    showValue={true}
    showTooltip={true}
  />
</Card>
`,
      },
    },
  },
};

export const CustomRanges: Story = {
  name: "Custom Color Ranges",
  args: {
    value: 75,
    min: 0,
    max: 100,
    unit: "%",
    theme: "emerald",
    isAnimationActive: true,
    startAngle: 180,
    endAngle: 0,
    arcWidth: 20,
    ranges: [
      { min: 0, max: 25, color: "#FF5252" },
      { min: 25, max: 50, color: "#FFC107" },
      { min: 50, max: 75, color: "#4CAF50" },
      { min: 75, max: 100, color: "#2196F3" },
    ],
    valueSize: 32,
    unitSize: 16,
    showValue: true,
    showTooltip: true,
  },
  render: (args) => (
    <Card style={{ width: "300px", height: "auto" }}>
      <GaugeChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card style={{ width: "300px", height: "auto" }}>
  <GaugeChart
    value={75}
    min={0}
    max={100}
    unit="%"
    theme="emerald"
    isAnimationActive={true}
    startAngle={180}
    endAngle={0}
    arcWidth={20}
    ranges={[
      { min: 0, max: 25, color: "#FF5252" },
      { min: 25, max: 50, color: "#FFC107" },
      { min: 50, max: 75, color: "#4CAF50" },
      { min: 75, max: 100, color: "#2196F3" },
    ]}
    valueSize={32}
    unitSize={16}
    showValue={true}
    showTooltip={true}
  />
</Card>
`,
      },
    },
  },
};

export const GaugeWithMinMaxLabels: Story = {
  name: "Gauge with Min/Max Labels",
  args: {
    value: 65,
    min: 0,
    max: 100,
    unit: "%",
    theme: "ocean",
    isAnimationActive: true,
    startAngle: 180,
    endAngle: 0,
    arcWidth: 20,
    valueSize: 32,
    unitSize: 16,
    showValue: true,
    showTooltip: true,
    showMinMax: true,
    minMaxLabelSize: 14,
  },
  render: (args) => (
    <Card style={{ width: "300px", height: "auto" }}>
      <GaugeChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card style={{ width: "300px", height: "auto" }}>
  <GaugeChart
    value={65}
    min={0}
    max={100}
    unit="%"
    theme="ocean"
    isAnimationActive={true}
    startAngle={180}
    endAngle={0}
    arcWidth={20}
    valueSize={32}
    unitSize={16}
    showValue={true}
    showTooltip={true}
    showMinMax={true}
    minMaxLabelSize={14}
  />
</Card>
`,
      },
    },
  },
};

export const GaugeWithRanges: Story = {
  name: "Gauge with Range Segments",
  args: {
    value: 75,
    min: 0,
    max: 100,
    unit: "%",
    theme: "ocean",
    isAnimationActive: true,
    startAngle: 180,
    endAngle: 0,
    arcWidth: 20,
    valueSize: 32,
    unitSize: 16,
    showValue: true,
    showTooltip: true,
    showMinMax: true,
    minMaxLabelSize: 14,
    showRanges: true,
    showRangeDividers: true,
    ranges: [
      { min: 0, max: 25, color: "#FF5252" },  // Red - Poor
      { min: 25, max: 50, color: "#FFC107" },  // Yellow - Fair
      { min: 50, max: 75, color: "#4CAF50" },  // Green - Good
      { min: 75, max: 100, color: "#2196F3" }, // Blue - Excellent
    ],
  },
  render: (args) => (
    <Card style={{ width: "300px", height: "auto" }}>
      <GaugeChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card style={{ width: "300px", height: "auto" }}>
  <GaugeChart
    value={75}
    min={0}
    max={100}
    unit="%"
    theme="ocean"
    isAnimationActive={true}
    startAngle={180}
    endAngle={0}
    arcWidth={20}
    valueSize={32}
    unitSize={16}
    showValue={true}
    showTooltip={true}
    showMinMax={true}
    minMaxLabelSize={14}
    showRanges={true}
    showRangeDividers={true}
    ranges={[
      { min: 0, max: 25, color: "#FF5252" },  // Red - Poor
      { min: 25, max: 50, color: "#FFC107" },  // Yellow - Fair
      { min: 50, max: 75, color: "#4CAF50" },  // Green - Good
      { min: 75, max: 100, color: "#2196F3" }, // Blue - Excellent
    ]}
  />
</Card>
`,
      },
    },
  },
};

export const GaugeWithLargeNumbers: Story = {
  name: "Gauge with Large Numbers",
  args: {
    value: 42000,
    min: 0,
    max: 67000,
    unit: "",
    theme: "ocean",
    isAnimationActive: true,
    startAngle: 180,
    endAngle: 0,
    arcWidth: 20,
    valueSize: 32,
    unitSize: 16,
    showValue: true,
    showTooltip: true,
    showMinMax: true,
    minMaxLabelSize: 14,
    minMaxFormatter: (value) => value === 0 ? "0" : `${Math.round(value/1000)}k`,
    showRanges: false,
  },
  render: (args) => (
    <Card style={{ width: "300px", height: "auto" }}>
      <GaugeChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card style={{ width: "300px", height: "auto" }}>
  <GaugeChart
    value={42000}
    min={0}
    max={67000}
    unit=""
    theme="ocean"
    isAnimationActive={true}
    startAngle={180}
    endAngle={0}
    arcWidth={20}
    valueSize={32}
    unitSize={16}
    showValue={true}
    showTooltip={true}
    showMinMax={true}
    minMaxLabelSize={14}
    minMaxFormatter={(value) => value === 0 ? "0" : \`\${Math.round(value/1000)}k\`}
  />
</Card>
`,
      },
    },
  },
};

export const SemiCircleGauge: Story = {
  name: "Semi-Circle Gauge",
  args: {
    value: 42,
    min: 0,
    max: 100,
    unit: "°C",
    theme: "sunset",
    isAnimationActive: true,
    startAngle: 180,
    endAngle: 0,
    arcWidth: 30,
    valueSize: 36,
    unitSize: 18,
    showValue: true,
    showTooltip: true,
  },
  render: (args) => (
    <Card style={{ width: "300px", height: "auto" }}>
      <GaugeChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card style={{ width: "300px", height: "auto" }}>
  <GaugeChart
    value={42}
    min={0}
    max={100}
    unit="°C"
    theme="sunset"
    isAnimationActive={true}
    startAngle={180}
    endAngle={0}
    arcWidth={30}
    valueSize={36}
    unitSize={18}
    showValue={true}
    showTooltip={true}
  />
</Card>
`,
      },
    },
  },
};

export const CustomAngleGauge: Story = {
  name: "Custom Angle Gauge",
  args: {
    value: 85,
    min: 0,
    max: 100,
    unit: "Avg. days to close",
    theme: "vivid",
    isAnimationActive: true,
    startAngle: 210,
    endAngle: -30,
    arcWidth: 25,
    valueSize: 32,
    unitSize: 16,
    showValue: true,
    showTooltip: true,
  },
  render: (args) => (
    <Card style={{ width: "300px", height: "auto" }}>
      <GaugeChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card style={{ width: "300px", height: "auto" }}>
  <GaugeChart
    value={85}
    min={0}
    max={100}
    unit=""
    theme="vivid"
    isAnimationActive={true}
    startAngle={210}
    endAngle={-30}
    arcWidth={25}
    valueSize={32}
    unitSize={16}
    showValue={true}
    showTooltip={true}
  />
</Card>
`,
      },
    },
  },
};

export const LongUnitTextGauge: Story = {
  name: "Long Unit Text",
  args: {
    value: 85,
    min: 0,
    max: 100,
    unit: "Average days to close tickets in the last quarter",
    theme: "spectrum",
    isAnimationActive: true,
    startAngle: 180,
    endAngle: 0,
    arcWidth: 25,
    valueSize: 32,
    unitSize: 14,
    showValue: true,
    showTooltip: true,
  },
  render: (args) => (
    <Card style={{ width: "300px", height: "auto" }}>
      <GaugeChart {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card style={{ width: "300px", height: "auto" }}>
  <GaugeChart
    value={85}
    min={0}
    max={100}
    unit="Average days to close tickets in the last quarter"
    theme="spectrum"
    isAnimationActive={true}
    startAngle={180}
    endAngle={0}
    arcWidth={25}
    valueSize={32}
    unitSize={14}
    showValue={true}
    showTooltip={true}
  />
</Card>
`,
      },
    },
  },
};
