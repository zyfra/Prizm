import { PrizmCronDefaultObjectValue, PrizmCronValueObject } from './model';

export function prizmCronConvertToObject(
  value: string
): PrizmCronValueObject {
  const arr = value?.split(' ') ?? [];
  return {
    second: arr[0] ?? PrizmCronDefaultObjectValue.second,
    minute: arr[1] ?? PrizmCronDefaultObjectValue.minute,
    hour: arr[2] ?? PrizmCronDefaultObjectValue.hour,
    dayOfMonth: arr[3] ?? PrizmCronDefaultObjectValue.dayOfMonth,
    month: arr[5] ?? PrizmCronDefaultObjectValue.month,
    dayOfWeek: arr[6] ?? PrizmCronDefaultObjectValue.dayOfWeek,
    year: arr[7] ?? PrizmCronDefaultObjectValue.year,
  }
}
