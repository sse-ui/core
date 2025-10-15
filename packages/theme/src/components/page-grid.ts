import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types/tv";

export const pageGrid = tv({
  base: "relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
});

export type PageGridProps = VariantProps<typeof pageGrid>;
export type PageGridSlots = ComponentSlots<typeof pageGrid>;
