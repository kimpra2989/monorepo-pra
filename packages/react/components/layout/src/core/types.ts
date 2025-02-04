import { vars } from "@fc/themes";
import { ComponentPropsWithRef, ElementType } from "react";
import { StyleSprinkles } from "./sprinkles.css";

type AsProps<TagName extends ElementType> = {
  as?: TagName;
};

type ElementProps<TagName extends ElementType> = ComponentPropsWithRef<TagName>;

export type AsElementProps<TagName extends ElementType> = AsProps<TagName> &
  ElementProps<TagName>;

export type ColorProps = {
  color?: keyof typeof vars.colors.$scale;
  background?: keyof typeof vars.colors.$scale;
};

export type StyleProps = StyleSprinkles & ColorProps;
