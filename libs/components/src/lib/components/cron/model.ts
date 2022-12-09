export enum PrizmCronUiHourType {
  every,
  after,
  specified,
  between,
}

export enum PrizmCronUiMinuteType {
  every,
  after,
  specified,
  between,
}

export enum PrizmCronUiYearType {
  every,
  after,
  specified,
  between,
}

export enum PrizmCronUiMonthType {
  every,
  after,
  specified,
  between,
}

export enum PrizmCronUiDayType {
  every,
  afterDayOfWeek,
  afterDayOfMonth,
  specifiedDayOfMonth,
  specifiedDayOfWeek,
  lastDayOfMonth,
  lastWeekDayOfMonth,
  lastChosenDayOfWeek,
  lastChosenDayOfMonth,
  nearestWeekDayToTheChosenDayOfMonth,
  onTheChosenDayOfWeek,
}

export type PrizmCronUiListItem = {
  value: string,
  key: string,
}
