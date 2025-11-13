import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { PivotTable, PivotTableProps } from "../PivotTable";

const pivotData = [
  { region: "North", product: "A", sales: 100, profit: 20 },
  { region: "South", product: "B", sales: 150, profit: 30 },
  { region: "East", product: "A", sales: 120, profit: 25 },
  { region: "West", product: "C", sales: 200, profit: 40 },
];

const meta: Meta<PivotTableProps> = {
  title: "Components/Charts/PivotTable",
  component: PivotTable,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { PivotTable } from '@crayon-ui/react-ui/Charts/PivotTable';\\n```",
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
    rows: {
      description: "Row field names",
      control: false,
      table: { category: "Data" },
    },
    columns: {
      description: "Column field names",
      control: false,
      table: { category: "Data" },
    },
    values: {
      description: "Value field names",
      control: false,
      table: { category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: pivotData,
    rows: ["region"],
    columns: ["product"],
    values: ["sales", "profit"],
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <PivotTable data={args['data']} rows={args['rows']} columns={args['columns']} values={args['values']} />
    </Card>
  ),
};