import { tv, type VariantProps } from "tailwind-variants";

export const dashboardSidebarCollapse = tv({
  base: "hidden lg:flex",
  variants: {
    side: {
      left: "",
      right: "",
    },
  },
});

export type DashboardSidebarCollapseProps = VariantProps<
  typeof dashboardSidebarCollapse
>;
export type DashboardSidebarCollapseSlots = ReturnType<
  typeof dashboardSidebarCollapse
>;
