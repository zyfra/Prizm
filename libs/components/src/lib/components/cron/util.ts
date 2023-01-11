import { PrizmCronUiDayType } from './model';
import { PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS } from './const';
import { prizmGetNumberWithZero } from '@prizm-ui/core';
import { PrizmCarouselArrayContent } from '../input/carousel';

export function getArrWithStringNumbers(length: number, start = 1, withZero = false): string[] {
  return Array.from({ length }, (_, i) => {
    const sum = i + start;
    const result = withZero ? prizmGetNumberWithZero(sum) : sum;
    return result + '';
  });
}

export function getCarousel(length: number, start = 1): PrizmCarouselArrayContent<string> {
  return new PrizmCarouselArrayContent(getArrWithStringNumbers(length, start), (item, el) => item === el);
}
export function getArrWithWeekNumber(): string[] {
  return ['2', '3', '4', '5', '6', '7', '1'];
}

export function getCarouselWeek(): PrizmCarouselArrayContent<string> {
  return new PrizmCarouselArrayContent(getArrWithWeekNumber(), (item, el) => item === el);
}

export function prizmConvertDayToType(day: string, dayOfWeek: string): PrizmCronUiDayType {
  if (day === '*') return PrizmCronUiDayType.every;
  else if (day === '?') {
    if (dayOfWeek === '*') return PrizmCronUiDayType.every;
    if (dayOfWeek.includes('/')) return PrizmCronUiDayType.afterDayOfWeek;
    else if (dayOfWeek.endsWith('L')) return PrizmCronUiDayType.lastChosenDayOfWeek;
    else if (dayOfWeek.includes('#')) return PrizmCronUiDayType.onTheChosenDayOfWeek;
    else if (PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS.find(a => dayOfWeek.includes(a)))
      return PrizmCronUiDayType.specifiedDayOfWeek;
  } else if (day.includes('/')) {
    return PrizmCronUiDayType.afterDayOfMonth;
  } else if (day.startsWith('L-')) {
    return PrizmCronUiDayType.lastChosenDaysOfMonth;
  } else if (day === 'L') {
    return PrizmCronUiDayType.lastDayOfMonth;
  } else if (day === 'LW') {
    return PrizmCronUiDayType.lastWeekDayOfMonth;
  }  else if (day.includes('-')) {
    return PrizmCronUiDayType.between;
  } else if (day.endsWith('W')) {
    return PrizmCronUiDayType.nearestWeekDayToTheChosenDayOfMonth;
  }

  return PrizmCronUiDayType.specifiedDayOfMonth;
}
