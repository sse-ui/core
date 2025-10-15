import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types/tv";

export const dashboardGroup = tv({
  base: "fixed inset-0 flex overflow-hidden",
});

export type DashboardGroupProps = VariantProps<typeof dashboardGroup>;
export type DashboardGroupSlots = ComponentSlots<typeof dashboardGroup>;
