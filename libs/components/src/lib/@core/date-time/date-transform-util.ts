import { PrizmDay } from './day';
import { PrizmTime } from './time';

export function transformDateIfNeeded(
  value: PrizmDay | [PrizmDay, PrizmTime] | Date | string
): PrizmDay | [PrizmDay, PrizmTime] {
  if (typeof value === 'string') {
    value = new Date(value);

    // TODO check id date is valid
  }

  if (value instanceof Date) {
    return [PrizmDay.fromLocalNativeDate(value), PrizmTime.fromLocalNativeDate(value)];
  } else {
    return value;
  }
}
