import { InjectionToken } from '@angular/core';
import { pzmExtractI18n } from '../i18n/tools';
import { Observable } from 'rxjs';
import { PzmDateMode } from '../types/date-mode';

export const PZM_MONTHS = new InjectionToken(`Localized months names`, {
    factory: pzmExtractI18n(`months`),
});

export const PZM_TIME_TEXTS = new InjectionToken(`time i18n texts`, {
  factory: pzmExtractI18n(`time`),
});

export const PZM_CLOSE_WORD = new InjectionToken(`i18n 'close' word`, {
    factory: pzmExtractI18n(`close`),
});

export const PZM_OTHER_DATE_TEXT = new InjectionToken(`i18n 'Other date' text`, {
  factory: pzmExtractI18n(`otherDate`),
});

export const PZM_DATE_TEXTS = new InjectionToken<Observable<Record<PzmDateMode, string>>>(
  `date format i18n texts`,
  {
    factory: pzmExtractI18n(`dateTexts`),
  },
);

export const PZM_SPIN_TEXTS = new InjectionToken(`spin i18n texts`, {
    factory: pzmExtractI18n(`spinTexts`),
});

export const PZM_SHORT_WEEK_DAYS = new InjectionToken(`calendars i18n texts`, {
    factory: pzmExtractI18n(`shortWeekDays`),
});
