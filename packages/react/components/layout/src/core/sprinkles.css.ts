import { vars } from "@fc/themes";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const MarginAndPaddingProperties = defineProperties({
  properties: {
    marginTop: vars.box.spacing,
    marginRight: vars.box.spacing,
    marginBottom: vars.box.spacing,
    marginLeft: vars.box.spacing,
    paddingTop: vars.box.spacing,
    paddingRight: vars.box.spacing,
    paddingBottom: vars.box.spacing,
    paddingLeft: vars.box.spacing,
  },
  shorthands: {
    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

const BorderStyleProperties = defineProperties({
  properties: {
    borderRadius: vars.box.radii,
  },
});

const BoxShadowStyleProps = defineProperties({
  properties: {
    boxShadow: vars.box.shadows,
  },
});

export const styleSprinkles = createSprinkles(
  MarginAndPaddingProperties,
  BorderStyleProperties,
  BoxShadowStyleProps,
);

export type StyleSprinkles = Parameters<typeof styleSprinkles>[0];
