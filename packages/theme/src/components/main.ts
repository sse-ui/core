import { tv, type VariantProps } from "tailwind-variants";

export const main = tv({
  base: "min-h-[calc(100vh-var(--ui-header-height))]",
});

export type MainProps = VariantProps<typeof main>;
export type MainSlots = ReturnType<typeof main>;
