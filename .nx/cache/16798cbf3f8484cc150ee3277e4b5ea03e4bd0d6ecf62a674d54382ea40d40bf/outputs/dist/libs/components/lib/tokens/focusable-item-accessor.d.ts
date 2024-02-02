import { InjectionToken, Provider, Type } from '@angular/core';
import { PrizmFocusableElementAccessor } from '../types';
export declare const PRIZM_FOCUSABLE_ITEM_ACCESSOR: InjectionToken<PrizmFocusableElementAccessor>;
export declare function prizmAsFocusableItemAccessor(useExisting: Type<PrizmFocusableElementAccessor>): Provider;
