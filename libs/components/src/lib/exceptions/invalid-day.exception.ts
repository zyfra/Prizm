export class PrizmInvalidDayException extends Error {
  constructor(day: number) {
    super(`Invalid day: ${day}`);
  }
}
