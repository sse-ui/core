import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types";

export const container = tv({
  base: "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8",
});

export type ContainerProps = VariantProps<typeof container>;
export type ContainerSlots = ComponentSlots<typeof container>;
