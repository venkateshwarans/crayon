import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { StackAreaHundredPercentage, StackAreaHundredPercentageProps } from "../StackAreaHundredPercentage";

const stackAreaData = [
  { name: "Jan", desktop: 30, mobile: 40, tablet: 30 },
  { name: "Feb", desktop: 35, mobile: 35, tablet: 30 },
  { name: "Mar", desktop: 40, mobile: 30, tablet: 30 },
  { name: "Apr", desktop: 25, mobile: 45, tablet: 30 },
];

const meta: Meta<StackAreaHundredPercentageProps> = {
  title: "Components/Charts/StackAreaHundredPercentage",
  component: StackAreaHundredPercentage,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { StackAreaHundredPercentage } from '@crayon-ui/react-ui/Charts/StackAreaHundredPercentage';\\n```",
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
    data: stackAreaData,
    theme: "ocean",
    xAxisKey: "name",
    stackKeys: ["desktop", "mobile", "tablet"],
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <StackAreaHundredPercentage {...args} />
    </Card>
  ),
};