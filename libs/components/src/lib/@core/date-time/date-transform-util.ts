import { PrizmDay } from './day';
import { PrizmTime } from './time';

export function transformDateIfNeeded(
  value: PrizmDay | [PrizmDay, PrizmTime] | Date
): PrizmDay | [PrizmDay, PrizmTime] {
  if (value instanceof Date) {
    return [PrizmDay.fromLocalNativeDate(value), PrizmTime.fromLocalNativeDate(value)];
  } else {
    return value;
  }
}
