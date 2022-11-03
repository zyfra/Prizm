import {InjectionToken, ValueProvider} from '@angular/core';
import {PolymorphContent} from "../../directives";

export interface PzmDataListOptions {
    readonly empty: PolymorphContent;
}

/** Default values for data-list options */
export const PZM_DATALIST_DEFAULT_OPTIONS: PzmDataListOptions = {
    empty: '',
};

export const PZM_DATALIST_OPTIONS = new InjectionToken<PzmDataListOptions>(
    'Default parameters for datalist directive',
    {
        factory: (): PzmDataListOptions => PZM_DATALIST_DEFAULT_OPTIONS,
    },
);

export const PzmDataListOptionsProvider: (
    options: Partial<PzmDataListOptions>,
) => ValueProvider = (options: Partial<PzmDataListOptions>) => ({
    provide: PZM_DATALIST_OPTIONS,
    useValue: {...PZM_DATALIST_DEFAULT_OPTIONS, ...options},
});
