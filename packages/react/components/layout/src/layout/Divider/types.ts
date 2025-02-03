import { vars } from "@fc/themes";
import { ComponentPropsWithRef } from "react";

export type DividerProps = {
  orientation?: "horizontal" | "vertical";
  color?: keyof typeof vars.colors.$scale;
  size?: number;
  variant?: "solid" | "dashed";
} & ComponentPropsWithRef<"hr">;
