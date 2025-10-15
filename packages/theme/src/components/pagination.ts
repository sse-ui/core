import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types/tv";

export const pagination = tv({
  slots: {
    root: "",
    list: "flex items-center gap-1",
    ellipsis: "pointer-events-none",
    label: "min-w-5 text-center",
    first: "",
    prev: "",
    item: "",
    next: "",
    last: "",
  },
});

export type PaginationProps = VariantProps<typeof pagination>;
export type PaginationSlots = ComponentSlots<typeof pagination>;
