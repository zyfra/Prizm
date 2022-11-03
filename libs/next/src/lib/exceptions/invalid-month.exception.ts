export class PzmInvalidMonthException extends Error {
    constructor(month: number) {
        super(`Invalid month: ${month}`);
    }
}
