import { tv, type VariantProps } from "tailwind-variants";

export const pageGrid = tv({
  base: "relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
});

export type PageGridProps = VariantProps<typeof pageGrid>;
