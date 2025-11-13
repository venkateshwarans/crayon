import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { FilledMap, FilledMapProps } from "../FilledMap";

const filledMapData = [
  { region: "North America", value: 300 },
  { region: "Europe", value: 250 },
  { region: "Asia", value: 400 },
  { region: "South America", value: 150 },
  { region: "Africa", value: 200 },
];

const meta: Meta<FilledMapProps> = {
  title: "Components/Charts/FilledMap",
  component: FilledMap,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\\nimport { FilledMap } from '@crayon-ui/react-ui/Charts/FilledMap';\\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description: "Array of regional data",
      control: false,
      table: { category: "Data" },
    },
    theme: {
      description: "Color theme",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid", "iq"],
      table: { defaultValue: { summary: "ocean" }, category: "Appearance" },
    },
    valueKey: {
      description: "Key for values",
      control: "text",
      table: { defaultValue: { summary: "value" }, category: "Data" },
    },
    regionKey: {
      description: "Key for regions",
      control: "text",
      table: { defaultValue: { summary: "region" }, category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: filledMapData,
    theme: "ocean",
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <FilledMap data={args['data']} theme={args['theme']} />
    </Card>
  ),
};