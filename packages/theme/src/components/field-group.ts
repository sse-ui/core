import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types";

export const fieldGroup = tv({
  base: "relative",
  variants: {
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    orientation: {
      horizontal: "inline-flex -space-x-px",
      vertical: "flex flex-col -space-y-px",
    },
  },
});

export type FieldGroupProps = VariantProps<typeof fieldGroup>;
export type FieldGroupSlots = ComponentSlots<typeof fieldGroup>;
