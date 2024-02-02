import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../../directives';
import { PrizmInputSize } from '../../input';
import { PrizmContextWithImplicit } from '../../../types';
import { PrizmMultiSelectIdentityMatcher, PrizmMultiSelectItemStringifyFunc, PrizmMultiSelectItemWithChecked, PrizmMultiSelectSearchMatcher, PrizmMultiSelectValueTransformer } from './multi-select.model';
export type PrizmMultiSelectIconContext = {
    opened: boolean;
    disabled: boolean;
};
export interface PrizmMultiSelectOptions<T> {
    readonly items: T[];
    readonly chooseAllItem: T;
    readonly icon: PolymorphContent<PrizmMultiSelectIconContext>;
    readonly transformer: PrizmMultiSelectValueTransformer<T, unknown>;
    readonly searchable: boolean;
    /**
     * @deprecated
     * TODO ng16! remove
     * * */
    readonly forceClear: null | boolean;
    readonly isChipsDeletable: boolean;
    /**
     * @deprecated
     * TODO ng16! rename to defaultLabel after remove prizm-select
     * */
    readonly label: string;
    readonly placeholder: string;
    /**
     * @deprecated
     * TODO ng16! remove
     * */
    readonly size: PrizmInputSize;
    readonly stringify: PrizmMultiSelectItemStringifyFunc<T>;
    readonly emptyContent: PolymorphContent;
    readonly searchMatcher: PrizmMultiSelectSearchMatcher<T>;
    readonly identityMatcher: PrizmMultiSelectIdentityMatcher<T>;
    readonly minDropdownHeight: number;
    /**
     * @deprecated
     * TODO ng16! remove
     * */
    readonly outer: boolean;
    readonly maxDropdownHeight: number;
    readonly dropdownWidth: string;
    readonly valueContent: PolymorphContent<PrizmContextWithImplicit<PrizmMultiSelectItemWithChecked<T>>>;
}
/** Default values for dropdown-host options */
export declare const PRIZM_MULTI_SELECT_DEFAULT_OPTIONS: PrizmMultiSelectOptions<unknown>;
export declare const PRIZM_MULTI_SELECT_OPTIONS: InjectionToken<PrizmMultiSelectOptions<unknown>>;
export declare const prizmMultiSelectOptionsProvider: (options: Partial<PrizmMultiSelectOptions<unknown>>) => ValueProvider;
