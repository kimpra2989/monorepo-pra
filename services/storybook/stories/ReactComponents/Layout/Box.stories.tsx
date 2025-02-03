import { Box } from "@fc/react-components-layout";
import "@fc/react-components-layout/style.css";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "React Components/Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "button",
    padding: "5",
    background: "blue",
  },
};
