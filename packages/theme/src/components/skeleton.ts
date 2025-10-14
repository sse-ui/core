import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types";

export const skeleton = tv({
  base: "animate-pulse rounded-md bg-elevated",
});

export type SkeletonProps = VariantProps<typeof skeleton>;
export type SkeletonSlots = ComponentSlots<typeof skeleton>;
