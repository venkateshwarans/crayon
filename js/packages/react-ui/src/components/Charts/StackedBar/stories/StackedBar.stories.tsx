import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { StackedBar, StackedBarProps } from "../StackedBar";

const stackedBarData = [
  { name: "Jan", desktop: 100, mobile: 80, tablet: 40 },
  { name: "Feb", desktop: 120, mobile: 90, tablet: 50 },
  { name: "Mar", desktop: 140, mobile: 100, tablet: 60 },
  { name: "Apr", desktop: 110, mobile: 85, tablet: 45 },
];

const meta: Meta<StackedBarProps> = {
  title: "Components/Charts/StackedBar",
  component: StackedBar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { StackedBar } from '@crayon-ui/react-ui/Charts/StackedBar';\\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description: "Array of data objects",
      control: false,
      table: { category: "Data" },
    },
    theme: {
      description: "Color theme",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid", "iq"],
      table: { defaultValue: { summary: "ocean" }, category: "Appearance" },
    },
    xAxisKey: {
      description: "Key for x-axis",
      control: "text",
      table: { defaultValue: { summary: "name" }, category: "Data" },
    },
    stackKeys: {
      description: "Keys for stacked values",
      control: false,
      table: { category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: stackedBarData,
    theme: "ocean",
    xAxisKey: "name",
    stackKeys: ["desktop", "mobile", "tablet"],
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <StackedBar {...args} />
    </Card>
  ),
};