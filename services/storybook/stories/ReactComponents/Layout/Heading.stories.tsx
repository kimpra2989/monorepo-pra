import "@fc/react-components-layout/style.css";
import { Heading } from "@fc/react-components-layout";
import { classes, vars } from "@fc/themes";

export default {
  title: "React Components/Layout/Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: "select",
    },
    fontSize: {
      options: Object.keys(classes.typography.heading),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    background: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export const Default = {
  args: {
    children: "Hello World",
    background: "blue",
  },
};
