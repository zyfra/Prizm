import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmLanguageCore } from '@prizm-ui/i18n';
export type PRIZM_WEEK_DAYS_NAMES = [string, string, string, string, string, string, string];
export declare const prizmConvertToSundayFirstWeekFormat: (weekDaysNames: PRIZM_WEEK_DAYS_NAMES) => PRIZM_WEEK_DAYS_NAMES;
export declare const PRIZM_ORDERED_SHORT_WEEK_DAYS: InjectionToken<Observable<PRIZM_WEEK_DAYS_NAMES>>;
export declare const getShortWeekDays: (days: Observable<PrizmLanguageCore['shortWeekDays']>) => Observable<PRIZM_WEEK_DAYS_NAMES>;
