import {InjectionToken, ValueProvider} from '@angular/core';
import {PolymorphContent} from "../../directives";

export interface PrizmDataListOptions {
    readonly empty: PolymorphContent;
}

/** Default values for data-list options */
export const PRIZM_DATALIST_DEFAULT_OPTIONS: PrizmDataListOptions = {
    empty: '',
};

export const PRIZM_DATALIST_OPTIONS = new InjectionToken<PrizmDataListOptions>(
    'Default parameters for datalist directive',
    {
        factory: (): PrizmDataListOptions => PRIZM_DATALIST_DEFAULT_OPTIONS,
    },
);

export const PrizmDataListOptionsProvider: (
    options: Partial<PrizmDataListOptions>,
) => ValueProvider = (options: Partial<PrizmDataListOptions>) => ({
    provide: PRIZM_DATALIST_OPTIONS,
    useValue: {...PRIZM_DATALIST_DEFAULT_OPTIONS, ...options},
});
