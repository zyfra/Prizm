import { PrizmDay } from './day';
import { PrizmTime } from './time';

export function prizmTimeLimitWithinRange(
  date: PrizmDay,
  time: PrizmTime | null,
  dateMin: PrizmDay,
  dateMax: PrizmDay,
  timeMin: PrizmTime | null = null,
  timeMax: PrizmTime | null = null
) {
  if (!date || !time || (!timeMin && !timeMax)) {
    return time;
  }

  time = handleTimeLimit(date, time, dateMin, timeMin);
  time = handleTimeLimit(date, time, dateMax, timeMax, false);

  return time;
}

export const handleTimeLimit = (
  date: PrizmDay,
  time: PrizmTime,
  limitDate: PrizmDay,
  limitTime: PrizmTime | null,
  isMin: boolean = true
) => {
  if (!limitTime || !limitDate || !limitDate.daySame(date)) {
    return time;
  }

  const shouldSetTime = isMin
    ? limitTime.toAbsoluteMilliseconds() > time.toAbsoluteMilliseconds()
    : limitTime.toAbsoluteMilliseconds() < time.toAbsoluteMilliseconds();

  if (shouldSetTime) {
    time = time.timeLimit(isMin ? limitTime : null, isMin ? null : limitTime);
  }

  return time;
};
