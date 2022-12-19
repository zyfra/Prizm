import { PrizmCarouselArrayContent } from '../input';

export enum PrizmCronUiBaseType {
  every,
  after,
  specified,
  between,
}

export type PrizmCronTabItem = 'second' |'minute' |'hour' |'day' |'month' |'year';


export enum PrizmCronUiDayType {
  every,
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
  value: string,
  key: string,
}

export type PrizmCronUiStateList = {
  everyChosenTimesAfterChosen: {
    on: PrizmCarouselArrayContent<string>;
    after: PrizmCarouselArrayContent<string>;
  };
  specified:  {
    key: string,
    value: string
  }[];
  between:  {
    start: PrizmCarouselArrayContent<string>,
    end: PrizmCarouselArrayContent<string>
  };
}

export type PrizmCronUiState<TYPE> = {
  type: TYPE;
  everyChosenTimesAfterChosen: {
    on: string;
    after: string
  };
  specified: string[];
  between: { start: string; end: string };
}
