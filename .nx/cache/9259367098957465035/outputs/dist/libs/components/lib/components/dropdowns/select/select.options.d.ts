import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../../directives';
import { PrizmInputSize } from '../../input';
import { PrizmContextWithImplicit } from '../../../types';
import { PrizmSelectIdentityMatcher, PrizmSelectSearchMatcher, PrizmSelectValueTransformver } from './select.model';
import { Observable } from 'rxjs';
export type PrizmSelectIconContext = {
    opened: boolean;
    disabled: boolean;
};
export interface PrizmSelectOptions<T> {
    readonly items: unknown[];
    readonly searchable: boolean;
    /**
     * @deprecated
     * before ng16!
     * */
    readonly forceClear: boolean | null;
    readonly icon: PolymorphContent<PrizmSelectIconContext>;
    /**
     * @deprecated
     * TODO ng16! rename to defaultLabel after remove prizm-select
     * */
    readonly label: string;
    readonly placeholder: string;
    /**
     * @deprecated
     * before ng16!
     * */
    readonly size: PrizmInputSize;
    readonly search: string | null;
    readonly stringify: PrizmSelectStringify<T>;
    readonly emptyContent: PolymorphContent;
    readonly nullContent: PolymorphContent;
    readonly searchMatcher: PrizmSelectSearchMatcher<T>;
    readonly identityMatcher: PrizmSelectIdentityMatcher<T>;
    readonly transformer: PrizmSelectValueTransformver<T, unknown>;
    readonly minDropdownHeight: number;
    /**
     * @deprecated
     * before ng16!
     * */
    readonly outer: boolean;
    readonly maxDropdownHeight: number;
    readonly dropdownWidth: string;
    readonly valueContent: PolymorphContent<PrizmSelectValueContext<T>>;
    readonly listItemTemplate: PolymorphContent<PrizmSelectValueContext<T>>;
}
export type PrizmSelectStringify<T> = (i: T, nullContent?: string) => string | Observable<string>;
export type PrizmSelectValueContext<T> = PrizmContextWithImplicit<T> & {
    stringify: string;
    value: any;
};
/** Default values for dropdown-host options */
export declare const PRIZM_SELECT_DEFAULT_OPTIONS: PrizmSelectOptions<unknown>;
export declare const PRIZM_SELECT_OPTIONS: InjectionToken<PrizmSelectOptions<unknown>>;
export declare const prizmSelectOptionsProvider: (options: Partial<PrizmSelectOptions<unknown>>) => ValueProvider;
