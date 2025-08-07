import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { GeoChart, GeoChartProps } from '../GeoChart';

const meta: Meta<GeoChartProps> = {
  title: 'Components/Charts/GeoChart',
  component: GeoChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '```tsx\nimport { GeoChart } from \'@crayon-ui/react-ui/Charts/GeoChart\';\n```',
      },
    },
  },
  argTypes: {
    region: {
      description: 'For a list of available regions, please refer to the [Google GeoChart documentation](https://developers.google.com/chart/interactive/docs/gallery/geochart#Continent_Hierarchy).',
    },
  },
  tags: ['!dev', 'autodocs'],
};

export default meta;

const geoChartData = [
  ['Country', 'Value'],
  ['USA', 100],
  ['Canada', 80],
  ['Mexico', 60],
  ['Germany', 40],
  ['France', 20],
  ['India', 90],
];

export const GeoChartStory: StoryObj<GeoChartProps> = {
  name: 'Geo Chart',
  args: {
    data: geoChartData,
    region: 'world',
    colorAxis: { colors: ['#ff0000', '#00ff00', '#0000ff'] },
    datalessRegionColor: '#f5f5f5',
    defaultColor: '#f5f5f5',
    legend: 'none',
  },
};

export const CustomRegion: StoryObj<GeoChartProps> = {
  name: 'Custom Region',
  args: {
    data: [
      ['Country', 'Value'],
      ['Poland', 100],
      ['France', 80]
    ],
    region: '150',
    colorAxis: { colors: ['#ff0000', '#00ff00', '#0000ff'] },
    datalessRegionColor: '#f5f5f5',
    defaultColor: '#f5f5f5',
    legend: 'none',
  },
};

export const CustomColors: StoryObj<GeoChartProps> = {
  name: 'Custom Colors',
  args: {
    data: geoChartData,
    region: 'world',
    colorAxis: { colors: ['#ff69b4', '#33cc33', '#6666cc'] },
    datalessRegionColor: '#f5f5f5',
    defaultColor: '#f5f5f5',
    legend: 'none',
  },
};