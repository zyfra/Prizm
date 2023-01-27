export class PrizmInvalidYearException extends Error {
  constructor(year: number) {
    super(`Invalid year: ${year}`);
  }
}
