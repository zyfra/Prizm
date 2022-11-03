import { InjectionToken, ValueProvider } from '@angular/core';

export interface PrizmMutationObserveOptions {
  readonly config: MutationObserverInit;
}

/** Default values for hint options */
export const PZM_MUTATION_OBSERVER_DEFAULT_OPTIONS: PrizmMutationObserveOptions = {
  config: {
    childList: true,
    attributes: true,
    subtree: true,
  },
};

export const PZM_MUTATION_OBSERVER_OPTIONS = new InjectionToken<PrizmMutationObserveOptions>(
  'Default parameters for mutation observer directive',
  {
    factory: (): PrizmMutationObserveOptions => PZM_MUTATION_OBSERVER_DEFAULT_OPTIONS,
  }
);

export const pzmMutationObserverOptionsProvider: (
  options: Partial<PrizmMutationObserveOptions>
) => ValueProvider = (options: Partial<PrizmMutationObserveOptions>) => ({
  provide: PZM_MUTATION_OBSERVER_OPTIONS,
  useValue: { ...PZM_MUTATION_OBSERVER_DEFAULT_OPTIONS, ...options },
});
