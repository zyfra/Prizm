import { PrizmCarouselArrayContent } from '../input';
import { PrizmDay, PrizmTime } from '../../@core';
export declare enum PrizmCronUiBaseType {
    every = 0,
    after = 1,
    specified = 2,
    between = 3
}
export type PrizmCronTabItem = 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year';
export type PrizmCronTabSpecifiedList = {
    second?: PrizmCronUiBaseType[];
    minute?: PrizmCronUiBaseType[];
    hour?: PrizmCronUiBaseType[];
    day?: PrizmCronUiDayType[];
    month?: PrizmCronUiBaseType[];
    year?: PrizmCronUiBaseType[];
};
export type PrizmCronPeriod = {
    start: [PrizmDay | null, PrizmTime | null] | null;
    end: [PrizmDay | null, PrizmTime | null] | null;
    indefinitely: boolean;
};
export declare enum PrizmCronUiDayType {
    every = 0,
    between = 1,
    after = 2,
    specified = 3,
    afterDayOfWeek = 4,
    afterDayOfMonth = 5,
    specifiedDayOfMonth = 6,
    specifiedDayOfWeek = 7,
    lastDayOfMonth = 8,
    lastWeekDayOfMonth = 9,
    lastChosenDayOfWeek = 10,
    lastChosenDaysOfMonth = 11,
    nearestWeekDayToTheChosenDayOfMonth = 12,
    onTheChosenDayOfWeek = 13
}
export type PrizmCronUiListItem = {
    value: string;
    key: string;
};
export type PrizmCronUiStateList = {
    everyChosenTimesAfterChosen: {
        on: PrizmCarouselArrayContent<string>;
        after: PrizmCarouselArrayContent<string>;
    };
    specified: {
        key: string;
        value: string;
    }[];
    between: {
        start: PrizmCarouselArrayContent<string>;
        end: PrizmCarouselArrayContent<string>;
    };
};
export type PrizmCronUiState<TYPE> = {
    type: TYPE;
    everyChosenTimesAfterChosen: {
        on: string;
        after: string;
    };
    specified: string[];
    between: {
        start: string;
        end: string;
    };
};
