import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../Card";
import { FilledMap, FilledMapProps } from "../FilledMap";

const filledMapData = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["India", 700],
];

const meta: Meta<FilledMapProps> = {
  title: 'Components/Charts/FilledMap',
  component: FilledMap,
  parameters: {
    layout: 'centered',
    docs: {
      description: `
        \`\`\`tsx
        import { FilledMap } from '@crayon-ui/react-ui/Charts/FilledMap';
        \`\`\`
      `,
    },
  },
  tags: ['!dev', 'autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: filledMapData,
    theme: "iq",
  },
  render: (args) => (
    <Card style={{ width: "600px", height: "auto" }}>
      <FilledMap data={args['data']} theme={args['theme']} />
    </Card>
  ),
};