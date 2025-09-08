import { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../../Card';
import { DonutChart, DonutChartProps } from '../DonutChart';

const data = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7],
];

// Data in object format for direct use
const objectData = [
  { task: 'Work', hours: 11 },
  { task: 'Eat', hours: 2 },
  { task: 'Commute', hours: 2 },
  { task: 'Watch TV', hours: 2 },
  { task: 'Sleep', hours: 7 },
];

const meta: Meta<DonutChartProps> = {
  title: 'Components/Charts/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Installation and Basic Usage

\`\`\`tsx
import { DonutChart } from '@crayon-ui/react-ui/Charts/DonutChart';

// Basic implementation with array data format
<DonutChart
  data={[['Category', 'Value'], ['Item 1', 30], ['Item 2', 70]]}
/>

// Or with object data format
<DonutChart
  data={[{ category: 'Item 1', value: 30 }, { category: 'Item 2', value: 70 }]}
  categoryKey="category"
  dataKey="value"
/>
\`\`\`

## Data Structure

DonutChart supports two data formats:

1. **Google Charts Format**: Array of arrays where the first array is headers
   \`[['Category', 'Value'], ['Item 1', 30], ['Item 2', 70]]\`

2. **Object Format**: Array of objects with consistent keys
   \`[{ category: 'Item 1', value: 30 }, { category: 'Item 2', value: 70 }]\`
      `,
      },
    },
  },
  argTypes: {
    data: {
      description: 'Data for the chart in either array format or object format',
      control: 'object',
    },
    categoryKey: {
      description: 'Key for category values in object data format (defaults to "0" for array data)',
      control: 'text',
    },
    dataKey: {
      description: 'Key for numeric values in object data format (defaults to "1" for array data)',
      control: 'text',
    },
    theme: {
      description: 'Color theme for the chart',
      control: 'select',
      options: ['ocean', 'orchid', 'emerald', 'sunset', 'spectrum', 'vivid', 'iq'],
    },
    appearance: {
      description: 'Chart appearance: full circle or semicircle',
      control: 'radio',
      options: ['circular', 'semiCircular'],
    },
    legend: {
      description: 'Show or hide the legend',
      control: 'boolean',
    },
    legendVariant: {
      description: 'Legend style variant',
      control: 'radio',
      options: ['default', 'stacked'],
    },
    pieHole: {
      description: 'Size of the donut hole (0-1, where 0.5 is 50% of radius)',
      control: { type: 'range', min: 0, max: 0.9, step: 0.1 },
    },
    cornerRadius: {
      description: 'Radius for slice corners',
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
    paddingAngle: {
      description: 'Angle between slices',
      control: { type: 'range', min: 0, max: 10, step: 0.5 },
    },
  },
  tags: ['!dev', 'autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDonutChart: Story = {
  name: 'Default Donut Chart',
  args: {
    data: data,
    theme: 'iq',
    pieHole: 0.4,
    legend: true,
    legendVariant: 'default',
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, ...restArgs } = args;
    
    return (
      <Card style={{ width: '650px', height: 'auto', padding: '24px' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 600 }}>
          Daily Time Allocation
        </h3>
        <DonutChart data={data} {...restArgs} />
      </Card>
    );
  },
};

export const ObjectDataFormat: Story = {
  name: 'Object Data Format',
  args: {
    data: objectData,
    categoryKey: 'task',
    dataKey: 'hours',
    theme: 'emerald',
    pieHole: 0.5,
    cornerRadius: 4,
    paddingAngle: 2,
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, categoryKey, dataKey, ...restArgs } = args;
    
    return (
      <Card style={{ width: '650px', height: 'auto', padding: '24px' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 600 }}>
          Daily Time Allocation (Object Format)
        </h3>
        <DonutChart data={data} categoryKey={categoryKey} dataKey={dataKey} {...restArgs} />
      </Card>
    );
  },
};

export const SemiCircularDonut: Story = {
  name: 'Semi-Circular Donut',
  args: {
    data: data,
    theme: 'sunset',
    pieHole: 0.6,
    appearance: 'semiCircular',
    cornerRadius: 6,
    paddingAngle: 1,
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, ...restArgs } = args;
    
    return (
      <Card style={{ width: '650px', height: 'auto', padding: '24px' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 600 }}>
          Semi-Circular Donut Chart
        </h3>
        <DonutChart data={data} {...restArgs} />
      </Card>
    );
  },
};

export const PercentageFormat: Story = {
  name: 'Percentage Format',
  args: {
    data: data,
    theme: 'vivid',
    pieHole: 0.5,
    format: 'percentage',
    cornerRadius: 2,
  },
  render: (args) => {
    // Destructure required props to ensure they're passed correctly
    const { data, ...restArgs } = args;
    
    return (
      <Card style={{ width: '650px', height: 'auto', padding: '24px' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 600 }}>
          Time Allocation (Percentage)
        </h3>
        <DonutChart data={data} {...restArgs} />
      </Card>
    );
  },
};