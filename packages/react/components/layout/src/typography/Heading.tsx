import { vars } from "@fc/themes";
import { clsx } from "clsx";
import { ElementType } from "react";
import { styleSprinkles } from "../core/sprinkles.css";
import { extractSprinkleProps } from "../utils/sprinklesProperties";
import { textStyle } from "./style.css";
import { HeadingProps } from "./types";

const Heading = <T extends ElementType = "p">({
  as,
  children,
  ref,
  ...props
}: HeadingProps<T>) => {
  const Component = as || "h1";

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

export default Heading;
