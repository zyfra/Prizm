/**
 * Parses and normalizes a cron expression
 * @export
 * @class PrizmCronHRParser
 */
export declare class PrizmCronHRParser {
    expression: string;
    dayOfWeekStartIndexZero: boolean;
    monthStartIndexZero: boolean;
    constructor(expression: string, dayOfWeekStartIndexZero?: boolean, monthStartIndexZero?: boolean);
    /**
     * Parses and normalizes a cron expression into an array of strings
     * @returns {string[]}
     */
    parse(): string[];
    protected extractParts(expression: string): string[];
    protected normalize(expressionParts: string[]): void;
    protected validate(parsed: string[]): void;
    protected validateRange(parsed: string[]): void;
    protected assertNoInvalidCharacters(partDescription: string, expression: string): void;
}
