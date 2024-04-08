import { PrizmLanguageCron } from '../../interfaces';

export const PRIZM_ENGLISH_CRON: PrizmLanguageCron = {
  cron: {
    title: 'Cron',
    submitText: 'Apply',
    resetText: 'Cancel',
    startDateLabel: 'Start Date',
    endDateLabel: 'End Date',
    indefinitelyLabel: 'Indefinitely',
    general: {
      everyMale: 'Every',
      everyFemale: 'Every',
      from: 'from',
      to: 'to',
      at: 'At',
    },
    second: {
      second: 'second',
      secondSince: 'second since',
      selectedSecond: 'Selected second (select one or more)',
    },
    minute: {
      minute: 'minute',
      minuteSince: 'minute since',
      selectedMinute: 'Selected minute (select one or more)',
    },
    hour: {
      hour: 'hour',
      hourSince: 'hour since',
      selectedHour: 'Selected hour (select one or more)',
    },
    day: {
      day: 'day',
      daySince: 'day since',
      ofMonth: '',
      specific: {
        weekDays: 'On specific days of the week (select one or more)',
        monthDays: 'On specific days of the month (select one or more)',
      },
      last: {
        dayOfMonth: 'Last day of the month',
        workingDayOfMonth: 'Last working day of the month',
        dayOfWeek: 'Last',
        ofMonth: 'of the month',
        day: 'On the last',
        untilEndOfMonth: 'day(s) before the end of the month',
      },
      nearest: {
        workingDay: 'The nearest working day (Monday - Friday) to the',
        toDayOfMonth: 'of the month',
      },
    },
    month: {
      month: 'month',
      monthSince: 'month since',
      selectedMonth: 'Selected month (select one or more)',
    },
    year: {
      year: 'year',
      yearSince: 'year since',
      selectedYear: 'Selected year (select one or more)',
    },
  },
};
