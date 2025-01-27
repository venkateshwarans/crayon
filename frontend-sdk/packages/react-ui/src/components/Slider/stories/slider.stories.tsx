import type { Meta, StoryObj } from "@storybook/react";
import Slider from "../Slider";
import "../slider.scss";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Continuous: Story = {
  args: {
    variant: "continuous",
    min: 0,
    max: 100,
    step: 1,
    value: [50],
    onValueChange: (value) => console.log(value),
  },
};

export const Discrete: Story = {
  args: {
    variant: "discrete",
    min: 0,
    max: 100,
    step: 10,
    value: [50],
    onValueChange: (value) => console.log(value),
  },
};

export const Range: Story = {
  args: {
    variant: "range",
    min: 0,
    max: 100,
    step: 1,
    value: [25, 75],
    defaultValue: [25, 75],
    onValueChange: (value) => console.log(value),
  },
};

export const Disabled: Story = {
  args: {
    variant: "continuous",
    min: 0,
    max: 100,
    step: 1,
    disabled: true,
    value: [50],
    onValueChange: (value) => console.log(value),
  },
};
