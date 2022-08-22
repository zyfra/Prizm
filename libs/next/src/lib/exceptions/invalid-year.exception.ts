export class ZuiInvalidYearException extends Error {
    constructor(year: number) {
        super(`Invalid year: ${year}`);
    }
}
