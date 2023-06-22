export class PrizmTableSortKeyException extends Error {
  constructor() {
    super(`Trying to sort with no key`);
  }
}
