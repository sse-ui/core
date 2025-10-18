import { useMemo } from "react";

/**
 * Custom hook to mimic Vue's useForwardProps from reka-ui.
 * Forwards props to child components, with optional defaults or transformations.
 *
 * @param props - The props object to forward (e.g., from useReactivePick).
 * @param defaults - Optional default values to merge.
 * @returns The forwarded props object.
 */
export function useForwardProps<T extends Record<string, any>>(
  props: T,
  defaults?: Partial<T>
): T {
  return useMemo(() => {
    const merged: Partial<T> = Object.assign({}, defaults) as Partial<T>;

    Object.keys(props).forEach((key) => {
      if (props[key as keyof T] !== undefined) {
        merged[key as keyof T] = props[key as keyof T];
      }
    });

    return merged as T;
  }, [props, defaults]);
}
