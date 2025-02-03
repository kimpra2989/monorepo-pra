import { ElementType } from "react";
import { AsElementProps, StyleProps } from "../../core/types";

export type BoxProps<TagName extends ElementType> = AsElementProps<TagName> &
  StyleProps;
