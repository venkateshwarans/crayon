import type { Meta, StoryObj } from "@storybook/react";
import { MarkDownRenderer } from "../MarkDownRenderer";

const meta: Meta<typeof MarkDownRenderer> = {
  title: "Components/MarkDownRenderer/TestDollarSigns",
  component: MarkDownRenderer,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "600px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MarkDownRenderer>;

export const WithDollarSigns: Story = {
  args: {
    variant: "card",
    textMarkdown: `# Sales Data with Dollar Signs

## Country Sales Data
- Mexico: Last Quarter Sales = $4,222, Previous Quarter Sales = $4,537 (Negative Growth)
- Colombia: Last Quarter Sales not available; only previous quarter = $1,658 is recorded.
- Ireland: Last Quarter Sales = $43,259.55 (No previous record available to compare).
- France: Last Quarter Sales = $31,504.82 (No previous record available to compare).
- Sweden: Last Quarter Sales = $51,056.42 (No previous record available to compare).

## Math Example (using double dollar signs)

$$
\\frac{1}{2} \\rho v^2 S C_L
$$

## Regular text with dollar signs
The product costs $19.99 and the shipping is $5.00, for a total of $24.99.
`,
  },
};

export const WithMathAndDollars: Story = {
  args: {
    variant: "card",
    textMarkdown: `# Math and Dollar Signs

## Regular Currency
- Product A: $10.99
- Product B: $24.50
- Total: $35.49

## Math Formula (using double dollar signs)
$$
E = mc^2
$$

## Another Math Example
$$
\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}
$$

## Text with Dollar Signs in Sentences
The company reported revenue of $1.2 million in Q1, up from $0.8 million in the previous quarter.
`,
  },
};
