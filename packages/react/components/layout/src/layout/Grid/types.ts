import { ElementType } from "react";
import { AsElementProps, StyleProps } from "../../core/types";
import { CSSProperties } from "@vanilla-extract/css";

export type GridProps<TagName extends ElementType> = AsElementProps<TagName> &
  StyleProps & {
    autoColumns?: CSSProperties["gridAutoColumns"];
    autoFlow?: CSSProperties["gridAutoFlow"];
    autoRows?: CSSProperties["gridAutoRows"];
    column?: CSSProperties["gridColumn"];
    columnGap?: CSSProperties["columnGap"];
    gap?: CSSProperties["gap"];
    row?: CSSProperties["gridRow"];
    rowGap?: CSSProperties["rowGap"];
    templateAreas?: CSSProperties["gridTemplateAreas"];
    templateColumns?: CSSProperties["gridTemplateColumns"];
    templateRows?: CSSProperties["gridTemplateRows"];
  };

export type GridItemProps<TagName extends ElementType> =
  AsElementProps<TagName> &
    StyleProps & {
      area?: CSSProperties["gridArea"];
      colEnd?: CSSProperties["gridColumnEnd"];
      colStart?: CSSProperties["gridColumnStart"];
      colSpan?: CSSProperties["gridColumn"];
      rowEnd?: CSSProperties["gridRowEnd"];
      rowStart?: CSSProperties["gridRowStart"];
      rowSpan?: CSSProperties["gridRow"];
    };
