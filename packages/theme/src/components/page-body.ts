import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types/tv";

export const pageBody = tv({
  base: "mt-8 pb-24 space-y-12",
});

export type PageBodyProps = VariantProps<typeof pageBody>;
export type PageBodySlots = ComponentSlots<typeof pageBody>;
