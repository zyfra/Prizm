export enum PrizmCronDefaultObjectValue {
  second = '0',
  minute = '0',
  hour = '*',
  month = '*',
  dayOfMonth = '*',
  dayOfWeek = '?',
  year = '*',
}

export interface PrizmCronValueObject {
  second: string,
  minute: string,
  hour: string,
  month: string,
  dayOfWeek: string,
  dayOfMonth: string,
  year: string,
}
