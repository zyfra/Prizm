import { InjectionToken, Provider } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmDateButton } from '../types/date-button';

export const PRIZM_DATE_RIGHT_BUTTONS = new InjectionToken<BehaviorSubject<PrizmDateButton[]>>(
  `Stream that emits right buttons`,
  {
    factory: (): BehaviorSubject<PrizmDateButton[]> => {
      return new BehaviorSubject([]);
    },
  }
);

export function getProviderPrizmDateLeftButtons(): Provider {
  return {
    provide: PRIZM_DATE_RIGHT_BUTTONS,
    useFactory: (): BehaviorSubject<PrizmDateButton[]> => {
      return new BehaviorSubject<PrizmDateButton[]>([]);
    },
  };
}
