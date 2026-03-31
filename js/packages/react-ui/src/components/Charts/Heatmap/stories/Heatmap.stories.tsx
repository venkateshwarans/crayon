import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { Heatmap, HeatmapProps } from "../Heatmap";
import { getPalette } from "../../utils";

// GeoChart-compatible data table: header + rows
const heatmapData = [
  ["Country", "Value"],
  ["US", 120],
  ["DE", 80],
  ["IN", 150],
  ["JP", 60],
  ["CA", 100],
];

const meta: Meta<HeatmapProps> = {
  title: "Components/Charts/Heatmap",
  component: Heatmap,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\nimport { Heatmap } from '@crayon-ui/react-ui/Charts/Heatmap';\n```",
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
      table: { defaultValue: { summary: "ocean" }, category: "Appearance" },
    },
    region: {
      description: "Region selector (e.g., 'world', 'US', 'IN', UN M49 codes)",
      control: "text",
      table: { defaultValue: { summary: "world" }, category: "Appearance" },
    },
    colorAxis: {
      description: "Color gradient for heat scale (low → high). Defaults to theme palette.",
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
    data: heatmapData,
    theme: "iq",
    region: "world",
    // Use theme palette for gradient by default
    // You can override with: colorAxis: { colors: ["#e3f2fd", "#1565c0"] },
    legend: "none",
    backgroundColor: "#ffffff",
  },
  render: (args) => (
    <Card style={{ width: "720px", height: "auto" }}>
      <Heatmap
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
    data: heatmapData,
    theme: "iq",
    region: "world",
    colorAxis: { colors: getPalette('iq').colors }, // low → high
    datalessRegionColor: "#f5f5f5",
    defaultColor: "#f5f5f5",
    legend: "none",
  },
  render: (args) => (
    <Card style={{ width: "720px", height: "auto" }}>
      <Heatmap
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