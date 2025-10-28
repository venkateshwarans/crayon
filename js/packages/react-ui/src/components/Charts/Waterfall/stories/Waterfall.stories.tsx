import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { Waterfall, WaterfallProps } from "../Waterfall";

const waterfallData = [
  { name: "Start", value: 100 },
  { name: "Increase", value: 20 },
  { name: "Decrease", value: -15 },
  { name: "Final", value: 105 },
];

const meta: Meta<WaterfallProps> = {
  title: "Components/Charts/Waterfall",
  component: Waterfall,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { Waterfall } from '@crayon-ui/react-ui/Charts/Waterfall';\\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description: "Array of waterfall data",
      control: false,
      table: { category: "Data" },
    },
    theme: {
      description: "Color theme",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid", "iq"],
      table: { defaultValue: { summary: "ocean" }, category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: waterfallData,
    theme: "ocean",
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <Waterfall data={args['data']} theme={args['theme']} />
    </Card>
  ),
};