import { InjectionToken } from '@angular/core';

export const PZM_DATE_SEPARATOR = new InjectionToken<string>(
    `Date separator for Zyfra UI components`,
    {
        factory: (): string => `.`,
    },
);

export const pzmChangeDateSeparator = (
    dateString: string,
    newDateSeparator: string,
): string => dateString.replace(/[^0-9A-Za-zА-Яа-я]/gi, newDateSeparator);
