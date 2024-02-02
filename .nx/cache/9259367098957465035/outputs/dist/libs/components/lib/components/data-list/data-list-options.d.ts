import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../directives';
export interface PrizmDataListOptions {
    readonly empty: PolymorphContent;
}
/** Default values for data-list options */
export declare const PRIZM_DATALIST_DEFAULT_OPTIONS: PrizmDataListOptions;
export declare const PRIZM_DATALIST_OPTIONS: InjectionToken<PrizmDataListOptions>;
export declare const PrizmDataListOptionsProvider: (options: Partial<PrizmDataListOptions>) => ValueProvider;
