import { InjectionToken, Provider } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ZuiDateButton } from '../types/date-button';

export const ZUI_DATE_RIGHT_BUTTONS = new InjectionToken<
  BehaviorSubject<ZuiDateButton[]>
  >(`Stream that emits right buttons`, {
    factory: (): BehaviorSubject<ZuiDateButton[]> => {
      return new BehaviorSubject([])
    }
});

export function getProviderZuiDateLeftButtons(): Provider {
  return {
    provide: ZUI_DATE_RIGHT_BUTTONS,
    useFactory: (): BehaviorSubject<ZuiDateButton[]> => {
      return new BehaviorSubject<ZuiDateButton[]>([])
    }
  }
}
