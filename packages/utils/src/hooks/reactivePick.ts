import { useMemo } from "react";

/**
 * Custom hook to mimic Vue's reactivePick from @vueuse/core.
 * Creates a memoized subset of the source object with only the specified keys.
 * Updates reactively when the source changes.
 *
 * @param source - The source object (e.g., props).
 * @param keys - Array of keys to pick from the source.
 * @returns A new object with only the picked keys.
 */
export function useReactivePick<
  T extends Record<string, any>,
  K extends keyof T,
>(source: T, keys: K[]) {
  return useMemo(() => {
    const picked: Partial<Pick<T, K>> = {};
    keys.forEach((key) => {
      if (key in source) {
        picked[key] = source[key];
      }
    });

    return picked as Pick<T, K>;
  }, [source, ...keys]);
}
