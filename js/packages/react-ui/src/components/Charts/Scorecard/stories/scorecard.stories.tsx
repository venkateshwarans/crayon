import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { Scorecard, ScorecardProps } from "../Scorecard";

// Sample data for sparkline
const sparklineData = Array.from({ length: 20 }, (_, i) => ({
  value: 40 + Math.sin(i / 2) * 30 + Math.random() * 10,
}));

// Sample data for declining sparkline
const decliningSparklineData = Array.from({ length: 20 }, (_, i) => ({
  value: 80 - i * 2 + Math.random() * 5,
}));

const meta: Meta<ScorecardProps> = {
  title: "Components/Charts/Scorecard",
  component: Scorecard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\nimport { Scorecard } from '@crayonai/react-ui/Charts/Scorecard';\n```",
      },
    },
  },
  tags: ["autodocs"],
  // Make all args directly controllable in Storybook
  args: {
    value: 62,
    title: "Qty Sold",
    theme: "ocean",
    size: "medium",
    valueFormat: "number",
    comparisonFormat: "percentage",
    showAsProgress: false,
    showSparkline: false,
    hideComparison: false,
  },
  argTypes: {
    value: {
      description: "The primary value to display in the scorecard",
      control: "text",
      table: {
        type: { summary: "number | string" },
        category: "Data",
      },
    },
    title: {
      description: "Optional title/label for the value",
      control: "text",
      table: {
        type: { summary: "string" },
        category: "Display",
      },
    },
    comparisonValue: {
      description: "Optional comparison value to show trend/progress",
      control: "number",
      table: {
        type: { summary: "number" },
        category: "Data",
      },
    },
    comparisonLabel: {
      description: "Optional label for the comparison value",
      control: "text",
      table: {
        type: { summary: "string" },
        category: "Display",
      },
    },
    valueFormat: {
      description: "Format for displaying the value",
      control: "select",
      options: ["number", "currency", "percentage", "compact"],
      table: {
        type: { summary: "string | function" },
        defaultValue: { summary: "number" },
        category: "Formatting",
      },
    },
    comparisonFormat: {
      description: "Format for displaying the comparison value",
      control: "select",
      options: ["number", "currency", "percentage", "compact"],
      table: {
        type: { summary: "string | function" },
        defaultValue: { summary: "percentage" },
        category: "Formatting",
      },
    },
    showAsProgress: {
      description: "Whether to show the comparison as progress towards a target",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Display",
      },
    },
    showSparkline: {
      description: "Whether to show a sparkline below the main value",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Display",
      },
    },
    theme: {
      description: "Color theme for the scorecard",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "ocean" },
        category: "Appearance",
      },
    },
    size: {
      description: "Size variant of the scorecard",
      control: "select",
      options: ["compact", "small", "medium", "large", "hero"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
        category: "Appearance",
      },
    },
    hideComparison: {
      description: "Whether to hide the comparison indicator",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Display",
      },
    },
  },
};

export default meta;
type Story = StoryObj<ScorecardProps>;

export const Basic: Story = {
  name: "Basic Scorecard",
  args: {
    value: 62,
    title: "Qty Sold",
  },
  render: (args) => (
    <Card className="min-w-[150px] inline-block">
      <Scorecard {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card>
  <Scorecard 
    value={62} 
    title="Qty Sold" 
  />
</Card>
`,
      },
    },
  },
};

export const WithComparison: Story = {
  name: "With Comparison",
  args: {
    value: 44811,
    title: "New Users",
    comparisonValue: 58000,
    valueFormat: "number",
    comparisonFormat: "percentage",
  },
  render: (args) => (
    <Card className="min-w-[150px] inline-block">
      <Scorecard {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card>
  <Scorecard 
    value={44811} 
    title="New Users" 
    comparisonValue={58000}
    valueFormat="number"
    comparisonFormat="percentage"
  />
</Card>
`,
      },
    },
  },
};

export const WithProgressBar: Story = {
  name: "With Progress Bar",
  args: {
    value: 44811,
    title: "New Users",
    comparisonValue: 50000,
    showAsProgress: true,
    valueFormat: "number",
    comparisonFormat: "percentage",
  },
  render: (args) => (
    <Card className="min-w-[150px] inline-block">
      <Scorecard {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card>
  <Scorecard 
    value={44811} 
    title="New Users" 
    comparisonValue={50000}
    showAsProgress={true}
    valueFormat="number"
    comparisonFormat="percentage"
  />
</Card>
`,
      },
    },
  },
};

export const WithSparkline: Story = {
  name: "With Sparkline",
  args: {
    value: 354.7,
    title: "Views",
    valueFormat: "compact",
    showSparkline: true,
    sparklineData: sparklineData,
  },
  render: (args) => (
    <Card className="min-w-[180px] inline-block">
      <Scorecard {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card>
  <Scorecard 
    value={354.7} 
    title="Views" 
    valueFormat="compact"
    showSparkline={true}
    sparklineData={sparklineData}
  />
</Card>
`,
      },
    },
  },
};

export const NegativeChange: Story = {
  name: "Negative Change",
  args: {
    value: 34,
    title: "Deal type",
    comparisonValue: 44,
    comparisonFormat: "percentage",
    theme: "emerald",
  },
  render: (args) => (
    <Card className="min-w-[150px] inline-block">
      <Scorecard {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card>
  <Scorecard 
    value={34} 
    title="Deal type" 
    comparisonValue={44}
    comparisonFormat="percentage"
    theme="emerald"
  />
</Card>
`,
      },
    },
  },
};

export const ComparisonWithLabel: Story = {
  name: "Comparison With Label",
  args: {
    value: 44811,
    title: "New Users",
    comparisonValue: 23500,
    comparisonLabel: "Q4 new users",
    showAsProgress: true,
    valueFormat: "number",
    comparisonFormat: "percentage",
  },
  render: (args) => (
    <Card className="min-w-[180px] inline-block">
      <Scorecard {...args} />
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card>
  <Scorecard 
    value={44811} 
    title="New Users" 
    comparisonValue={23500}
    comparisonLabel="Q4 new users"
    showAsProgress={true}
    valueFormat="number"
    comparisonFormat="percentage"
  />
</Card>
`,
      },
    },
  },
};

export const SizeVariants: Story = {
  name: "Size Variants",
  render: () => (
    <div className="flex flex-col gap-6">
      <Card className="inline-block">
        <Scorecard 
          value={3.26} 
          title="Avg Qty Sold" 
          size="compact"
          comparisonValue={3.0}
        />
      </Card>
      <Card className="inline-block">
        <Scorecard 
          value={3.26} 
          title="Avg Qty Sold" 
          size="small"
          comparisonValue={3.0}
        />
      </Card>
      <Card className="inline-block">
        <Scorecard 
          value={3.26} 
          title="Avg Qty Sold" 
          size="medium"
          comparisonValue={3.0}
        />
      </Card>
      <Card className="inline-block">
        <Scorecard 
          value={3.26} 
          title="Avg Qty Sold" 
          size="large"
          comparisonValue={3.0}
        />
      </Card>
      <Card className="inline-block">
        <Scorecard 
          value={3.26} 
          title="Avg Qty Sold" 
          size="hero"
          comparisonValue={3.0}
        />
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card>
  <Scorecard value={3.26} title="Avg Qty Sold" size="small" comparisonValue={3.0} />
</Card>

<Card>
  <Scorecard value={3.26} title="Avg Qty Sold" size="medium" comparisonValue={3.0} />
</Card>

<Card>
  <Scorecard value={3.26} title="Avg Qty Sold" size="large" comparisonValue={3.0} />
</Card>
`,
      },
    },
  },
};

export const DifferentFormats: Story = {
  name: "Different Formats",
  render: () => (
    <div className="flex flex-col gap-6">
      <Card className="inline-block">
        <Scorecard 
          value={1250000} 
          title="Revenue" 
          valueFormat="currency"
          comparisonValue={1000000}
        />
      </Card>
      <Card className="inline-block">
        <Scorecard 
          value={1250000} 
          title="Revenue" 
          valueFormat="compact"
          comparisonValue={1000000}
        />
      </Card>
      <Card className="inline-block">
        <Scorecard 
          value={85.4} 
          title="Completion Rate" 
          valueFormat="percentage"
          comparisonValue={75}
        />
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card>
  <Scorecard value={1250000} title="Revenue" valueFormat="currency" comparisonValue={1000000} />
</Card>

<Card>
  <Scorecard value={1250000} title="Revenue" valueFormat="compact" comparisonValue={1000000} />
</Card>

<Card>
  <Scorecard value={85.4} title="Completion Rate" valueFormat="percentage" comparisonValue={75} />
</Card>
`,
      },
    },
  },
};

export const ThemeVariants: Story = {
  name: "Theme Variants",
  render: () => (
    <div className="flex flex-wrap gap-6">
      <Card className="inline-block">
        <Scorecard 
          value={62} 
          title="Ocean Theme" 
          theme="ocean"
          comparisonValue={50}
        />
      </Card>
      <Card className="inline-block">
        <Scorecard 
          value={62} 
          title="Orchid Theme" 
          theme="orchid"
          comparisonValue={50}
        />
      </Card>
      <Card className="inline-block">
        <Scorecard 
          value={62} 
          title="Emerald Theme" 
          theme="emerald"
          comparisonValue={50}
        />
      </Card>
      <Card className="inline-block">
        <Scorecard 
          value={62} 
          title="Sunset Theme" 
          theme="sunset"
          comparisonValue={50}
        />
      </Card>
      <Card className="inline-block">
        <Scorecard 
          value={62} 
          title="Spectrum Theme" 
          theme="spectrum"
          comparisonValue={50}
        />
      </Card>
      <Card className="inline-block">
        <Scorecard 
          value={62} 
          title="Vivid Theme" 
          theme="vivid"
          comparisonValue={50}
        />
      </Card>
    </div>
  ),
};
