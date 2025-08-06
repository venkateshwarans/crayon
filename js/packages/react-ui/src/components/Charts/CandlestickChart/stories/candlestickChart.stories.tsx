import { Meta, StoryObj } from "@storybook/react";
import { CandlestickChart, CandlestickChartProps } from "../CandlestickChart";

const meta: Meta<CandlestickChartProps> = {
  title: "Components/Charts/CandlestickChart",
  component: CandlestickChart,
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

const candlestickData = [
  ["Date", "Low", "Open", "Close", "High"],
  ["2014-01-01", 100, 110, 120, 130],
  ["2014-01-02", 120, 130, 140, 150],
  ["2014-01-03", 140, 150, 160, 170],
  ["2014-01-04", 160, 170, 180, 190],
  ["2014-01-05", 180, 190, 200, 210],
];

export const CandlestickChartStory: StoryObj<CandlestickChartProps> = {
  name: "Candlestick Chart",
  args: {
    data: candlestickData,
    width: "1024px",
    height: "500px",
    title: "Stock prices",
    legend: {
      position: "bottom",
      alignment: "center",
    },
    colors: ["#3366cc"],
    backgroundColor: "#f5f5f5",
    hAxis: {
      title: "Date",
    },
    vAxis: {
      title: "Price",
    },
    candlestick: {
      fallingColor: "#dc3912",
      risingColor: "#109618",
    },
  },
};