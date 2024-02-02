import { InjectionToken, Provider, Type } from '@angular/core';
import { PrizmTextfieldHost } from '../types/textfield-host';
export declare const PRIZM_TEXTFIELD_HOST: InjectionToken<PrizmTextfieldHost>;
export declare function prizmAsTextfieldHost(useExisting: Type<PrizmTextfieldHost> | any): Provider;
