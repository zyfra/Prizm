import { InjectionToken, Injector, Type } from '@angular/core';
import { PrizmHintContext } from './hint-options';

export type PrizmHintGetContextFn<CTX extends PrizmHintContext = PrizmHintContext> = (
  injector: Injector
) => CTX;

export const PRIZM_HINT_GET_CONTEXT = new InjectionToken<PrizmHintGetContextFn>('PRIZM_HINT_GET_CONTEXT');
export const PRIZM_HINT_CONTAINER_COMPONENT = new InjectionToken<Type<unknown>>(
  'PRIZM_HINT_CONTAINER_COMPONENT'
);
export const PRIZM_HINT_ON_HOVER_ACTIVE = new InjectionToken<boolean>('PRIZM_HINT_ON_HOVER_ACTIVE');
