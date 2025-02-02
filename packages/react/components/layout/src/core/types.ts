import { ComponentPropsWithRef, ElementType } from "react";

type AsProps<TagName extends ElementType> = {
  as?: TagName;
};

type ElementProps<TagName extends ElementType> = ComponentPropsWithRef<TagName>;

export type AsElementProps<TagName extends ElementType> = AsProps<TagName> &
  ElementProps<TagName>;
