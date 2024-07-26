import { PrizmDateTimeMinMax } from '../../components';
import { PrizmDateStringType } from '../../types';
import { PrizmDay } from './day';
import { PrizmTime } from './time';

export function transformDateIfNeeded(
  value: PrizmDay | [PrizmDay, PrizmTime] | Date | string,
  dayOnly?: boolean
): PrizmDay | [PrizmDay, PrizmTime];

export function transformDateIfNeeded(
  value: PrizmDateTimeMinMax | Date | string,
  dayOnly?: boolean
): PrizmDateTimeMinMax;

export function transformDateIfNeeded(
  value: PrizmDateTimeMinMax | Date | string,
  dayOnly?: boolean
): PrizmDateTimeMinMax | PrizmDay | [PrizmDay, PrizmTime] {
  if (typeof value === 'string') {
    value = parseDateString(value);
  }

  if (value instanceof Date) {
    return dayOnly
      ? PrizmDay.fromLocalNativeDate(value)
      : [PrizmDay.fromLocalNativeDate(value), PrizmTime.fromLocalNativeDate(value)];
  } else {
    return value;
  }
}

export function parseDateString(dateStr: string) {
  const parsedString = new Date(dateStr);
  if (isNaN(parsedString.getTime())) {
    throw new Error(`${dateStr} is not valid ISO or UTC string`);
  }

  return parsedString;
}

export function getDateStringFormNativeDate(date: Date, strType: PrizmDateStringType): string {
  // TODO: tests
  switch (strType) {
    case 'ISO':
      return date.toISOString();
    case 'UTC':
      return date.toUTCString();
    default:
      return '';
  }
}

export function calcDateStrType(dateStr: string): PrizmDateStringType {
  // TODO: implement and tests
  return 'UTC';
}
