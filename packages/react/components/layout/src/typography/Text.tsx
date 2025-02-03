import { vars } from "@fc/themes";
import { clsx } from "clsx";
import { ElementType } from "react";
import { styleSprinkles } from "../core/sprinkles.css";
import { extractSprinkleProps } from "../utils/sprinklesProperties";
import { TextProps } from "./types";
import { textStyle } from "./style.css";

const Text = <T extends ElementType = "p">({
  as,
  children,
  ref,
  ...props
}: TextProps<T>) => {
  const Component = as || "p";

  const { className, color = "gray", background, fontSize } = props;

  return (
    <Component
      ref={ref}
      className={clsx([
        styleSprinkles(extractSprinkleProps(props, styleSprinkles.properties)),
        textStyle({ fontSize }),
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

export default Text;
