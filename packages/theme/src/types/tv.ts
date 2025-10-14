import type {
  ClassValue,
  TVVariants,
  TVCompoundVariants,
  TVDefaultVariants,
} from "tailwind-variants";

/**
 * Defines the AppConfig object based on the tailwind-variants configuration.
 */
export type TVConfig<T extends Record<string, any>> = {
  [P in keyof T]?: {
    [K in keyof T[P] as K extends
      | "base"
      | "slots"
      | "variants"
      | "defaultVariants"
      ? K
      : never]?: K extends "base"
      ? ClassValue
      : K extends "slots"
        ? {
            [S in keyof T[P]["slots"]]?: ClassValue;
          }
        : K extends "variants"
          ? TVVariants<
              T[P]["slots"],
              ClassValue,
              WidenVariantsValues<T[P]["variants"]>
            >
          : K extends "defaultVariants"
            ? TVDefaultVariants<
                WidenVariantsValues<T[P]["variants"]>,
                T[P]["slots"],
                object,
                undefined
              >
            : never;
  };
} & {
  [P in keyof T]?: {
    compoundVariants?: TVCompoundVariants<
      WidenVariantsValues<T[P]["variants"]>,
      T[P]["slots"],
      ClassValue,
      object,
      undefined
    >;
  };
};

type WidenVariantsValues<V extends Record<string, any> | undefined> =
  V extends Record<string, any>
    ? V & {
        [K in keyof V]: V[K] extends Record<string, any>
          ? V[K] & Record<string & {}, any>
          : V[K];
      }
    : V;

/**
 * Utility type to flatten intersection types for better IDE hover information.
 * @template T The type to flatten.
 */
type Id<T> = {} & { [P in keyof T]: T[P] };

type ComponentVariants<
  T extends { variants?: Record<string, Record<string, any>> },
> = {
  [K in keyof T["variants"]]: keyof T["variants"][K];
};

export type ComponentSlots<T extends { slots?: Record<string, any> }> = Id<{
  [K in keyof T["slots"]]?: ClassValue;
}>;

/**
 * Defines the configuration shape expected for a component.
 * @template T The component's theme imported from the file.
 */

export type ComponentConfig<T extends Record<string, any>> = {
  variants: ComponentVariants<T>;
  slots: ComponentSlots<T>;
};
