import { Meta, StoryObj } from "@storybook/react";
import { CandleStickChart, CandleStickChartProps } from "../CandleStickChart";

const data = [
  ["Day", "", "", "", ""],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
];

const meta: Meta<CandleStickChartProps> = {
  title: "Components/Charts/CandlestickChart",
  component: CandleStickChart,
  parameters: {
    layout: "centered",
    docs: {
      description: `
        \`\`\`tsx
        import { CandlestickChart } from '@crayon-ui/react-ui/Charts/CandlestickChart';
        \`\`\`
      `,
    },
  },
  tags: ["!dev", "autodocs"],
};

export default meta;

export const CandlestickChartStory: StoryObj<CandleStickChartProps> = {
  name: "Candlestick Chart",
  args: {
    data: data,
    width: "100%",
    height: "400px",
    title: "Stock prices",
    legend: "none",
    bar: { groupWidth: "100%" },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#a52714" },
      risingColor: { strokeWidth: 0, fill: "#0f9d58" },
    },
    theme: "ocean", // added theme prop
  },
};