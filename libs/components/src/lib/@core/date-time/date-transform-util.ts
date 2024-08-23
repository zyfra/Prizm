import { PrizmDateStringType } from '../../types';
import { PrizmDateTime } from './date-time';
import { PrizmDay } from './day';
import { PrizmTime } from './time';

export function transformDateIfNeeded(
  value: PrizmDay | [PrizmDay, PrizmTime] | Date | string,
  dayOnly?: boolean
): PrizmDay | [PrizmDay, PrizmTime];

export function transformDateIfNeeded(
  value: PrizmDay | [PrizmDay, PrizmTime] | PrizmDateTime | Date | string,
  dayOnly?: boolean
): PrizmDay | [PrizmDay, PrizmTime] | PrizmDateTime;

export function transformDateIfNeeded(
  value: PrizmDay | [PrizmDay, PrizmTime] | PrizmDateTime | Date | string,
  dayOnly?: boolean
): PrizmDay | [PrizmDay, PrizmTime] | PrizmDateTime | PrizmDay | [PrizmDay, PrizmTime] | null {
  if (typeof value === 'string') {
    try {
      value = parseDateString(value);
    } catch {
      return null;
    }
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
  // TODO: tests
  const utcRegex = /^[A-Za-z]{3}, \d{2} [A-Za-z]{3} \d{4} \d{2}:\d{2}:\d{2} GMT$/;
  const isoRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|([+-]\d{2}:\d{2}))?$/;
  if (isValidDateStringByType(dateStr, utcRegex)) return 'UTC';
  if (isValidDateStringByType(dateStr, isoRegex)) return 'ISO';
  throw new Error('Invalid date string');
}

export function isValidDateStringByType(dateString: string, reg: RegExp): boolean {
  if (!reg.test(dateString)) {
    return false;
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return false;
  }
  return true;
}
