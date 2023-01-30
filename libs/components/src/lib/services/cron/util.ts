import { PrizmCronDefaultObjectValue, PrizmCronValueObject } from './model';

export function prizmCronConvertToObject(value: string): PrizmCronValueObject {
  const arr = value?.split(' ') ?? [];
  return {
    second: arr[0] ?? PrizmCronDefaultObjectValue.second,
    minute: arr[1] ?? PrizmCronDefaultObjectValue.minute,
    hour: arr[2] ?? PrizmCronDefaultObjectValue.hour,
    dayOfMonth: arr[3] ?? PrizmCronDefaultObjectValue.dayOfMonth,
    month: arr[4] ?? PrizmCronDefaultObjectValue.month,
    dayOfWeek: arr[5] ?? PrizmCronDefaultObjectValue.dayOfWeek,
    year: arr[6] ?? PrizmCronDefaultObjectValue.year,
  };
}
