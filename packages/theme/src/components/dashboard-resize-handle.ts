import { tv, type VariantProps } from "tailwind-variants";

export const dashboardResizeHandle = tv({
  base: "hidden lg:block touch-none select-none cursor-ew-resize relative before:absolute before:inset-y-0 before:-left-1.5 before:-right-1.5",
});

export type DashboardResizeHandleProps = VariantProps<
  typeof dashboardResizeHandle
>;

export type DashboardResizeHandleSlots = ReturnType<
  typeof dashboardResizeHandle
>;
