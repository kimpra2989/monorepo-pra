import { Box, Divider } from "@fc/react-components-layout";
import "@fc/react-components-layout/style.css";
import { vars } from "@fc/themes";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "React Components/Layout/Divider",
  component: Divider,
  decorators: [
    (Story) => (
      <Box padding={3} style={{ width: "300px", height: "300px" }}>
        <Story />
      </Box>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    size: 1,
    orientation: "horizontal",
  },
  argTypes: {
    size: {
      control: "number",
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: "radio",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "radio",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
