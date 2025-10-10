import { tv } from "tailwind-variants";

export const h1 = tv({
  slots: {
    base: "text-4xl text-highlighted font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-(--ui-header-height)",
    link: "inline-flex items-center gap-2",
  },
});
