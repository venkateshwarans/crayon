import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { Heatmap, HeatmapProps } from "../Heatmap";

const heatmapData = [
  { x: 0, y: 0, value: 10 },
  { x: 1, y: 0, value: 20 },
  { x: 2, y: 0, value: 30 },
  { x: 0, y: 1, value: 15 },
  { x: 1, y: 1, value: 25 },
  { x: 2, y: 1, value: 35 },
];

const meta: Meta<HeatmapProps> = {
  title: "Components/Charts/Heatmap",
  component: Heatmap,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { Heatmap } from '@crayon-ui/react-ui/Charts/Heatmap';\\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description: "Array of data with x, y coordinates and values",
      control: false,
      table: { category: "Data" },
    },
    theme: {
      description: "Color theme",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid", "iq"],
      table: { defaultValue: { summary: "ocean" }, category: "Appearance" },
    },
    cellSize: {
      description: "Size of each cell",
      control: "number",
      table: { defaultValue: { summary: "20" }, category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: heatmapData,
    theme: "ocean",
    cellSize: 20,
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <Heatmap {...args} />
    </Card>
  ),
};