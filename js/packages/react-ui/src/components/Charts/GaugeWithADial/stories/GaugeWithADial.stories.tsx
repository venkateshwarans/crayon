import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { GaugeWithADial, GaugeWithADialProps } from "../GaugeWithADial";

const meta: Meta<GaugeWithADialProps> = {
  title: "Components/Charts/GaugeWithADial",
  component: GaugeWithADial,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { GaugeWithADial } from '@crayon-ui/react-ui/Charts/GaugeWithADial';\\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    value: {
      description: "Current value",
      control: "number",
      table: { category: "Data" },
    },
    max: {
      description: "Maximum value",
      control: "number",
      table: { defaultValue: { summary: "100" }, category: "Data" },
    },
    min: {
      description: "Minimum value",
      control: "number",
      table: { defaultValue: { summary: "0" }, category: "Data" },
    },
    theme: {
      description: "Color theme",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid", "iq"],
      table: { defaultValue: { summary: "ocean" }, category: "Appearance" },
    },
    label: {
      description: "Label text",
      control: "text",
      table: { defaultValue: { summary: "Value" }, category: "Display" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 75,
    max: 100,
    min: 0,
    theme: "ocean",
    label: "Performance",
  },
  render: (args) => (
    <Card style={{ width: "400px", height: "auto" }}>
      <GaugeWithADial value={args['value']} max={args['max']} min={args['min']} theme={args['theme']} label={args['label']} />
    </Card>
  ),
};

export const CustomRange: Story = {
  args: {
    value: 150,
    max: 200,
    min: 50,
    theme: "sunset",
    label: "Temperature",
  },
  render: (args) => (
    <Card style={{ width: "400px", height: "auto" }}>
      <GaugeWithADial value={args['value']} max={args['max']} min={args['min']} theme={args['theme']} label={args['label']} />
    </Card>
  ),
};