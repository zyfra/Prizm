import { InjectionToken, ValueProvider } from '@angular/core';

export interface PzmMutationObserveOptions {
  readonly config: MutationObserverInit;
}

/** Default values for hint options */
export const PZM_MUTATION_OBSERVER_DEFAULT_OPTIONS: PzmMutationObserveOptions = {
  config: {
    childList: true,
    attributes: true,
    subtree: true,
  },
};

export const PZM_MUTATION_OBSERVER_OPTIONS = new InjectionToken<PzmMutationObserveOptions>(
  'Default parameters for mutation observer directive',
  {
    factory: (): PzmMutationObserveOptions => PZM_MUTATION_OBSERVER_DEFAULT_OPTIONS,
  }
);

export const pzmMutationObserverOptionsProvider: (
  options: Partial<PzmMutationObserveOptions>
) => ValueProvider = (options: Partial<PzmMutationObserveOptions>) => ({
  provide: PZM_MUTATION_OBSERVER_OPTIONS,
  useValue: { ...PZM_MUTATION_OBSERVER_DEFAULT_OPTIONS, ...options },
});
