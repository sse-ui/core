import { tv, type VariantProps } from "tailwind-variants";

export const dashboardSidebarToggle = tv({
  base: "lg:hidden",
  variants: {
    side: {
      left: "",
      right: "",
    },
  },
});

export type DashboardSidebarToggleProps = VariantProps<
  typeof dashboardSidebarToggle
>;
export type DashboardSidebarToggleSlots = ReturnType<
  typeof dashboardSidebarToggle
>;
