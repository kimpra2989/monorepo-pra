import { vars } from "@fc/themes";
import { clsx } from "clsx";
import { ElementType } from "react";
import { styleSprinkles } from "../core/sprinkles.css";
import { BoxProps } from "./types";
import { extractSprinkleProps } from "../utils/sprinklesProperties";

export const Box = <T extends ElementType = "div">({
  as,
  children,
  ref,
  ...props
}: BoxProps<T>) => {
  const Component = as || "div";

  const { className, color, background } = props;
  console.log("s", styleSprinkles.properties);

  return (
    <Component
      ref={ref}
      className={clsx([
        styleSprinkles(
          extractSprinkleProps(props, styleSprinkles.properties),
        ),
        className,
      ])}
      style={{
        color: vars.colors.$scale?.[color]?.[700] ?? color,
        background: vars.colors.$scale[background]?.[100] ?? background,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};
