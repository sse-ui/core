import { tv, type VariantProps } from "tailwind-variants";
import type { Size } from "../types/theme";
import type { ComponentSlots } from "../types/tv";

const size: Exclude<Size, "3xs" | "2xs" | "2xl" | "3xl">[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
] as const;

export const formField = tv({
  slots: {
    root: "",
    wrapper: "",
    labelWrapper: "flex content-center items-center justify-between",
    label: "block font-medium text-default",
    container: "mt-1 relative",
    description: "text-muted",
    error: "mt-2 text-error",
    hint: "text-muted",
    help: "mt-2 text-muted",
  },
  variants: {
    size: {
      xs: {
        root: "text-xs",
      },
      sm: {
        root: "text-xs",
      },
      md: {
        root: "text-sm",
      },
      lg: {
        root: "text-sm",
      },
      xl: {
        root: "text-base",
      },
    },
    required: {
      true: {
        label: "after:content-['*'] after:ms-0.5 after:text-error",
      },
    },
  },
  defaultVariants: {
    size: "md" as (typeof size)[number],
  },
});

export type FormFieldProps = VariantProps<typeof formField>;
export type FormFieldSlots = ComponentSlots<typeof formField>;
