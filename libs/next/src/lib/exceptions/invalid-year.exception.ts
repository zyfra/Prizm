export class PzmInvalidYearException extends Error {
    constructor(year: number) {
        super(`Invalid year: ${year}`);
    }
}
