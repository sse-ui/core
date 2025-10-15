import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types/tv";

export const dashboardSearchButton = tv({
  slots: {
    base: "",
    trailing: "hidden lg:flex items-center gap-0.5 ms-auto",
  },
});

export type DashboardSearchButtonProps = VariantProps<
  typeof dashboardSearchButton
>;

export type DashboardSearchButtonSlots = ComponentSlots<
  typeof dashboardSearchButton
>;
