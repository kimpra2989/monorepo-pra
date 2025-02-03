import { vars } from "@fc/themes";
import { DividerProps } from "./types";

const Divider = ({ children, ref, ...props }: DividerProps) => {
  const {
    color = "gray",
    variant = "solid",
    size = 1,
    orientation = "horizontal",
  } = props;

  const border = `${size}px ${variant} ${vars.colors.$scale?.[color]?.[200] ?? color}`;

  const borderStyle =
    orientation === "horizontal"
      ? {
          border: 0,
          borderLeft: 0,
          width: "100%",
          height: 0,
          borderBottom: border,
        }
      : {
          border: 0,
          borderBottom: 0,
          width: 0,
          height: "100%",
          borderLeft: border,
        };

  return (
    <hr
      ref={ref}
      style={{
        ...borderStyle,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </hr>
  );
};

export default Divider;
