import { PrizmDateTimeMinMax } from '../../components';
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
    const parsedString = new Date(value);
    if (isNaN(parsedString.getTime())) {
      throw new Error(`${value} is not valid ISO or UTC string`);
    }

    value = parsedString;
  }

  if (value instanceof Date) {
    return dayOnly
      ? PrizmDay.fromLocalNativeDate(value)
      : [PrizmDay.fromLocalNativeDate(value), PrizmTime.fromLocalNativeDate(value)];
  } else {
    return value;
  }
}
