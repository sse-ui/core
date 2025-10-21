import {
  Primitive as BasePrimitive,
  dispatchDiscreteCustomEvent,
} from "./primitive";
export * as Arrow from "./arrow";
export * as Collection from "./collection";
export { composeRefs, useComposedRefs } from "./compose-refs";
export * as Context from "./context";
export * as DismissableLayer from "./dismissable-layer";
export * as FocusGuards from "./focus-guards";
export * as FocusScope from "./focus-scope";
export * as Menu from "./menu";
export * as Popper from "./popper";
export * as Presence from "./presence";
export type { PrimitivePropsWithRef } from "./primitive";
export * as RovingFocus from "./roving-focus";
export { useCallbackRef } from "./use-callback-ref";
export {
  useControllableState,
  useControllableStateReducer,
} from "./use-controllable-state";
export { useEffectEvent } from "./use-effect-event";
export { useEscapeKeydown } from "./use-escape-keydown";
export { useIsHydrated } from "./use-is-hydrated";
export { useLayoutEffect } from "./use-layout-effect";
export { useSize } from "./use-size";
export { composeEventHandlers } from "./core/primitive";

const Primitive = BasePrimitive as typeof BasePrimitive & {
  Root: typeof BasePrimitive;
  dispatchDiscreteCustomEvent: typeof dispatchDiscreteCustomEvent;
};
Primitive.dispatchDiscreteCustomEvent = dispatchDiscreteCustomEvent;
Primitive.Root = BasePrimitive;
export { Primitive };
