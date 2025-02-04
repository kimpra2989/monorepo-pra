import "@fc/react-components-layout/style.css";
import { Text } from "@fc/react-components-layout";
import { classes, vars } from "@fc/themes";

export default {
  title: "React Components/Layout/Typography/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["p", "span", "div", "b", "i", "u", "strong", "em"],
      control: "select",
    },
    fontSize: {
      options: Object.keys(classes.typography.text),
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
