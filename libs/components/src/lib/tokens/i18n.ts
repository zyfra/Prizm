import { InjectionToken } from '@angular/core';
import { prizmExtractI18n } from '../i18n/tools';
import { Observable } from 'rxjs';
import { PrizmDateMode } from '../types/date-mode';

export const PRIZM_MONTHS = new InjectionToken(`Localized months names`, {
  factory: prizmExtractI18n(`months`),
});

export const PRIZM_TIME_TEXTS = new InjectionToken(`time i18n texts`, {
  factory: prizmExtractI18n(`time`),
});

export const PRIZM_CLOSE_WORD = new InjectionToken(`i18n 'close' word`, {
  factory: prizmExtractI18n(`close`),
});

export const PRIZM_OTHER_DATE_TEXT = new InjectionToken(`i18n 'Other date' text`, {
  factory: prizmExtractI18n(`otherDate`),
});

export const PRIZM_DATE_TEXTS = new InjectionToken<Observable<Record<PrizmDateMode, string>>>(
  `date format i18n texts`,
  {
    factory: prizmExtractI18n(`dateTexts`),
  }
);

export const PRIZM_SPIN_TEXTS = new InjectionToken(`spin i18n texts`, {
  factory: prizmExtractI18n(`spinTexts`),
});

export const PRIZM_SHORT_WEEK_DAYS = new InjectionToken(`calendars i18n texts`, {
  factory: prizmExtractI18n(`shortWeekDays`),
});
