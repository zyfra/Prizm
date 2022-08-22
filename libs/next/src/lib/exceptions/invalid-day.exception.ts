export class ZuiInvalidDayException extends Error {
    constructor(day: number) {
        super(`Invalid day: ${day}`);
    }
}
