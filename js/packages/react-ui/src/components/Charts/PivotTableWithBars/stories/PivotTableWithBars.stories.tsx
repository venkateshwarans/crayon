import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { PivotTableWithBars, PivotTableWithBarsProps } from "../PivotTableWithBars";

const pivotWithBarsData = [
  { region: "North", product: "A", sales: 100, profit: 20 },
  { region: "South", product: "B", sales: 150, profit: 30 },
  { region: "East", product: "A", sales: 120, profit: 25 },
  { region: "West", product: "C", sales: 200, profit: 40 },
];

const meta: Meta<PivotTableWithBarsProps> = {
  title: "Components/Charts/PivotTableWithBars",
  component: PivotTableWithBars,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { PivotTableWithBars } from '@crayon-ui/react-ui/Charts/PivotTableWithBars';\\n```",
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
    data: pivotWithBarsData,
    theme: "ocean",
    rows: ["region"],
    columns: ["product"],
    values: ["sales", "profit"],
  },
  render: (args) => (
    <Card style={{ width: "700px", height: "auto" }}>
      <PivotTableWithBars data={args['data']} theme={args['theme']} rows={args['rows']} columns={args['columns']} values={args['values']} />
    </Card>
  ),
};