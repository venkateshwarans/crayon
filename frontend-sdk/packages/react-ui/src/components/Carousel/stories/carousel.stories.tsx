import type { Meta, StoryObj } from "@storybook/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../IconButton/iconButton.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Carousel";
import "../carousel.scss";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <Carousel style={{ width: "100%", maxWidth: "20rem" }}>
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index}>
            <div style={{ padding: "0.25rem" }}>
              <div
                style={{
                  display: "flex",
                  aspectRatio: "1/1",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.5rem",
                  border: "1px solid rgb(229, 231, 235)",
                  backgroundColor: "white",
                  padding: "0.5rem",
                }}
              >
                <span style={{ fontSize: "1.875rem", fontWeight: 600 }}>{index + 1}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious icon={<ChevronLeft />} />
      <CarouselNext icon={<ChevronRight />} />
    </Carousel>
  ),
};

export const MultipleItems: Story = {
  render: () => (
    <Carousel style={{ width: "100%", maxWidth: "28rem" }} itemsToScroll={2}>
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index}>
            <div style={{ padding: "0.25rem" }}>
              <div
                style={{
                  display: "flex",
                  aspectRatio: "1/1",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.5rem",
                  border: "1px solid rgb(229, 231, 235)",
                  backgroundColor: "white",
                  padding: "0.5rem",
                }}
              >
                <span style={{ fontSize: "1.875rem", fontWeight: 600 }}>{index + 1}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious icon={<ChevronLeft />} />
      <CarouselNext icon={<ChevronRight />} />
    </Carousel>
  ),
};

export const WithWrappingDiv: Story = {
  render: () => (
    <Carousel
      style={{ width: "100%", maxWidth: "28rem" }}
      hasWrappingDivForCards
      showButtons={false}
    >
      <CarouselContent>
        <div style={{ display: "flex" }}>
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem key={index}>
              <div style={{ padding: "0.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    aspectRatio: "1/1",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.5rem",
                    border: "1px solid rgb(229, 231, 235)",
                    backgroundColor: "white",
                    padding: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.875rem", fontWeight: 600 }}>{index + 1}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </div>
      </CarouselContent>
      <CarouselPrevious icon={<ChevronLeft />} />
      <CarouselNext icon={<ChevronRight />} />
    </Carousel>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Carousel style={{ width: "100%", maxWidth: "28rem" }}>
      <CarouselContent style={{ gap: "1rem" }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index}>
            <div style={{ padding: "0.25rem" }}>
              <div
                style={{
                  display: "flex",
                  aspectRatio: "16/9",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.75rem",
                  border: "1px solid rgb(229, 231, 235)",
                  background: "linear-gradient(to right, rgb(59, 130, 246), rgb(168, 85, 247))",
                  padding: "1.5rem",
                }}
              >
                <span style={{ fontSize: "2.25rem", fontWeight: 700, color: "white" }}>
                  {index + 1}
                </span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious icon={<ChevronLeft />} />
      <CarouselNext icon={<ChevronRight />} />
    </Carousel>
  ),
};
