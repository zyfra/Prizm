import { PrizmCronHROptions } from './options';
import { PrizmCronHRLocale } from './i18n/locale';
import { PrizmCronHRLocaleLoader } from './i18n/locale-loader';
export declare class PrizmCronHRExpressionDescriptor {
    static locales: {
        [name: string]: PrizmCronHRLocale;
    };
    static defaultLocale: string;
    static specialCharacters: string[];
    expression: string;
    expressionParts: string[];
    options: PrizmCronHROptions;
    i18n: PrizmCronHRLocale;
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
    static toString(expression: string, { throwExceptionOnParseError, verbose, dayOfWeekStartIndexZero, monthStartIndexZero, use24HourTimeFormat, locale, }?: PrizmCronHROptions): string;
    static initialize(localesLoader: PrizmCronHRLocaleLoader, defaultLocale?: string): void;
    constructor(expression: string, options: PrizmCronHROptions);
    protected getFullDescription(): string;
    protected getTimeOfDayDescription(): string;
    protected getSecondsDescription(): string | null;
    protected getMinutesDescription(): string | null;
    protected getHoursDescription(): string | null;
    protected getDayOfWeekDescription(): string | null;
    protected getMonthDescription(): string | null;
    protected getDayOfMonthDescription(): string | null;
    protected getYearDescription(): string | null;
    protected getSegmentDescription(expression: string, allDescription: string, getSingleItemDescription: (t: string, form?: number) => string, getIncrementDescriptionFormat: (t: string) => string, getRangeDescriptionFormat: (t: string) => string, getDescriptionFormat: (t: string) => string): string | null;
    protected generateRangeSegmentDescription(rangeExpression: string, getRangeDescriptionFormat: (t: string) => string, getSingleItemDescription: (t: string, form?: number) => string): string;
    protected formatTime(hourExpression: string, minuteExpression: string, secondExpression: string): string;
    protected transformVerbosity(description: string, useVerboseFormat: boolean): string;
    private getPeriod;
}
