import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmDateMode } from '../types/date-mode';
import {
  prizmExtractI18n,
  PrizmLanguageCron,
  PrizmLanguageFileUpload,
  PrizmLanguageInputLayoutDateRelative,
} from '@prizm-ui/i18n';

export const PRIZM_FILE_UPLOAD = new InjectionToken<Observable<PrizmLanguageFileUpload['fileUpload']>>(
  `Localized for file upload component`,
  {
    factory: prizmExtractI18n(`fileUpload`),
  }
);
export const PRIZM_INPUT_LAYOUT_DATE_RELATIVE = new InjectionToken<
  Observable<PrizmLanguageInputLayoutDateRelative['inputLayoutDateRelative']>
>(`Localized for input layout date relative component`, {
  factory: prizmExtractI18n(`inputLayoutDateRelative`),
});
export const PRIZM_CRON = new InjectionToken<Observable<PrizmLanguageCron['cron']>>(
  `Localized for cron component`,
  {
    factory: prizmExtractI18n(`cron`),
  }
);

export const PRIZM_MONTHS = new InjectionToken(`Localized months names`, {
  factory: prizmExtractI18n(`months`),
});

export const PRIZM_TIME_TEXTS = new InjectionToken(`time i18n texts`, {
  factory: prizmExtractI18n(`time`),
});

export const PRIZM_CALENDAR_MONTHS = new InjectionToken(`[TUI_CALENDAR_MONTHS]: short calendar months i18n`, {
  factory: prizmExtractI18n(`shortCalendarMonths`),
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
