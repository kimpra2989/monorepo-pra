import "@fc/themes/themes.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: "dark", value: "#444" },
        { name: "light", value: "#F7F9F2" },
      ],
      default: "dark",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
