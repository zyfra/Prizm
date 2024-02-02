import { InjectionToken, ValueProvider } from '@angular/core';
export interface PrizmMutationObserveOptions {
    readonly config: MutationObserverInit;
}
/** Default values for hint options */
export declare const PRIZM_MUTATION_OBSERVER_DEFAULT_OPTIONS: PrizmMutationObserveOptions;
export declare const PRIZM_MUTATION_OBSERVER_OPTIONS: InjectionToken<PrizmMutationObserveOptions>;
export declare const prizmMutationObserverOptionsProvider: (options: Partial<PrizmMutationObserveOptions>) => ValueProvider;
