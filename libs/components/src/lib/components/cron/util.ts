import { PrizmCarouselArrayContent } from '@prizm-ui/components';
import {
  PrizmCronUiDayType,
  PrizmCronUiHourType,
  PrizmCronUiMinuteType,
  PrizmCronUiMonthType, PrizmCronUiSecondType,
  PrizmCronUiYearType,
} from './model';
import { PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS } from './const';
import { prizmGetNumberWithZero } from '@prizm-ui/core';

export function getArrWithStringNumbers(length: number, start = 1, withZero = false): string[] {
  return Array.from({ length }, (_, i) => {
    const sum = i + start;
    const result = withZero ? prizmGetNumberWithZero(sum) : sum;
    return result + '';
  });
}

export function getCarouselWithZero(length: number): PrizmCarouselArrayContent<string> {
  return new PrizmCarouselArrayContent(
    Array.from(
      { length },
      (_, i) => prizmGetNumberWithZero(i )
    ),
    (item, el) => item === el
  );
}
export function getCarousel(length: number, start = 1): PrizmCarouselArrayContent<string> {
  return new PrizmCarouselArrayContent(
    getArrWithStringNumbers(length, start),
    (item, el) => item === el
  );
}
export function getArrWithWeekNumber(): string[] {
  return ['2', '3', '4', '5', '6', '7', '1'];
}

export function getCarouselWeek(): PrizmCarouselArrayContent<string> {
  return new PrizmCarouselArrayContent(
    getArrWithWeekNumber(),
    (item, el) => item === el
  );
}

export function getCarouselWithMonth(): PrizmCarouselArrayContent<string> {
  return getCarousel(12, 1);
}



export function prizmConvertHourToType(
  hour: string
): PrizmCronUiHourType {
    if (hour === '*') {
      return PrizmCronUiHourType.every
    } else if (hour.includes('/')) {
      return PrizmCronUiHourType.after
    } else if (hour.includes('-')) {
      return PrizmCronUiHourType.between
    }

    return PrizmCronUiHourType.specified;
}


export function prizmConvertSecondToType(
  hour: string
): PrizmCronUiSecondType {
    if (hour === '*') {
      return PrizmCronUiSecondType.every
    } else if (hour.includes('/')) {
      return PrizmCronUiSecondType.after
    } else if (hour.includes('-')) {
      return PrizmCronUiSecondType.between
    }

    return PrizmCronUiSecondType.specified;
}


export function prizmConvertMinuteToType(
  hour: string
): PrizmCronUiMinuteType {
    if (hour === '*') {
      return PrizmCronUiMinuteType.every
    } else if (hour.includes('/')) {
      return PrizmCronUiMinuteType.after
    } else if (hour.includes('-')) {
      return PrizmCronUiMinuteType.between
    }

    return PrizmCronUiMinuteType.specified;
}

export function prizmConvertYearToType(
  hour: string
): PrizmCronUiYearType {
    if (hour === '*') {
      return PrizmCronUiYearType.every
    } else if (hour.includes('/')) {
      return PrizmCronUiYearType.after
    } else if (hour.includes('-')) {
      return PrizmCronUiYearType.between
    }

    return PrizmCronUiYearType.specified;
}

export function prizmConvertMonthToType(
  month: string
): PrizmCronUiMonthType {
    if (month === '*') {
      return PrizmCronUiMonthType.every
    } else if (month.includes('/')) {
      return PrizmCronUiMonthType.after
    } else if (month.includes('-')) {
      return PrizmCronUiMonthType.between
    }

    return PrizmCronUiMonthType.specified;
}

export function prizmConvertDayToType(
  day: string,
  dayOfWeek: string
): PrizmCronUiDayType {
  console.log('#mz prizmConvertDayToType [input]', {
    day,
    dayOfWeek
  });
  if (day === '?') {
    if (dayOfWeek === '*')
      return PrizmCronUiDayType.every
    if (dayOfWeek.includes('/'))
      return PrizmCronUiDayType.afterDayOfWeek
    else if (dayOfWeek.endsWith('L'))
      return PrizmCronUiDayType.lastChosenDayOfWeek
    else if (dayOfWeek.includes('#'))
      return PrizmCronUiDayType.onTheChosenDayOfWeek
    else if (
      PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS.find((
        a => dayOfWeek.includes(a)
      ))
    )
    return PrizmCronUiDayType.specifiedDayOfWeek
  } else if (day.includes('/')) {
    return PrizmCronUiDayType.afterDayOfMonth
  } else if (day.startsWith('L-')) {
    return PrizmCronUiDayType.lastChosenDaysOfMonth
  } else if (day === 'L') {
    return PrizmCronUiDayType.lastDayOfMonth
  } else if (day === 'LW') {
    return PrizmCronUiDayType.lastWeekDayOfMonth
  } else if (day.endsWith('W')) {
    return PrizmCronUiDayType.nearestWeekDayToTheChosenDayOfMonth
  }

  return PrizmCronUiDayType.specifiedDayOfMonth;
}
