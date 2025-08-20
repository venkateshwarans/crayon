import { Meta, StoryObj } from "@storybook/react";
import { ComboChart, ComboChartProps } from "../ComboChart";

const meta: Meta<ComboChartProps> = {
  title: "Components/Charts/ComboChart",
  component: ComboChart,
  parameters: {
    layout: "centered",
    docs: {
      description: `
        \`\`\`tsx
        import { ComboChart } from '@crayon-ui/react-ui/Charts/ComboChart';
        \`\`\`
      `,
    },
  },
  tags: ["!dev", "autodocs"],
};

export default meta;

const comboChartData = [
  ["Month", "Bolivia", "Ecuador", "Madagascar", "Papua New Guinea", "Rwanda", "Average"],
  ["2004/05", 165, 938, 522, 998, 450, 614.6],
  ["2005/06", 135, 1120, 599, 1268, 288, 682],
  ["2006/07", 157, 1167, 587, 807, 397, 623],
  ["2007/08", 139, 1110, 615, 968, 215, 609.4],
  ["2008/09", 136, 691, 629, 1026, 366, 569.6],
];

export const ComboChartStory: StoryObj<ComboChartProps> = {
  name: "Combo Chart",
  args: {
    data: comboChartData,
    width: "1024px",
    height: "500px",
    seriesType: "bars",
    series: [
      { type: "bars", color: "#3366cc" },
      { type: "bars", color: "#dc3912" },
      { type: "bars", color: "#ff9900" },
      { type: "bars", color: "#109618" },
      { type: "bars", color: "#990099" },
      { type: "line", color: "#0099c6" },
    ],
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    legend: {
      position: "bottom",
      alignment: "center",
    },
    backgroundColor: "#f5f5f5",
    bar: { groupWidth: "80%" },
    annotations: {
      alwaysOutside: true,
      textStyle: {
        fontSize: 14,
        color: "#000",
        auraColor: "none",
      },
    },
  },
};

export const ComboChartWithThemeStory: StoryObj<ComboChartProps> = {
  name: "Combo Chart with Theme",
  args: {
    data: comboChartData,
    width: "1024px",
    height: "500px",
    seriesType: "bars",
    theme: "ocean",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    legend: {
      position: "bottom",
      alignment: "center",
    },
    bar: { groupWidth: "80%" },
    annotations: {
      alwaysOutside: true,
      textStyle: {
        fontSize: 14,
        color: "#000",
        auraColor: "none",
      },
    },
  },
};