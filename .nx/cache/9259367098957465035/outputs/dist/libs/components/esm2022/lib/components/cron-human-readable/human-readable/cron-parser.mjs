import PrizmCronHRRangeValidator from './range-validator';
/**
 * Parses and normalizes a cron expression
 * @export
 * @class PrizmCronHRParser
 */
export class PrizmCronHRParser {
    constructor(expression, dayOfWeekStartIndexZero = true, monthStartIndexZero = false) {
        this.expression = expression;
        this.dayOfWeekStartIndexZero = dayOfWeekStartIndexZero;
        this.monthStartIndexZero = monthStartIndexZero;
    }
    /**
     * Parses and normalizes a cron expression into an array of strings
     * @returns {string[]}
     */
    parse() {
        const parsed = this.extractParts(this.expression);
        this.normalize(parsed);
        this.validate(parsed);
        return parsed;
    }
    extractParts(expression) {
        if (!this.expression) {
            throw new Error('Expression is empty');
        }
        // split on one or more spaces
        const parsed = expression.trim().split(/[ ]+/);
        if (parsed.length < 5) {
            throw new Error(`Expression has only ${parsed.length} part${parsed.length == 1 ? '' : 's'}. At least 5 parts are required.`);
        }
        else if (parsed.length == 5) {
            // 5 part cron so shift array past seconds element
            parsed.unshift('');
            parsed.push('');
        }
        else if (parsed.length == 6) {
            /* We will detect if this 6 part expression has a year specified and if so we will shift the parts and treat the
              first part as a minute part rather than a second part.
      
              Ways we detect:
                1. Last part is a literal year (i.e. 2020)
                2. 3rd or 5th part is specified as "?" (DOM or DOW)
            */
            const isYearWithNoSecondsPart = /\d{4}$/.test(parsed[5]) || parsed[4] == '?' || parsed[2] == '?';
            if (isYearWithNoSecondsPart) {
                // year provided; shift parts over by one
                parsed.unshift('');
            }
            else {
                // seconds provided
                parsed.push('');
            }
        }
        else if (parsed.length > 7) {
            throw new Error(`Expression has ${parsed.length} parts; too many!`);
        }
        return parsed;
    }
    normalize(expressionParts) {
        // Convert ? to * for DOM and DOW
        expressionParts[3] = expressionParts[3].replace('?', '*');
        expressionParts[5] = expressionParts[5].replace('?', '*');
        // Convert ? to * for Hour. ? isn't valid for hour position but we can work around it.
        expressionParts[2] = expressionParts[2].replace('?', '*');
        // Convert 0/, 1/ to */
        if (expressionParts[0].indexOf('0/') == 0) {
            // Seconds
            expressionParts[0] = expressionParts[0].replace('0/', '*/');
        }
        if (expressionParts[1].indexOf('0/') == 0) {
            // Minutes
            expressionParts[1] = expressionParts[1].replace('0/', '*/');
        }
        if (expressionParts[2].indexOf('0/') == 0) {
            // Hours
            expressionParts[2] = expressionParts[2].replace('0/', '*/');
        }
        if (expressionParts[3].indexOf('1/') == 0) {
            // DOM
            expressionParts[3] = expressionParts[3].replace('1/', '*/');
        }
        if (expressionParts[4].indexOf('1/') == 0) {
            // Month
            expressionParts[4] = expressionParts[4].replace('1/', '*/');
        }
        if (expressionParts[6].indexOf('1/') == 0) {
            // Years
            expressionParts[6] = expressionParts[6].replace('1/', '*/');
        }
        // Adjust DOW based on dayOfWeekStartIndexZero option
        // Normalized DOW: 0=Sunday/6=Saturday
        expressionParts[5] = expressionParts[5].replace(/(^\d)|([^#/\s]\d)/g, t => {
            // skip anything preceeded by # or /
            const dowDigits = t.replace(/\D/, ''); // extract digit part (i.e. if "-2" or ",2", just take 2)
            let dowDigitsAdjusted = dowDigits;
            if (this.dayOfWeekStartIndexZero) {
                // "7" also means Sunday so we will convert to "0" to normalize it
                if (dowDigits == '7') {
                    dowDigitsAdjusted = '0';
                }
            }
            else {
                // If dayOfWeekStartIndexZero==false, Sunday is specified as 1 and Saturday is specified as 7.
                // To normalize, we will shift the  DOW number down so that 1 becomes 0, 2 becomes 1, and so on.
                dowDigitsAdjusted = (parseInt(dowDigits) - 1).toString();
            }
            return t.replace(dowDigits, dowDigitsAdjusted);
        });
        // Convert DOW 'L' to '6' (Saturday)
        if (expressionParts[5] == 'L') {
            expressionParts[5] = '6';
        }
        // Convert DOM '?' to '*'
        if (expressionParts[3] == '?') {
            expressionParts[3] = '*';
        }
        if (expressionParts[3].indexOf('W') > -1 &&
            (expressionParts[3].indexOf(',') > -1 || expressionParts[3].indexOf('-') > -1)) {
            throw new Error("The 'W' character can be specified only when the day-of-month is a single day, not a range or list of days.");
        }
        // Convert DOW SUN-SAT format to 0-6 format
        const days = {
            SUN: 1,
            MON: 2,
            TUE: 3,
            WED: 4,
            THU: 5,
            FRI: 6,
            SAT: 7,
            // SUN: 0,
            // MON: 1,
            // TUE: 2,
            // WED: 3,
            // THU: 4,
            // FRI: 5,
            // SAT: 6,
        };
        for (const day in days) {
            expressionParts[5] = expressionParts[5].replace(new RegExp(day, 'gi'), days[day].toString());
        }
        // Adjust month based on monthStartIndexZero option
        // Normalized Month: 1=JAN/12=DEC
        expressionParts[4] = expressionParts[4].replace(/(^\d{1,2})|([^#/\s]\d{1,2})/g, t => {
            // skip anything preceeded by # or /
            const dowDigits = t.replace(/\D/, ''); // extract digit part (i.e. if "-2" or ",2", just take 2)
            let dowDigitsAdjusted = dowDigits;
            if (this.monthStartIndexZero) {
                // if monthStartIndexZero==true, we will shift month number up so that JAN=1 and DEC=12
                dowDigitsAdjusted = (parseInt(dowDigits) + 1).toString();
            }
            return t.replace(dowDigits, dowDigitsAdjusted);
        });
        // Convert JAN-DEC format to 1-12 format
        const months = {
            JAN: 1,
            FEB: 2,
            MAR: 3,
            APR: 4,
            MAY: 5,
            JUN: 6,
            JUL: 7,
            AUG: 8,
            SEP: 9,
            OCT: 10,
            NOV: 11,
            DEC: 12,
        };
        for (const month in months) {
            expressionParts[4] = expressionParts[4].replace(new RegExp(month, 'gi'), months[month].toString());
        }
        // Convert 0 second to (empty)
        if (expressionParts[0] == '0') {
            expressionParts[0] = '';
        }
        // If time increment or * (every) is specified for seconds or minutes and hours part is single item, make it a "self-range" so
        // the expression can be interpreted as an increment / range.  This will allow us to easily interpret an hour part as 'between' a second or minute duration.
        //     For example:
        //     0-20/3 9 * * * => 0-20/3 9-9 * * * (9 => 9-9) => Every 3 minutes, minutes 0 through 20 past the hour, between 09:00 AM and 09:59 AM
        //     */5 3 * * * => */5 3-3 * * * (3 => 3-3) => Every 5 minutes, between 03:00 AM and 03:59 AM
        if (!/\*|-|,|\//.test(expressionParts[2]) &&
            (/\*|\//.test(expressionParts[1]) || /\*|\//.test(expressionParts[0]))) {
            expressionParts[2] += `-${expressionParts[2]}`;
        }
        // Loop through all parts and apply global normalization
        for (let i = 0; i < expressionParts.length; i++) {
            // ignore empty characters around comma
            // if nothing left, set it to *
            if (expressionParts[i].indexOf(',') != -1) {
                expressionParts[i] =
                    expressionParts[i]
                        .split(',')
                        .filter(str => str !== '')
                        .join(',') || '*';
            }
            // convert all '*/1' to '*'
            if (expressionParts[i] == '*/1') {
                expressionParts[i] = '*';
            }
            /* Convert Month,DOW,Year step values with a starting value (i.e. not '*') to range expressions.
               This allows us to reuse the range expression handling for step values.
      
                 For example:
                 - month part '3/2' will be converted to '3-12/2' (every 2 months between March and December)
                 - DOW part '3/2' will be converted to '3-6/2' (every 2 days between Tuesday and Saturday)
            */
            if (expressionParts[i].indexOf('/') > -1 && !/^\*|-|,/.test(expressionParts[i])) {
                let stepRangeThrough = null;
                switch (i) {
                    case 4:
                        stepRangeThrough = '12';
                        break;
                    case 5:
                        stepRangeThrough = '6';
                        break;
                    case 6:
                        // stepRangeThrough = '9999';
                        stepRangeThrough = null;
                        break;
                    default:
                        stepRangeThrough = null;
                        break;
                }
                if (stepRangeThrough !== null) {
                    const parts = expressionParts[i].split('/');
                    expressionParts[i] = `${parts[0]}-${stepRangeThrough}/${parts[1]}`;
                }
            }
        }
    }
    validate(parsed) {
        this.assertNoInvalidCharacters('DOW', parsed[5]);
        this.assertNoInvalidCharacters('DOM', parsed[3]);
        this.validateRange(parsed);
    }
    validateRange(parsed) {
        PrizmCronHRRangeValidator.secondRange(parsed[0]);
        PrizmCronHRRangeValidator.minuteRange(parsed[1]);
        PrizmCronHRRangeValidator.hourRange(parsed[2]);
        PrizmCronHRRangeValidator.dayOfMonthRange(parsed[3]);
        PrizmCronHRRangeValidator.monthRange(parsed[4], this.monthStartIndexZero);
        PrizmCronHRRangeValidator.dayOfWeekRange(parsed[5], this.dayOfWeekStartIndexZero);
    }
    assertNoInvalidCharacters(partDescription, expression) {
        // No characters other than 'L' or 'W' should remain after normalization
        const invalidChars = expression.match(/[A-KM-VX-Z]+/gi);
        if (invalidChars && invalidChars.length) {
            throw new Error(`${partDescription} part contains invalid values: '${invalidChars.toString()}'`);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1wYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Nyb24taHVtYW4tcmVhZGFibGUvaHVtYW4tcmVhZGFibGUvY3Jvbi1wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyx5QkFBeUIsTUFBTSxtQkFBbUIsQ0FBQztBQUUxRDs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLGlCQUFpQjtJQUs1QixZQUFZLFVBQWtCLEVBQUUsdUJBQXVCLEdBQUcsSUFBSSxFQUFFLG1CQUFtQixHQUFHLEtBQUs7UUFDekYsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO1FBQ3ZELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSztRQUNWLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRVMsWUFBWSxDQUFDLFVBQWtCO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUN4QztRQUVELDhCQUE4QjtRQUM5QixNQUFNLE1BQU0sR0FBYSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsTUFBTSxJ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LENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRVMsYUFBYSxDQUFDLE1BQWdCO1FBQ3RDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQseUJBQXlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFFLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVTLHlCQUF5QixDQUFDLGVBQXVCLEVBQUUsVUFBa0I7UUFDN0Usd0VBQXdFO1FBQ3hFLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RCxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxlQUFlLG1DQUFtQyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2xHO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXptQ3JvbkhSUmFuZ2VWYWxpZGF0b3IgZnJvbSAnLi9yYW5nZS12YWxpZGF0b3InO1xuXG4vKipcbiAqIFBhcnNlcyBhbmQgbm9ybWFsaXplcyBhIGNyb24gZXhwcmVzc2lvblxuICogQGV4cG9ydFxuICogQGNsYXNzIFByaXptQ3JvbkhSUGFyc2VyXG4gKi9cbmV4cG9ydCBjbGFzcyBQcml6bUNyb25IUlBhcnNlciB7XG4gIGV4cHJlc3Npb246IHN0cmluZztcbiAgZGF5T2ZXZWVrU3RhcnRJbmRleFplcm86IGJvb2xlYW47XG4gIG1vbnRoU3RhcnRJbmRleFplcm86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogc3RyaW5nLCBkYXlPZldlZWtTdGFydEluZGV4WmVybyA9IHRydWUsIG1vbnRoU3RhcnRJbmRleFplcm8gPSBmYWxzZSkge1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgdGhpcy5kYXlPZldlZWtTdGFydEluZGV4WmVybyA9IGRheU9mV2Vla1N0YXJ0SW5kZXhaZXJvO1xuICAgIHRoaXMubW9udGhTdGFydEluZGV4WmVybyA9IG1vbnRoU3RhcnRJbmRleFplcm87XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGFuZCBub3JtYWxpemVzIGEgY3JvbiBleHByZXNzaW9uIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBwdWJsaWMgcGFyc2UoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMuZXh0cmFjdFBhcnRzKHRoaXMuZXhwcmVzc2lvbik7XG4gICAgdGhpcy5ub3JtYWxpemUocGFyc2VkKTtcbiAgICB0aGlzLnZhbGlkYXRlKHBhcnNlZCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGV4dHJhY3RQYXJ0cyhleHByZXNzaW9uOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuZXhwcmVzc2lvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHByZXNzaW9uIGlzIGVtcHR5Jyk7XG4gICAgfVxuXG4gICAgLy8gc3BsaXQgb24gb25lIG9yIG1vcmUgc3BhY2VzXG4gICAgY29uc3QgcGFyc2VkOiBzdHJpbmdbXSA9IGV4cHJlc3Npb24udHJpbSgpLnNwbGl0KC9bIF0rLyk7XG5cbiAgICBpZiAocGFyc2VkLmxlbmd0aCA8IDUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEV4cHJlc3Npb24gaGFzIG9ubHkgJHtwYXJzZWQubGVuZ3RofSBwYXJ0JHtcbiAgICAgICAgICBwYXJzZWQubGVuZ3RoID09IDEgPyAnJyA6ICdzJ1xuICAgICAgICB9LiBBdCBsZWFzdCA1IHBhcnRzIGFyZSByZXF1aXJlZC5gXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAocGFyc2VkLmxlbmd0aCA9PSA1KSB7XG4gICAgICAvLyA1IHBhcnQgY3JvbiBzbyBzaGlmdCBhcnJheSBwYXN0IHNlY29uZHMgZWxlbWVudFxuICAgICAgcGFyc2VkLnVuc2hpZnQoJycpO1xuICAgICAgcGFyc2VkLnB1c2goJycpO1xuICAgIH0gZWxzZSBpZiAocGFyc2VkLmxlbmd0aCA9PSA2KSB7XG4gICAgICAvKiBXZSB3aWxsIGRldGVjdCBpZiB0aGlzIDYgcGFydCBleHByZXNzaW9uIGhhcyBhIHllYXIgc3BlY2lmaWVkIGFuZCBpZiBzbyB3ZSB3aWxsIHNoaWZ0IHRoZSBwYXJ0cyBhbmQgdHJlYXQgdGhlXG4gICAgICAgIGZpcnN0IHBhcnQgYXMgYSBtaW51dGUgcGFydCByYXRoZXIgdGhhbiBhIHNlY29uZCBwYXJ0LlxuXG4gICAgICAgIFdheXMgd2UgZGV0ZWN0OlxuICAgICAgICAgIDEuIExhc3QgcGFydCBpcyBhIGxpdGVyYWwgeWVhciAoaS5lLiAyMDIwKVxuICAgICAgICAgIDIuIDNyZCBvciA1dGggcGFydCBpcyBzcGVjaWZpZWQgYXMgXCI/XCIgKERPTSBvciBET1cpXG4gICAgICAqL1xuICAgICAgY29uc3QgaXNZZWFyV2l0aE5vU2Vjb25kc1BhcnQgPSAvXFxkezR9JC8udGVzdChwYXJzZWRbNV0pIHx8IHBhcnNlZFs0XSA9PSAnPycgfHwgcGFyc2VkWzJdID09ICc/JztcblxuICAgICAgaWYgKGlzWWVhcldpdGhOb1NlY29uZHNQYXJ0KSB7XG4gICAgICAgIC8vIHllYXIgcHJvdmlkZWQ7IHNoaWZ0IHBhcnRzIG92ZXIgYnkgb25lXG4gICAgICAgIHBhcnNlZC51bnNoaWZ0KCcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNlY29uZHMgcHJvdmlkZWRcbiAgICAgICAgcGFyc2VkLnB1c2goJycpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFyc2VkLmxlbmd0aCA+IDcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwcmVzc2lvbiBoYXMgJHtwYXJzZWQubGVuZ3RofSBwYXJ0czsgdG9vIG1hbnkhYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBub3JtYWxpemUoZXhwcmVzc2lvblBhcnRzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIC8vIENvbnZlcnQgPyB0byAqIGZvciBET00gYW5kIERPV1xuICAgIGV4cHJlc3Npb25QYXJ0c1szXSA9IGV4cHJlc3Npb25QYXJ0c1szXS5yZXBsYWNlKCc/JywgJyonKTtcbiAgICBleHByZXNzaW9uUGFydHNbNV0gPSBleHByZXNzaW9uUGFydHNbNV0ucmVwbGFjZSgnPycsICcqJyk7XG5cbiAgICAvLyBDb252ZXJ0ID8gdG8gKiBmb3IgSG91ci4gPyBpc24ndCB2YWxpZCBmb3IgaG91ciBwb3NpdGlvbiBidXQgd2UgY2FuIHdvcmsgYXJvdW5kIGl0LlxuICAgIGV4cHJlc3Npb25QYXJ0c1syXSA9IGV4cHJlc3Npb25QYXJ0c1syXS5yZXBsYWNlKCc/JywgJyonKTtcblxuICAgIC8vIENvbnZlcnQgMC8sIDEvIHRvICovXG4gICAgaWYgKGV4cHJlc3Npb25QYXJ0c1swXS5pbmRleE9mKCcwLycpID09IDApIHtcbiAgICAgIC8vIFNlY29uZHNcbiAgICAgIGV4cHJlc3Npb25QYXJ0c1swXSA9IGV4cHJlc3Npb25QYXJ0c1swXS5yZXBsYWNlKCcwLycsICcqLycpO1xuICAgIH1cblxuICAgIGlmIChleHByZXNzaW9uUGFydHNbMV0uaW5kZXhPZignMC8nKSA9PSAwKSB7XG4gICAgICAvLyBNaW51dGVzXG4gICAgICBleHByZXNzaW9uUGFydHNbMV0gPSBleHByZXNzaW9uUGFydHNbMV0ucmVwbGFjZSgnMC8nLCAnKi8nKTtcbiAgICB9XG5cbiAgICBpZiAoZXhwcmVzc2lvblBhcnRzWzJdLmluZGV4T2YoJzAvJykgPT0gMCkge1xuICAgICAgLy8gSG91cnNcbiAgICAgIGV4cHJlc3Npb25QYXJ0c1syXSA9IGV4cHJlc3Npb25QYXJ0c1syXS5yZXBsYWNlKCcwLycsICcqLycpO1xuICAgIH1cblxuICAgIGlmIChleHByZXNzaW9uUGFydHNbM10uaW5kZXhPZignMS8nKSA9PSAwKSB7XG4gICAgICAvLyBET01cbiAgICAgIGV4cHJlc3Npb25QYXJ0c1szXSA9IGV4cHJlc3Npb25QYXJ0c1szXS5yZXBsYWNlKCcxLycsICcqLycpO1xuICAgIH1cblxuICAgIGlmIChleHByZXNzaW9uUGFydHNbNF0uaW5kZXhPZignMS8nKSA9PSAwKSB7XG4gICAgICAvLyBNb250aFxuICAgICAgZXhwcmVzc2lvblBhcnRzWzRdID0gZXhwcmVzc2lvblBhcnRzWzRdLnJlcGxhY2UoJzEvJywgJyovJyk7XG4gICAgfVxuXG4gICAgaWYgKGV4cHJlc3Npb25QYXJ0c1s2XS5pbmRleE9mKCcxLycpID09IDApIHtcbiAgICAgIC8vIFllYXJzXG4gICAgICBleHByZXNzaW9uUGFydHNbNl0gPSBleHByZXNzaW9uUGFydHNbNl0ucmVwbGFjZSgnMS8nLCAnKi8nKTtcbiAgICB9XG5cbiAgICAvLyBBZGp1c3QgRE9XIGJhc2VkIG9uIGRheU9mV2Vla1N0YXJ0SW5kZXhaZXJvIG9wdGlvblxuICAgIC8vIE5vcm1hbGl6ZWQgRE9XOiAwPVN1bmRheS82PVNhdHVyZGF5XG4gICAgZXhwcmVzc2lvblBhcnRzWzVdID0gZXhwcmVzc2lvblBhcnRzWzVdLnJlcGxhY2UoLyheXFxkKXwoW14jL1xcc11cXGQpL2csIHQgPT4ge1xuICAgICAgLy8gc2tpcCBhbnl0aGluZyBwcmVjZWVkZWQgYnkgIyBvciAvXG4gICAgICBjb25zdCBkb3dEaWdpdHMgPSB0LnJlcGxhY2UoL1xcRC8sICcnKTsgLy8gZXh0cmFjdCBkaWdpdCBwYXJ0IChpLmUuIGlmIFwiLTJcIiBvciBcIiwyXCIsIGp1c3QgdGFrZSAyKVxuICAgICAgbGV0IGRvd0RpZ2l0c0FkanVzdGVkOiBzdHJpbmcgPSBkb3dEaWdpdHM7XG5cbiAgICAgIGlmICh0aGlzLmRheU9mV2Vla1N0YXJ0SW5kZXhaZXJvKSB7XG4gICAgICAgIC8vIFwiN1wiIGFsc28gbWVhbnMgU3VuZGF5IHNvIHdlIHdpbGwgY29udmVydCB0byBcIjBcIiB0byBub3JtYWxpemUgaXRcbiAgICAgICAgaWYgKGRvd0RpZ2l0cyA9PSAnNycpIHtcbiAgICAgICAgICBkb3dEaWdpdHNBZGp1c3RlZCA9ICcwJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgZGF5T2ZXZWVrU3RhcnRJbmRleFplcm89PWZhbHNlLCBTdW5kYXkgaXMgc3BlY2lmaWVkIGFzIDEgYW5kIFNhdHVyZGF5IGlzIHNwZWNpZmllZCBhcyA3LlxuICAgICAgICAvLyBUbyBub3JtYWxpemUsIHdlIHdpbGwgc2hpZnQgdGhlICBET1cgbnVtYmVyIGRvd24gc28gdGhhdCAxIGJlY29tZXMgMCwgMiBiZWNvbWVzIDEsIGFuZCBzbyBvbi5cbiAgICAgICAgZG93RGlnaXRzQWRqdXN0ZWQgPSAocGFyc2VJbnQoZG93RGlnaXRzKSAtIDEpLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0LnJlcGxhY2UoZG93RGlnaXRzLCBkb3dEaWdpdHNBZGp1c3RlZCk7XG4gICAgfSk7XG5cbiAgICAvLyBDb252ZXJ0IERPVyAnTCcgdG8gJzYnIChTYXR1cmRheSlcbiAgICBpZiAoZXhwcmVzc2lvblBhcnRzWzVdID09ICdMJykge1xuICAgICAgZXhwcmVzc2lvblBhcnRzWzVdID0gJzYnO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgRE9NICc/JyB0byAnKidcbiAgICBpZiAoZXhwcmVzc2lvblBhcnRzWzNdID09ICc/Jykge1xuICAgICAgZXhwcmVzc2lvblBhcnRzWzNdID0gJyonO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGV4cHJlc3Npb25QYXJ0c1szXS5pbmRleE9mKCdXJykgPiAtMSAmJlxuICAgICAgKGV4cHJlc3Npb25QYXJ0c1szXS5pbmRleE9mKCcsJykgPiAtMSB8fCBleHByZXNzaW9uUGFydHNbM10uaW5kZXhPZignLScpID4gLTEpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiVGhlICdXJyBjaGFyYWN0ZXIgY2FuIGJlIHNwZWNpZmllZCBvbmx5IHdoZW4gdGhlIGRheS1vZi1tb250aCBpcyBhIHNpbmdsZSBkYXksIG5vdCBhIHJhbmdlIG9yIGxpc3Qgb2YgZGF5cy5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IERPVyBTVU4tU0FUIGZvcm1hdCB0byAwLTYgZm9ybWF0XG4gICAgY29uc3QgZGF5czogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICAgIFNVTjogMSxcbiAgICAgIE1PTjogMixcbiAgICAgIFRVRTogMyxcbiAgICAgIFdFRDogNCxcbiAgICAgIFRIVTogNSxcbiAgICAgIEZSSTogNixcbiAgICAgIFNBVDogNyxcbiAgICAgIC8vIFNVTjogMCxcbiAgICAgIC8vIE1PTjogMSxcbiAgICAgIC8vIFRVRTogMixcbiAgICAgIC8vIFdFRDogMyxcbiAgICAgIC8vIFRIVTogNCxcbiAgICAgIC8vIEZSSTogNSxcbiAgICAgIC8vIFNBVDogNixcbiAgICB9O1xuICAgIGZvciAoY29uc3QgZGF5IGluIGRheXMpIHtcbiAgICAgIGV4cHJlc3Npb25QYXJ0c1s1XSA9IGV4cHJlc3Npb25QYXJ0c1s1XS5yZXBsYWNlKG5ldyBSZWdFeHAoZGF5LCAnZ2knKSwgZGF5c1tkYXldLnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIC8vIEFkanVzdCBtb250aCBiYXNlZCBvbiBtb250aFN0YXJ0SW5kZXhaZXJvIG9wdGlvblxuICAgIC8vIE5vcm1hbGl6ZWQgTW9udGg6IDE9SkFOLzEyPURFQ1xuICAgIGV4cHJlc3Npb25QYXJ0c1s0XSA9IGV4cHJlc3Npb25QYXJ0c1s0XS5yZXBsYWNlKC8oXlxcZHsxLDJ9KXwoW14jL1xcc11cXGR7MSwyfSkvZywgdCA9PiB7XG4gICAgICAvLyBza2lwIGFueXRoaW5nIHByZWNlZWRlZCBieSAjIG9yIC9cbiAgICAgIGNvbnN0IGRvd0RpZ2l0cyA9IHQucmVwbGFjZSgvXFxELywgJycpOyAvLyBleHRyYWN0IGRpZ2l0IHBhcnQgKGkuZS4gaWYgXCItMlwiIG9yIFwiLDJcIiwganVzdCB0YWtlIDIpXG4gICAgICBsZXQgZG93RGlnaXRzQWRqdXN0ZWQ6IHN0cmluZyA9IGRvd0RpZ2l0cztcblxuICAgICAgaWYgKHRoaXMubW9udGhTdGFydEluZGV4WmVybykge1xuICAgICAgICAvLyBpZiBtb250aFN0YXJ0SW5kZXhaZXJvPT10cnVlLCB3ZSB3aWxsIHNoaWZ0IG1vbnRoIG51bWJlciB1cCBzbyB0aGF0IEpBTj0xIGFuZCBERUM9MTJcbiAgICAgICAgZG93RGlnaXRzQWRqdXN0ZWQgPSAocGFyc2VJbnQoZG93RGlnaXRzKSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0LnJlcGxhY2UoZG93RGlnaXRzLCBkb3dEaWdpdHNBZGp1c3RlZCk7XG4gICAgfSk7XG5cbiAgICAvLyBDb252ZXJ0IEpBTi1ERUMgZm9ybWF0IHRvIDEtMTIgZm9ybWF0XG4gICAgY29uc3QgbW9udGhzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgICAgSkFOOiAxLFxuICAgICAgRkVCOiAyLFxuICAgICAgTUFSOiAzLFxuICAgICAgQVBSOiA0LFxuICAgICAgTUFZOiA1LFxuICAgICAgSlVOOiA2LFxuICAgICAgSlVMOiA3LFxuICAgICAgQVVHOiA4LFxuICAgICAgU0VQOiA5LFxuICAgICAgT0NUOiAxMCxcbiAgICAgIE5PVjogMTEsXG4gICAgICBERUM6IDEyLFxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IG1vbnRoIGluIG1vbnRocykge1xuICAgICAgZXhwcmVzc2lvblBhcnRzWzRdID0gZXhwcmVzc2lvblBhcnRzWzRdLnJlcGxhY2UobmV3IFJlZ0V4cChtb250aCwgJ2dpJyksIG1vbnRoc1ttb250aF0udG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCAwIHNlY29uZCB0byAoZW1wdHkpXG4gICAgaWYgKGV4cHJlc3Npb25QYXJ0c1swXSA9PSAnMCcpIHtcbiAgICAgIGV4cHJlc3Npb25QYXJ0c1swXSA9ICcnO1xuICAgIH1cblxuICAgIC8vIElmIHRpbWUgaW5jcmVtZW50IG9yICogKGV2ZXJ5KSBpcyBzcGVjaWZpZWQgZm9yIHNlY29uZHMgb3IgbWludXRlcyBhbmQgaG91cnMgcGFydCBpcyBzaW5nbGUgaXRlbSwgbWFrZSBpdCBhIFwic2VsZi1yYW5nZVwiIHNvXG4gICAgLy8gdGhlIGV4cHJlc3Npb24gY2FuIGJlIGludGVycHJldGVkIGFzIGFuIGluY3JlbWVudCAvIHJhbmdlLiAgVGhpcyB3aWxsIGFsbG93IHVzIHRvIGVhc2lseSBpbnRlcnByZXQgYW4gaG91ciBwYXJ0IGFzICdiZXR3ZWVuJyBhIHNlY29uZCBvciBtaW51dGUgZHVyYXRpb24uXG4gICAgLy8gICAgIEZvciBleGFtcGxlOlxuICAgIC8vICAgICAwLTIwLzMgOSAqICogKiA9PiAwLTIwLzMgOS05ICogKiAqICg5ID0+IDktOSkgPT4gRXZlcnkgMyBtaW51dGVzLCBtaW51dGVzIDAgdGhyb3VnaCAyMCBwYXN0IHRoZSBob3VyLCBiZXR3ZWVuIDA5OjAwIEFNIGFuZCAwOTo1OSBBTVxuICAgIC8vICAgICAqLzUgMyAqICogKiA9PiAqLzUgMy0zICogKiAqICgzID0+IDMtMykgPT4gRXZlcnkgNSBtaW51dGVzLCBiZXR3ZWVuIDAzOjAwIEFNIGFuZCAwMzo1OSBBTVxuICAgIGlmIChcbiAgICAgICEvXFwqfC18LHxcXC8vLnRlc3QoZXhwcmVzc2lvblBhcnRzWzJdKSAmJlxuICAgICAgKC9cXCp8XFwvLy50ZXN0KGV4cHJlc3Npb25QYXJ0c1sxXSkgfHwgL1xcKnxcXC8vLnRlc3QoZXhwcmVzc2lvblBhcnRzWzBdKSlcbiAgICApIHtcbiAgICAgIGV4cHJlc3Npb25QYXJ0c1syXSArPSBgLSR7ZXhwcmVzc2lvblBhcnRzWzJdfWA7XG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBwYXJ0cyBhbmQgYXBwbHkgZ2xvYmFsIG5vcm1hbGl6YXRpb25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHJlc3Npb25QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gaWdub3JlIGVtcHR5IGNoYXJhY3RlcnMgYXJvdW5kIGNvbW1hXG4gICAgICAvLyBpZiBub3RoaW5nIGxlZnQsIHNldCBpdCB0byAqXG4gICAgICBpZiAoZXhwcmVzc2lvblBhcnRzW2ldLmluZGV4T2YoJywnKSAhPSAtMSkge1xuICAgICAgICBleHByZXNzaW9uUGFydHNbaV0gPVxuICAgICAgICAgIGV4cHJlc3Npb25QYXJ0c1tpXVxuICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgIC5maWx0ZXIoc3RyID0+IHN0ciAhPT0gJycpXG4gICAgICAgICAgICAuam9pbignLCcpIHx8ICcqJztcbiAgICAgIH1cbiAgICAgIC8vIGNvbnZlcnQgYWxsICcqLzEnIHRvICcqJ1xuICAgICAgaWYgKGV4cHJlc3Npb25QYXJ0c1tpXSA9PSAnKi8xJykge1xuICAgICAgICBleHByZXNzaW9uUGFydHNbaV0gPSAnKic7XG4gICAgICB9XG5cbiAgICAgIC8qIENvbnZlcnQgTW9udGgsRE9XLFllYXIgc3RlcCB2YWx1ZXMgd2l0aCBhIHN0YXJ0aW5nIHZhbHVlIChpLmUuIG5vdCAnKicpIHRvIHJhbmdlIGV4cHJlc3Npb25zLlxuICAgICAgICAgVGhpcyBhbGxvd3MgdXMgdG8gcmV1c2UgdGhlIHJhbmdlIGV4cHJlc3Npb24gaGFuZGxpbmcgZm9yIHN0ZXAgdmFsdWVzLlxuXG4gICAgICAgICAgIEZvciBleGFtcGxlOlxuICAgICAgICAgICAtIG1vbnRoIHBhcnQgJzMvMicgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gJzMtMTIvMicgKGV2ZXJ5IDIgbW9udGhzIGJldHdlZW4gTWFyY2ggYW5kIERlY2VtYmVyKVxuICAgICAgICAgICAtIERPVyBwYXJ0ICczLzInIHdpbGwgYmUgY29udmVydGVkIHRvICczLTYvMicgKGV2ZXJ5IDIgZGF5cyBiZXR3ZWVuIFR1ZXNkYXkgYW5kIFNhdHVyZGF5KVxuICAgICAgKi9cblxuICAgICAgaWYgKGV4cHJlc3Npb25QYXJ0c1tpXS5pbmRleE9mKCcvJykgPiAtMSAmJiAhL15cXCp8LXwsLy50ZXN0KGV4cHJlc3Npb25QYXJ0c1tpXSkpIHtcbiAgICAgICAgbGV0IHN0ZXBSYW5nZVRocm91Z2g6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBzdGVwUmFuZ2VUaHJvdWdoID0gJzEyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHN0ZXBSYW5nZVRocm91Z2ggPSAnNic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAvLyBzdGVwUmFuZ2VUaHJvdWdoID0gJzk5OTknO1xuICAgICAgICAgICAgc3RlcFJhbmdlVGhyb3VnaCA9IG51bGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3RlcFJhbmdlVGhyb3VnaCA9IG51bGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGVwUmFuZ2VUaHJvdWdoICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gZXhwcmVzc2lvblBhcnRzW2ldLnNwbGl0KCcvJyk7XG4gICAgICAgICAgZXhwcmVzc2lvblBhcnRzW2ldID0gYCR7cGFydHNbMF19LSR7c3RlcFJhbmdlVGhyb3VnaH0vJHtwYXJ0c1sxXX1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHZhbGlkYXRlKHBhcnNlZDogc3RyaW5nW10pIHtcbiAgICB0aGlzLmFzc2VydE5vSW52YWxpZENoYXJhY3RlcnMoJ0RPVycsIHBhcnNlZFs1XSk7XG4gICAgdGhpcy5hc3NlcnROb0ludmFsaWRDaGFyYWN0ZXJzKCdET00nLCBwYXJzZWRbM10pO1xuICAgIHRoaXMudmFsaWRhdGVSYW5nZShwYXJzZWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHZhbGlkYXRlUmFuZ2UocGFyc2VkOiBzdHJpbmdbXSkge1xuICAgIFByaXptQ3JvbkhSUmFuZ2VWYWxpZGF0b3Iuc2Vjb25kUmFuZ2UocGFyc2VkWzBdKTtcbiAgICBQcml6bUNyb25IUlJhbmdlVmFsaWRhdG9yLm1pbnV0ZVJhbmdlKHBhcnNlZFsxXSk7XG4gICAgUHJpem1Dcm9uSFJSYW5nZVZhbGlkYXRvci5ob3VyUmFuZ2UocGFyc2VkWzJdKTtcbiAgICBQcml6bUNyb25IUlJhbmdlVmFsaWRhdG9yLmRheU9mTW9udGhSYW5nZShwYXJzZWRbM10pO1xuICAgIFByaXptQ3JvbkhSUmFuZ2VWYWxpZGF0b3IubW9udGhSYW5nZShwYXJzZWRbNF0sIHRoaXMubW9udGhTdGFydEluZGV4WmVybyk7XG4gICAgUHJpem1Dcm9uSFJSYW5nZVZhbGlkYXRvci5kYXlPZldlZWtSYW5nZShwYXJzZWRbNV0sIHRoaXMuZGF5T2ZXZWVrU3RhcnRJbmRleFplcm8pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzc2VydE5vSW52YWxpZENoYXJhY3RlcnMocGFydERlc2NyaXB0aW9uOiBzdHJpbmcsIGV4cHJlc3Npb246IHN0cmluZykge1xuICAgIC8vIE5vIGNoYXJhY3RlcnMgb3RoZXIgdGhhbiAnTCcgb3IgJ1cnIHNob3VsZCByZW1haW4gYWZ0ZXIgbm9ybWFsaXphdGlvblxuICAgIGNvbnN0IGludmFsaWRDaGFycyA9IGV4cHJlc3Npb24ubWF0Y2goL1tBLUtNLVZYLVpdKy9naSk7XG4gICAgaWYgKGludmFsaWRDaGFycyAmJiBpbnZhbGlkQ2hhcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cGFydERlc2NyaXB0aW9ufSBwYXJ0IGNvbnRhaW5zIGludmFsaWQgdmFsdWVzOiAnJHtpbnZhbGlkQ2hhcnMudG9TdHJpbmcoKX0nYCk7XG4gICAgfVxuICB9XG59XG4iXX0=