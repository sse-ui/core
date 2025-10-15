import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types/tv";

export const link = tv({
  base: "focus-visible:outline-primary",
  variants: {
    active: {
      true: "text-primary",
      false: "text-muted",
    },
    disabled: {
      true: "cursor-not-allowed opacity-75",
    },
  },
  compoundVariants: [
    {
      active: false,
      disabled: false,
      class: ["hover:text-default", "transition-colors"],
    },
  ],
});

export type LinkProps = VariantProps<typeof link>;
export type LinkSlots = ComponentSlots<typeof link>;
