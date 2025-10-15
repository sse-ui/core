import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentSlots } from "../types/tv";

export const chatPromptSubmit = tv({
  slots: {
    base: "",
  },
});

export type ChatPromptSubmitProps = VariantProps<typeof chatPromptSubmit>;
export type ChatPromptSubmitSlots = ComponentSlots<typeof chatPromptSubmit>;
