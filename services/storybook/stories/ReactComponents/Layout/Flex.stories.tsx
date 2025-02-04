import { Flex, Box } from "@fc/react-components-layout";
import "@fc/react-components-layout/style.css";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "React Components/Layout/Flex",
  component: Flex,
  decorators: [
    (Story) => (
      <Box padding={3} style={{ width: "300px" }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
  },
  render: (args) => (
    <Flex {...args}>
      <div>테스트</div>
      <div>입니다</div>
    </Flex>
  ),
};
