import { ElementType } from "react";
import { BoxProps } from "./types";

export const Box = <T extends ElementType = "div">({
  as,
  children,
  ref,
  ...props
}: BoxProps<T>) => {
  const Component = as || "div";

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  );
};
