import { Meta, StoryObj } from "@storybook/react";
import { BubbleMapChart, BubbleMapChartProps } from "../BubbleMapChart";

const data = [
  ["ID", "X", "Y", "Radius"],
  ["A", 20, 30, 10],
  ["B", 40, 50, 20],
  ["C", 60, 70, 30],
  ["D", 80, 90, 40],
];

const meta: Meta<BubbleMapChartProps> = {
  title: "Components/Charts/BubbleMapChart",
  component: BubbleMapChart,
  parameters: {
    layout: "centered",
    docs: {
      description: `
        \`\`\`tsx
        import { BubbleMapChart } from '@crayon-ui/react-ui/Charts/BubbleMapChart';
        \`\`\`
      `,
    },
  },
  tags: ["!dev", "autodocs"],
};

export default meta;

export const BubbleMapChartStory: StoryObj<BubbleMapChartProps> = {
  name: "Bubble Map Chart",
  args: {
    data: data,
    width: "100%",
    height: "400px",
    title: "Bubble Map Chart",
    legend: "none",
    colorAxis: {
      colors: ["#a52714", "#0f9d58", "#4c5154"],
    },
    bubble: {
      textStyle: {
        fontSize: 12,
      },
    },
    theme: "ocean",
  },
};