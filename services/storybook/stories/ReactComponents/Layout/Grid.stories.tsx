import { Grid } from "@fc/react-components-layout";
import "@fc/react-components-layout/style.css";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "React Components/Layout/Grid",
  // @ts-ignore
  component: Grid.Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    templateColumns: "repeat(2, 1fr)",
    columnGap: '12px',
    rowGap: "16px",
  },
  render: (args) => (
    <Grid.Container {...args}>
      <Grid.Item background="red">Item 1</Grid.Item>
      <Grid.Item background="blue">Item 2</Grid.Item>
      <Grid.Item background="green">Item 3</Grid.Item>
    </Grid.Container>
  ),
};
