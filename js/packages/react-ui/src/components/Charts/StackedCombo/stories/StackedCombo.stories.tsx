import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { StackedCombo, StackedComboProps } from "../StackedCombo";

const stackedComboData = [
  { name: "Jan", bar1: 100, bar2: 80, line1: 50 },
  { name: "Feb", bar1: 120, bar2: 90, line1: 60 },
  { name: "Mar", bar1: 140, bar2: 100, line1: 70 },
  { name: "Apr", bar1: 110, bar2: 85, line1: 55 },
];

const meta: Meta<StackedComboProps> = {
  title: "Components/Charts/StackedCombo",
  component: StackedCombo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { StackedCombo } from '@crayon-ui/react-ui/Charts/StackedCombo';\\n```",
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
    barKeys: {
      description: "Keys for bar values",
      control: false,
      table: { category: "Data" },
    },
    lineKeys: {
      description: "Keys for line values",
      control: false,
      table: { category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: stackedComboData,
    theme: "ocean",
    xAxisKey: "name",
    barKeys: ["bar1", "bar2"],
    lineKeys: ["line1"],
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <StackedCombo data={args['data']} theme={args['theme']} xAxisKey={args['xAxisKey']} barKeys={args['barKeys']} lineKeys={args['lineKeys']} />
    </Card>
  ),
};