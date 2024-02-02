import { InjectionToken, Provider } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PrizmDateButton } from '../types/date-button';
export declare const PRIZM_DATE_RIGHT_BUTTONS: InjectionToken<BehaviorSubject<PrizmDateButton[]>>;
export declare function getProviderPrizmDateLeftButtons(): Provider;
