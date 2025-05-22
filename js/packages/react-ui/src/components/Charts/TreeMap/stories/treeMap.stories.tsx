import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { TreeMap, TreeMapProps } from "../TreeMap";
import { Briefcase, ShoppingBag, Smartphone, Laptop, Building, Car, Home } from "lucide-react";

// Sample treemap data for products by category
const productByCategoryData = [
  {
    name: "Electronics",
    value: 5000,
    children: [
      { name: "Smartphones", value: 2000 },
      { name: "Laptops", value: 1800 },
      { name: "Accessories", value: 1200 },
    ],
  },
  {
    name: "Clothing",
    value: 3500,
    children: [
      { name: "Men's", value: 1500 },
      { name: "Women's", value: 1600 },
      { name: "Kids", value: 400 },
    ],
  },
  {
    name: "Home Goods",
    value: 2800,
    children: [
      { name: "Furniture", value: 1300 },
      { name: "Kitchenware", value: 800 },
      { name: "Decor", value: 700 },
    ],
  },
  {
    name: "Beauty",
    value: 1800,
    children: [
      { name: "Skincare", value: 800 },
      { name: "Makeup", value: 700 },
      { name: "Haircare", value: 300 },
    ],
  },
];

// Sample data for revenue by region and product
const revenueBySectorData = [
  {
    name: "North America",
    value: 8000,
    children: [
      { name: "Enterprise", value: 4500 },
      { name: "Consumer", value: 2500 },
      { name: "Small Business", value: 1000 },
    ],
  },
  {
    name: "Europe",
    value: 6000,
    children: [
      { name: "Enterprise", value: 3000 },
      { name: "Consumer", value: 2000 },
      { name: "Small Business", value: 1000 },
    ],
  },
  {
    name: "Asia Pacific",
    value: 4500,
    children: [
      { name: "Enterprise", value: 2000 },
      { name: "Consumer", value: 1500 },
      { name: "Small Business", value: 1000 },
    ],
  },
];

// Sample treemap data for campaign distribution
const campaignData = [
  {
    name: "Paid Search",
    value: 4200,
  },
  {
    name: "Social Media",
    value: 3800,
  },
  {
    name: "Email",
    value: 2900,
  },
  {
    name: "Display",
    value: 2300,
  },
  {
    name: "Affiliate",
    value: 1800,
  },
  {
    name: "Direct",
    value: 5500,
  }
];

// Icons for the legend
const icons = {
  "Electronics": Smartphone,
  "Clothing": ShoppingBag,
  "Home Goods": Home,
  "Beauty": Briefcase,
  "North America": Building,
  "Europe": Building,
  "Asia Pacific": Building,
  "Paid Search": Car,
  "Social Media": Smartphone,
  "Email": Briefcase,
  "Display": Laptop,
  "Affiliate": ShoppingBag,
  "Direct": Home,
};

const meta: Meta<TreeMapProps> = {
  title: "Components/Charts/TreeMap",
  component: TreeMap,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "```tsx\nimport { TreeMap } from '@crayonai/react-ui/Charts/TreeMap';\n```",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      description: "The data to be displayed in the tree map",
      control: "object",
      table: {
        type: { summary: "TreeMapData" },
        defaultValue: { summary: "[]" },
        category: "Data",
      },
    },
    theme: {
      description: "The color theme for the chart",
      control: "select",
      options: ["ocean", "orchid", "emerald", "sunset", "spectrum", "vivid"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "ocean" },
        category: "Appearance",
      },
    },
    legend: {
      description: "Whether to show the legend",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Appearance",
      },
    },
    isAnimationActive: {
      description: "Whether to enable animations",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Behavior",
      },
    },
    dataKey: {
      description: "The key in the data object to use for the values",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "value" },
        category: "Data",
      },
    },
    contentFormat: {
      description: "How to format the content displayed inside each rectangle",
      control: "select",
      options: ["value", "name", "nameValue"],
      table: {
        type: { summary: "string | function" },
        defaultValue: { summary: "nameValue" },
        category: "Appearance",
      },
    },
    aspectRatio: {
      description: "The aspect ratio of the treemap rectangles",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0.5" },
        category: "Layout",
      },
    },
    stroke: {
      description: "The stroke color for the rectangles",
      control: "color",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#fff" },
        category: "Appearance",
      },
    },
    strokeWidth: {
      description: "The stroke width for the rectangles",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
        category: "Appearance",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TreeMap>;

export const Basic: Story = {
  name: "Basic TreeMap",
  args: {
    data: productByCategoryData,
    theme: "ocean",
    legend: true,
    isAnimationActive: true,
    contentFormat: "nameValue",
    aspectRatio: 0.5,
    stroke: "#fff",
    strokeWidth: 1,
  },
  render: (args) => (
    <div style={{ width: "600px", height: "400px" }}>
      <Card className="p-4">
        <h3 className="mb-4 text-lg font-semibold">Products by Category</h3>
        <TreeMap {...args} />
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
const data = [
  {
    name: "Electronics",
    value: 5000,
    children: [
      { name: "Smartphones", value: 2000 },
      { name: "Laptops", value: 1800 },
      { name: "Accessories", value: 1200 },
    ],
  },
  {
    name: "Clothing",
    value: 3500,
    children: [
      { name: "Men's", value: 1500 },
      { name: "Women's", value: 1600 },
      { name: "Kids", value: 400 },
    ],
  },
  {
    name: "Home Goods",
    value: 2800,
    children: [
      { name: "Furniture", value: 1300 },
      { name: "Kitchenware", value: 800 },
      { name: "Decor", value: 700 },
    ],
  },
  {
    name: "Beauty",
    value: 1800,
    children: [
      { name: "Skincare", value: 800 },
      { name: "Makeup", value: 700 },
      { name: "Haircare", value: 300 },
    ],
  },
];

return (
  <Card className="p-4">
    <h3 className="mb-4 text-lg font-semibold">Products by Category</h3>
    <TreeMap 
      data={data}
      theme="ocean"
      legend={true}
      contentFormat="nameValue"
    />
  </Card>
);`,
      },
    },
  },
};

export const WithIcons: Story = {
  name: "TreeMap with Icons",
  args: {
    data: productByCategoryData,
    theme: "emerald",
    icons: icons,
    legend: true,
    isAnimationActive: true,
    contentFormat: "nameValue",
  },
  render: (args) => (
    <div style={{ width: "600px", height: "400px" }}>
      <Card className="p-4">
        <h3 className="mb-4 text-lg font-semibold">Products by Category (with Icons)</h3>
        <TreeMap {...args} />
      </Card>
    </div>
  ),
};

export const RevenueBySector: Story = {
  name: "Revenue by Sector",
  args: {
    data: revenueBySectorData,
    theme: "sunset",
    legend: true,
    isAnimationActive: true,
    contentFormat: "nameValue",
  },
  render: (args) => (
    <div style={{ width: "600px", height: "400px" }}>
      <Card className="p-4">
        <h3 className="mb-4 text-lg font-semibold">Revenue by Region and Sector</h3>
        <TreeMap {...args} />
      </Card>
    </div>
  ),
};

export const CampaignDistribution: Story = {
  name: "Campaign Distribution",
  args: {
    data: campaignData,
    theme: "orchid",
    icons: icons,
    legend: true,
    isAnimationActive: true,
    contentFormat: "nameValue",
  },
  render: (args) => (
    <div style={{ width: "600px", height: "400px" }}>
      <Card className="p-4">
        <h3 className="mb-4 text-lg font-semibold">Marketing Campaign Distribution</h3>
        <TreeMap {...args} />
      </Card>
    </div>
  ),
};

export const ContentFormatVariations: Story = {
  name: "Content Format Variations",
  args: {
    data: productByCategoryData,
    theme: "spectrum",
    legend: true,
    isAnimationActive: true,
  },
  render: (args) => (
    <div style={{ width: "600px", height: "600px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <Card className="p-4">
        <h3 className="mb-4 text-lg font-semibold">Name Only</h3>
        <TreeMap {...args} contentFormat="name" />
      </Card>
      <Card className="p-4">
        <h3 className="mb-4 text-lg font-semibold">Value Only</h3>
        <TreeMap {...args} contentFormat="value" />
      </Card>
      <Card className="p-4">
        <h3 className="mb-4 text-lg font-semibold">Name and Value</h3>
        <TreeMap {...args} contentFormat="nameValue" />
      </Card>
    </div>
  ),
};
