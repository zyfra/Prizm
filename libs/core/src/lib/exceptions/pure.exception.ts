export class PrizmPureException extends Error {
  constructor() {
    super('prizmPure can only be used with functions or getters');
  }
}
