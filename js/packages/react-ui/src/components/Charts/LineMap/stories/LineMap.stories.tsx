import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { LineMap, LineMapProps } from "../LineMap";

const lineMapData = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 120 },
  { name: "Mar", value: 140 },
  { name: "Apr", value: 110 },
  { name: "May", value: 160 },
];

const meta: Meta<LineMapProps> = {
  title: "Components/Charts/LineMap",
  component: LineMap,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { LineMap } from '@crayon-ui/react-ui/Charts/LineMap';\\n```",
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
    dataKey: {
      description: "Key for data values",
      control: "text",
      table: { defaultValue: { summary: "value" }, category: "Data" },
    },
    nameKey: {
      description: "Key for names",
      control: "text",
      table: { defaultValue: { summary: "name" }, category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: lineMapData,
    theme: "ocean",
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <LineMap data={args['data']} theme={args['theme']} />
    </Card>
  ),
};