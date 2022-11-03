export class PrizmDialogRequiredException extends Error {
  constructor() {
    super('Required pzmDialog was dismissed');
  }
}
