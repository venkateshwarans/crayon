import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { Donut, DonutProps } from "../Donut";

const donutData = [
  { name: "Desktop", value: 45 },
  { name: "Mobile", value: 30 },
  { name: "Tablet", value: 25 },
];

const meta: Meta<DonutProps> = {
  title: "Components/Charts/Donut",
  component: Donut,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { Donut } from '@crayon-ui/react-ui/Charts/Donut';\\n```",
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
    innerRadius: {
      description: "Inner radius of donut",
      control: "number",
      table: { defaultValue: { summary: "60" }, category: "Appearance" },
    },
    outerRadius: {
      description: "Outer radius of donut",
      control: "number",
      table: { defaultValue: { summary: "100" }, category: "Appearance" },
    },
    legend: {
      description: "Show legend",
      control: "boolean",
      table: { defaultValue: { summary: "true" }, category: "Display" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: donutData,
    theme: "ocean",
    innerRadius: 60,
    outerRadius: 100,
    legend: true,
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <Donut {...args} />
    </Card>
  ),
};

export const CustomSize: Story = {
  args: {
    data: donutData,
    theme: "emerald",
    innerRadius: 40,
    outerRadius: 120,
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <Donut {...args} />
    </Card>
  ),
};