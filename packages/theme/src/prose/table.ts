import { tv } from "tailwind-variants";

export const table = tv({
  slots: {
    root: "relative my-5 overflow-x-auto",
    base: "w-full border-separate border-spacing-0 rounded-md",
  },
});
