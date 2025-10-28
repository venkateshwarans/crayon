import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { BubbleMap, BubbleMapProps } from "../BubbleMap";

const bubbleMapData = [
  { name: "New York", x: -74, y: 40.7, value: 8400000 },
  { name: "Los Angeles", x: -118.2, y: 34.05, value: 3900000 },
  { name: "Chicago", x: -87.6, y: 41.8, value: 2700000 },
  { name: "Houston", x: -95.3, y: 29.7, value: 2300000 },
  { name: "Phoenix", x: -112, y: 33.4, value: 1600000 },
];

const meta: Meta<BubbleMapProps> = {
  title: "Components/Charts/BubbleMap",
  component: BubbleMap,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { BubbleMap } from '@crayon-ui/react-ui/Charts/BubbleMap';\\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description: "Array of data points with coordinates and values",
      control: false,
      table: { category: "Data" },
    },
    theme: {
      description: "Color theme for the chart",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid", "iq"],
      table: { defaultValue: { summary: "ocean" }, category: "Appearance" },
    },
    maxBubbleSize: {
      description: "Maximum bubble size",
      control: "number",
      table: { defaultValue: { summary: "2000" }, category: "Appearance" },
    },
    minBubbleSize: {
      description: "Minimum bubble size",
      control: "number",
      table: { defaultValue: { summary: "400" }, category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: bubbleMapData,
    theme: "ocean",
    maxBubbleSize: 2000,
    minBubbleSize: 400,
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <BubbleMap data={args['data']} theme={args['theme']} maxBubbleSize={args['maxBubbleSize']} minBubbleSize={args['minBubbleSize']} />
    </Card>
  ),
};

export const CustomTheme: Story = {
  args: {
    data: bubbleMapData,
    theme: "sunset",
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <BubbleMap data={args['data']} theme={args['theme']} />
    </Card>
  ),
};