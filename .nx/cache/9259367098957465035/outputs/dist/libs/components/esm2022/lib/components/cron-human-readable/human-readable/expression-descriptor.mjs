import { PrizmCronHRStringUtilities } from './string-utilities';
import { PrizmCronHRParser } from './cron-parser';
export class PrizmCronHRExpressionDescriptor {
    static { this.locales = {}; }
    /**
     * Converts a cron expression into a description a human can read
     * @static
     * @param {string} expression - The cron expression
     * @param {IOptions} [{
     *         throwExceptionOnParseError = true,
     *         casingType = CasingTypeEnum.Sentence,
     *         verbose = false,
     *         dayOfWeekStartIndexZero = true,
     *         monthStartIndexZero = false,
     *         use24HourTimeFormat = false,
     *         locale = 'en'
     *     }={}]
     * @returns {string}
     */
    static toString(expression, { throwExceptionOnParseError = true, verbose = false, dayOfWeekStartIndexZero = true, monthStartIndexZero = false, use24HourTimeFormat, locale = null, } = {}) {
        // We take advantage of Destructuring Object Parameters (and defaults) in TS/ES6 and now we will reassemble back to
        // an Options type so we can pass around options with ease.
        const options = {
            throwExceptionOnParseError: throwExceptionOnParseError,
            verbose: verbose,
            dayOfWeekStartIndexZero: dayOfWeekStartIndexZero,
            monthStartIndexZero: monthStartIndexZero,
            use24HourTimeFormat: use24HourTimeFormat,
            locale: locale,
        };
        const descripter = new PrizmCronHRExpressionDescriptor(expression, options);
        return descripter.getFullDescription();
    }
    static initialize(localesLoader, defaultLocale = 'en') {
        PrizmCronHRExpressionDescriptor.specialCharacters = ['/', '-', ',', '*'];
        PrizmCronHRExpressionDescriptor.defaultLocale = defaultLocale;
        // Load locales
        localesLoader.load(PrizmCronHRExpressionDescriptor.locales);
    }
    constructor(expression, options) {
        this.expression = expression;
        this.options = options;
        this.expressionParts = new Array(5);
        if (!this.options.locale && PrizmCronHRExpressionDescriptor.defaultLocale) {
            this.options.locale = PrizmCronHRExpressionDescriptor.defaultLocale;
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (!PrizmCronHRExpressionDescriptor.locales[this.options.locale]) {
            const fallBackLocale = Object.keys(PrizmCronHRExpressionDescriptor.locales)[0];
            // fall back to English
            console.warn(`Locale '${this.options.locale}' could not be found; falling back to '${fallBackLocale}'.`);
            this.options.locale = fallBackLocale;
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.i18n = PrizmCronHRExpressionDescriptor.locales[this.options.locale];
        if (options.use24HourTimeFormat === undefined) {
            // if use24HourTimeFormat not specified, set based on locale default
            options.use24HourTimeFormat = this.i18n.use24HourTimeFormatByDefault();
        }
    }
    getFullDescription() {
        let description = '';
        try {
            const parser = new PrizmCronHRParser(this.expression, this.options.dayOfWeekStartIndexZero, this.options.monthStartIndexZero);
            this.expressionParts = parser.parse();
            const timeSegment = this.getTimeOfDayDescription();
            const dayOfMonthDesc = this.getDayOfMonthDescription();
            const monthDesc = this.getMonthDescription();
            const dayOfWeekDesc = this.getDayOfWeekDescription();
            const yearDesc = this.getYearDescription();
            description += timeSegment + dayOfMonthDesc + dayOfWeekDesc + monthDesc + yearDesc;
            description = this.transformVerbosity(description, !!this.options.verbose);
            // uppercase first character
            description = description.charAt(0).toLocaleUpperCase() + description.substr(1);
        }
        catch (ex) {
            if (!this.options.throwExceptionOnParseError) {
                description = this.i18n.anErrorOccuredWhenGeneratingTheExpressionD();
            }
            else {
                throw `${ex}`;
            }
        }
        return description;
    }
    getTimeOfDayDescription() {
        const secondsExpression = this.expressionParts[0];
        const minuteExpression = this.expressionParts[1];
        const hourExpression = this.expressionParts[2];
        let description = '';
        // handle special cases first
        if (!PrizmCronHRStringUtilities.containsAny(minuteExpression, PrizmCronHRExpressionDescriptor.specialCharacters) &&
            !PrizmCronHRStringUtilities.containsAny(hourExpression, PrizmCronHRExpressionDescriptor.specialCharacters) &&
            !PrizmCronHRStringUtilities.containsAny(secondsExpression, PrizmCronHRExpressionDescriptor.specialCharacters)) {
            // specific time of day (i.e. 10 14)
            description +=
                this.i18n.atSpace() + this.formatTime(hourExpression, minuteExpression, secondsExpression);
        }
        else if (!secondsExpression &&
            minuteExpression.indexOf('-') > -1 &&
            !(minuteExpression.indexOf(',') > -1) &&
            !(minuteExpression.indexOf('/') > -1) &&
            !PrizmCronHRStringUtilities.containsAny(hourExpression, PrizmCronHRExpressionDescriptor.specialCharacters)) {
            // minute range in single hour (i.e. 0-10 11)
            const minuteParts = minuteExpression.split('-');
            description += PrizmCronHRStringUtilities.format(this.i18n.everyMinuteBetweenX0AndX1(), this.formatTime(hourExpression, minuteParts[0], ''), this.formatTime(hourExpression, minuteParts[1], ''));
        }
        else if (!secondsExpression &&
            hourExpression.indexOf(',') > -1 &&
            hourExpression.indexOf('-') == -1 &&
            hourExpression.indexOf('/') == -1 &&
            !PrizmCronHRStringUtilities.containsAny(minuteExpression, PrizmCronHRExpressionDescriptor.specialCharacters)) {
            // hours list with single minute (i.e. 30 6,14,16)
            const hourParts = hourExpression.split(',');
            description += this.i18n.at();
            for (let i = 0; i < hourParts.length; i++) {
                description += ' ';
                description += this.formatTime(hourParts[i], minuteExpression, '');
                if (i < hourParts.length - 2) {
                    description += ',';
                }
                if (i == hourParts.length - 2) {
                    description += this.i18n.spaceAnd();
                }
            }
        }
        else {
            // default time description
            const secondsDescription = this.getSecondsDescription();
            const minutesDescription = this.getMinutesDescription();
            const hoursDescription = this.getHoursDescription();
            description += secondsDescription;
            if (description && minutesDescription) {
                description += ', ';
            }
            description += minutesDescription;
            if (minutesDescription === hoursDescription) {
                return description;
            }
            if (description && hoursDescription) {
                description += ', ';
            }
            description += hoursDescription;
        }
        return description;
    }
    getSecondsDescription() {
        const description = this.getSegmentDescription(this.expressionParts[0], this.i18n.everySecond(), s => {
            return s;
        }, s => {
            return PrizmCronHRStringUtilities.format(this.i18n.everyX0Seconds(s), s);
        }, s => {
            return this.i18n.secondsX0ThroughX1PastTheMinute();
        }, s => {
            return s == '0'
                ? ''
                : parseInt(s) < 20
                    ? this.i18n.atX0SecondsPastTheMinute(s)
                    : this.i18n.atX0SecondsPastTheMinuteGt20() || this.i18n.atX0SecondsPastTheMinute(s);
        });
        return description;
    }
    getMinutesDescription() {
        const secondsExpression = this.expressionParts[0];
        const hourExpression = this.expressionParts[2];
        const description = this.getSegmentDescription(this.expressionParts[1], this.i18n.everyMinute(), s => {
            return s;
        }, s => {
            return PrizmCronHRStringUtilities.format(this.i18n.everyX0Minutes(s), s);
        }, s => {
            return this.i18n.minutesX0ThroughX1PastTheHour();
        }, s => {
            try {
                return s == '0' && hourExpression.indexOf('/') == -1 && secondsExpression == ''
                    ? this.i18n.everyHour()
                    : parseInt(s) < 20
                        ? this.i18n.atX0MinutesPastTheHour(s)
                        : this.i18n.atX0MinutesPastTheHourGt20() || this.i18n.atX0MinutesPastTheHour(s);
            }
            catch (e) {
                return this.i18n.atX0MinutesPastTheHour(s);
            }
        });
        return description;
    }
    getHoursDescription() {
        const expression = this.expressionParts[2];
        let description = this.getSegmentDescription(expression, this.i18n.everyHour(), s => {
            return this.formatTime(s, '0', '');
        }, s => {
            return PrizmCronHRStringUtilities.format(this.i18n.everyX0Hours(s), s);
        }, s => {
            return this.i18n.betweenX0AndX1();
        }, s => {
            return this.i18n.atX0();
        });
        // If this is an hour range and minute segment is not "on the hour" (0), we'll change the second hour part from :00 to :59
        if (description && expression.includes('-') && this.expressionParts[1] != '0') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const atTheHourMatches = Array.from(description.matchAll(/:00/g));
            if (atTheHourMatches.length > 1) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const lastAtTheHourMatchIndex = atTheHourMatches[atTheHourMatches.length - 1].index;
                description =
                    description.substring(0, lastAtTheHourMatchIndex) +
                        ':59' +
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        description.substring(lastAtTheHourMatchIndex + 3);
            }
        }
        return description;
    }
    getDayOfWeekDescription() {
        const daysOfWeekNames = this.i18n.daysOfTheWeek();
        let description = null;
        if (this.expressionParts[5] == '*') {
            // DOW is specified as * so we will not generate a description and defer to DOM part.
            // Otherwise, we could get a contradiction like "on day 1 of the month, every day"
            // or a dupe description like "every day, every day".
            description = '';
        }
        else {
            description = this.getSegmentDescription(this.expressionParts[5], this.i18n.commaEveryDay(), (s, form) => {
                let exp = s;
                if (s.indexOf('#') > -1) {
                    exp = s.substring(0, s.indexOf('#'));
                }
                else if (s.indexOf('L') > -1) {
                    exp = exp.replace('L', '');
                }
                // потому начинаются дни с субботы под номером 1
                const incrementNumber = +exp - 1;
                const newExp = incrementNumber === -1 ? 6 : incrementNumber;
                let description = this.i18n.daysOfTheWeekInCase
                    ? this.i18n.daysOfTheWeekInCase(form)[newExp]
                    : daysOfWeekNames[newExp];
                if (s.indexOf('#') > -1) {
                    let dayOfWeekOfMonthDescription = null;
                    const dayOfWeekOfMonthNumber = s.substring(s.indexOf('#') + 1);
                    const dayOfWeekNumber = s.substring(0, s.indexOf('#'));
                    switch (dayOfWeekOfMonthNumber) {
                        case '1':
                            dayOfWeekOfMonthDescription = this.i18n.first(dayOfWeekNumber);
                            break;
                        case '2':
                            dayOfWeekOfMonthDescription = this.i18n.second(dayOfWeekNumber);
                            break;
                        case '3':
                            dayOfWeekOfMonthDescription = this.i18n.third(dayOfWeekNumber);
                            break;
                        case '4':
                            dayOfWeekOfMonthDescription = this.i18n.fourth(dayOfWeekNumber);
                            break;
                        case '5':
                            dayOfWeekOfMonthDescription = this.i18n.fifth(dayOfWeekNumber);
                            break;
                    }
                    description = dayOfWeekOfMonthDescription + ' ' + description;
                }
                return description;
            }, s => {
                if (parseInt(s) == 1) {
                    // rather than "every 1 days" just return empty string
                    return '';
                }
                else {
                    return PrizmCronHRStringUtilities.format(this.i18n.commaEveryX0DaysOfTheWeek(s), s);
                }
            }, s => {
                // If both DOM and DOW are specified, the cron will execute at either time.
                const beginFrom = s.substring(0, s.indexOf('-'));
                const domSpecified = this.expressionParts[3] != '*';
                return domSpecified
                    ? this.i18n.commaAndX0ThroughX1(beginFrom)
                    : this.i18n.commaX0ThroughX1(beginFrom);
            }, s => {
                let format = null;
                if (s.indexOf('#') > -1) {
                    const dayOfWeekOfMonthNumber = s.substring(s.indexOf('#') + 1);
                    format = this.i18n.commaOnThe(dayOfWeekOfMonthNumber).trim() + this.i18n.spaceX0OfTheMonth();
                }
                else if (s.indexOf('L') > -1) {
                    format = this.i18n.commaOnTheLastX0OfTheMonth(s.replace('L', ''));
                }
                else {
                    // If both DOM and DOW are specified, the cron will execute at either time.
                    const domSpecified = this.expressionParts[3] != '*';
                    format = domSpecified ? this.i18n.commaAndOnX0() : this.i18n.commaOnlyOnX0(s);
                }
                return format;
            });
        }
        if (this.i18n.clear && description)
            description = this.i18n.clear(description);
        return description;
    }
    getMonthDescription() {
        const monthNames = this.i18n.monthsOfTheYear();
        return this.getSegmentDescription(this.expressionParts[4], '', (s, form) => {
            return form && this.i18n.monthsOfTheYearInCase
                ? this.i18n.monthsOfTheYearInCase(form)[parseInt(s) - 1]
                : monthNames[parseInt(s) - 1];
        }, s => {
            //
            if (parseInt(s) == 1) {
                // rather than "every 1 months" just return empty string
                return '';
            }
            else {
                return PrizmCronHRStringUtilities.format(this.i18n.commaEveryX0Months(s), s);
            }
        }, s => {
            return this.i18n.commaMonthX0ThroughMonthX1() || this.i18n.commaX0ThroughX1();
        }, s => {
            return this.i18n.commaOnlyInMonthX0 ? this.i18n.commaOnlyInMonthX0() : this.i18n.commaOnlyInX0();
        });
    }
    getDayOfMonthDescription() {
        let description = null;
        const expression = this.expressionParts[3];
        switch (expression) {
            case 'L':
                description = this.i18n.commaOnTheLastDayOfTheMonth();
                break;
            case 'WL':
            case 'LW':
                description = this.i18n.commaOnTheLastWeekdayOfTheMonth();
                break;
            default: // i.e. 3W or W2
                // eslint-disable-next-line no-case-declarations
                const weekDayNumberMatches = expression.match(/(\d{1,2}W)|(W\d{1,2})/);
                if (weekDayNumberMatches) {
                    const dayNumber = parseInt(weekDayNumberMatches[0].replace('W', ''));
                    const dayString = dayNumber == 1
                        ? this.i18n.firstWeekday()
                        : PrizmCronHRStringUtilities.format(this.i18n.weekdayNearestDayX0(), dayNumber.toString());
                    description = PrizmCronHRStringUtilities.format(this.i18n.commaOnTheX0OfTheMonth(), dayString);
                    break;
                }
                else {
                    // Handle "last day offset" (i.e. L-5:  "5 days before the last day of the month")
                    const lastDayOffSetMatches = expression.match(/L-(\d{1,2})/);
                    if (lastDayOffSetMatches) {
                        const offSetDays = lastDayOffSetMatches[1];
                        description = PrizmCronHRStringUtilities.format(this.i18n.commaDaysBeforeTheLastDayOfTheMonth(offSetDays), offSetDays);
                        break;
                    }
                    else if (expression == '*' && this.expressionParts[5] != '*') {
                        // * dayOfMonth and dayOfWeek specified so use dayOfWeek verbiage instead
                        return '';
                    }
                    else {
                        description = this.getSegmentDescription(expression, this.i18n.commaEveryDay(), s => {
                            return s == 'L'
                                ? this.i18n.lastDay()
                                : this.i18n.dayX0
                                    ? PrizmCronHRStringUtilities.format(this.i18n.dayX0(), s)
                                    : s;
                        }, s => {
                            return s == '1' ? this.i18n.commaEveryDay() : this.i18n.commaEveryX0Days(s);
                        }, s => {
                            return this.i18n.commaBetweenDayX0AndX1OfTheMonth(s);
                        }, s => {
                            return this.i18n.commaOnDayX0OfTheMonth(s);
                        });
                    }
                    break;
                }
        }
        return description;
    }
    getYearDescription() {
        return this.getSegmentDescription(this.expressionParts[6], '', s => {
            return /^\d+$/.test(s) ? new Date(parseInt(s), 1).getFullYear().toString() : s;
        }, s => {
            return PrizmCronHRStringUtilities.format(this.i18n.commaEveryX0Years(s), s);
        }, s => {
            return this.i18n.commaYearX0ThroughYearX1() || this.i18n.commaX0ThroughX1();
        }, s => {
            return this.i18n.commaOnlyInYearX0 ? this.i18n.commaOnlyInYearX0() : this.i18n.commaOnlyInX0();
        });
    }
    getSegmentDescription(expression, allDescription, getSingleItemDescription, getIncrementDescriptionFormat, getRangeDescriptionFormat, getDescriptionFormat) {
        let description = null;
        const doesExpressionContainIncrement = expression.indexOf('/') > -1;
        const doesExpressionContainRange = expression.indexOf('-') > -1;
        const doesExpressionContainMultipleValues = expression.indexOf(',') > -1;
        if (!expression) {
            // Empty
            description = '';
        }
        else if (expression === '*') {
            // * (All)
            description = allDescription;
        }
        else if (!doesExpressionContainIncrement &&
            !doesExpressionContainRange &&
            !doesExpressionContainMultipleValues) {
            // Simple
            description = PrizmCronHRStringUtilities.format(getDescriptionFormat(expression), getSingleItemDescription(expression));
        }
        else if (doesExpressionContainMultipleValues) {
            // Multiple Values
            const segments = expression.split(',');
            let descriptionContent = '';
            for (let i = 0; i < segments.length; i++) {
                if (i > 0 && segments.length > 2) {
                    descriptionContent += ',';
                    if (i < segments.length - 1) {
                        descriptionContent += ' ';
                    }
                }
                if (i > 0 && segments.length > 1 && (i == segments.length - 1 || segments.length == 2)) {
                    descriptionContent += `${this.i18n.spaceAnd()} `;
                }
                if (segments[i].indexOf('/') > -1 || segments[i].indexOf('-') > -1) {
                    // Multiple Values with Increment or Range
                    const isSegmentRangeWithoutIncrement = segments[i].indexOf('-') > -1 && segments[i].indexOf('/') == -1;
                    let currentDescriptionContent = this.getSegmentDescription(segments[i], allDescription, getSingleItemDescription, getIncrementDescriptionFormat, isSegmentRangeWithoutIncrement ? this.i18n.commaX0ThroughX1 : getRangeDescriptionFormat, getDescriptionFormat);
                    if (isSegmentRangeWithoutIncrement) {
                        currentDescriptionContent = currentDescriptionContent?.replace(', ', '');
                    }
                    descriptionContent += currentDescriptionContent;
                }
                else if (!doesExpressionContainIncrement) {
                    descriptionContent += getSingleItemDescription(segments[i]);
                }
                else {
                    descriptionContent += this.getSegmentDescription(segments[i], allDescription, getSingleItemDescription, getIncrementDescriptionFormat, getRangeDescriptionFormat, getDescriptionFormat);
                }
            }
            if (!doesExpressionContainIncrement) {
                description = PrizmCronHRStringUtilities.format(getDescriptionFormat(expression), descriptionContent);
            }
            else {
                description = descriptionContent;
            }
        }
        else if (doesExpressionContainIncrement) {
            // Increment
            const segments = expression.split('/');
            description = PrizmCronHRStringUtilities.format(getIncrementDescriptionFormat(segments[1]), segments[1]);
            if (segments[0].indexOf('-') > -1) {
                // Range with Increment (ex: 2-59/3 )
                const rangeSegmentDescription = this.generateRangeSegmentDescription(segments[0], getRangeDescriptionFormat, getSingleItemDescription);
                if (rangeSegmentDescription.indexOf(', ') != 0) {
                    description += ', ';
                }
                description += rangeSegmentDescription;
            }
            else if (segments[0].indexOf('*') == -1) {
                let rangeItemDescription = PrizmCronHRStringUtilities.format(getDescriptionFormat(segments[0]), getSingleItemDescription(segments[0]));
                // remove any leading comma
                rangeItemDescription = rangeItemDescription.replace(', ', '');
                description += PrizmCronHRStringUtilities.format(this.i18n.commaStartingX0(), rangeItemDescription);
            }
        }
        else if (doesExpressionContainRange) {
            // Range
            description = this.generateRangeSegmentDescription(expression, getRangeDescriptionFormat, getSingleItemDescription);
        }
        return description;
    }
    generateRangeSegmentDescription(rangeExpression, getRangeDescriptionFormat, getSingleItemDescription) {
        let description = '';
        const rangeSegments = rangeExpression.split('-');
        const rangeSegment1Description = getSingleItemDescription(rangeSegments[0], 1);
        const rangeSegment2Description = getSingleItemDescription(rangeSegments[1], 2);
        const rangeDescriptionFormat = getRangeDescriptionFormat(rangeExpression);
        description += PrizmCronHRStringUtilities.format(rangeDescriptionFormat, rangeSegment1Description, rangeSegment2Description);
        return description;
    }
    formatTime(hourExpression, minuteExpression, secondExpression) {
        let hour = parseInt(hourExpression);
        let period = '';
        let setPeriodBeforeTime = false;
        if (!this.options.use24HourTimeFormat) {
            setPeriodBeforeTime = !!(this.i18n.setPeriodBeforeTime && this.i18n.setPeriodBeforeTime());
            period = setPeriodBeforeTime ? `${this.getPeriod(hour)} ` : ` ${this.getPeriod(hour)}`;
            if (hour > 12) {
                hour -= 12;
            }
            if (hour === 0) {
                hour = 12;
            }
        }
        const minute = minuteExpression;
        let second = '';
        if (secondExpression) {
            second = `:${('00' + secondExpression).substring(secondExpression.length)}`;
        }
        return `${setPeriodBeforeTime ? period : ''}${('00' + hour.toString()).substring(hour.toString().length)}:${('00' + minute.toString()).substring(minute.toString().length)}${second}${!setPeriodBeforeTime ? period : ''}`;
    }
    transformVerbosity(description, useVerboseFormat) {
        if (!useVerboseFormat) {
            description = description.replace(new RegExp(`, ${this.i18n.everyMinute()}`, 'g'), '');
            description = description.replace(new RegExp(`, ${this.i18n.everyHour()}`, 'g'), '');
            description = description.replace(new RegExp(this.i18n.commaEveryDay(), 'g'), '');
            description = description.replace(/, ?$/, '');
        }
        return description;
    }
    getPeriod(hour) {
        return hour >= 12 ? (this.i18n.pm && this.i18n.pm()) || 'PM' : (this.i18n.am && this.i18n.am()) || 'AM';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzc2lvbi1kZXNjcmlwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9jcm9uLWh1bWFuLXJlYWRhYmxlL2h1bWFuLXJlYWRhYmxlL2V4cHJlc3Npb24tZGVzY3JpcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNbEQsTUFBTSxPQUFPLCtCQUErQjthQUNuQyxZQUFPLEdBQTBDLEVBQUUsQ0FBQztJQVMzRDs7Ozs7Ozs7Ozs7Ozs7T0FjRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQ3BCLFVBQWtCLEVBQ2xCLEVBQ0UsMEJBQTBCLEdBQUcsSUFBSSxFQUNqQyxPQUFPLEdBQUcsS0FBSyxFQUNmLHVCQUF1QixHQUFHLElBQUksRUFDOUIsbUJBQW1CLEdBQUcsS0FBSyxFQUMzQixtQkFBbUIsRUFDbkIsTUFBTSxHQUFHLElBQUksTUFDUyxFQUFFO1FBRTFCLG1IQUFtSDtRQUNuSCwyREFBMkQ7UUFFM0QsTUFBTSxPQUFPLEdBQXVCO1lBQ2xDLDBCQUEwQixFQUFFLDBCQUEwQjtZQUN0RCxPQUFPLEVBQUUsT0FBTztZQUNoQix1QkFBdUIsRUFBRSx1QkFBdUI7WUFDaEQsbUJBQW1CLEVBQUUsbUJBQW1CO1lBQ3hDLG1CQUFtQixFQUFFLG1CQUFtQjtZQUN4QyxNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFFRixNQUFNLFVBQVUsR0FBRyxJQUFJLCtCQUErQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1RSxPQUFPLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQXNDLEVBQUUsYUFB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Q0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUMxRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpem1Dcm9uSFJTdHJpbmdVdGlsaXRpZXMgfSBmcm9tICcuL3N0cmluZy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgUHJpem1Dcm9uSFJQYXJzZXIgfSBmcm9tICcuL2Nyb24tcGFyc2VyJztcbmltcG9ydCB7IFByaXptQ3JvbkhST3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbmltcG9ydCB7IFByaXptQ3JvbkhSTG9jYWxlIH0gZnJvbSAnLi9pMThuL2xvY2FsZSc7XG5pbXBvcnQgeyBQcml6bUNyb25IUkxvY2FsZUxvYWRlciB9IGZyb20gJy4vaTE4bi9sb2NhbGUtbG9hZGVyJztcblxuZXhwb3J0IGNsYXNzIFByaXptQ3JvbkhSRXhwcmVzc2lvbkRlc2NyaXB0b3Ige1xuICBzdGF0aWMgbG9jYWxlczogeyBbbmFtZTogc3RyaW5nXTogUHJpem1Dcm9uSFJMb2NhbGUgfSA9IHt9O1xuICBzdGF0aWMgZGVmYXVsdExvY2FsZTogc3RyaW5nO1xuICBzdGF0aWMgc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZ1tdO1xuXG4gIGV4cHJlc3Npb246IHN0cmluZztcbiAgZXhwcmVzc2lvblBhcnRzOiBzdHJpbmdbXTtcbiAgb3B0aW9uczogUHJpem1Dcm9uSFJPcHRpb25zO1xuICBpMThuOiBQcml6bUNyb25IUkxvY2FsZTtcblxuICAvKipcbiAgICogQ29udmVydHMgYSBjcm9uIGV4cHJlc3Npb24gaW50byBhIGRlc2NyaXB0aW9uIGEgaHVtYW4gY2FuIHJlYWRcbiAgICogQHN0YXRpY1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvbiAtIFRoZSBjcm9uIGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtJT3B0aW9uc30gW3tcbiAgICogICAgICAgICB0aHJvd0V4Y2VwdGlvbk9uUGFyc2VFcnJvciA9IHRydWUsXG4gICAqICAgICAgICAgY2FzaW5nVHlwZSA9IENhc2luZ1R5cGVFbnVtLlNlbnRlbmNlLFxuICAgKiAgICAgICAgIHZlcmJvc2UgPSBmYWxzZSxcbiAgICogICAgICAgICBkYXlPZldlZWtTdGFydEluZGV4WmVybyA9IHRydWUsXG4gICAqICAgICAgICAgbW9udGhTdGFydEluZGV4WmVybyA9IGZhbHNlLFxuICAgKiAgICAgICAgIHVzZTI0SG91clRpbWVGb3JtYXQgPSBmYWxzZSxcbiAgICogICAgICAgICBsb2NhbGUgPSAnZW4nXG4gICAqICAgICB9PXt9XVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyB0b1N0cmluZyhcbiAgICBleHByZXNzaW9uOiBzdHJpbmcsXG4gICAge1xuICAgICAgdGhyb3dFeGNlcHRpb25PblBhcnNlRXJyb3IgPSB0cnVlLFxuICAgICAgdmVyYm9zZSA9IGZhbHNlLFxuICAgICAgZGF5T2ZXZWVrU3RhcnRJbmRleFplcm8gPSB0cnVlLFxuICAgICAgbW9udGhTdGFydEluZGV4WmVybyA9IGZhbHNlLFxuICAgICAgdXNlMjRIb3VyVGltZUZvcm1hdCxcbiAgICAgIGxvY2FsZSA9IG51bGwsXG4gICAgfTogUHJpem1Dcm9uSFJPcHRpb25zID0ge31cbiAgKTogc3RyaW5nIHtcbiAgICAvLyBXZSB0YWtlIGFkdmFudGFnZSBvZiBEZXN0cnVjdHVyaW5nIE9iamVjdCBQYXJhbWV0ZXJzIChhbmQgZGVmYXVsdHMpIGluIFRTL0VTNiBhbmQgbm93IHdlIHdpbGwgcmVhc3NlbWJsZSBiYWNrIHRvXG4gICAgLy8gYW4gT3B0aW9ucyB0eXBlIHNvIHdlIGNhbiBwYXNzIGFyb3VuZCBvcHRpb25zIHdpdGggZWFzZS5cblxuICAgIGNvbnN0IG9wdGlvbnMgPSA8UHJpem1Dcm9uSFJPcHRpb25zPntcbiAgICAgIHRocm93RXhjZXB0aW9uT25QYXJzZUVycm9yOiB0aHJvd0V4Y2VwdGlvbk9uUGFyc2VFcnJvcixcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBkYXlPZldlZWtTdGFydEluZGV4WmVybzogZGF5T2ZXZWVrU3RhcnRJbmRleFplcm8sXG4gICAgICBtb250aFN0YXJ0SW5kZXhaZXJvOiBtb250aFN0YXJ0SW5kZXhaZXJvLFxuICAgICAgdXNlMjRIb3VyVGltZUZvcm1hdDogdXNlMjRIb3VyVGltZUZvcm1hdCxcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIH07XG5cbiAgICBjb25zdCBkZXNjcmlwdGVyID0gbmV3IFByaXptQ3JvbkhSRXhwcmVzc2lvbkRlc2NyaXB0b3IoZXhwcmVzc2lvbiwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGRlc2NyaXB0ZXIuZ2V0RnVsbERlc2NyaXB0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUobG9jYWxlc0xvYWRlcjogUHJpem1Dcm9uSFJMb2NhbGVMb2FkZXIsIGRlZmF1bHRMb2NhbGUgPSAnZW4nKSB7XG4gICAgUHJpem1Dcm9uSFJFeHByZXNzaW9uRGVzY3JpcHRvci5zcGVjaWFsQ2hhcmFjdGVycyA9IFsnLycsICctJywgJywnLCAnKiddO1xuICAgIFByaXptQ3JvbkhSRXhwcmVzc2lvbkRlc2NyaXB0b3IuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG5cbiAgICAvLyBMb2FkIGxvY2FsZXNcbiAgICBsb2NhbGVzTG9hZGVyLmxvYWQoUHJpem1Dcm9uSFJFeHByZXNzaW9uRGVzY3JpcHRvci5sb2NhbGVzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IHN0cmluZywgb3B0aW9uczogUHJpem1Dcm9uSFJPcHRpb25zKSB7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZXhwcmVzc2lvblBhcnRzID0gbmV3IEFycmF5KDUpO1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMubG9jYWxlICYmIFByaXptQ3JvbkhSRXhwcmVzc2lvbkRlc2NyaXB0b3IuZGVmYXVsdExvY2FsZSkge1xuICAgICAgdGhpcy5vcHRpb25zLmxvY2FsZSA9IFByaXptQ3JvbkhSRXhwcmVzc2lvbkRlc2NyaXB0b3IuZGVmYXVsdExvY2FsZTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgIGlmICghUHJpem1Dcm9uSFJFeHByZXNzaW9uRGVzY3JpcHRvci5sb2NhbGVzW3RoaXMub3B0aW9ucyEubG9jYWxlIV0pIHtcbiAgICAgIGNvbnN0IGZhbGxCYWNrTG9jYWxlID0gT2JqZWN0LmtleXMoUHJpem1Dcm9uSFJFeHByZXNzaW9uRGVzY3JpcHRvci5sb2NhbGVzKVswXTtcbiAgICAgIC8vIGZhbGwgYmFjayB0byBFbmdsaXNoXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBMb2NhbGUgJyR7dGhpcy5vcHRpb25zLmxvY2FsZX0nIGNvdWxkIG5vdCBiZSBmb3VuZDsgZmFsbGluZyBiYWNrIHRvICcke2ZhbGxCYWNrTG9jYWxlfScuYFxuICAgICAgKTtcblxuICAgICAgdGhpcy5vcHRpb25zLmxvY2FsZSA9IGZhbGxCYWNrTG9jYWxlO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgdGhpcy5pMThuID0gUHJpem1Dcm9uSFJFeHByZXNzaW9uRGVzY3JpcHRvci5sb2NhbGVzW3RoaXMub3B0aW9ucyEubG9jYWxlIV07XG5cbiAgICBpZiAob3B0aW9ucy51c2UyNEhvdXJUaW1lRm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGlmIHVzZTI0SG91clRpbWVGb3JtYXQgbm90IHNwZWNpZmllZCwgc2V0IGJhc2VkIG9uIGxvY2FsZSBkZWZhdWx0XG4gICAgICBvcHRpb25zLnVzZTI0SG91clRpbWVGb3JtYXQgPSB0aGlzLmkxOG4udXNlMjRIb3VyVGltZUZvcm1hdEJ5RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRGdWxsRGVzY3JpcHRpb24oKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gJyc7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IFByaXptQ3JvbkhSUGFyc2VyKFxuICAgICAgICB0aGlzLmV4cHJlc3Npb24sXG4gICAgICAgIHRoaXMub3B0aW9ucy5kYXlPZldlZWtTdGFydEluZGV4WmVybyxcbiAgICAgICAgdGhpcy5vcHRpb25zLm1vbnRoU3RhcnRJbmRleFplcm9cbiAgICAgICk7XG4gICAgICB0aGlzLmV4cHJlc3Npb25QYXJ0cyA9IHBhcnNlci5wYXJzZSgpO1xuICAgICAgY29uc3QgdGltZVNlZ21lbnQgPSB0aGlzLmdldFRpbWVPZkRheURlc2NyaXB0aW9uKCk7XG4gICAgICBjb25zdCBkYXlPZk1vbnRoRGVzYyA9IHRoaXMuZ2V0RGF5T2ZNb250aERlc2NyaXB0aW9uKCk7XG4gICAgICBjb25zdCBtb250aERlc2MgPSB0aGlzLmdldE1vbnRoRGVzY3JpcHRpb24oKTtcbiAgICAgIGNvbnN0IGRheU9mV2Vla0Rlc2MgPSB0aGlzLmdldERheU9mV2Vla0Rlc2NyaXB0aW9uKCk7XG5cbiAgICAgIGNvbnN0IHllYXJEZXNjID0gdGhpcy5nZXRZZWFyRGVzY3JpcHRpb24oKTtcblxuICAgICAgZGVzY3JpcHRpb24gKz0gdGltZVNlZ21lbnQgKyBkYXlPZk1vbnRoRGVzYyArIGRheU9mV2Vla0Rlc2MgKyBtb250aERlc2MgKyB5ZWFyRGVzYztcbiAgICAgIGRlc2NyaXB0aW9uID0gdGhpcy50cmFuc2Zvcm1WZXJib3NpdHkoZGVzY3JpcHRpb24sICEhdGhpcy5vcHRpb25zLnZlcmJvc2UpO1xuXG4gICAgICAvLyB1cHBlcmNhc2UgZmlyc3QgY2hhcmFjdGVyXG4gICAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmNoYXJBdCgwKS50b0xvY2FsZVVwcGVyQ2FzZSgpICsgZGVzY3JpcHRpb24uc3Vic3RyKDEpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy50aHJvd0V4Y2VwdGlvbk9uUGFyc2VFcnJvcikge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IHRoaXMuaTE4bi5hbkVycm9yT2NjdXJlZFdoZW5HZW5lcmF0aW5nVGhlRXhwcmVzc2lvbkQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGAke2V4fWA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRUaW1lT2ZEYXlEZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBzZWNvbmRzRXhwcmVzc2lvbjogc3RyaW5nID0gdGhpcy5leHByZXNzaW9uUGFydHNbMF07XG4gICAgY29uc3QgbWludXRlRXhwcmVzc2lvbjogc3RyaW5nID0gdGhpcy5leHByZXNzaW9uUGFydHNbMV07XG4gICAgY29uc3QgaG91ckV4cHJlc3Npb246IHN0cmluZyA9IHRoaXMuZXhwcmVzc2lvblBhcnRzWzJdO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gJyc7XG5cbiAgICAvLyBoYW5kbGUgc3BlY2lhbCBjYXNlcyBmaXJzdFxuICAgIGlmIChcbiAgICAgICFQcml6bUNyb25IUlN0cmluZ1V0aWxpdGllcy5jb250YWluc0FueShcbiAgICAgICAgbWludXRlRXhwcmVzc2lvbixcbiAgICAgICAgUHJpem1Dcm9uSFJFeHByZXNzaW9uRGVzY3JpcHRvci5zcGVjaWFsQ2hhcmFjdGVyc1xuICAgICAgKSAmJlxuICAgICAgIVByaXptQ3JvbkhSU3RyaW5nVXRpbGl0aWVzLmNvbnRhaW5zQW55KFxuICAgICAgICBob3VyRXhwcmVzc2lvbixcbiAgICAgICAgUHJpem1Dcm9uSFJFeHByZXNzaW9uRGVzY3JpcHRvci5zcGVjaWFsQ2hhcmFjdGVyc1xuICAgICAgKSAmJlxuICAgICAgIVByaXptQ3JvbkhSU3RyaW5nVXRpbGl0aWVzLmNvbnRhaW5zQW55KFxuICAgICAgICBzZWNvbmRzRXhwcmVzc2lvbixcbiAgICAgICAgUHJpem1Dcm9uSFJFeHByZXNzaW9uRGVzY3JpcHRvci5zcGVjaWFsQ2hhcmFjdGVyc1xuICAgICAgKVxuICAgICkge1xuICAgICAgLy8gc3BlY2lmaWMgdGltZSBvZiBkYXkgKGkuZS4gMTAgMTQpXG4gICAgICBkZXNjcmlwdGlvbiArPVxuICAgICAgICB0aGlzLmkxOG4uYXRTcGFjZSgpICsgdGhpcy5mb3JtYXRUaW1lKGhvdXJFeHByZXNzaW9uLCBtaW51dGVFeHByZXNzaW9uLCBzZWNvbmRzRXhwcmVzc2lvbik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICFzZWNvbmRzRXhwcmVzc2lvbiAmJlxuICAgICAgbWludXRlRXhwcmVzc2lvbi5pbmRleE9mKCctJykgPiAtMSAmJlxuICAgICAgIShtaW51dGVFeHByZXNzaW9uLmluZGV4T2YoJywnKSA+IC0xKSAmJlxuICAgICAgIShtaW51dGVFeHByZXNzaW9uLmluZGV4T2YoJy8nKSA+IC0xKSAmJlxuICAgICAgIVByaXptQ3JvbkhSU3RyaW5nVXRpbGl0aWVzLmNvbnRhaW5zQW55KFxuICAgICAgICBob3VyRXhwcmVzc2lvbixcbiAgICAgICAgUHJpem1Dcm9uSFJFeHByZXNzaW9uRGVzY3JpcHRvci5zcGVjaWFsQ2hhcmFjdGVyc1xuICAgICAgKVxuICAgICkge1xuICAgICAgLy8gbWludXRlIHJhbmdlIGluIHNpbmdsZSBob3VyIChpLmUuIDAtMTAgMTEpXG4gICAgICBjb25zdCBtaW51dGVQYXJ0czogc3RyaW5nW10gPSBtaW51dGVFeHByZXNzaW9uLnNwbGl0KCctJyk7XG4gICAgICBkZXNjcmlwdGlvbiArPSBQcml6bUNyb25IUlN0cmluZ1V0aWxpdGllcy5mb3JtYXQoXG4gICAgICAgIHRoaXMuaTE4bi5ldmVyeU1pbnV0ZUJldHdlZW5YMEFuZFgxKCksXG4gICAgICAgIHRoaXMuZm9ybWF0VGltZShob3VyRXhwcmVzc2lvbiwgbWludXRlUGFydHNbMF0sICcnKSxcbiAgICAgICAgdGhpcy5mb3JtYXRUaW1lKGhvdXJFeHByZXNzaW9uLCBtaW51dGVQYXJ0c1sxXSwgJycpXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhc2Vjb25kc0V4cHJlc3Npb24gJiZcbiAgICAgIGhvdXJFeHByZXNzaW9uLmluZGV4T2YoJywnKSA+IC0xICYmXG4gICAgICBob3VyRXhwcmVzc2lvbi5pbmRleE9mKCctJykgPT0gLTEgJiZcbiAgICAgIGhvdXJFeHByZXNzaW9uLmluZGV4T2YoJy8nKSA9PSAtMSAmJlxuICAgICAgIVByaXptQ3JvbkhSU3RyaW5nVXRpbGl0aWVzLmNvbnRhaW5zQW55KFxuICAgICAgICBtaW51dGVFeHByZXNzaW9uLFxuICAgICAgICBQcml6bUNyb25IUkV4cHJlc3Npb25EZXNjcmlwdG9yLnNwZWNpYWxDaGFyYWN0ZXJzXG4gICAgICApXG4gICAgKSB7XG4gICAgICAvLyBob3VycyBsaXN0IHdpdGggc2luZ2xlIG1pbnV0ZSAoaS5lLiAzMCA2LDE0LDE2KVxuICAgICAgY29uc3QgaG91clBhcnRzOiBzdHJpbmdbXSA9IGhvdXJFeHByZXNzaW9uLnNwbGl0KCcsJyk7XG4gICAgICBkZXNjcmlwdGlvbiArPSB0aGlzLmkxOG4uYXQoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3VyUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGVzY3JpcHRpb24gKz0gJyAnO1xuICAgICAgICBkZXNjcmlwdGlvbiArPSB0aGlzLmZvcm1hdFRpbWUoaG91clBhcnRzW2ldLCBtaW51dGVFeHByZXNzaW9uLCAnJyk7XG5cbiAgICAgICAgaWYgKGkgPCBob3VyUGFydHMubGVuZ3RoIC0gMikge1xuICAgICAgICAgIGRlc2NyaXB0aW9uICs9ICcsJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID09IGhvdXJQYXJ0cy5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gKz0gdGhpcy5pMThuLnNwYWNlQW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVmYXVsdCB0aW1lIGRlc2NyaXB0aW9uXG4gICAgICBjb25zdCBzZWNvbmRzRGVzY3JpcHRpb24gPSB0aGlzLmdldFNlY29uZHNEZXNjcmlwdGlvbigpO1xuICAgICAgY29uc3QgbWludXRlc0Rlc2NyaXB0aW9uID0gdGhpcy5nZXRNaW51dGVzRGVzY3JpcHRpb24oKTtcbiAgICAgIGNvbnN0IGhvdXJzRGVzY3JpcHRpb24gPSB0aGlzLmdldEhvdXJzRGVzY3JpcHRpb24oKTtcblxuICAgICAgZGVzY3JpcHRpb24gKz0gc2Vjb25kc0Rlc2NyaXB0aW9uO1xuXG4gICAgICBpZiAoZGVzY3JpcHRpb24gJiYgbWludXRlc0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uICs9ICcsICc7XG4gICAgICB9XG5cbiAgICAgIGRlc2NyaXB0aW9uICs9IG1pbnV0ZXNEZXNjcmlwdGlvbjtcblxuICAgICAgaWYgKG1pbnV0ZXNEZXNjcmlwdGlvbiA9PT0gaG91cnNEZXNjcmlwdGlvbikge1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChkZXNjcmlwdGlvbiAmJiBob3Vyc0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uICs9ICcsICc7XG4gICAgICB9XG5cbiAgICAgIGRlc2NyaXB0aW9uICs9IGhvdXJzRGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlY29uZHNEZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbCA9IHRoaXMuZ2V0U2VnbWVudERlc2NyaXB0aW9uKFxuICAgICAgdGhpcy5leHByZXNzaW9uUGFydHNbMF0sXG4gICAgICB0aGlzLmkxOG4uZXZlcnlTZWNvbmQoKSxcbiAgICAgIHMgPT4ge1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0sXG4gICAgICBzID0+IHtcbiAgICAgICAgcmV0dXJuIFByaXptQ3JvbkhSU3RyaW5nVXRpbGl0aWVzLmZvcm1hdCh0aGlzLmkxOG4uZXZlcnlYMFNlY29uZHMocyksIHMpO1xuICAgICAgfSxcbiAgICAgIHMgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pMThuLnNlY29uZHNYMFRocm91Z2hYMVBhc3RUaGVNaW51dGUoKTtcbiAgICAgIH0sXG4gICAgICBzID0+IHtcbiAgICAgICAgcmV0dXJuIHMgPT0gJzAnXG4gICAgICAgICAgPyAnJ1xuICAgICAgICAgIDogcGFyc2VJbnQocykgPCAyMFxuICAgICAgICAgID8gdGhpcy5pMThuLmF0WDBTZWNvbmRzUGFzdFRoZU1pbnV0ZShzKVxuICAgICAgICAgIDogdGhpcy5pMThuLmF0WDBTZWNvbmRzUGFzdFRoZU1pbnV0ZUd0MjAoKSB8fCB0aGlzLmkxOG4uYXRYMFNlY29uZHNQYXN0VGhlTWludXRlKHMpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0TWludXRlc0Rlc2NyaXB0aW9uKCkge1xuICAgIGNvbnN0IHNlY29uZHNFeHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uUGFydHNbMF07XG4gICAgY29uc3QgaG91ckV4cHJlc3Npb24gPSB0aGlzLmV4cHJlc3Npb25QYXJ0c1syXTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbCA9IHRoaXMuZ2V0U2VnbWVudERlc2NyaXB0aW9uKFxuICAgICAgdGhpcy5leHByZXNzaW9uUGFydHNbMV0sXG4gICAgICB0aGlzLmkxOG4uZXZlcnlNaW51dGUoKSxcbiAgICAgIHMgPT4ge1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0sXG4gICAgICBzID0+IHtcbiAgICAgICAgcmV0dXJuIFByaXptQ3JvbkhSU3RyaW5nVXRpbGl0aWVzLmZvcm1hdCh0aGlzLmkxOG4uZXZlcnlYME1pbnV0ZXMocyksIHMpO1xuICAgICAgfSxcbiAgICAgIHMgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pMThuLm1pbnV0ZXNYMFRocm91Z2hYMVBhc3RUaGVIb3VyKCk7XG4gICAgICB9LFxuICAgICAgcyA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHMgPT0gJzAnICYmIGhvdXJFeHByZXNzaW9uLmluZGV4T2YoJy8nKSA9PSAtMSAmJiBzZWNvbmRzRXhwcmVzc2lvbiA9PSAnJ1xuICAgICAgICAgICAgPyB0aGlzLmkxOG4uZXZlcnlIb3VyKClcbiAgICAgICAgICAgIDogcGFyc2VJbnQocykgPCAyMFxuICAgICAgICAgICAgPyB0aGlzLmkxOG4uYXRYME1pbnV0ZXNQYXN0VGhlSG91cihzKVxuICAgICAgICAgICAgOiB0aGlzLmkxOG4uYXRYME1pbnV0ZXNQYXN0VGhlSG91ckd0MjAoKSB8fCB0aGlzLmkxOG4uYXRYME1pbnV0ZXNQYXN0VGhlSG91cihzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmkxOG4uYXRYME1pbnV0ZXNQYXN0VGhlSG91cihzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0SG91cnNEZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uUGFydHNbMl07XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXRTZWdtZW50RGVzY3JpcHRpb24oXG4gICAgICBleHByZXNzaW9uLFxuICAgICAgdGhpcy5pMThuLmV2ZXJ5SG91cigpLFxuICAgICAgcyA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFRpbWUocywgJzAnLCAnJyk7XG4gICAgICB9LFxuICAgICAgcyA9PiB7XG4gICAgICAgIHJldHVybiBQcml6bUNyb25IUlN0cmluZ1V0aWxpdGllcy5mb3JtYXQodGhpcy5pMThuLmV2ZXJ5WDBIb3VycyhzKSwgcyk7XG4gICAgICB9LFxuICAgICAgcyA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmkxOG4uYmV0d2VlblgwQW5kWDEoKTtcbiAgICAgIH0sXG4gICAgICBzID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaTE4bi5hdFgwKCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIElmIHRoaXMgaXMgYW4gaG91ciByYW5nZSBhbmQgbWludXRlIHNlZ21lbnQgaXMgbm90IFwib24gdGhlIGhvdXJcIiAoMCksIHdlJ2xsIGNoYW5nZSB0aGUgc2Vjb25kIGhvdXIgcGFydCBmcm9tIDowMCB0byA6NTlcbiAgICBpZiAoZGVzY3JpcHRpb24gJiYgZXhwcmVzc2lvbi5pbmNsdWRlcygnLScpICYmIHRoaXMuZXhwcmVzc2lvblBhcnRzWzFdICE9ICcwJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgYXRUaGVIb3VyTWF0Y2hlcyA9IEFycmF5LmZyb20oZGVzY3JpcHRpb24ubWF0Y2hBbGwoLzowMC9nKSk7XG4gICAgICBpZiAoYXRUaGVIb3VyTWF0Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBsYXN0QXRUaGVIb3VyTWF0Y2hJbmRleCA9IGF0VGhlSG91ck1hdGNoZXNbYXRUaGVIb3VyTWF0Y2hlcy5sZW5ndGggLSAxXS5pbmRleDtcbiAgICAgICAgZGVzY3JpcHRpb24gPVxuICAgICAgICAgIGRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCBsYXN0QXRUaGVIb3VyTWF0Y2hJbmRleCkgK1xuICAgICAgICAgICc6NTknICtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgIGRlc2NyaXB0aW9uLnN1YnN0cmluZyhsYXN0QXRUaGVIb3VyTWF0Y2hJbmRleCEgKyAzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RGF5T2ZXZWVrRGVzY3JpcHRpb24oKSB7XG4gICAgY29uc3QgZGF5c09mV2Vla05hbWVzID0gdGhpcy5pMThuLmRheXNPZlRoZVdlZWsoKTtcbiAgICBsZXQgZGVzY3JpcHRpb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIGlmICh0aGlzLmV4cHJlc3Npb25QYXJ0c1s1XSA9PSAnKicpIHtcbiAgICAgIC8vIERPVyBpcyBzcGVjaWZpZWQgYXMgKiBzbyB3ZSB3aWxsIG5vdCBnZW5lcmF0ZSBhIGRlc2NyaXB0aW9uIGFuZCBkZWZlciB0byBET00gcGFydC5cbiAgICAgIC8vIE90aGVyd2lzZSwgd2UgY291bGQgZ2V0IGEgY29udHJhZGljdGlvbiBsaWtlIFwib24gZGF5IDEgb2YgdGhlIG1vbnRoLCBldmVyeSBkYXlcIlxuICAgICAgLy8gb3IgYSBkdXBlIGRlc2NyaXB0aW9uIGxpa2UgXCJldmVyeSBkYXksIGV2ZXJ5IGRheVwiLlxuICAgICAgZGVzY3JpcHRpb24gPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzY3JpcHRpb24gPSB0aGlzLmdldFNlZ21lbnREZXNjcmlwdGlvbihcbiAgICAgICAgdGhpcy5leHByZXNzaW9uUGFydHNbNV0sXG4gICAgICAgIHRoaXMuaTE4bi5jb21tYUV2ZXJ5RGF5KCksXG4gICAgICAgIChzLCBmb3JtKSA9PiB7XG4gICAgICAgICAgbGV0IGV4cDogc3RyaW5nID0gcztcbiAgICAgICAgICBpZiAocy5pbmRleE9mKCcjJykgPiAtMSkge1xuICAgICAgICAgICAgZXhwID0gcy5zdWJzdHJpbmcoMCwgcy5pbmRleE9mKCcjJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocy5pbmRleE9mKCdMJykgPiAtMSkge1xuICAgICAgICAgICAgZXhwID0gZXhwLnJlcGxhY2UoJ0wnLCAnJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g0L/QvtGC0L7QvNGDINC90LDRh9C40L3QsNGO0YLRgdGPINC00L3QuCDRgSDRgdGD0LHQsdC+0YLRiyDQv9C+0LQg0L3QvtC80LXRgNC+0LwgMVxuICAgICAgICAgIGNvbnN0IGluY3JlbWVudE51bWJlciA9ICtleHAgLSAxO1xuICAgICAgICAgIGNvbnN0IG5ld0V4cCA9IGluY3JlbWVudE51bWJlciA9PT0gLTEgPyA2IDogaW5jcmVtZW50TnVtYmVyO1xuXG4gICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gdGhpcy5pMThuLmRheXNPZlRoZVdlZWtJbkNhc2VcbiAgICAgICAgICAgID8gdGhpcy5pMThuLmRheXNPZlRoZVdlZWtJbkNhc2UoZm9ybSlbbmV3RXhwXVxuICAgICAgICAgICAgOiBkYXlzT2ZXZWVrTmFtZXNbbmV3RXhwXTtcblxuICAgICAgICAgIGlmIChzLmluZGV4T2YoJyMnKSA+IC0xKSB7XG4gICAgICAgICAgICBsZXQgZGF5T2ZXZWVrT2ZNb250aERlc2NyaXB0aW9uOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGRheU9mV2Vla09mTW9udGhOdW1iZXI6IHN0cmluZyA9IHMuc3Vic3RyaW5nKHMuaW5kZXhPZignIycpICsgMSk7XG4gICAgICAgICAgICBjb25zdCBkYXlPZldlZWtOdW1iZXIgPSBzLnN1YnN0cmluZygwLCBzLmluZGV4T2YoJyMnKSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGRheU9mV2Vla09mTW9udGhOdW1iZXIpIHtcbiAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgZGF5T2ZXZWVrT2ZNb250aERlc2NyaXB0aW9uID0gdGhpcy5pMThuLmZpcnN0KGRheU9mV2Vla051bWJlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgIGRheU9mV2Vla09mTW9udGhEZXNjcmlwdGlvbiA9IHRoaXMuaTE4bi5zZWNvbmQoZGF5T2ZXZWVrTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgZGF5T2ZXZWVrT2ZNb250aERlc2NyaXB0aW9uID0gdGhpcy5pMThuLnRoaXJkKGRheU9mV2Vla051bWJlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgICAgIGRheU9mV2Vla09mTW9udGhEZXNjcmlwdGlvbiA9IHRoaXMuaTE4bi5mb3VydGgoZGF5T2ZXZWVrTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICAgICAgZGF5T2ZXZWVrT2ZNb250aERlc2NyaXB0aW9uID0gdGhpcy5pMThuLmZpZnRoKGRheU9mV2Vla051bWJlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGRheU9mV2Vla09mTW9udGhEZXNjcmlwdGlvbiArICcgJyArIGRlc2NyaXB0aW9uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgcyA9PiB7XG4gICAgICAgICAgaWYgKHBhcnNlSW50KHMpID09IDEpIHtcbiAgICAgICAgICAgIC8vIHJhdGhlciB0aGFuIFwiZXZlcnkgMSBkYXlzXCIganVzdCByZXR1cm4gZW1wdHkgc3RyaW5nXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcml6bUNyb25IUlN0cmluZ1V0aWxpdGllcy5mb3JtYXQodGhpcy5pMThuLmNvbW1hRXZlcnlYMERheXNPZlRoZVdlZWsocyksIHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcyA9PiB7XG4gICAgICAgICAgLy8gSWYgYm90aCBET00gYW5kIERPVyBhcmUgc3BlY2lmaWVkLCB0aGUgY3JvbiB3aWxsIGV4ZWN1dGUgYXQgZWl0aGVyIHRpbWUuXG4gICAgICAgICAgY29uc3QgYmVnaW5Gcm9tID0gcy5zdWJzdHJpbmcoMCwgcy5pbmRleE9mKCctJykpO1xuXG4gICAgICAgICAgY29uc3QgZG9tU3BlY2lmaWVkID0gdGhpcy5leHByZXNzaW9uUGFydHNbM10gIT0gJyonO1xuICAgICAgICAgIHJldHVybiBkb21TcGVjaWZpZWRcbiAgICAgICAgICAgID8gdGhpcy5pMThuLmNvbW1hQW5kWDBUaHJvdWdoWDEoYmVnaW5Gcm9tKVxuICAgICAgICAgICAgOiB0aGlzLmkxOG4uY29tbWFYMFRocm91Z2hYMShiZWdpbkZyb20pO1xuICAgICAgICB9LFxuICAgICAgICBzID0+IHtcbiAgICAgICAgICBsZXQgZm9ybWF0OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgICAgICBpZiAocy5pbmRleE9mKCcjJykgPiAtMSkge1xuICAgICAgICAgICAgY29uc3QgZGF5T2ZXZWVrT2ZNb250aE51bWJlcjogc3RyaW5nID0gcy5zdWJzdHJpbmcocy5pbmRleE9mKCcjJykgKyAxKTtcbiAgICAgICAgICAgIGZvcm1hdCA9IHRoaXMuaTE4bi5jb21tYU9uVGhlKGRheU9mV2Vla09mTW9udGhOdW1iZXIpLnRyaW0oKSArIHRoaXMuaTE4bi5zcGFjZVgwT2ZUaGVNb250aCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocy5pbmRleE9mKCdMJykgPiAtMSkge1xuICAgICAgICAgICAgZm9ybWF0ID0gdGhpcy5pMThuLmNvbW1hT25UaGVMYXN0WDBPZlRoZU1vbnRoKHMucmVwbGFjZSgnTCcsICcnKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIGJvdGggRE9NIGFuZCBET1cgYXJlIHNwZWNpZmllZCwgdGhlIGNyb24gd2lsbCBleGVjdXRlIGF0IGVpdGhlciB0aW1lLlxuICAgICAgICAgICAgY29uc3QgZG9tU3BlY2lmaWVkID0gdGhpcy5leHByZXNzaW9uUGFydHNbM10gIT0gJyonO1xuICAgICAgICAgICAgZm9ybWF0ID0gZG9tU3BlY2lmaWVkID8gdGhpcy5pMThuLmNvbW1hQW5kT25YMCgpIDogdGhpcy5pMThuLmNvbW1hT25seU9uWDAocyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaTE4bi5jbGVhciAmJiBkZXNjcmlwdGlvbikgZGVzY3JpcHRpb24gPSB0aGlzLmkxOG4uY2xlYXIoZGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldE1vbnRoRGVzY3JpcHRpb24oKSB7XG4gICAgY29uc3QgbW9udGhOYW1lcyA9IHRoaXMuaTE4bi5tb250aHNPZlRoZVllYXIoKTtcblxuICAgIHJldHVybiB0aGlzLmdldFNlZ21lbnREZXNjcmlwdGlvbihcbiAgICAgIHRoaXMuZXhwcmVzc2lvblBhcnRzWzRdLFxuICAgICAgJycsXG4gICAgICAocywgZm9ybSkgPT4ge1xuICAgICAgICByZXR1cm4gZm9ybSAmJiB0aGlzLmkxOG4ubW9udGhzT2ZUaGVZZWFySW5DYXNlXG4gICAgICAgICAgPyB0aGlzLmkxOG4ubW9udGhzT2ZUaGVZZWFySW5DYXNlKGZvcm0pW3BhcnNlSW50KHMpIC0gMV1cbiAgICAgICAgICA6IG1vbnRoTmFtZXNbcGFyc2VJbnQocykgLSAxXTtcbiAgICAgIH0sXG4gICAgICBzID0+IHtcbiAgICAgICAgLy9cbiAgICAgICAgaWYgKHBhcnNlSW50KHMpID09IDEpIHtcbiAgICAgICAgICAvLyByYXRoZXIgdGhhbiBcImV2ZXJ5IDEgbW9udGhzXCIganVzdCByZXR1cm4gZW1wdHkgc3RyaW5nXG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcml6bUNyb25IUlN0cmluZ1V0aWxpdGllcy5mb3JtYXQodGhpcy5pMThuLmNvbW1hRXZlcnlYME1vbnRocyhzKSwgcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaTE4bi5jb21tYU1vbnRoWDBUaHJvdWdoTW9udGhYMSgpIHx8IHRoaXMuaTE4bi5jb21tYVgwVGhyb3VnaFgxKCk7XG4gICAgICB9LFxuICAgICAgcyA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmkxOG4uY29tbWFPbmx5SW5Nb250aFgwID8gdGhpcy5pMThuLmNvbW1hT25seUluTW9udGhYMCgpIDogdGhpcy5pMThuLmNvbW1hT25seUluWDAoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldERheU9mTW9udGhEZXNjcmlwdGlvbigpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBsZXQgZGVzY3JpcHRpb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IGV4cHJlc3Npb246IHN0cmluZyA9IHRoaXMuZXhwcmVzc2lvblBhcnRzWzNdO1xuXG4gICAgc3dpdGNoIChleHByZXNzaW9uKSB7XG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgZGVzY3JpcHRpb24gPSB0aGlzLmkxOG4uY29tbWFPblRoZUxhc3REYXlPZlRoZU1vbnRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnV0wnOlxuICAgICAgY2FzZSAnTFcnOlxuICAgICAgICBkZXNjcmlwdGlvbiA9IHRoaXMuaTE4bi5jb21tYU9uVGhlTGFzdFdlZWtkYXlPZlRoZU1vbnRoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogLy8gaS5lLiAzVyBvciBXMlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY2FzZS1kZWNsYXJhdGlvbnNcbiAgICAgICAgY29uc3Qgd2Vla0RheU51bWJlck1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKC8oXFxkezEsMn1XKXwoV1xcZHsxLDJ9KS8pO1xuICAgICAgICBpZiAod2Vla0RheU51bWJlck1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCBkYXlOdW1iZXI6IG51bWJlciA9IHBhcnNlSW50KHdlZWtEYXlOdW1iZXJNYXRjaGVzWzBdLnJlcGxhY2UoJ1cnLCAnJykpO1xuICAgICAgICAgIGNvbnN0IGRheVN0cmluZzogc3RyaW5nID1cbiAgICAgICAgICAgIGRheU51bWJlciA9PSAxXG4gICAgICAgICAgICAgID8gdGhpcy5pMThuLmZpcnN0V2Vla2RheSgpXG4gICAgICAgICAgICAgIDogUHJpem1Dcm9uSFJTdHJpbmdVdGlsaXRpZXMuZm9ybWF0KHRoaXMuaTE4bi53ZWVrZGF5TmVhcmVzdERheVgwKCksIGRheU51bWJlci50b1N0cmluZygpKTtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IFByaXptQ3JvbkhSU3RyaW5nVXRpbGl0aWVzLmZvcm1hdCh0aGlzLmkxOG4uY29tbWFPblRoZVgwT2ZUaGVNb250aCgpLCBkYXlTdHJpbmcpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSGFuZGxlIFwibGFzdCBkYXkgb2Zmc2V0XCIgKGkuZS4gTC01OiAgXCI1IGRheXMgYmVmb3JlIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGhcIilcbiAgICAgICAgICBjb25zdCBsYXN0RGF5T2ZmU2V0TWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2goL0wtKFxcZHsxLDJ9KS8pO1xuICAgICAgICAgIGlmIChsYXN0RGF5T2ZmU2V0TWF0Y2hlcykge1xuICAgICAgICAgICAgY29uc3Qgb2ZmU2V0RGF5cyA9IGxhc3REYXlPZmZTZXRNYXRjaGVzWzFdO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBQcml6bUNyb25IUlN0cmluZ1V0aWxpdGllcy5mb3JtYXQoXG4gICAgICAgICAgICAgIHRoaXMuaTE4bi5jb21tYURheXNCZWZvcmVUaGVMYXN0RGF5T2ZUaGVNb250aChvZmZTZXREYXlzKSxcbiAgICAgICAgICAgICAgb2ZmU2V0RGF5c1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvbiA9PSAnKicgJiYgdGhpcy5leHByZXNzaW9uUGFydHNbNV0gIT0gJyonKSB7XG4gICAgICAgICAgICAvLyAqIGRheU9mTW9udGggYW5kIGRheU9mV2VlayBzcGVjaWZpZWQgc28gdXNlIGRheU9mV2VlayB2ZXJiaWFnZSBpbnN0ZWFkXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gdGhpcy5nZXRTZWdtZW50RGVzY3JpcHRpb24oXG4gICAgICAgICAgICAgIGV4cHJlc3Npb24sXG4gICAgICAgICAgICAgIHRoaXMuaTE4bi5jb21tYUV2ZXJ5RGF5KCksXG4gICAgICAgICAgICAgIHMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzID09ICdMJ1xuICAgICAgICAgICAgICAgICAgPyB0aGlzLmkxOG4ubGFzdERheSgpXG4gICAgICAgICAgICAgICAgICA6IHRoaXMuaTE4bi5kYXlYMFxuICAgICAgICAgICAgICAgICAgPyBQcml6bUNyb25IUlN0cmluZ1V0aWxpdGllcy5mb3JtYXQodGhpcy5pMThuLmRheVgwKCksIHMpXG4gICAgICAgICAgICAgICAgICA6IHM7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzID09ICcxJyA/IHRoaXMuaTE4bi5jb21tYUV2ZXJ5RGF5KCkgOiB0aGlzLmkxOG4uY29tbWFFdmVyeVgwRGF5cyhzKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaTE4bi5jb21tYUJldHdlZW5EYXlYMEFuZFgxT2ZUaGVNb250aChzKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaTE4bi5jb21tYU9uRGF5WDBPZlRoZU1vbnRoKHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRZZWFyRGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VnbWVudERlc2NyaXB0aW9uKFxuICAgICAgdGhpcy5leHByZXNzaW9uUGFydHNbNl0sXG4gICAgICAnJyxcbiAgICAgIHMgPT4ge1xuICAgICAgICByZXR1cm4gL15cXGQrJC8udGVzdChzKSA/IG5ldyBEYXRlKHBhcnNlSW50KHMpLCAxKS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkgOiBzO1xuICAgICAgfSxcbiAgICAgIHMgPT4ge1xuICAgICAgICByZXR1cm4gUHJpem1Dcm9uSFJTdHJpbmdVdGlsaXRpZXMuZm9ybWF0KHRoaXMuaTE4bi5jb21tYUV2ZXJ5WDBZZWFycyhzKSwgcyk7XG4gICAgICB9LFxuICAgICAgcyA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmkxOG4uY29tbWFZZWFyWDBUaHJvdWdoWWVhclgxKCkgfHwgdGhpcy5pMThuLmNvbW1hWDBUaHJvdWdoWDEoKTtcbiAgICAgIH0sXG4gICAgICBzID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaTE4bi5jb21tYU9ubHlJblllYXJYMCA/IHRoaXMuaTE4bi5jb21tYU9ubHlJblllYXJYMCgpIDogdGhpcy5pMThuLmNvbW1hT25seUluWDAoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlZ21lbnREZXNjcmlwdGlvbihcbiAgICBleHByZXNzaW9uOiBzdHJpbmcsXG4gICAgYWxsRGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBnZXRTaW5nbGVJdGVtRGVzY3JpcHRpb246ICh0OiBzdHJpbmcsIGZvcm0/OiBudW1iZXIpID0+IHN0cmluZyxcbiAgICBnZXRJbmNyZW1lbnREZXNjcmlwdGlvbkZvcm1hdDogKHQ6IHN0cmluZykgPT4gc3RyaW5nLFxuICAgIGdldFJhbmdlRGVzY3JpcHRpb25Gb3JtYXQ6ICh0OiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBnZXREZXNjcmlwdGlvbkZvcm1hdDogKHQ6IHN0cmluZykgPT4gc3RyaW5nXG4gICk6IHN0cmluZyB8IG51bGwge1xuICAgIGxldCBkZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3QgZG9lc0V4cHJlc3Npb25Db250YWluSW5jcmVtZW50ID0gZXhwcmVzc2lvbi5pbmRleE9mKCcvJykgPiAtMTtcbiAgICBjb25zdCBkb2VzRXhwcmVzc2lvbkNvbnRhaW5SYW5nZSA9IGV4cHJlc3Npb24uaW5kZXhPZignLScpID4gLTE7XG4gICAgY29uc3QgZG9lc0V4cHJlc3Npb25Db250YWluTXVsdGlwbGVWYWx1ZXMgPSBleHByZXNzaW9uLmluZGV4T2YoJywnKSA+IC0xO1xuXG4gICAgaWYgKCFleHByZXNzaW9uKSB7XG4gICAgICAvLyBFbXB0eVxuICAgICAgZGVzY3JpcHRpb24gPSAnJztcbiAgICB9IGVsc2UgaWYgKGV4cHJlc3Npb24gPT09ICcqJykge1xuICAgICAgLy8gKiAoQWxsKVxuICAgICAgZGVzY3JpcHRpb24gPSBhbGxEZXNjcmlwdGlvbjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIWRvZXNFeHByZXNzaW9uQ29udGFpbkluY3JlbWVudCAmJlxuICAgICAgIWRvZXNFeHByZXNzaW9uQ29udGFpblJhbmdlICYmXG4gICAgICAhZG9lc0V4cHJlc3Npb25Db250YWluTXVsdGlwbGVWYWx1ZXNcbiAgICApIHtcbiAgICAgIC8vIFNpbXBsZVxuICAgICAgZGVzY3JpcHRpb24gPSBQcml6bUNyb25IUlN0cmluZ1V0aWxpdGllcy5mb3JtYXQoXG4gICAgICAgIGdldERlc2NyaXB0aW9uRm9ybWF0KGV4cHJlc3Npb24pLFxuICAgICAgICBnZXRTaW5nbGVJdGVtRGVzY3JpcHRpb24oZXhwcmVzc2lvbilcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChkb2VzRXhwcmVzc2lvbkNvbnRhaW5NdWx0aXBsZVZhbHVlcykge1xuICAgICAgLy8gTXVsdGlwbGUgVmFsdWVzXG5cbiAgICAgIGNvbnN0IHNlZ21lbnRzOiBzdHJpbmdbXSA9IGV4cHJlc3Npb24uc3BsaXQoJywnKTtcbiAgICAgIGxldCBkZXNjcmlwdGlvbkNvbnRlbnQgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPiAwICYmIHNlZ21lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbkNvbnRlbnQgKz0gJywnO1xuXG4gICAgICAgICAgaWYgKGkgPCBzZWdtZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkNvbnRlbnQgKz0gJyAnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID4gMCAmJiBzZWdtZW50cy5sZW5ndGggPiAxICYmIChpID09IHNlZ21lbnRzLmxlbmd0aCAtIDEgfHwgc2VnbWVudHMubGVuZ3RoID09IDIpKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb25Db250ZW50ICs9IGAke3RoaXMuaTE4bi5zcGFjZUFuZCgpfSBgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlZ21lbnRzW2ldLmluZGV4T2YoJy8nKSA+IC0xIHx8IHNlZ21lbnRzW2ldLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICAgICAgLy8gTXVsdGlwbGUgVmFsdWVzIHdpdGggSW5jcmVtZW50IG9yIFJhbmdlXG5cbiAgICAgICAgICBjb25zdCBpc1NlZ21lbnRSYW5nZVdpdGhvdXRJbmNyZW1lbnQgPVxuICAgICAgICAgICAgc2VnbWVudHNbaV0uaW5kZXhPZignLScpID4gLTEgJiYgc2VnbWVudHNbaV0uaW5kZXhPZignLycpID09IC0xO1xuXG4gICAgICAgICAgbGV0IGN1cnJlbnREZXNjcmlwdGlvbkNvbnRlbnQgPSB0aGlzLmdldFNlZ21lbnREZXNjcmlwdGlvbihcbiAgICAgICAgICAgIHNlZ21lbnRzW2ldLFxuICAgICAgICAgICAgYWxsRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBnZXRTaW5nbGVJdGVtRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBnZXRJbmNyZW1lbnREZXNjcmlwdGlvbkZvcm1hdCxcbiAgICAgICAgICAgIGlzU2VnbWVudFJhbmdlV2l0aG91dEluY3JlbWVudCA/IHRoaXMuaTE4bi5jb21tYVgwVGhyb3VnaFgxIDogZ2V0UmFuZ2VEZXNjcmlwdGlvbkZvcm1hdCxcbiAgICAgICAgICAgIGdldERlc2NyaXB0aW9uRm9ybWF0XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChpc1NlZ21lbnRSYW5nZVdpdGhvdXRJbmNyZW1lbnQpIHtcbiAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbkNvbnRlbnQgPSBjdXJyZW50RGVzY3JpcHRpb25Db250ZW50Py5yZXBsYWNlKCcsICcsICcnKSBhcyBhbnk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVzY3JpcHRpb25Db250ZW50ICs9IGN1cnJlbnREZXNjcmlwdGlvbkNvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoIWRvZXNFeHByZXNzaW9uQ29udGFpbkluY3JlbWVudCkge1xuICAgICAgICAgIGRlc2NyaXB0aW9uQ29udGVudCArPSBnZXRTaW5nbGVJdGVtRGVzY3JpcHRpb24oc2VnbWVudHNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlc2NyaXB0aW9uQ29udGVudCArPSB0aGlzLmdldFNlZ21lbnREZXNjcmlwdGlvbihcbiAgICAgICAgICAgIHNlZ21lbnRzW2ldLFxuICAgICAgICAgICAgYWxsRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBnZXRTaW5nbGVJdGVtRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBnZXRJbmNyZW1lbnREZXNjcmlwdGlvbkZvcm1hdCxcbiAgICAgICAgICAgIGdldFJhbmdlRGVzY3JpcHRpb25Gb3JtYXQsXG4gICAgICAgICAgICBnZXREZXNjcmlwdGlvbkZvcm1hdFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFkb2VzRXhwcmVzc2lvbkNvbnRhaW5JbmNyZW1lbnQpIHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBQcml6bUNyb25IUlN0cmluZ1V0aWxpdGllcy5mb3JtYXQoZ2V0RGVzY3JpcHRpb25Gb3JtYXQoZXhwcmVzc2lvbiksIGRlc2NyaXB0aW9uQ29udGVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uQ29udGVudDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRvZXNFeHByZXNzaW9uQ29udGFpbkluY3JlbWVudCkge1xuICAgICAgLy8gSW5jcmVtZW50XG5cbiAgICAgIGNvbnN0IHNlZ21lbnRzOiBzdHJpbmdbXSA9IGV4cHJlc3Npb24uc3BsaXQoJy8nKTtcbiAgICAgIGRlc2NyaXB0aW9uID0gUHJpem1Dcm9uSFJTdHJpbmdVdGlsaXRpZXMuZm9ybWF0KFxuICAgICAgICBnZXRJbmNyZW1lbnREZXNjcmlwdGlvbkZvcm1hdChzZWdtZW50c1sxXSksXG4gICAgICAgIHNlZ21lbnRzWzFdXG4gICAgICApO1xuXG4gICAgICBpZiAoc2VnbWVudHNbMF0uaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAgICAgLy8gUmFuZ2Ugd2l0aCBJbmNyZW1lbnQgKGV4OiAyLTU5LzMgKVxuXG4gICAgICAgIGNvbnN0IHJhbmdlU2VnbWVudERlc2NyaXB0aW9uOiBzdHJpbmcgPSB0aGlzLmdlbmVyYXRlUmFuZ2VTZWdtZW50RGVzY3JpcHRpb24oXG4gICAgICAgICAgc2VnbWVudHNbMF0sXG4gICAgICAgICAgZ2V0UmFuZ2VEZXNjcmlwdGlvbkZvcm1hdCxcbiAgICAgICAgICBnZXRTaW5nbGVJdGVtRGVzY3JpcHRpb25cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAocmFuZ2VTZWdtZW50RGVzY3JpcHRpb24uaW5kZXhPZignLCAnKSAhPSAwKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24gKz0gJywgJztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2NyaXB0aW9uICs9IHJhbmdlU2VnbWVudERlc2NyaXB0aW9uO1xuICAgICAgfSBlbHNlIGlmIChzZWdtZW50c1swXS5pbmRleE9mKCcqJykgPT0gLTEpIHtcbiAgICAgICAgbGV0IHJhbmdlSXRlbURlc2NyaXB0aW9uOiBzdHJpbmcgPSBQcml6bUNyb25IUlN0cmluZ1V0aWxpdGllcy5mb3JtYXQoXG4gICAgICAgICAgZ2V0RGVzY3JpcHRpb25Gb3JtYXQoc2VnbWVudHNbMF0pLFxuICAgICAgICAgIGdldFNpbmdsZUl0ZW1EZXNjcmlwdGlvbihzZWdtZW50c1swXSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyByZW1vdmUgYW55IGxlYWRpbmcgY29tbWFcbiAgICAgICAgcmFuZ2VJdGVtRGVzY3JpcHRpb24gPSByYW5nZUl0ZW1EZXNjcmlwdGlvbi5yZXBsYWNlKCcsICcsICcnKTtcblxuICAgICAgICBkZXNjcmlwdGlvbiArPSBQcml6bUNyb25IUlN0cmluZ1V0aWxpdGllcy5mb3JtYXQodGhpcy5pMThuLmNvbW1hU3RhcnRpbmdYMCgpLCByYW5nZUl0ZW1EZXNjcmlwdGlvbik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkb2VzRXhwcmVzc2lvbkNvbnRhaW5SYW5nZSkge1xuICAgICAgLy8gUmFuZ2VcblxuICAgICAgZGVzY3JpcHRpb24gPSB0aGlzLmdlbmVyYXRlUmFuZ2VTZWdtZW50RGVzY3JpcHRpb24oXG4gICAgICAgIGV4cHJlc3Npb24sXG4gICAgICAgIGdldFJhbmdlRGVzY3JpcHRpb25Gb3JtYXQsXG4gICAgICAgIGdldFNpbmdsZUl0ZW1EZXNjcmlwdGlvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVSYW5nZVNlZ21lbnREZXNjcmlwdGlvbihcbiAgICByYW5nZUV4cHJlc3Npb246IHN0cmluZyxcbiAgICBnZXRSYW5nZURlc2NyaXB0aW9uRm9ybWF0OiAodDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gICAgZ2V0U2luZ2xlSXRlbURlc2NyaXB0aW9uOiAodDogc3RyaW5nLCBmb3JtPzogbnVtYmVyKSA9PiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSAnJztcbiAgICBjb25zdCByYW5nZVNlZ21lbnRzOiBzdHJpbmdbXSA9IHJhbmdlRXhwcmVzc2lvbi5zcGxpdCgnLScpO1xuICAgIGNvbnN0IHJhbmdlU2VnbWVudDFEZXNjcmlwdGlvbjogc3RyaW5nID0gZ2V0U2luZ2xlSXRlbURlc2NyaXB0aW9uKHJhbmdlU2VnbWVudHNbMF0sIDEpO1xuICAgIGNvbnN0IHJhbmdlU2VnbWVudDJEZXNjcmlwdGlvbjogc3RyaW5nID0gZ2V0U2luZ2xlSXRlbURlc2NyaXB0aW9uKHJhbmdlU2VnbWVudHNbMV0sIDIpO1xuICAgIGNvbnN0IHJhbmdlRGVzY3JpcHRpb25Gb3JtYXQgPSBnZXRSYW5nZURlc2NyaXB0aW9uRm9ybWF0KHJhbmdlRXhwcmVzc2lvbik7XG4gICAgZGVzY3JpcHRpb24gKz0gUHJpem1Dcm9uSFJTdHJpbmdVdGlsaXRpZXMuZm9ybWF0KFxuICAgICAgcmFuZ2VEZXNjcmlwdGlvbkZvcm1hdCxcbiAgICAgIHJhbmdlU2VnbWVudDFEZXNjcmlwdGlvbixcbiAgICAgIHJhbmdlU2VnbWVudDJEZXNjcmlwdGlvblxuICAgICk7XG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH1cblxuICBwcm90ZWN0ZWQgZm9ybWF0VGltZShob3VyRXhwcmVzc2lvbjogc3RyaW5nLCBtaW51dGVFeHByZXNzaW9uOiBzdHJpbmcsIHNlY29uZEV4cHJlc3Npb246IHN0cmluZykge1xuICAgIGxldCBob3VyOiBudW1iZXIgPSBwYXJzZUludChob3VyRXhwcmVzc2lvbik7XG4gICAgbGV0IHBlcmlvZCA9ICcnO1xuICAgIGxldCBzZXRQZXJpb2RCZWZvcmVUaW1lID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMudXNlMjRIb3VyVGltZUZvcm1hdCkge1xuICAgICAgc2V0UGVyaW9kQmVmb3JlVGltZSA9ICEhKHRoaXMuaTE4bi5zZXRQZXJpb2RCZWZvcmVUaW1lICYmIHRoaXMuaTE4bi5zZXRQZXJpb2RCZWZvcmVUaW1lKCkpO1xuICAgICAgcGVyaW9kID0gc2V0UGVyaW9kQmVmb3JlVGltZSA/IGAke3RoaXMuZ2V0UGVyaW9kKGhvdXIpfSBgIDogYCAke3RoaXMuZ2V0UGVyaW9kKGhvdXIpfWA7XG4gICAgICBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgIGhvdXIgLT0gMTI7XG4gICAgICB9XG4gICAgICBpZiAoaG91ciA9PT0gMCkge1xuICAgICAgICBob3VyID0gMTI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWludXRlID0gbWludXRlRXhwcmVzc2lvbjtcbiAgICBsZXQgc2Vjb25kID0gJyc7XG4gICAgaWYgKHNlY29uZEV4cHJlc3Npb24pIHtcbiAgICAgIHNlY29uZCA9IGA6JHsoJzAwJyArIHNlY29uZEV4cHJlc3Npb24pLnN1YnN0cmluZyhzZWNvbmRFeHByZXNzaW9uLmxlbmd0aCl9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7c2V0UGVyaW9kQmVmb3JlVGltZSA/IHBlcmlvZCA6ICcnfSR7KCcwMCcgKyBob3VyLnRvU3RyaW5nKCkpLnN1YnN0cmluZyhcbiAgICAgIGhvdXIudG9TdHJpbmcoKS5sZW5ndGhcbiAgICApfTokeygnMDAnICsgbWludXRlLnRvU3RyaW5nKCkpLnN1YnN0cmluZyhtaW51dGUudG9TdHJpbmcoKS5sZW5ndGgpfSR7c2Vjb25kfSR7XG4gICAgICAhc2V0UGVyaW9kQmVmb3JlVGltZSA/IHBlcmlvZCA6ICcnXG4gICAgfWA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtVmVyYm9zaXR5KGRlc2NyaXB0aW9uOiBzdHJpbmcsIHVzZVZlcmJvc2VGb3JtYXQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXVzZVZlcmJvc2VGb3JtYXQpIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24ucmVwbGFjZShuZXcgUmVnRXhwKGAsICR7dGhpcy5pMThuLmV2ZXJ5TWludXRlKCl9YCwgJ2cnKSwgJycpO1xuICAgICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5yZXBsYWNlKG5ldyBSZWdFeHAoYCwgJHt0aGlzLmkxOG4uZXZlcnlIb3VyKCl9YCwgJ2cnKSwgJycpO1xuICAgICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5pMThuLmNvbW1hRXZlcnlEYXkoKSwgJ2cnKSwgJycpO1xuICAgICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5yZXBsYWNlKC8sID8kLywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH1cblxuICBwcml2YXRlIGdldFBlcmlvZChob3VyOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBob3VyID49IDEyID8gKHRoaXMuaTE4bi5wbSAmJiB0aGlzLmkxOG4ucG0oKSkgfHwgJ1BNJyA6ICh0aGlzLmkxOG4uYW0gJiYgdGhpcy5pMThuLmFtKCkpIHx8ICdBTSc7XG4gIH1cbn1cbiJdfQ==