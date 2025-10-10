import { tv, type VariantProps } from "tailwind-variants";

export const dashboardSearch = tv({
  slots: {
    modal: "",
    input: "[&>input]:text-base/5",
  },
  variants: {
    fullscreen: {
      false: {
        modal: "sm:max-w-3xl sm:h-[28rem]",
      },
    },
  },
});

export type DashboardSearchProps = VariantProps<typeof dashboardSearch>;
