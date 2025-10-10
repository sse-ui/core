import { tv, type VariantProps } from "tailwind-variants";

export const blogPosts = tv({
  base: "flex flex-col gap-8 lg:gap-y-16",
  variants: {
    orientation: {
      horizontal: "sm:grid sm:grid-cols-2 lg:grid-cols-3",
      vertical: "",
    },
  },
});

export type BlogPostsProps = VariantProps<typeof blogPosts>;
