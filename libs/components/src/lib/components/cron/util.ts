import { PrizmCarouselArrayContent } from '@prizm-ui/components';
import {
  PrizmCronUiDayType,
  PrizmCronUiHourType,
  PrizmCronUiMinuteType,
  PrizmCronUiMonthType,
  PrizmCronUiYearType,
} from './model';
import {
  PRIZM_CRON_UI_MONTH_CRON_KEYS,
  PRIZM_CRON_UI_MONTH_SHORT_OBJ,
  PRIZM_CRON_UI_WEEK_LIST,
  PRIZM_CRON_UI_WEEK_OBJ,
} from './const';

export function getArrWithStringNumbers(length: number, start = 1, withZero = false): string[] {
  return Array.from({ length }, (_, i) => {
    const sum = i + start;
    const result = withZero ? getWithZero(sum) : sum;
    return result + '';
  });
}

export function getCarouselWithZero(length: number): PrizmCarouselArrayContent<string> {
  return new PrizmCarouselArrayContent(
    Array.from(
      { length },
      (_, i) => getWithZero(i )
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

export function getCarouselWithDayOfWeek(): PrizmCarouselArrayContent<string> {
  return new PrizmCarouselArrayContent(
    [
      PRIZM_CRON_UI_WEEK_LIST[1],
      PRIZM_CRON_UI_WEEK_LIST[2],
      PRIZM_CRON_UI_WEEK_LIST[3],
      PRIZM_CRON_UI_WEEK_LIST[4],
      PRIZM_CRON_UI_WEEK_LIST[5],
      PRIZM_CRON_UI_WEEK_LIST[6],
      PRIZM_CRON_UI_WEEK_LIST[0],
    ],
    (item, el) => item === el
  );
}

export function getCarouselWithMonth(): PrizmCarouselArrayContent<string> {
  return new PrizmCarouselArrayContent(
    Object.values(PRIZM_CRON_UI_MONTH_SHORT_OBJ) as string[],
    (item, el) => item === el
  );
}

export function convertDayOfWeekToNumber(
  dayOfWeek: keyof typeof PRIZM_CRON_UI_WEEK_OBJ
): number {
  return PRIZM_CRON_UI_WEEK_OBJ[dayOfWeek];
}

export function getWithZero(n: number): string {
  if (n < 10) {
    return `0${n}`;
  }
  return n + '';
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
  hour: string
): PrizmCronUiMonthType {
    if (hour === '*') {
      return PrizmCronUiMonthType.every
    } else if (hour.includes('/')) {
      return PrizmCronUiMonthType.after
    } else if (hour.includes('-')) {
      return PrizmCronUiMonthType.between
    }

    return PrizmCronUiMonthType.specified;
}

export function prizmConvertDayToType(
  day: string,
  dayOfWeek: string
): PrizmCronUiDayType {
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
      PRIZM_CRON_UI_MONTH_CRON_KEYS.find((
        a => dayOfWeek.includes(a)
      ))
    )
    return PrizmCronUiDayType.specifiedDayOfWeek
  } else if (day.includes('/')) {
    return PrizmCronUiDayType.afterDayOfMonth
  } else if (day === 'L') {
    return PrizmCronUiDayType.lastDayOfMonth
  } else if (day === 'LW') {
    return PrizmCronUiDayType.lastWeekDayOfMonth
  } else if (day.endsWith('W')) {
    return PrizmCronUiDayType.nearestWeekDayToTheChosenDayOfMonth
  }

  return PrizmCronUiDayType.specifiedDayOfMonth;
}
