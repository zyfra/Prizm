import { InjectionToken, ValueProvider } from '@angular/core';

export interface ZuiMutationObserveOptions {
  readonly config: MutationObserverInit;
}

/** Default values for hint options */
export const ZUI_MUTATION_OBSERVER_DEFAULT_OPTIONS: ZuiMutationObserveOptions = {
  config: {
    childList: true,
    attributes: true
  },
};

export const ZUI_MUTATION_OBSERVER_OPTIONS = new InjectionToken<ZuiMutationObserveOptions>(
  'Default parameters for mutation observer directive',
  {
    factory: (): ZuiMutationObserveOptions => ZUI_MUTATION_OBSERVER_DEFAULT_OPTIONS,
  },
);

export const zuiMutationObserverOptionsProvider: (
  options: Partial<ZuiMutationObserveOptions>,
) => ValueProvider = (options: Partial<ZuiMutationObserveOptions>) => ({
  provide: ZUI_MUTATION_OBSERVER_OPTIONS,
  useValue: {...ZUI_MUTATION_OBSERVER_DEFAULT_OPTIONS, ...options},
});
