import { PrizmDay } from './day';
import { PrizmTime } from './time';

export function transformDateIfNeeded(
  value: PrizmDay | [PrizmDay, PrizmTime] | Date | string
): PrizmDay | [PrizmDay, PrizmTime] {
  if (typeof value === 'string') {
    const parsedString = new Date(value);
    if (isNaN(parsedString.getTime())) {
      throw new Error(`${value} is not valid ISO or UTC string`);
    }

    value = parsedString;
  }

  if (value instanceof Date) {
    return [PrizmDay.fromLocalNativeDate(value), PrizmTime.fromLocalNativeDate(value)];
  } else {
    return value;
  }
}
