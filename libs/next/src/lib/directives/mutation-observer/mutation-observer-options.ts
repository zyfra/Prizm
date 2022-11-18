import { InjectionToken, ValueProvider } from '@angular/core';

export interface PrizmMutationObserveOptions {
  readonly config: MutationObserverInit;
}

/** Default values for hint options */
export const PRIZM_MUTATION_OBSERVER_DEFAULT_OPTIONS: PrizmMutationObserveOptions = {
  config: {
    childList: true,
    attributes: true,
    subtree: true,
  },
};

export const PRIZM_MUTATION_OBSERVER_OPTIONS = new InjectionToken<PrizmMutationObserveOptions>(
  'Default parameters for mutation observer directive',
  {
    factory: (): PrizmMutationObserveOptions => PRIZM_MUTATION_OBSERVER_DEFAULT_OPTIONS,
  }
);

export const prizmMutationObserverOptionsProvider: (
  options: Partial<PrizmMutationObserveOptions>
) => ValueProvider = (options: Partial<PrizmMutationObserveOptions>) => ({
  provide: PRIZM_MUTATION_OBSERVER_OPTIONS,
  useValue: { ...PRIZM_MUTATION_OBSERVER_DEFAULT_OPTIONS, ...options },
});
