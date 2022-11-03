import {InjectionToken, ValueProvider} from '@angular/core';
import {PolymorphContent} from "../../directives";

export interface PrizmDataListOptions {
    readonly empty: PolymorphContent;
}

/** Default values for data-list options */
export const PZM_DATALIST_DEFAULT_OPTIONS: PrizmDataListOptions = {
    empty: '',
};

export const PZM_DATALIST_OPTIONS = new InjectionToken<PrizmDataListOptions>(
    'Default parameters for datalist directive',
    {
        factory: (): PrizmDataListOptions => PZM_DATALIST_DEFAULT_OPTIONS,
    },
);

export const PrizmDataListOptionsProvider: (
    options: Partial<PrizmDataListOptions>,
) => ValueProvider = (options: Partial<PrizmDataListOptions>) => ({
    provide: PZM_DATALIST_OPTIONS,
    useValue: {...PZM_DATALIST_DEFAULT_OPTIONS, ...options},
});
