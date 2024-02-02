// Russian
const getPhraseByNumber = (str, words) => {
    const number = Number(str);
    return number !== undefined
        ? words[number % 100 > 4 && number % 100 < 20
            ? 2
            : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]]
        : words[2];
};
const getPhraseByDayOfWeek = (str, words) => {
    const number = Number(str);
    return number !== undefined
        ? words[number === 0 ? 0 : number === 1 || number === 2 || number === 4 ? 1 : 2]
        : words[1];
};
export class ru {
    atX0SecondsPastTheMinuteGt20() {
        return null;
    }
    atX0MinutesPastTheHourGt20() {
        return null;
    }
    commaMonthX0ThroughMonthX1() {
        return null;
    }
    commaYearX0ThroughYearX1() {
        return null;
    }
    use24HourTimeFormatByDefault() {
        return true;
    }
    everyMinute() {
        return 'каждую минуту';
    }
    everyHour() {
        return 'каждый час';
    }
    anErrorOccuredWhenGeneratingTheExpressionD() {
        return 'Произошла ошибка во время генерации описания выражения. Проверьте синтаксис крон-выражения.';
    }
    atSpace() {
        return 'В ';
    }
    everyMinuteBetweenX0AndX1() {
        return 'Каждую минуту с %s по %s';
    }
    at() {
        return 'В';
    }
    spaceAnd() {
        return ' и';
    }
    everySecond() {
        return 'каждую секунду';
    }
    everyX0Seconds(s) {
        return getPhraseByNumber(s, ['каждую %s секунду', 'каждые %s секунды', 'каждые %s секунд']);
    }
    secondsX0ThroughX1PastTheMinute() {
        return 'секунды с %s по %s';
    }
    atX0SecondsPastTheMinute(s) {
        return getPhraseByNumber(s, ['в %s секунду', 'в %s секунды', 'в %s секунд']);
    }
    everyX0Minutes(s) {
        return getPhraseByNumber(s, ['каждую %s минуту', 'каждые %s минуты', 'каждые %s минут']);
    }
    minutesX0ThroughX1PastTheHour() {
        return 'минуты с %s по %s';
    }
    atX0MinutesPastTheHour(s) {
        return getPhraseByNumber(s, ['в %s минуту', 'в %s минуты', 'в %s минут']);
    }
    everyX0Hours(s) {
        return getPhraseByNumber(s, ['каждый %s час', 'каждые %s часа', 'каждые %s часов']);
    }
    betweenX0AndX1() {
        return 'с %s по %s';
    }
    atX0() {
        return 'в %s';
    }
    commaEveryDay() {
        return ', каждый день';
    }
    commaEveryX0DaysOfTheWeek(s) {
        return getPhraseByNumber(s, ['', ', каждые %s дня недели', ', каждые %s дней недели']);
    }
    commaX0ThroughX1(s) {
        return s && (s[0] == '2' || s[0] == '3') ? ', со %s по %s' : ', с %s по %s';
    }
    commaAndX0ThroughX1(s) {
        return s && (s[0] == '2' || s[0] == '3') ? ' и со %s по %s' : ' и с %s по %s';
    }
    first(s) {
        return getPhraseByDayOfWeek(s, ['первое', 'первый', 'первую']);
    }
    clear(fullDescription) {
        return fullDescription.replace('по пятницу', '');
    }
    second(s) {
        return getPhraseByDayOfWeek(s, ['второе', 'второй', 'вторую']);
    }
    third(s) {
        return getPhraseByDayOfWeek(s, ['третье', 'третий', 'третью']);
    }
    fourth(s) {
        return getPhraseByDayOfWeek(s, ['четвертое', 'четвертый', 'четвертую']);
    }
    fifth(s) {
        return getPhraseByDayOfWeek(s, ['пятое', 'пятый', 'пятую']);
    }
    commaOnThe(s) {
        return s === '2' ? ', во ' : ', в ';
    }
    spaceX0OfTheMonth() {
        return ' %s месяца';
    }
    lastDay() {
        return 'последний день';
    }
    commaOnTheLastX0OfTheMonth(s) {
        return getPhraseByDayOfWeek(s, [
            ', в последнее %s месяца',
            ', в последний %s месяца',
            ', в последнюю %s месяца',
        ]);
    }
    commaOnlyOnX0(s) {
        return s && s[0] === '2' ? ', только во %s' : ', только в %s';
    }
    commaAndOnX0() {
        return ', и %s';
    }
    commaEveryX0Months(s) {
        return getPhraseByNumber(s, ['', ' каждые %s месяца', ' каждые %s месяцев']);
    }
    commaOnlyInMonthX0() {
        return ', только %s';
    }
    commaOnlyInX0() {
        return ', только в %s';
    }
    commaOnTheLastDayOfTheMonth() {
        return ', в последний день месяца';
    }
    commaOnTheLastWeekdayOfTheMonth() {
        return ', в последний рабочий день месяца';
    }
    commaDaysBeforeTheLastDayOfTheMonth(s) {
        return getPhraseByNumber(s, [
            ', за %s день до конца месяца',
            ', за %s дня до конца месяца',
            ', за %s дней до конца месяца',
        ]);
    }
    firstWeekday() {
        return 'первый рабочий день';
    }
    weekdayNearestDayX0() {
        return 'ближайший рабочий день к %s числу';
    }
    commaOnTheX0OfTheMonth() {
        return ', в %s месяца';
    }
    commaEveryX0Days(s) {
        return getPhraseByNumber(s, [', каждый %s день', ', каждые %s дня', ', каждые %s дней']);
    }
    commaBetweenDayX0AndX1OfTheMonth(s) {
        return s && s.substring(0, s.indexOf('-')) == '2'
            ? ', со %s по %s число месяца'
            : ', с %s по %s число месяца';
    }
    commaOnDayX0OfTheMonth(s) {
        return s && s[0] == '2' ? ', во %s число месяца' : ', в %s число месяца';
    }
    commaEveryX0Years(s) {
        if (s === '1')
            return '';
        return ', каждый %s год';
        // return getPhraseByNumber(s, [', каждый %s год', ', каждые %s года', ', каждые %s лет']);
    }
    commaStartingX0() {
        return ', начало %s';
    }
    daysOfTheWeek() {
        return ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    }
    daysOfTheWeekInCase(f = 2) {
        return f == 1
            ? ['воскресенья', 'понедельника', 'вторника', 'среды', 'четверга', 'пятницы', 'субботы']
            : ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу'];
    }
    monthsOfTheYear() {
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
    monthsOfTheYearInCase(f) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Nyb24taHVtYW4tcmVhZGFibGUvaHVtYW4tcmVhZGFibGUvaTE4bi9sb2NhbGVzL3J1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVU7QUFJVixNQUFNLGlCQUFpQixHQUFHLENBQUMsR0FBdUIsRUFBRSxLQUFvQixFQUFFLEVBQUU7SUFDMUUsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE9BQU8sTUFBTSxLQUFLLFNBQVM7UUFDekIsQ0FBQyxDQUFDLEtBQUssQ0FDSCxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDbkMsQ0FBQyxDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3BFO1FBQ0gsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQztBQUNGLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxHQUF1QixFQUFFLEtBQW9CLEVBQUUsRUFBRTtJQUM3RSxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsT0FBTyxNQUFNLEtBQUssU0FBUztRQUN6QixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFL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LEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ00sZUFBZTtRQUNwQixPQUFPO1lBQ0wsUUFBUTtZQUNSLFNBQVM7WUFDVCxNQUFNO1lBQ04sUUFBUTtZQUNSLEtBQUs7WUFDTCxNQUFNO1lBQ04sTUFBTTtZQUNOLFFBQVE7WUFDUixVQUFVO1lBQ1YsU0FBUztZQUNULFFBQVE7WUFDUixTQUFTO1NBQ1YsQ0FBQztJQUNKLENBQUM7SUFDTSxxQkFBcUIsQ0FBQyxDQUFVO1FBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDWCxDQUFDLENBQUM7Z0JBQ0UsUUFBUTtnQkFDUixTQUFTO2dCQUNULE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixLQUFLO2dCQUNMLE1BQU07Z0JBQ04sTUFBTTtnQkFDTixTQUFTO2dCQUNULFVBQVU7Z0JBQ1YsU0FBUztnQkFDVCxRQUFRO2dCQUNSLFNBQVM7YUFDVjtZQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUnVzc2lhblxuXG5pbXBvcnQgeyBQcml6bUNyb25IUkxvY2FsZSB9IGZyb20gJy4uL2xvY2FsZSc7XG5cbmNvbnN0IGdldFBocmFzZUJ5TnVtYmVyID0gKHN0cjogc3RyaW5nIHwgdW5kZWZpbmVkLCB3b3JkczogQXJyYXk8c3RyaW5nPikgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoc3RyKTtcbiAgcmV0dXJuIG51bWJlciAhPT0gdW5kZWZpbmVkXG4gICAgPyB3b3Jkc1tcbiAgICAgICAgbnVtYmVyICUgMTAwID4gNCAmJiBudW1iZXIgJSAxMDAgPCAyMFxuICAgICAgICAgID8gMlxuICAgICAgICAgIDogWzIsIDAsIDEsIDEsIDEsIDJdW251bWJlciAlIDEwIDwgNSA/IE1hdGguYWJzKG51bWJlcikgJSAxMCA6IDVdXG4gICAgICBdXG4gICAgOiB3b3Jkc1syXTtcbn07XG5jb25zdCBnZXRQaHJhc2VCeURheU9mV2VlayA9IChzdHI6IHN0cmluZyB8IHVuZGVmaW5lZCwgd29yZHM6IEFycmF5PHN0cmluZz4pID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKHN0cik7XG4gIHJldHVybiBudW1iZXIgIT09IHVuZGVmaW5lZFxuICAgID8gd29yZHNbbnVtYmVyID09PSAwID8gMCA6IG51bWJlciA9PT0gMSB8fCBudW1iZXIgPT09IDIgfHwgbnVtYmVyID09PSA0ID8gMSA6IDJdXG4gICAgOiB3b3Jkc1sxXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBydSBpbXBsZW1lbnRzIFByaXptQ3JvbkhSTG9jYWxlIHtcbiAgcHVibGljIGF0WDBTZWNvbmRzUGFzdFRoZU1pbnV0ZUd0MjAoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcHVibGljIGF0WDBNaW51dGVzUGFzdFRoZUhvdXJHdDIwKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHB1YmxpYyBjb21tYU1vbnRoWDBUaHJvdWdoTW9udGhYMSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBwdWJsaWMgY29tbWFZZWFyWDBUaHJvdWdoWWVhclgxKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHB1YmxpYyB1c2UyNEhvdXJUaW1lRm9ybWF0QnlEZWZhdWx0KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHB1YmxpYyBldmVyeU1pbnV0ZSgpIHtcbiAgICByZXR1cm4gJ9C60LDQttC00YPRjiDQvNC40L3Rg9GC0YMnO1xuICB9XG4gIHB1YmxpYyBldmVyeUhvdXIoKSB7XG4gICAgcmV0dXJuICfQutCw0LbQtNGL0Lkg0YfQsNGBJztcbiAgfVxuICBwdWJsaWMgYW5FcnJvck9jY3VyZWRXaGVuR2VuZXJhdGluZ1RoZUV4cHJlc3Npb25EKCkge1xuICAgIHJldHVybiAn0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCDQstC+INCy0YDQtdC80Y8g0LPQtdC90LXRgNCw0YbQuNC4INC+0L/QuNGB0LDQvdC40Y8g0LLRi9GA0LDQttC10L3QuNGPLiDQn9GA0L7QstC10YDRjNGC0LUg0YHQuNC90YLQsNC60YHQuNGBINC60YDQvtC9LdCy0YvRgNCw0LbQtdC90LjRjy4nO1xuICB9XG4gIHB1YmxpYyBhdFNwYWNlKCkge1xuICAgIHJldHVybiAn0JIgJztcbiAgfVxuICBwdWJsaWMgZXZlcnlNaW51dGVCZXR3ZWVuWDBBbmRYMSgpIHtcbiAgICByZXR1cm4gJ9Ca0LDQttC00YPRjiDQvNC40L3Rg9GC0YMg0YEgJXMg0L/QviAlcyc7XG4gIH1cbiAgcHVibGljIGF0KCkge1xuICAgIHJldHVybiAn0JInO1xuICB9XG4gIHB1YmxpYyBzcGFjZUFuZCgpIHtcbiAgICByZXR1cm4gJyDQuCc7XG4gIH1cbiAgcHVibGljIGV2ZXJ5U2Vjb25kKCkge1xuICAgIHJldHVybiAn0LrQsNC20LTRg9GOINGB0LXQutGD0L3QtNGDJztcbiAgfVxuICBwdWJsaWMgZXZlcnlYMFNlY29uZHMocz86IHN0cmluZykge1xuICAgIHJldHVybiBnZXRQaHJhc2VCeU51bWJlcihzLCBbJ9C60LDQttC00YPRjiAlcyDRgdC10LrRg9C90LTRgycsICfQutCw0LbQtNGL0LUgJXMg0YHQtdC60YPQvdC00YsnLCAn0LrQsNC20LTRi9C1ICVzINGB0LXQutGD0L3QtCddKTtcbiAgfVxuICBwdWJsaWMgc2Vjb25kc1gwVGhyb3VnaFgxUGFzdFRoZU1pbnV0ZSgpIHtcbiAgICByZXR1cm4gJ9GB0LXQutGD0L3QtNGLINGBICVzINC/0L4gJXMnO1xuICB9XG4gIHB1YmxpYyBhdFgwU2Vjb25kc1Bhc3RUaGVNaW51dGUocz86IHN0cmluZykge1xuICAgIHJldHVybiBnZXRQaHJhc2VCeU51bWJlcihzLCBbJ9CyICVzINGB0LXQutGD0L3QtNGDJywgJ9CyICVzINGB0LXQutGD0L3QtNGLJywgJ9CyICVzINGB0LXQutGD0L3QtCddKTtcbiAgfVxuICBwdWJsaWMgZXZlcnlYME1pbnV0ZXMocz86IHN0cmluZykge1xuICAgIHJldHVybiBnZXRQaHJhc2VCeU51bWJlcihzLCBbJ9C60LDQttC00YPRjiAlcyDQvNC40L3Rg9GC0YMnLCAn0LrQsNC20LTRi9C1ICVzINC80LjQvdGD0YLRiycsICfQutCw0LbQtNGL0LUgJXMg0LzQuNC90YPRgiddKTtcbiAgfVxuICBwdWJsaWMgbWludXRlc1gwVGhyb3VnaFgxUGFzdFRoZUhvdXIoKSB7XG4gICAgcmV0dXJuICfQvNC40L3Rg9GC0Ysg0YEgJXMg0L/QviAlcyc7XG4gIH1cbiAgcHVibGljIGF0WDBNaW51dGVzUGFzdFRoZUhvdXIocz86IHN0cmluZykge1xuICAgIHJldHVybiBnZXRQaHJhc2VCeU51bWJlcihzLCBbJ9CyICVzINC80LjQvdGD0YLRgycsICfQsiAlcyDQvNC40L3Rg9GC0YsnLCAn0LIgJXMg0LzQuNC90YPRgiddKTtcbiAgfVxuICBwdWJsaWMgZXZlcnlYMEhvdXJzKHM/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZ2V0UGhyYXNlQnlOdW1iZXIocywgWyfQutCw0LbQtNGL0LkgJXMg0YfQsNGBJywgJ9C60LDQttC00YvQtSAlcyDRh9Cw0YHQsCcsICfQutCw0LbQtNGL0LUgJXMg0YfQsNGB0L7QsiddKTtcbiAgfVxuICBwdWJsaWMgYmV0d2VlblgwQW5kWDEoKSB7XG4gICAgcmV0dXJuICfRgSAlcyDQv9C+ICVzJztcbiAgfVxuICBwdWJsaWMgYXRYMCgpIHtcbiAgICByZXR1cm4gJ9CyICVzJztcbiAgfVxuICBwdWJsaWMgY29tbWFFdmVyeURheSgpIHtcbiAgICByZXR1cm4gJywg0LrQsNC20LTRi9C5INC00LXQvdGMJztcbiAgfVxuICBwdWJsaWMgY29tbWFFdmVyeVgwRGF5c09mVGhlV2VlayhzPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGdldFBocmFzZUJ5TnVtYmVyKHMsIFsnJywgJywg0LrQsNC20LTRi9C1ICVzINC00L3RjyDQvdC10LTQtdC70LgnLCAnLCDQutCw0LbQtNGL0LUgJXMg0LTQvdC10Lkg0L3QtdC00LXQu9C4J10pO1xuICB9XG4gIHB1YmxpYyBjb21tYVgwVGhyb3VnaFgxKHM/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcyAmJiAoc1swXSA9PSAnMicgfHwgc1swXSA9PSAnMycpID8gJywg0YHQviAlcyDQv9C+ICVzJyA6ICcsINGBICVzINC/0L4gJXMnO1xuICB9XG4gIHB1YmxpYyBjb21tYUFuZFgwVGhyb3VnaFgxKHM/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcyAmJiAoc1swXSA9PSAnMicgfHwgc1swXSA9PSAnMycpID8gJyDQuCDRgdC+ICVzINC/0L4gJXMnIDogJyDQuCDRgSAlcyDQv9C+ICVzJztcbiAgfVxuICBwdWJsaWMgZmlyc3Qocz86IHN0cmluZykge1xuICAgIHJldHVybiBnZXRQaHJhc2VCeURheU9mV2VlayhzLCBbJ9C/0LXRgNCy0L7QtScsICfQv9C10YDQstGL0LknLCAn0L/QtdGA0LLRg9GOJ10pO1xuICB9XG4gIHB1YmxpYyBjbGVhcihmdWxsRGVzY3JpcHRpb246IHN0cmluZykge1xuICAgIHJldHVybiBmdWxsRGVzY3JpcHRpb24ucmVwbGFjZSgn0L/QviDQv9GP0YLQvdC40YbRgycsICcnKTtcbiAgfVxuICBwdWJsaWMgc2Vjb25kKHM/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZ2V0UGhyYXNlQnlEYXlPZldlZWsocywgWyfQstGC0L7RgNC+0LUnLCAn0LLRgtC+0YDQvtC5JywgJ9Cy0YLQvtGA0YPRjiddKTtcbiAgfVxuICBwdWJsaWMgdGhpcmQocz86IHN0cmluZykge1xuICAgIHJldHVybiBnZXRQaHJhc2VCeURheU9mV2VlayhzLCBbJ9GC0YDQtdGC0YzQtScsICfRgtGA0LXRgtC40LknLCAn0YLRgNC10YLRjNGOJ10pO1xuICB9XG4gIHB1YmxpYyBmb3VydGgocz86IHN0cmluZykge1xuICAgIHJldHVybiBnZXRQaHJhc2VCeURheU9mV2VlayhzLCBbJ9GH0LXRgtCy0LXRgNGC0L7QtScsICfRh9C10YLQstC10YDRgtGL0LknLCAn0YfQtdGC0LLQtdGA0YLRg9GOJ10pO1xuICB9XG4gIHB1YmxpYyBmaWZ0aChzPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGdldFBocmFzZUJ5RGF5T2ZXZWVrKHMsIFsn0L/Rj9GC0L7QtScsICfQv9GP0YLRi9C5JywgJ9C/0Y/RgtGD0Y4nXSk7XG4gIH1cbiAgcHVibGljIGNvbW1hT25UaGUocz86IHN0cmluZykge1xuICAgIHJldHVybiBzID09PSAnMicgPyAnLCDQstC+ICcgOiAnLCDQsiAnO1xuICB9XG4gIHB1YmxpYyBzcGFjZVgwT2ZUaGVNb250aCgpIHtcbiAgICByZXR1cm4gJyAlcyDQvNC10YHRj9GG0LAnO1xuICB9XG4gIHB1YmxpYyBsYXN0RGF5KCkge1xuICAgIHJldHVybiAn0L/QvtGB0LvQtdC00L3QuNC5INC00LXQvdGMJztcbiAgfVxuICBwdWJsaWMgY29tbWFPblRoZUxhc3RYME9mVGhlTW9udGgocz86IHN0cmluZykge1xuICAgIHJldHVybiBnZXRQaHJhc2VCeURheU9mV2VlayhzLCBbXG4gICAgICAnLCDQsiDQv9C+0YHQu9C10LTQvdC10LUgJXMg0LzQtdGB0Y/RhtCwJyxcbiAgICAgICcsINCyINC/0L7RgdC70LXQtNC90LjQuSAlcyDQvNC10YHRj9GG0LAnLFxuICAgICAgJywg0LIg0L/QvtGB0LvQtdC00L3RjtGOICVzINC80LXRgdGP0YbQsCcsXG4gICAgXSk7XG4gIH1cbiAgcHVibGljIGNvbW1hT25seU9uWDAocz86IHN0cmluZykge1xuICAgIHJldHVybiBzICYmIHNbMF0gPT09ICcyJyA/ICcsINGC0L7Qu9GM0LrQviDQstC+ICVzJyA6ICcsINGC0L7Qu9GM0LrQviDQsiAlcyc7XG4gIH1cbiAgcHVibGljIGNvbW1hQW5kT25YMCgpIHtcbiAgICByZXR1cm4gJywg0LggJXMnO1xuICB9XG4gIHB1YmxpYyBjb21tYUV2ZXJ5WDBNb250aHMocz86IHN0cmluZykge1xuICAgIHJldHVybiBnZXRQaHJhc2VCeU51bWJlcihzLCBbJycsICcg0LrQsNC20LTRi9C1ICVzINC80LXRgdGP0YbQsCcsICcg0LrQsNC20LTRi9C1ICVzINC80LXRgdGP0YbQtdCyJ10pO1xuICB9XG4gIHB1YmxpYyBjb21tYU9ubHlJbk1vbnRoWDAoKSB7XG4gICAgcmV0dXJuICcsINGC0L7Qu9GM0LrQviAlcyc7XG4gIH1cbiAgcHVibGljIGNvbW1hT25seUluWDAoKSB7XG4gICAgcmV0dXJuICcsINGC0L7Qu9GM0LrQviDQsiAlcyc7XG4gIH1cbiAgcHVibGljIGNvbW1hT25UaGVMYXN0RGF5T2ZUaGVNb250aCgpIHtcbiAgICByZXR1cm4gJywg0LIg0L/QvtGB0LvQtdC00L3QuNC5INC00LXQvdGMINC80LXRgdGP0YbQsCc7XG4gIH1cbiAgcHVibGljIGNvbW1hT25UaGVMYXN0V2Vla2RheU9mVGhlTW9udGgoKSB7XG4gICAgcmV0dXJuICcsINCyINC/0L7RgdC70LXQtNC90LjQuSDRgNCw0LHQvtGH0LjQuSDQtNC10L3RjCDQvNC10YHRj9GG0LAnO1xuICB9XG4gIHB1YmxpYyBjb21tYURheXNCZWZvcmVUaGVMYXN0RGF5T2ZUaGVNb250aChzPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGdldFBocmFzZUJ5TnVtYmVyKHMsIFtcbiAgICAgICcsINC30LAgJXMg0LTQtdC90Ywg0LTQviDQutC+0L3RhtCwINC80LXRgdGP0YbQsCcsXG4gICAgICAnLCDQt9CwICVzINC00L3RjyDQtNC+INC60L7QvdGG0LAg0LzQtdGB0Y/RhtCwJyxcbiAgICAgICcsINC30LAgJXMg0LTQvdC10Lkg0LTQviDQutC+0L3RhtCwINC80LXRgdGP0YbQsCcsXG4gICAgXSk7XG4gIH1cbiAgcHVibGljIGZpcnN0V2Vla2RheSgpIHtcbiAgICByZXR1cm4gJ9C/0LXRgNCy0YvQuSDRgNCw0LHQvtGH0LjQuSDQtNC10L3RjCc7XG4gIH1cbiAgcHVibGljIHdlZWtkYXlOZWFyZXN0RGF5WDAoKSB7XG4gICAgcmV0dXJuICfQsdC70LjQttCw0LnRiNC40Lkg0YDQsNCx0L7Rh9C40Lkg0LTQtdC90Ywg0LogJXMg0YfQuNGB0LvRgyc7XG4gIH1cbiAgcHVibGljIGNvbW1hT25UaGVYME9mVGhlTW9udGgoKSB7XG4gICAgcmV0dXJuICcsINCyICVzINC80LXRgdGP0YbQsCc7XG4gIH1cbiAgcHVibGljIGNvbW1hRXZlcnlYMERheXMocz86IHN0cmluZykge1xuICAgIHJldHVybiBnZXRQaHJhc2VCeU51bWJlcihzLCBbJywg0LrQsNC20LTRi9C5ICVzINC00LXQvdGMJywgJywg0LrQsNC20LTRi9C1ICVzINC00L3RjycsICcsINC60LDQttC00YvQtSAlcyDQtNC90LXQuSddKTtcbiAgfVxuICBwdWJsaWMgY29tbWFCZXR3ZWVuRGF5WDBBbmRYMU9mVGhlTW9udGgocz86IHN0cmluZykge1xuICAgIHJldHVybiBzICYmIHMuc3Vic3RyaW5nKDAsIHMuaW5kZXhPZignLScpKSA9PSAnMidcbiAgICAgID8gJywg0YHQviAlcyDQv9C+ICVzINGH0LjRgdC70L4g0LzQtdGB0Y/RhtCwJ1xuICAgICAgOiAnLCDRgSAlcyDQv9C+ICVzINGH0LjRgdC70L4g0LzQtdGB0Y/RhtCwJztcbiAgfVxuICBwdWJsaWMgY29tbWFPbkRheVgwT2ZUaGVNb250aChzPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHMgJiYgc1swXSA9PSAnMicgPyAnLCDQstC+ICVzINGH0LjRgdC70L4g0LzQtdGB0Y/RhtCwJyA6ICcsINCyICVzINGH0LjRgdC70L4g0LzQtdGB0Y/RhtCwJztcbiAgfVxuICBwdWJsaWMgY29tbWFFdmVyeVgwWWVhcnMocz86IHN0cmluZykge1xuICAgIGlmIChzID09PSAnMScpIHJldHVybiAnJztcbiAgICByZXR1cm4gJywg0LrQsNC20LTRi9C5ICVzINCz0L7QtCc7XG4gICAgLy8gcmV0dXJuIGdldFBocmFzZUJ5TnVtYmVyKHMsIFsnLCDQutCw0LbQtNGL0LkgJXMg0LPQvtC0JywgJywg0LrQsNC20LTRi9C1ICVzINCz0L7QtNCwJywgJywg0LrQsNC20LTRi9C1ICVzINC70LXRgiddKTtcbiAgfVxuICBwdWJsaWMgY29tbWFTdGFydGluZ1gwKCkge1xuICAgIHJldHVybiAnLCDQvdCw0YfQsNC70L4gJXMnO1xuICB9XG4gIHB1YmxpYyBkYXlzT2ZUaGVXZWVrKCkge1xuICAgIHJldHVybiBbJ9Cy0L7RgdC60YDQtdGB0LXQvdGM0LUnLCAn0L/QvtC90LXQtNC10LvRjNC90LjQuicsICfQstGC0L7RgNC90LjQuicsICfRgdGA0LXQtNCwJywgJ9GH0LXRgtCy0LXRgNCzJywgJ9C/0Y/RgtC90LjRhtCwJywgJ9GB0YPQsdCx0L7RgtCwJ107XG4gIH1cbiAgcHVibGljIGRheXNPZlRoZVdlZWtJbkNhc2UoZiA9IDIpIHtcbiAgICByZXR1cm4gZiA9PSAxXG4gICAgICA/IFsn0LLQvtGB0LrRgNC10YHQtdC90YzRjycsICfQv9C+0L3QtdC00LXQu9GM0L3QuNC60LAnLCAn0LLRgtC+0YDQvdC40LrQsCcsICfRgdGA0LXQtNGLJywgJ9GH0LXRgtCy0LXRgNCz0LAnLCAn0L/Rj9GC0L3QuNGG0YsnLCAn0YHRg9Cx0LHQvtGC0YsnXVxuICAgICAgOiBbJ9Cy0L7RgdC60YDQtdGB0LXQvdGM0LUnLCAn0L/QvtC90LXQtNC10LvRjNC90LjQuicsICfQstGC0L7RgNC90LjQuicsICfRgdGA0LXQtNGDJywgJ9GH0LXRgtCy0LXRgNCzJywgJ9C/0Y/RgtC90LjRhtGDJywgJ9GB0YPQsdCx0L7RgtGDJ107XG4gIH1cbiAgcHVibGljIG1vbnRoc09mVGhlWWVhcigpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ9GP0L3QstCw0YDRjCcsXG4gICAgICAn0YTQtdCy0YDQsNC70YwnLFxuICAgICAgJ9C80LDRgNGCJyxcbiAgICAgICfQsNC/0YDQtdC70YwnLFxuICAgICAgJ9C80LDQuScsXG4gICAgICAn0LjRjtC90YwnLFxuICAgICAgJ9C40Y7Qu9GMJyxcbiAgICAgICfQsNCy0LPRg9GB0YInLFxuICAgICAgJ9GB0LXQvdGC0Y/QsdGA0YwnLFxuICAgICAgJ9C+0LrRgtGP0LHRgNGMJyxcbiAgICAgICfQvdC+0Y/QsdGA0YwnLFxuICAgICAgJ9C00LXQutCw0LHRgNGMJyxcbiAgICBdO1xuICB9XG4gIHB1YmxpYyBtb250aHNPZlRoZVllYXJJbkNhc2UoZj86IG51bWJlcikge1xuICAgIHJldHVybiBmID09IDFcbiAgICAgID8gW1xuICAgICAgICAgICfRj9C90LLQsNGA0Y8nLFxuICAgICAgICAgICfRhNC10LLRgNCw0LvRjycsXG4gICAgICAgICAgJ9C80LDRgNGC0LAnLFxuICAgICAgICAgICfQsNC/0YDQtdC70Y8nLFxuICAgICAgICAgICfQvNCw0Y8nLFxuICAgICAgICAgICfQuNGO0L3RjycsXG4gICAgICAgICAgJ9C40Y7Qu9GPJyxcbiAgICAgICAgICAn0LDQstCz0YPRgdGC0LAnLFxuICAgICAgICAgICfRgdC10L3RgtGP0LHRgNGPJyxcbiAgICAgICAgICAn0L7QutGC0Y/QsdGA0Y8nLFxuICAgICAgICAgICfQvdC+0Y/QsdGA0Y8nLFxuICAgICAgICAgICfQtNC10LrQsNCx0YDRjycsXG4gICAgICAgIF1cbiAgICAgIDogdGhpcy5tb250aHNPZlRoZVllYXIoKTtcbiAgfVxufVxuIl19