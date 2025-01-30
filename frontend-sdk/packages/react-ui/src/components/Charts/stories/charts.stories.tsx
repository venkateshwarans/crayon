import type { Meta, StoryObj } from "@storybook/react";
import { Download, TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis } from "recharts";
import "../charts.scss";

import { Button } from "../../Button";
import { Card } from "../../Card";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header";
import { IconButton } from "../../IconButton";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../Charts";
import { cartesianGrid } from "../cartesianGrid";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "red",
  },
  mobile: {
    label: "Mobile",
    color: "green",
  },
} satisfies ChartConfig;

const BarChartComponent = () => {
  return (
    <Card style={{ width: "500px" }}>
      <Header
        actions={[
          <IconButton variant="tertiary" key="download-btn" size="small" icon={<TrendingUp />} />,
        ]}
        title="Bar Chart - Multiple"
        subtitle="January - June 2024"
      />
      <>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            {cartesianGrid()}
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </>
      <Footer>
        <Button iconRight={<Download />}>Download</Button>
      </Footer>
    </Card>
  );
};

const meta = {
  title: "Components/Charts/BarChart",
  component: BarChartComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BarChartComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomData: Story = {
  args: {
    data: [
      { month: "July", desktop: 250, mobile: 150 },
      { month: "August", desktop: 320, mobile: 180 },
      { month: "September", desktop: 280, mobile: 160 },
    ],
  },
};
