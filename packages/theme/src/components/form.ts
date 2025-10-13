import { tv, type VariantProps } from "tailwind-variants";

export const form = tv({
  base: "",
});

export type FormProps = VariantProps<typeof form>;
export type FormSlots = ReturnType<typeof form>;
