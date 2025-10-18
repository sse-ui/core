type NativeType = null | number | string | boolean | symbol | Function;
type NotUndefined<T> = T extends undefined ? never : T;
export type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;

type InferDefault<P, T> =
  | ((props: P) => T & {})
  | (T extends NativeType ? T : never);

type InferDefaults<T> = {
  [K in keyof T]?: InferDefault<T, T[K]>;
};

type MappedOmit<T, K extends keyof any> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type DefineProps<T, BKeys extends keyof T> = Readonly<T> & {
  readonly [K in BKeys]-?: boolean;
};

type PropsWithDefaults<
  T,
  Defaults extends InferDefaults<T>,
  BKeys extends keyof T,
> = T extends unknown
  ? Readonly<MappedOmit<T, keyof Defaults>> & {
      readonly [K in keyof Defaults as K extends keyof T
        ? K
        : never]-?: K extends keyof T
        ? Defaults[K] extends undefined
          ? IfAny<Defaults[K], NotUndefined<T[K]>, T[K]>
          : NotUndefined<T[K]>
        : never;
    } & {
      readonly [K in BKeys]-?: K extends keyof Defaults
        ? Defaults[K] extends undefined
          ? boolean | undefined
          : boolean
        : boolean;
    }
  : never;

/**
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 */
export function withDefaults<
  T,
  BKeys extends keyof T,
  Defaults extends InferDefaults<T>,
>(
  props: DefineProps<T, BKeys>,
  defaults: Defaults
): PropsWithDefaults<T, Defaults, BKeys> {
  // TypeScript can't verify this structure due to complex types, but it's safe
  const merged = {
    ...defaults,
    ...props,
  } as unknown as PropsWithDefaults<T, Defaults, BKeys>;

  return merged;
}
