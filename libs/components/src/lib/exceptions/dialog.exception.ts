export class PrizmDialogRequiredException extends Error {
  constructor() {
    super('Required prizmDialog was dismissed');
  }
}
