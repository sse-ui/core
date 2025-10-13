import { tv, type VariantProps } from "tailwind-variants";

const variant = ["outline", "soft", "subtle", "naked"] as const;

export const chatPrompt = tv({
  slots: {
    root: "relative flex flex-col items-stretch gap-2 px-2.5 py-2 w-full rounded-lg backdrop-blur",
    header: "flex items-center gap-1.5",
    body: "items-start",
    footer: "flex items-center justify-between gap-1.5",
    base: "text-base/5",
  },
  variants: {
    variant: {
      outline: {
        root: "bg-default/75 ring ring-default",
      },
      soft: {
        root: "bg-elevated/50",
      },
      subtle: {
        root: "bg-elevated/50 ring ring-default",
      },
      naked: {
        root: "",
      },
    },
  },
  defaultVariants: {
    variant: "outline" as (typeof variant)[number],
  },
});

export type ChatPromptProps = VariantProps<typeof chatPrompt>;
export type ChatPromptSlots = ReturnType<typeof chatPrompt>;
