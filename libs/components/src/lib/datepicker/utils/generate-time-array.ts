import { format, set } from 'date-fns';
import { ZyfraTime } from '../model/zyfra-time.model';

export function generateTimeArray(formatTime: string): ZyfraTime[] {
  const timeItems: ZyfraTime[] = [];
  const date = new Date();
  set(date, { hours: 0, minutes: 0, seconds: 0});

  new Array(24).fill(0).forEach((_, index) => {
    const hoursConfig = { hours: index, minutes: 0, seconds: 0, milliseconds: 0};
    const minutesConfig = { hours: index, minutes: 30, seconds: 0, milliseconds: 0};

    timeItems.push({
      value: format(set(date, hoursConfig), formatTime),
      date: set(date, hoursConfig),
    });

    timeItems.push({
      value: format(set(date, minutesConfig), formatTime),
      date: set(date, minutesConfig),
    });
  });
  return timeItems;
}
