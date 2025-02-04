import { ElementType } from "react";
import { AsElementProps, StyleProps } from "../../core/types";
import { CSSProperties } from "@vanilla-extract/css";

export type FlexProps<TagName extends ElementType> = AsElementProps<TagName> &
  StyleProps & {
    align?: CSSProperties["alignItems"];
    basis?: CSSProperties["flexBasis"];
    direction?: CSSProperties["flexDirection"];
    grow?: CSSProperties["flexGrow"];
    justify?: CSSProperties["justifyContent"];
    shrink?: CSSProperties["flexShrink"];
    wrap?: CSSProperties["flexWrap"];
    gap?: CSSProperties["gap"];
  };
