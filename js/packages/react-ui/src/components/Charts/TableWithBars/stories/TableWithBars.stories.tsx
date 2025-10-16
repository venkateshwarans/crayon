import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { TableWithBars, TableWithBarsProps } from "../TableWithBars";

const tableWithBarsData = [
  { name: "Product A", value: 100 },
  { name: "Product B", value: 150 },
  { name: "Product C", value: 80 },
  { name: "Product D", value: 200 },
];

const meta: Meta<TableWithBarsProps> = {
  title: "Components/Charts/TableWithBars",
  component: TableWithBars,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { TableWithBars } from '@crayon-ui/react-ui/Charts/TableWithBars';\\n```",
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
      description: "Maximum value for bar scaling",
      control: "number",
      table: { category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: tableWithBarsData,
    theme: "ocean",
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <TableWithBars {...args} />
    </Card>
  ),
};