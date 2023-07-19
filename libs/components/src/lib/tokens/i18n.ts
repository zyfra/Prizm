import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmDateMode } from '../types/date-mode';

import {
  prizmExtractI18n,
  PrizmLanguageCore,
  PrizmLanguageCron,
  PrizmLanguageFileUpload,
  PrizmLanguageInputLayoutDateRelative,
  PrizmLanguageKit,
} from '@prizm-ui/i18n';

export const PRIZM_FILE_UPLOAD = new InjectionToken<Observable<PrizmLanguageFileUpload['fileUpload']>>(
  `Localized for file upload component`
);

export const PRIZM_INPUT_LAYOUT_DATE_RELATIVE = new InjectionToken<
  Observable<PrizmLanguageInputLayoutDateRelative['inputLayoutDateRelative']>
>(`Localized for input layout date relative component`);

export const PRIZM_CRON = new InjectionToken<Observable<PrizmLanguageCron['cron']>>(
  `Localized for cron component`
);

export const PRIZM_MONTHS = new InjectionToken<Observable<PrizmLanguageCore['months']>>(
  `Localized months names`
);

export const PRIZM_TIME_TEXTS = new InjectionToken<Observable<PrizmLanguageKit['time']>>(`time i18n texts`);

export const PRIZM_CALENDAR_MONTHS = new InjectionToken<Observable<PrizmLanguageKit['shortCalendarMonths']>>(
  `[PRIZM_CALENDAR_MONTHS]: short calendar months i18n`
);

export const PRIZM_OTHER_DATE_TEXT = new InjectionToken<Observable<PrizmLanguageKit['otherDate']>>(
  `i18n 'Other date' text`
);

export const PRIZM_DATE_TEXTS = new InjectionToken<Observable<PrizmLanguageKit['dateTexts']>>(
  `date format i18n texts`
);

export const PRIZM_SPIN_TEXTS = new InjectionToken<Observable<PrizmLanguageCore['spinTexts']>>(
  `spin i18n texts`
);

export const PRIZM_SHORT_WEEK_DAYS = new InjectionToken<Observable<PrizmLanguageCore['shortWeekDays']>>(
  `calendars i18n texts`
);
