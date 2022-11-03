import { InjectionToken, Provider } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PzmDateButton } from '../types/date-button';

export const PZM_DATE_RIGHT_BUTTONS = new InjectionToken<
  BehaviorSubject<PzmDateButton[]>
  >(`Stream that emits right buttons`, {
    factory: (): BehaviorSubject<PzmDateButton[]> => {
      return new BehaviorSubject([])
    }
});

export function getProviderPzmDateLeftButtons(): Provider {
  return {
    provide: PZM_DATE_RIGHT_BUTTONS,
    useFactory: (): BehaviorSubject<PzmDateButton[]> => {
      return new BehaviorSubject<PzmDateButton[]>([])
    }
  }
}
