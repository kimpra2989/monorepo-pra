import { vars } from "@fc/themes";
import { CSSProperties } from "@vanilla-extract/css";
import { clsx } from "clsx";
import { ElementType } from "react";
import { styleSprinkles } from "../../core/sprinkles.css";
import { extractSprinkleProps } from "../../utils/sprinklesProperties";
import { FlexProps } from "./types";

const Flex = <T extends ElementType = "div">({
  as,
  children,
  ref,
  ...props
}: FlexProps<T>) => {
  const Component = as || "div";

  const {
    align: alignItems,
    justify: justifyContent,
    direction: flexDirection,
    wrap: flexWrap,
    grow: flexGrow,
    shrink: flexShrink,
    basis: flexBasis,
    gap,
    color,
    background,
    className,
  } = props;

  const flexStyle: CSSProperties = {
    display: "flex",
    alignItems,
    justifyContent,
    flexDirection,
    flexWrap,
    flexGrow,
    flexShrink,
    flexBasis,
    gap,
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
        ...flexStyle,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Flex;
