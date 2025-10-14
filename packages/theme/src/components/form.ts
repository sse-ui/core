import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types";

export const form = tv({
  base: "",
});

export type FormProps = VariantProps<typeof form>;
export type FormSlots = ComponentSlots<typeof form>;
