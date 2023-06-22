// Russian

import { PrizmCronHRLocale } from '../locale';

const getPhraseByNumber = (str: string | undefined, words: Array<string>) => {
  const number = Number(str);
  return number !== undefined
    ? words[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
      ]
    : words[2];
};
const getPhraseByDayOfWeek = (str: string | undefined, words: Array<string>) => {
  const number = Number(str);
  return number !== undefined
    ? words[number === 0 ? 0 : number === 1 || number === 2 || number === 4 ? 1 : 2]
    : words[1];
};

export class ru implements PrizmCronHRLocale {
  public atX0SecondsPastTheMinuteGt20(): string | null {
    return null;
  }
  public atX0MinutesPastTheHourGt20(): string | null {
    return null;
  }
  public commaMonthX0ThroughMonthX1(): string | null {
    return null;
  }
  public commaYearX0ThroughYearX1(): string | null {
    return null;
  }
  public use24HourTimeFormatByDefault() {
    return true;
  }
  public everyMinute() {
    return 'каждую минуту';
  }
  public everyHour() {
    return 'каждый час';
  }
  public anErrorOccuredWhenGeneratingTheExpressionD() {
    return 'Произошла ошибка во время генерации описания выражения. Проверьте синтаксис крон-выражения.';
  }
  public atSpace() {
    return 'В ';
  }
  public everyMinuteBetweenX0AndX1() {
    return 'Каждую минуту с %s по %s';
  }
  public at() {
    return 'В';
  }
  public spaceAnd() {
    return ' и';
  }
  public everySecond() {
    return 'каждую секунду';
  }
  public everyX0Seconds(s?: string) {
    return getPhraseByNumber(s, ['каждую %s секунду', 'каждые %s секунды', 'каждые %s секунд']);
  }
  public secondsX0ThroughX1PastTheMinute() {
    return 'секунды с %s по %s';
  }
  public atX0SecondsPastTheMinute(s?: string) {
    return getPhraseByNumber(s, ['в %s секунду', 'в %s секунды', 'в %s секунд']);
  }
  public everyX0Minutes(s?: string) {
    return getPhraseByNumber(s, ['каждую %s минуту', 'каждые %s минуты', 'каждые %s минут']);
  }
  public minutesX0ThroughX1PastTheHour() {
    return 'минуты с %s по %s';
  }
  public atX0MinutesPastTheHour(s?: string) {
    return getPhraseByNumber(s, ['в %s минуту', 'в %s минуты', 'в %s минут']);
  }
  public everyX0Hours(s?: string) {
    return getPhraseByNumber(s, ['каждый %s час', 'каждые %s часа', 'каждые %s часов']);
  }
  public betweenX0AndX1() {
    return 'с %s по %s';
  }
  public atX0() {
    return 'в %s';
  }
  public commaEveryDay() {
    return ', каждый день';
  }
  public commaEveryX0DaysOfTheWeek(s?: string) {
    return getPhraseByNumber(s, ['', ', каждые %s дня недели', ', каждые %s дней недели']);
  }
  public commaX0ThroughX1(s?: string) {
    return s && (s[0] == '2' || s[0] == '3') ? ', со %s по %s' : ', с %s по %s';
  }
  public commaAndX0ThroughX1(s?: string) {
    return s && (s[0] == '2' || s[0] == '3') ? ' и со %s по %s' : ' и с %s по %s';
  }
  public first(s?: string) {
    return getPhraseByDayOfWeek(s, ['первое', 'первый', 'первую']);
  }
  public second(s?: string) {
    return getPhraseByDayOfWeek(s, ['второе', 'второй', 'вторую']);
  }
  public third(s?: string) {
    return getPhraseByDayOfWeek(s, ['третье', 'третий', 'третью']);
  }
  public fourth(s?: string) {
    return getPhraseByDayOfWeek(s, ['четвертое', 'четвертый', 'четвертую']);
  }
  public fifth(s?: string) {
    return getPhraseByDayOfWeek(s, ['пятое', 'пятый', 'пятую']);
  }
  public commaOnThe(s?: string) {
    return s === '2' ? ', во ' : ', в ';
  }
  public spaceX0OfTheMonth() {
    return ' %s месяца';
  }
  public lastDay() {
    return 'последний день';
  }
  public commaOnTheLastX0OfTheMonth(s?: string) {
    return getPhraseByDayOfWeek(s, [
      ', в последнее %s месяца',
      ', в последний %s месяца',
      ', в последнюю %s месяца',
    ]);
  }
  public commaOnlyOnX0(s?: string) {
    return s && s[0] === '2' ? ', только во %s' : ', только в %s';
  }
  public commaAndOnX0() {
    return ', и %s';
  }
  public commaEveryX0Months(s?: string) {
    return getPhraseByNumber(s, ['', ' каждые %s месяца', ' каждые %s месяцев']);
  }
  public commaOnlyInMonthX0() {
    return ', только %s';
  }
  public commaOnlyInX0() {
    return ', только в %s';
  }
  public commaOnTheLastDayOfTheMonth() {
    return ', в последний день месяца';
  }
  public commaOnTheLastWeekdayOfTheMonth() {
    return ', в последний будний день месяца';
  }
  public commaDaysBeforeTheLastDayOfTheMonth(s?: string) {
    return getPhraseByNumber(s, [
      ', за %s день до конца месяца',
      ', за %s дня до конца месяца',
      ', за %s дней до конца месяца',
    ]);
  }
  public firstWeekday() {
    return 'первый будний день';
  }
  public weekdayNearestDayX0() {
    return 'ближайший будний день к %s числу';
  }
  public commaOnTheX0OfTheMonth() {
    return ', в %s месяца';
  }
  public commaEveryX0Days(s?: string) {
    return getPhraseByNumber(s, [', каждый %s день', ', каждые %s дня', ', каждые %s дней']);
  }
  public commaBetweenDayX0AndX1OfTheMonth(s?: string) {
    return s && s.substring(0, s.indexOf('-')) == '2'
      ? ', со %s по %s число месяца'
      : ', с %s по %s число месяца';
  }
  public commaOnDayX0OfTheMonth(s?: string) {
    return s && s[0] == '2' ? ', во %s число месяца' : ', в %s число месяца';
  }
  public commaEveryX0Years(s?: string) {
    if (s === '1') return '';
    return ', каждый %s год';
    // return getPhraseByNumber(s, [', каждый %s год', ', каждые %s года', ', каждые %s лет']);
  }
  public commaStartingX0() {
    return ', начало %s';
  }
  public daysOfTheWeek() {
    return ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  }
  public daysOfTheWeekInCase(f: number = 2) {
    return f == 1
      ? ['воскресенья', 'понедельника', 'вторника', 'среды', 'четверга', 'пятницы', 'субботы']
      : ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу'];
  }
  public monthsOfTheYear() {
    return [
      'январь',
      'февраль',
      'март',
      'апрель',
      'май',
      'июнь',
      'июль',
      'август',
      'сентябрь',
      'октябрь',
      'ноябрь',
      'декабрь',
    ];
  }
  public monthsOfTheYearInCase(f?: number) {
    return f == 1
      ? [
          'января',
          'февраля',
          'марта',
          'апреля',
          'мая',
          'июня',
          'июля',
          'августа',
          'сентября',
          'октября',
          'ноября',
          'декабря',
        ]
      : this.monthsOfTheYear();
  }
}
