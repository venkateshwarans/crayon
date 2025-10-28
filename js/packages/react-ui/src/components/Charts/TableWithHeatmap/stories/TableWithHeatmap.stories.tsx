import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { TableWithHeatmap, TableWithHeatmapProps } from "../TableWithHeatmap";

const tableWithHeatmapData = [
  { name: "Product A", value: 100 },
  { name: "Product B", value: 150 },
  { name: "Product C", value: 80 },
  { name: "Product D", value: 200 },
  { name: "Product E", value: 120 },
];

const meta: Meta<TableWithHeatmapProps> = {
  title: "Components/Charts/TableWithHeatmap",
  component: TableWithHeatmap,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { TableWithHeatmap } from '@crayon-ui/react-ui/Charts/TableWithHeatmap';\\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description: "Array of data with name and value",
      control: false,
      table: { category: "Data" },
    },
    theme: {
      description: "Color theme",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid", "iq"],
      table: { defaultValue: { summary: "ocean" }, category: "Appearance" },
    },
    maxValue: {
      description: "Maximum value for heatmap scaling",
      control: "number",
      table: { category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: tableWithHeatmapData,
    theme: "ocean",
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <TableWithHeatmap data={args['data']} theme={args['theme']} />
    </Card>
  ),
};