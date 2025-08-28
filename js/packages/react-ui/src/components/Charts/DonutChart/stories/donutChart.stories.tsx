import { Meta, StoryObj } from '@storybook/react';
import { DonutChart, DonutChartProps } from '../DonutChart';

const data = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7],
];

const meta: Meta<DonutChartProps> = {
  title: 'Components/Charts/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: `
        \`\`\`tsx
        import { DonutChart } from '@crayon-ui/react-ui/Charts/DonutChart';
        \`\`\`
      `,
    },
  },
  tags: ['!dev', 'autodocs'],
};

export default meta;

export const DonutChartStory: StoryObj<DonutChartProps> = {
  name: 'Donut Chart',
  args: {
    data: data,
    width: '100%',
    height: '400px',
    title: 'Donut Chart',
    legend: 'none',
    pieHole: 0.4,
    theme: 'ocean',
  },
};