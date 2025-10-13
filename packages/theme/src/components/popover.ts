import { tv, type VariantProps } from "tailwind-variants";

export const popover = tv({
  slots: {
    content:
      "bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",
    arrow: "fill-default",
  },
});

export type PopoverProps = VariantProps<typeof popover>;
export type PopoverSlots = ReturnType<typeof popover>;
