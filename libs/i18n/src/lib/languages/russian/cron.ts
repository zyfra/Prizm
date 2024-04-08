import { PrizmLanguageCron } from '../../interfaces';

export const PRIZM_RUSSIAN_CRON: PrizmLanguageCron = {
  cron: {
    title: 'Крон',
    submitText: 'Применить',
    resetText: 'Отменить',
    startDateLabel: 'Начало работы',
    endDateLabel: 'Конец работы',
    indefinitelyLabel: 'Бессрочно',
    general: {
      everyMale: 'Каждый',
      everyFemale: 'Каждая',
      from: 'с',
      to: 'до',
      at: 'В',
    },
    second: {
      second: 'секунда',
      secondSince: 'секунда, начиная с',
      selectedSecond: 'Выбранная секунда (выбор одной или нескольких)',
    },
    minute: {
      minute: 'минута',
      minuteSince: 'минута, начиная с',
      selectedMinute: 'Выбранная минута (выбор одной или нескольких)',
    },
    hour: {
      hour: 'час',
      hourSince: 'час, начиная с',
      selectedHour: 'Выбранный час (выбор одного или нескольких)',
    },
    day: {
      day: 'день',
      daySince: 'день, начиная с',
      ofMonth: 'числа месяца',
      specific: {
        weekDays: 'По определённым дням недели (выбор одного или нескольких)',
        monthDays: 'По определённым дням месяца (выбор одного или нескольких)',
      },
      last: {
        dayOfMonth: 'Последний день месяца',
        workingDayOfMonth: 'Последний рабочий день месяца',
        dayOfWeek: 'В последний (-юю, -ее)',
        ofMonth: 'месяца',
        day: 'В последний (-ие)',
        untilEndOfMonth: 'день (дня, дней) до конца месяца',
      },
      nearest: {
        workingDay: 'Ближайший рабочий день (Понедельник - Пятница) к',
        toDayOfMonth: 'числу месяца',
      },
    },
    month: {
      month: 'месяц',
      monthSince: 'месяц, начиная с',
      selectedMonth: 'Выбранный месяц (выбор одного или нескольких)',
    },
    year: {
      year: 'год',
      yearSince: 'год, начиная с',
      selectedYear: 'Выбранный год (выбор одного или нескольких)',
    },
  },
};
