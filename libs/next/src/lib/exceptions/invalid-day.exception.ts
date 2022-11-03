export class PzmInvalidDayException extends Error {
    constructor(day: number) {
        super(`Invalid day: ${day}`);
    }
}
