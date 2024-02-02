import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
export declare const PRIZM_FILE_UPLOAD: InjectionToken<Observable<{
    dropzone__title: string;
    dropzone__description: string;
    btn__select: string;
    idle?: string | undefined;
    progress?: string | undefined;
    warning?: string | undefined;
    success?: string | undefined;
}>>;
export declare const PRIZM_INPUT_LAYOUT_DATE_RELATIVE: InjectionToken<Observable<{
    wrongFormat: string;
}>>;
export declare const PRIZM_CRON: InjectionToken<Observable<{
    title: string;
    submitText: string;
    resetText: string;
    startDateLabel: string;
    endDateLabel: string;
    indefinitelyLabel: string;
    day: {
        every: string;
    };
}>>;
export declare const PRIZM_MONTHS: InjectionToken<Observable<[string, string, string, string, string, string, string, string, string, string, string, string]>>;
export declare const PRIZM_TIME_TEXTS: InjectionToken<Observable<{
    'HH:MM': string;
    'HH:MM:SS': string;
    'HH:MM:SS.MSS': string;
}>>;
export declare const PRIZM_CALENDAR_MONTHS: InjectionToken<Observable<[string, string, string, string, string, string, string, string, string, string, string, string]>>;
export declare const PRIZM_OTHER_DATE_TEXT: InjectionToken<Observable<string>>;
export declare const PRIZM_DATE_TEXTS: InjectionToken<Observable<{
    DMY: string;
    MDY: string;
    YMD: string;
}>>;
export declare const PRIZM_SPIN_TEXTS: InjectionToken<Observable<[string, string]>>;
export declare const PRIZM_SHORT_WEEK_DAYS: InjectionToken<Observable<[string, string, string, string, string, string, string]>>;
export declare const PRIZM_COLUMN_SETTINGS: InjectionToken<Observable<{
    title: string;
    subTitle: string;
    resetBtn: string;
    showAllBtn: string;
    cancelBtn: string;
    saveBtn: string;
    fixHeaderToggle: string;
    stickyLeft: string;
    stickyRight: string;
    dropzone: string;
    mainColumns: string;
    disabledHint: string;
}>>;
export declare const PRIZM_PAGINATOR: InjectionToken<Observable<{
    linesShown: string;
}>>;
