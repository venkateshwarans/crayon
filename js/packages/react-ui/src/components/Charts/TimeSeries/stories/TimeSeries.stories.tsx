import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { TimeSeries, TimeSeriesProps } from "../TimeSeries";

const timeSeriesData = [
  { date: "2024-01", value: 100 },
  { date: "2024-02", value: 120 },
  { date: "2024-03", value: 140 },
  { date: "2024-04", value: 110 },
  { date: "2024-05", value: 160 },
];

const meta: Meta<TimeSeriesProps> = {
  title: "Components/Charts/TimeSeries",
  component: TimeSeries,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { TimeSeries } from '@crayon-ui/react-ui/Charts/TimeSeries';\\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description: "Array of time series data",
      control: false,
      table: { category: "Data" },
    },
    theme: {
      description: "Color theme",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid", "iq"],
      table: { defaultValue: { summary: "ocean" }, category: "Appearance" },
    },
    dateKey: {
      description: "Key for date values",
      control: "text",
      table: { defaultValue: { summary: "date" }, category: "Data" },
    },
    valueKey: {
      description: "Key for values",
      control: "text",
      table: { defaultValue: { summary: "value" }, category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: timeSeriesData,
    theme: "ocean",
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <TimeSeries data={args['data']} theme={args['theme']} />
    </Card>
  ),
};