import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  PrizmLanguageColumnSettings,
  PrizmLanguageCore,
  PrizmLanguageCron,
  PrizmLanguageFileUpload,
  PrizmLanguageInputLayout,
  PrizmLanguageInputLayoutDateRelative,
  PrizmLanguageInputLayoutDateTime,
  PrizmLanguageKit,
  PrizmLanguagePaginator,
} from '@prizm-ui/i18n';

export const PRIZM_FILE_UPLOAD = new InjectionToken<Observable<PrizmLanguageFileUpload['fileUpload']>>(
  `Localized for file upload component`
);

export const PRIZM_INPUT_LAYOUT = new InjectionToken<Observable<PrizmLanguageInputLayout['inputLayout']>>(
  `input layout i18n base texts`
);

export const PRIZM_INPUT_LAYOUT_DATE_RELATIVE = new InjectionToken<
  Observable<PrizmLanguageInputLayoutDateRelative['inputLayoutDateRelative']>
>(`Localized for input layout date relative component`);

export const PRIZM_INPUT_LAYOUT_DATE_TIME = new InjectionToken<
  Observable<PrizmLanguageInputLayoutDateTime['inputLayoutDateTime']>
>(`Localized for input layout date time component`);

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

export const PRIZM_COLUMN_SETTINGS = new InjectionToken<
  Observable<PrizmLanguageColumnSettings['columnSettings']>
>(`column settings texts`);

export const PRIZM_PAGINATOR = new InjectionToken<Observable<PrizmLanguagePaginator['paginator']>>(
  `paginator texts`
);

export const PRIZM_SEARCH_TEXT = new InjectionToken<Observable<PrizmLanguageKit['search']>>(
  `search i18n text`
);

export const PRIZM_EMPTY_LIST_TEXT = new InjectionToken<Observable<PrizmLanguageKit['emptyListText']>>(
  `empty list i18n text`
);
