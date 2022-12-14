/**
 * TODO #mz ADD I18N support
* */
export const PRIZM_CRON_UI_MONTH_CRON_KEYS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC'
] as const;

export const PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT'
] as const;

// export const PRIZM_CRON_UI_WEEK_OBJ = {
//   'Суббота' : 1,
//   'Понедельник' : 2,
//   'Вторник' : 3,
//   'Среда' : 4,
//   'Четверг' : 5,
//   'Пятница' : 6,
//   'Воскресенье' : 7,
// } as const;

// export const PRIZM_CRON_UI_WEEK_LIST = Object.keys(PRIZM_CRON_UI_WEEK_OBJ);

// export const PRIZM_CRON_UI_WEEK_KEYS_OBJ = {
//   'Суббота' : PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS[0],
//   'Понедельник' : PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS[1],
//   'Вторник' : PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS[2],
//   'Среда' : PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS[3],
//   'Четверг' : PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS[4],
//   'Пятница' : PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS[5],
//   'Воскресенье' : PRIZM_CRON_UI_DAYS_OF_WEEK_CRON_KEYS[6]
// } as const;

export const PRIZM_CRON_UI_WEEK_SHORT_OBJ = {
  'Сб' : 'Суббота',
  'Пн' : 'Понедельник',
  'Вт' : 'Вторник',
  'Ср' : 'Среда',
  'Чт' : 'Четверг',
  'Пт' : 'Пятница',
  'Вс' : 'Воскресенье',
} as const;


export const PRIZM_CRON_UI_MONTH_SHORT_OBJ = {
  'Янв' : 'Январь',
  'Фев' : 'Февраль',
  'Мар' : 'Март',
  'Апр' : 'Апрель',
  'Май' : 'Май',
  'Июн' : 'Июнь',
  'Июл' : 'Июль',
  'Авг' : 'Август',
  'Сен' : 'Сентябрь',
  'Окт' : 'Октябрь',
  'Ноя' : 'Ноябрь',
  'Дек' : 'Декабрь',
} as const;

// export const PRIZM_CRON_UI_WEEK = Object.keys(PRIZM_CRON_UI_WEEK_OBJ)
