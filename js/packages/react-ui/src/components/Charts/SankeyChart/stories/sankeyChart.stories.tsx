import { Meta, StoryObj } from "@storybook/react";
import { SankeyChart, SankeyChartProps, data } from "../SankeyChart";

const meta: Meta<SankeyChartProps> = {
  title: "Components/Charts/SankeyChart",
  component: SankeyChart,
  parameters: {
    layout: "centered",
    docs: {
      description: `
        \`\`\`tsx
        import { SankeyChart } from '@crayon-ui/react-ui/Charts/SankeyChart';
        \`\`\`
      `,
    },
  },
  tags: ["!dev", "autodocs"],
};

export default meta;

export const SankeyChartStory: StoryObj<SankeyChartProps> = {
  name: "Sankey Chart",
  args: {
    data: data,
    width: "100%",
    height: "500px",
    title: "Energy flow",
    nodeColor: "#3366cc",
    nodeWidth: 20,
    nodePadding: 10,
    linkColor: "#109618",
    linkOpacity: 0.5,
    tooltip: {
      trigger: "none",
    },
  },
};