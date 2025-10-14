import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types";

export const collapsible = tv({
  slots: {
    root: "",
    content:
      "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden",
  },
});

export type CollapsibleProps = VariantProps<typeof collapsible>;
export type CollapsibleSlots = ComponentSlots<typeof collapsible>;
