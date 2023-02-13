import { InjectionToken, Provider, Type } from '@angular/core';
import { PrizmTextfieldHost } from '../types/textfield-host';

export const PRIZM_TEXTFIELD_HOST = new InjectionToken<PrizmTextfieldHost>(
  `[PRIZM_TEXTFIELD_HOST]: An interface to communicate with textfield based controls`
);

export function prizmAsTextfieldHost(useExisting: Type<PrizmTextfieldHost>): Provider {
  return {
    provide: PRIZM_TEXTFIELD_HOST,
    useExisting,
  };
}
