import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { SmoothedLine, SmoothedLineProps } from "../SmoothedLine";

const smoothedLineData = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 120 },
  { name: "Mar", value: 140 },
  { name: "Apr", value: 110 },
  { name: "May", value: 160 },
];

const meta: Meta<SmoothedLineProps> = {
  title: "Components/Charts/SmoothedLine",
  component: SmoothedLine,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { SmoothedLine } from '@crayon-ui/react-ui/Charts/SmoothedLine';\\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description: "Array of data points",
      control: false,
      table: { category: "Data" },
    },
    theme: {
      description: "Color theme",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid", "iq"],
      table: { defaultValue: { summary: "ocean" }, category: "Appearance" },
    },
    smooth: {
      description: "Enable smooth curves",
      control: "boolean",
      table: { defaultValue: { summary: "true" }, category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: smoothedLineData,
    theme: "ocean",
    smooth: true,
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <SmoothedLine {...args} />
    </Card>
  ),
};