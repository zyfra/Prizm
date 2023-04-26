import { PrizmCarouselArrayContent } from '../input';
import { PrizmDay, PrizmTime } from '../../@core';

export enum PrizmCronUiBaseType {
  every,
  after,
  specified,
  between,
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

export enum PrizmCronUiDayType {
  every,
  between,
  after,
  specified,
  afterDayOfWeek,
  afterDayOfMonth,
  specifiedDayOfMonth,
  specifiedDayOfWeek,
  lastDayOfMonth,
  lastWeekDayOfMonth,
  lastChosenDayOfWeek,
  lastChosenDaysOfMonth,
  nearestWeekDayToTheChosenDayOfMonth,
  onTheChosenDayOfWeek,
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
  between: { start: string; end: string };
};
