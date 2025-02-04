import { vars } from "@fc/themes";
import { clsx } from "clsx";
import { ElementType } from "react";
import { styleSprinkles } from "../../core/sprinkles.css";
import { extractSprinkleProps } from "../../utils/sprinklesProperties";
import { BoxProps } from "./types";

const Box = <T extends ElementType = "div">({
  as,
  children,
  ref,
  ...props
}: BoxProps<T>) => {
  const Component = as || "div";

  const { className, color, background } = props;

  return (
    <Component
      ref={ref}
      className={clsx([
        styleSprinkles(extractSprinkleProps(props, styleSprinkles.properties)),
        className,
      ])}
      style={{
        color: vars.colors.$scale?.[color]?.[700],
        background: vars.colors.$scale[background]?.[100],
        ...props.style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Box;
