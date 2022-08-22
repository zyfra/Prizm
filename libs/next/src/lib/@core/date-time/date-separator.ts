import { InjectionToken } from '@angular/core';

export const ZUI_DATE_SEPARATOR = new InjectionToken<string>(
    `Date separator for Zyfra UI components`,
    {
        factory: (): string => `.`,
    },
);

export const zuiChangeDateSeparator = (
    dateString: string,
    newDateSeparator: string,
): string => dateString.replace(/[^0-9A-Za-zА-Яа-я]/gi, newDateSeparator);
