import { InjectionToken } from '@angular/core';
import { zuiExtractI18n } from '../i18n/tools';
import { Observable } from 'rxjs';
import { ZuiDateMode } from '../types/date-mode';

export const ZUI_MONTHS = new InjectionToken(`Localized months names`, {
    factory: zuiExtractI18n(`months`),
});

export const ZUI_TIME_TEXTS = new InjectionToken(`time i18n texts`, {
  factory: zuiExtractI18n(`time`),
});

export const ZUI_CLOSE_WORD = new InjectionToken(`i18n 'close' word`, {
    factory: zuiExtractI18n(`close`),
});

export const PZM_OTHER_DATE_TEXT = new InjectionToken(`i18n 'Other date' text`, {
  factory: zuiExtractI18n(`otherDate`),
});

export const ZUI_DATE_TEXTS = new InjectionToken<Observable<Record<ZuiDateMode, string>>>(
  `date format i18n texts`,
  {
    factory: zuiExtractI18n(`dateTexts`),
  },
);

export const ZUI_SPIN_TEXTS = new InjectionToken(`spin i18n texts`, {
    factory: zuiExtractI18n(`spinTexts`),
});

export const ZUI_SHORT_WEEK_DAYS = new InjectionToken(`calendars i18n texts`, {
    factory: zuiExtractI18n(`shortWeekDays`),
});
