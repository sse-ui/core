import { tv, type VariantProps } from "tailwind-variants";

export const dashboardPanel = tv({
  slots: {
    root: "relative flex flex-col min-w-0 min-h-svh lg:not-last:border-e lg:not-last:border-default shrink-0",
    body: "flex flex-col gap-4 sm:gap-6 flex-1 overflow-y-auto p-4 sm:p-6",
    handle: "",
  },
  variants: {
    size: {
      true: {
        root: "w-full lg:w-(--width)",
      },
      false: {
        root: "flex-1",
      },
    },
  },
});

export type DashboardPanelProps = VariantProps<typeof dashboardPanel>;
