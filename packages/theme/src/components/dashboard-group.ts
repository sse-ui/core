import { tv, type VariantProps } from "tailwind-variants";

export const dashboardGroup = tv({
  base: "fixed inset-0 flex overflow-hidden",
});

export type DashboardGroupProps = VariantProps<typeof dashboardGroup>;
export type DashboardGroupSlots = ReturnType<typeof dashboardGroup>;
