import { ElementType } from "react";
import { AsElementProps, StyleProps } from "../core/types";
import { CSSProperties } from "@vanilla-extract/css";
import { classes } from "@fc/themes";

export type TextProps<TagName extends ElementType> = AsElementProps<TagName> &
  StyleProps & {
    fontSize: keyof typeof classes.typography.text;
    align?: CSSProperties["textAlign"];
    casing?: CSSProperties["textTransform"];
    decoration?: CSSProperties["textDecoration"];
  };
