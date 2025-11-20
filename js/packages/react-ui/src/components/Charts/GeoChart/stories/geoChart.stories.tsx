import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { GeoChart, GeoChartProps } from '../GeoChart';
import { getPalette } from '../../utils';

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
    theme: {
      description: 'Select a theme to apply to the chart.',
    },
  },
  tags: ['!dev', 'autodocs'],
};

export default meta;

const geoChartData = [
    ['Lat', 'Long', 'City', 'Population (M)', 'Size'], // Headers
    [37.4232, -122.0853, 'California, US', 0.08, 4],
    [40.7128, -74.0060, 'New York, NY', 8.4, 2],
    [51.5074, -0.1278, 'London, UK', 8.9, 3],
    [35.6895, 139.6917, 'Tokyo, JP', 13.9, 1],

];

const geoChartData2 = [
  ['Country', 'Population'],
  ['IN', 13.9],
  ['US', 3.2],
  ['JP', 12.6],
  ['CA', 14.2],
]
export const GeoChartStory: StoryObj<GeoChartProps> = {
  name: 'Geo Chart',
  args: {
    data: geoChartData2,
    region: 'world',
    colorAxis: { colors: getPalette('iq').colors || [] },
    datalessRegionColor: '#fff',
    defaultColor: '#fff',
    backgroundColor: getPalette('ocean').colors[0],
    legend: 'none',
    theme: 'iq',
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
    theme: 'orchid',
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
    theme: 'emerald',
  },
};

export const ThemedGeoChart: StoryObj<GeoChartProps> = {
  name: 'Themed Geo Chart',
  args: {
    data: geoChartData,
    region: 'world',
    theme: 'sunset',
  },
};