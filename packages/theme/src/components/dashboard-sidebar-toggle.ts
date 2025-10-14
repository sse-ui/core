import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types";

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
export type DashboardSidebarToggleSlots = ComponentSlots<
  typeof dashboardSidebarToggle
>;
