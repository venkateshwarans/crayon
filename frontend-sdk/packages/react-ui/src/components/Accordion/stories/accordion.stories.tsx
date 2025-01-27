import type { Meta, StoryObj } from "@storybook/react";
import { Download } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../Accordion";
import "../accordion.scss";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleOpen: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple">
      <AccordionItem value="item-1" variant="card">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant="sunk">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant="card">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleOpen: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
      <AccordionItem value="item-1" variant="card">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant="sunk">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant="card">
        <AccordionTrigger>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const withIcon: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger icon={<Download />}>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger icon={<Download />}>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger icon={<Download />}>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const CardVariant: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" variant="card">
        <AccordionTrigger icon={<Download />}>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant="card">
        <AccordionTrigger icon={<Download />}>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant="card">
        <AccordionTrigger icon={<Download />}>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SunkVariant: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" variant="sunk">
        <AccordionTrigger icon={<Download />}>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant="sunk">
        <AccordionTrigger icon={<Download />}>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant="sunk">
        <AccordionTrigger icon={<Download />}>Accordion Trigger</AccordionTrigger>
        <AccordionContent>Accordion Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
