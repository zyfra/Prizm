import {InjectionToken, ValueProvider} from '@angular/core';
import {PolymorphContent} from "../../directives";

export interface ZuiDataListOptions {
    readonly empty: PolymorphContent;
}

/** Default values for data-list options */
export const ZUI_DATALIST_DEFAULT_OPTIONS: ZuiDataListOptions = {
    empty: '',
};

export const ZUI_DATALIST_OPTIONS = new InjectionToken<ZuiDataListOptions>(
    'Default parameters for datalist directive',
    {
        factory: (): ZuiDataListOptions => ZUI_DATALIST_DEFAULT_OPTIONS,
    },
);

export const ZuiDataListOptionsProvider: (
    options: Partial<ZuiDataListOptions>,
) => ValueProvider = (options: Partial<ZuiDataListOptions>) => ({
    provide: ZUI_DATALIST_OPTIONS,
    useValue: {...ZUI_DATALIST_DEFAULT_OPTIONS, ...options},
});
