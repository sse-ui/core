import { tv, type VariantProps } from "tailwind-variants";

export const chatPromptSubmit = tv({
  slots: {
    base: "",
  },
});

export type ChatPromptSubmitProps = VariantProps<typeof chatPromptSubmit>;
export type ChatPromptSubmitSlots = ReturnType<typeof chatPromptSubmit>;
