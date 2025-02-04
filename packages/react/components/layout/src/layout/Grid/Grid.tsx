import { vars } from "@fc/themes";
import { CSSProperties } from "@vanilla-extract/css";
import { clsx } from "clsx";
import { ElementType } from "react";
import { styleSprinkles } from "../../core/sprinkles.css";
import { extractSprinkleProps } from "../../utils/sprinklesProperties";
import { GridItemProps, GridProps } from "./types";

const GridContainer = <T extends ElementType = "div">({
  as,
  children,
  ref,
  ...props
}: GridProps<T>) => {
  const Component = as || "div";

  const {
    autoColumns,
    autoFlow,
    autoRows,
    column,
    columnGap,
    gap,
    row,
    rowGap,
    templateAreas,
    templateColumns,
    templateRows,
    color,
    background,
    className,
  } = props;

  const gridStyle: CSSProperties = {
    display: "grid",
    gridAutoColumns: autoColumns,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridColumn: column,
    gridColumnGap: columnGap,
    gridGap: gap,
    gridRow: row,
    gridRowGap: rowGap,
    gridTemplateAreas: templateAreas,
    gridTemplateColumns: templateColumns,
    gridTemplateRows: templateRows,
    color: vars.colors.$scale?.[color]?.[700],
    background: vars.colors.$scale?.[background]?.[100],
  };

  return (
    <Component
      ref={ref}
      className={clsx([
        styleSprinkles(extractSprinkleProps(props, styleSprinkles.properties)),
        className,
      ])}
      style={{
        ...gridStyle,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

const GridItem = <T extends ElementType = "div">({
  as,
  children,
  ref,
  ...props
}: GridItemProps<T>) => {
  const Component = as || "div";

  const {
    area,
    colEnd,
    colStart,
    colSpan,
    rowEnd,
    rowStart,
    rowSpan,
    color,
    background,
    className,
  } = props;

  const gridItemStyle: CSSProperties = {
    gridArea: area,
    gridColumnEnd: colEnd,
    gridColumnStart: colStart,
    gridColumn: colSpan,
    gridRowEnd: rowEnd,
    gridRowStart: rowStart,
    gridRow: rowSpan,
    color: vars.colors.$scale?.[color]?.[700],
    background: vars.colors.$scale?.[background]?.[100],
  };

  return (
    <Component
      ref={ref}
      className={clsx([
        styleSprinkles(extractSprinkleProps(props, styleSprinkles.properties)),
        className,
      ])}
      style={{
        ...gridItemStyle,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default {
  Container: GridContainer,
  Item: GridItem,
};
