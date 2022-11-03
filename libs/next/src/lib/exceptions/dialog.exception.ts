export class PzmDialogRequiredException extends Error {
  constructor() {
    super('Required pzmDialog was dismissed');
  }
}
