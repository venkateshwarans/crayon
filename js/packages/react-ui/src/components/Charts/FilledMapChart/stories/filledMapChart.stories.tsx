import { Meta, StoryObj } from '@storybook/react';
import { FilledMapChart, FilledMapChartProps } from '../FilledMapChart';

const data = [
  ['Country', 'Popularity'],
  ['Germany', 200],
  ['United States', 300],
  ['Brazil', 400],
  ['Canada', 500],
  ['France', 600],
  ['RU', 700],
];

const meta: Meta<FilledMapChartProps> = {
  title: 'Components/Charts/FilledMapChart',
  component: FilledMapChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: `
        \`\`\`tsx
        import { FilledMapChart } from '@crayon-ui/react-ui/Charts/FilledMapChart';
        \`\`\`
      `,
    },
  },
  tags: ['!dev', 'autodocs'],
};

export default meta;

export const FilledMapChartStory: StoryObj<FilledMapChartProps> = {
  name: 'Filled Map Chart',
  args: {
    data: data,
    width: '100%',
    height: '400px',
    title: 'Filled Map Chart',
    legend: 'none',
    region: 'world',
    theme: 'ocean',
  },
};