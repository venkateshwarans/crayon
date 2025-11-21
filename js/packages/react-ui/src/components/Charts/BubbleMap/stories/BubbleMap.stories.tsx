import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { BubbleMap, BubbleMapProps } from "../BubbleMap";
import { getPalette } from "../../utils";

// Markers (bubbles) data: [Lat, Long, Label, Value, Size]
const bubbleMapData = [
  ["Lat", "Long", "City", "Sales Increase", "Size"],
  [40.7128, -74.0060, "New York, US", 8.4, 8.4],
  [34.0522, -118.2437, "Los Angeles, US", 3.9, 3.9],
  [41.8781, -87.6298, "Chicago, US", 2.7, 2.7],
  [29.7604, -95.3698, "Houston, US", 2.3, 2.3],
  [33.4484, -112.0740, "Phoenix, US", 1.6, 1.6],
];

const meta: Meta<BubbleMapProps> = {
  title: "Components/Charts/BubbleMap",
  component: BubbleMap,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\nimport { BubbleMap } from '@crayon-ui/react-ui/Charts/BubbleMap';\n```",
      },
    },
  },
  tags: ["!dev", "autodocs"],
  argTypes: {
    data: {
      description: "Geo data table. First row is headers, subsequent rows are [region, value]",
      control: false,
      table: { category: "Data" },
    },
    theme: {
      description: "Color theme (used when colorAxis is not provided)",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid", "iq"],
      table: { defaultValue: { summary: "iq" }, category: "Appearance" },
    },
    region: {
      description: "Region selector (e.g., 'world', 'US', 'IN', UN M49 codes)",
      control: "text",
      table: { defaultValue: { summary: "world" }, category: "Appearance" },
    },
    colorAxis: {
      description: "Color gradient for scale (low → high). Defaults to theme palette.",
      control: false,
      table: { category: "Appearance" },
    },
    datalessRegionColor: {
      description: "Fill color for regions without data",
      control: "color",
      table: { category: "Appearance" },
    },
    defaultColor: {
      description: "Default fill color",
      control: "color",
      table: { category: "Appearance" },
    },
    backgroundColor: {
      description: "Map background color",
      control: "color",
      table: { category: "Appearance" },
    },
    legend: {
      description: "Legend display mode",
      control: "select",
      options: ["none", "auto", "right"],
      table: { defaultValue: { summary: "none" }, category: "Display" },
    },
    width: { control: false },
    height: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: bubbleMapData,
    theme: "iq",
    region: "US",
    legend: "none",
    backgroundColor: "#ffffff",
  },
  render: (args) => (
    <Card style={{ width: "720px", height: "auto" }}>
      <BubbleMap
        data={args["data"]}
        theme={args["theme"]}
        region={args["region"]}
        colorAxis={args["colorAxis"]}
        datalessRegionColor={args["datalessRegionColor"]}
        defaultColor={args["defaultColor"]}
        backgroundColor={args["backgroundColor"]}
        legend={args["legend"]}
      />
    </Card>
  ),
};

export const CustomGradient: Story = {
  args: {
    data: bubbleMapData,
    theme: "iq",
    region: "world",
    colorAxis: { colors: getPalette('iq').colors }, // low → high
    datalessRegionColor: "#f5f5f5",
    defaultColor: "#f5f5f5",
    legend: "none",
  },
  render: (args) => (
    <Card style={{ width: "720px", height: "auto" }}>
      <BubbleMap
        data={args["data"]}
        theme={args["theme"]}
        region={args["region"]}
        colorAxis={args["colorAxis"]}
        datalessRegionColor={args["datalessRegionColor"]}
        defaultColor={args["defaultColor"]}
        backgroundColor={args["backgroundColor"]}
        legend={args["legend"]}
      />
    </Card>
  ),
};