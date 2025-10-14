import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types";

export const pageColumns = tv({
  base: "relative column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 *:break-inside-avoid-column *:will-change-transform",
});

export type PageColumnsProps = VariantProps<typeof pageColumns>;
export type PageColumnsSlots = ComponentSlots<typeof pageColumns>;
