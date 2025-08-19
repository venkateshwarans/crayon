import { Meta, StoryObj } from "@storybook/react";
import { Histogram, HistogramProps } from "../HistogramChart";

const meta: Meta<HistogramProps> = {
  title: "Components/Charts/Histogram",
  component: Histogram,
  parameters: {
    layout: "centered",
    docs: {
      description: `
        \`\`\`tsx
        import { Histogram } from '@crayon-ui/react-ui/Charts/Histogram';
        \`\`\`
      `,
    },
  },
  tags: ["!dev", "autodocs"],
};

export default meta;

const histogramData = [
  ["Dinosaur", "Length"],
  ["Acrocanthosaurus (high estimate)", 12.2],
  ["Acrocanthosaurus (low estimate)", 11.5],
  ["Albertosaurus", 12.2],
  ["Allosaurus", 12.8],
  ["Apatosaurus", 22.6],
  ["Archaeopteryx", 0.9],
  ["Argentinosaurus (high estimate)", 34.6],
  ["Argentinosaurus (low estimate)", 26.3],
];

export const HistogramStory: StoryObj<HistogramProps> = {
  name: "Histogram",
  args: {
    data: histogramData,
    width: "1024px",
    height: "500px",
    title: "Lengths of dinosaurs, in meters",
    legend: {
      position: "bottom",
      alignment: "center",
    },
    colors: ["#3366cc"],
    backgroundColor: "#f5f5f5",
    hAxis: {
      title: "Length",
    },
    vAxis: {
      title: "Dinosaurs",
    },
    histogram: {
      bucketSize: 1,
      maxNumBuckets: 10,
      minValue: 0,
      maxValue: 40,
    },
  },
};

export const HistogramWithThemeStory: StoryObj<HistogramProps> = {
  name: "Histogram with Theme",
  args: {
    data: histogramData,
    width: "1024px",
    height: "500px",
    title: "Lengths of dinosaurs, in meters",
    theme: "ocean",
    legend: {
      position: "bottom",
      alignment: "center",
    },
    hAxis: {
      title: "Length",
    },
    vAxis: {
      title: "Dinosaurs",
    },
    histogram: {
      bucketSize: 1,
      maxNumBuckets: 10,
      minValue: 0,
      maxValue: 40,
    },
  },
};