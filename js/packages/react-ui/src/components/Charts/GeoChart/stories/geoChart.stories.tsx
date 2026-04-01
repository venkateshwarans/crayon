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
    variant: {
      description: 'The display mode of the chart. `"regions"` fills countries with a color gradient (choropleth). `"bubble"` places sized circles at country/city centroids. `"heat"` renders the same choropleth map with a warm intensity-driven color gradient.',
      control: 'radio',
      options: ['regions', 'bubble', 'heat'],
      table: {
        type: { summary: '"regions" | "bubble" | "heat"' },
        defaultValue: { summary: 'regions' },
        category: '🎨 Visual Styling',
      },
    },
    markerOpacity: {
      description: 'Opacity of the bubbles when `variant="bubble"`. Has no effect in `"regions"` mode.',
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0.5' },
        category: '🎨 Visual Styling',
      },
    },
    region: {
      description: 'The map region to display. For a list of available region codes, refer to the [Google GeoChart documentation](https://developers.google.com/chart/interactive/docs/gallery/geochart#Continent_Hierarchy).',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'world' },
        category: '📊 Data Configuration',
      },
    },
    theme: {
      description: 'The color palette applied to the chart color axis.',
      control: 'select',
      options: ['ocean', 'orchid', 'emerald', 'sunset', 'spectrum', 'vivid', 'iq'],
      table: {
        type: { summary: 'PaletteName' },
        defaultValue: { summary: 'ocean' },
        category: '🎨 Visual Styling',
      },
    },
    backgroundColor: {
      description: 'Background color of the chart area surrounding the map.',
      control: 'color',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#f8f8f8' },
        category: '🎨 Visual Styling',
      },
    },
    legend: {
      description: 'Position of the color legend. Use `"none"` to hide it.',
      control: 'radio',
      options: ['none', 'top', 'bottom'],
      table: {
        type: { summary: '"none" | "top" | "bottom"' },
        defaultValue: { summary: 'none' },
        category: '📱 Display Options',
      },
    },
    width: {
      description: 'Width of the chart.',
      control: 'text',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '100%' },
        category: '📱 Display Options',
      },
    },
    height: {
      description: 'Height of the chart.',
      control: 'text',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '500px' },
        category: '📱 Display Options',
      },
    },
  },
  tags: ['!dev', 'autodocs'],
};

export default meta;

const geoChartData = [
  ['Country', 'Value'],
  ['United States', 100],
  ['Canada', 80],
  ['Mexico', 60],
  ['Germany', 40],
  ['France', 20],
  ['India', 90],
];

/**
 * ## Regions Variant (Default)
 *
 * The default `"regions"` variant fills each country with a color from the
 * theme palette based on its value — a choropleth map.
 *
 * **Key Features Shown:**
 * - Default `variant="regions"` behaviour
 * - World map with ocean theme
 * - Color gradient driven by data values
 */
export const GeoChartStory: StoryObj<GeoChartProps> = {
  name: 'Regions Variant (Default)',
  args: {
    data: geoChartData,
    region: 'world',
    variant: 'regions',
    legend: 'none',
    theme: 'ocean',
  },
};

// Lat/Long format bypasses geocoding — markers render directly at coordinates
const worldBubbleData = [
  ['Lat', 'Long', 'Value'],
  // Americas — low values (90–260)
  [39.83, -98.58, 250],   // United States
  [-14.24, -51.93, 220],  // Brazil
  [56.13, -106.35, 190],  // Canada
  [23.63, -102.55, 170],  // Mexico
  [-38.42, -63.62, 150],  // Argentina
  [4.57, -74.30, 130],    // Colombia
  [-35.68, -71.54, 120],  // Chile
  [-9.19, -75.02, 110],   // Peru
  [6.42, -66.59, 100],    // Venezuela
  [-1.83, -78.18, 95],    // Ecuador
  [-16.29, -63.59, 90],   // Bolivia
  // Europe — mid values (400–560)
  [51.17, 10.45, 540],    // Germany
  [46.23, 2.21, 520],     // France
  [55.38, -3.44, 560],    // United Kingdom
  [41.87, 12.57, 480],    // Italy
  [40.46, -3.75, 450],    // Spain
  [52.13, 5.29, 430],     // Netherlands
  [51.92, 19.15, 410],    // Poland
  [60.13, 18.64, 420],    // Sweden
  [50.50, 4.47, 400],     // Belgium
  [46.82, 8.23, 460],     // Switzerland
  [60.47, 8.47, 440],     // Norway
  // Africa & Middle East — mid-high values (650–780)
  [9.08, 8.68, 720],      // Nigeria
  [-30.56, 22.94, 680],   // South Africa
  [26.82, 30.80, 700],    // Egypt
  [-1.29, 36.82, 660],    // Kenya
  [9.15, 40.49, 650],     // Ethiopia
  [23.89, 45.08, 760],    // Saudi Arabia
  [32.43, 53.69, 740],    // Iran
  [38.96, 35.24, 755],    // Turkey
  [28.03, 1.66, 665],     // Algeria
  // Asia & Oceania — high values (900–1200)
  [35.86, 104.20, 1200],  // China
  [20.59, 78.96, 1150],   // India
  [36.20, 138.25, 1050],  // Japan
  [35.91, 127.77, 990],   // South Korea
  [-0.79, 113.92, 970],   // Indonesia
  [30.38, 69.35, 940],    // Pakistan
  [15.87, 100.99, 960],   // Thailand
  [14.06, 108.28, 930],   // Vietnam
  [12.88, 121.77, 920],   // Philippines
  [-25.27, 133.78, 900],  // Australia
];

/**
 * ## Bubble Variant
 *
 * The `"bubble"` variant renders a circle at each lat/long coordinate,
 * sized and colored by the data value. Useful for comparing magnitudes
 * at geographic locations without filling entire regions.
 *
 * **Key Features Shown:**
 * - `variant="bubble"` with world-wide country data
 * - Bubble size proportional to value
 * - `markerOpacity` controlling bubble transparency
 */
export const BubbleVariant: StoryObj<GeoChartProps> = {
  name: 'Bubble Variant',
  args: {
    data: worldBubbleData,
    region: 'world',
    variant: 'bubble',
    markerOpacity: 0.6,
    legend: 'none',
    theme: 'spectrum',
    height: '500px',
  },
};

const heatMapData = [
  ['Country', 'Intensity'],
  ['China', 980],
  ['India', 920],
  ['United States', 860],
  ['Indonesia', 740],
  ['Brazil', 700],
  ['Pakistan', 660],
  ['Nigeria', 620],
  ['Bangladesh', 580],
  ['Russia', 540],
  ['Ethiopia', 500],
  ['Mexico', 480],
  ['Japan', 460],
  ['Philippines', 440],
  ['Egypt', 420],
  ['DR Congo', 400],
  ['Vietnam', 380],
  ['Iran', 360],
  ['Turkey', 340],
  ['Germany', 320],
  ['Thailand', 300],
  ['United Kingdom', 280],
  ['France', 260],
  ['Tanzania', 240],
  ['South Africa', 220],
  ['Argentina', 200],
  ['Kenya', 180],
  ['Colombia', 160],
  ['Spain', 140],
  ['Algeria', 120],
  ['Australia', 100],
  ['Canada', 80],
  ['Saudi Arabia', 60],
  ['Peru', 40],
  ['Sweden', 20],
  ['New Zealand', 10],
];

/**
 * ## Heat Variant
 *
 * The `"heat"` variant renders a choropleth map with a warm color gradient,
 * making value intensity immediately visible across regions. It uses the
 * same `chartType="GeoChart"` as the regions variant — no API key needed.
 *
 * **Key Features Shown:**
 * - `variant="heat"` with standard country/state + value data
 * - `region="world"` to zoom into world map
 * - `sunset` theme for a warm orange-to-red heat gradient
 * - Color legend showing "Highest" / "Lowest" gradient scale
 */
export const HeatVariant: StoryObj<GeoChartProps> = {
  name: 'Heat Variant',
  args: {
    data: heatMapData,
    variant: 'heat',
    region: 'world',
    theme: 'sunset',
    legend: 'bottom',
    height: '500px',
  },
};

/**
 * ## Custom Region
 *
 * Zoom into a specific continent or region using the `region` prop.
 * Pass a region code from the Google GeoChart documentation.
 *
 * **Key Features Shown:**
 * - `region="150"` focuses the map on Europe
 * - Works with both `"regions"` and `"bubble"` variants
 */
export const CustomRegion: StoryObj<GeoChartProps> = {
  name: 'Custom Region',
  args: {
    data: [
      ['Country', 'Value'],
      ['Poland', 100],
      ['France', 80],
      ['Germany', 60],
      ['Spain', 40],
      ['Italy', 90],
    ],
    region: '150',
    variant: 'regions',
    legend: 'none',
    theme: 'orchid',
  },
};

/**
 * ## Themed Chart
 *
 * The `theme` prop drives the entire color axis of the chart.
 * Switch themes to match your application's design system.
 */
export const ThemedGeoChart: StoryObj<GeoChartProps> = {
  name: 'Themed Chart',
  args: {
    data: geoChartData,
    region: 'world',
    variant: 'regions',
    theme: 'sunset',
  },
};

/**
 * ## Custom Colors
 *
 * The `colorAxis` prop allows for custom color gradients.
 * Pass an array of colors to create a unique gradient.
 *
 * **Key Features Shown:**
 * - Custom color gradient
 * - Works with both `"regions"` and `"bubble"` variants
 */
export const CustomColors: StoryObj<GeoChartProps> = {
  name: 'Custom Colors',
  args: {
    data: geoChartData,
    region: 'world',
    variant: 'regions',
    colorAxis: { colors: ['#ff69b4', '#33cc33', '#6666cc'] },
    legend: 'none',
    theme: 'emerald',
  },
};
