import { tv, type VariantProps } from "tailwind-variants";

export const pageList = tv({
  base: "relative flex flex-col",
  variants: {
    divide: {
      true: "*:not-last:after:absolute *:not-last:after:inset-x-1 *:not-last:after:bottom-0 *:not-last:after:bg-border *:not-last:after:h-px",
    },
  },
});

export type PageListProps = VariantProps<typeof pageList>;
