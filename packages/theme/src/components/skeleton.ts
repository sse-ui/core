import { tv, type VariantProps } from "tailwind-variants";

export const skeleton = tv({
  base: "animate-pulse rounded-md bg-elevated",
});

export type SkeletonProps = VariantProps<typeof skeleton>;
