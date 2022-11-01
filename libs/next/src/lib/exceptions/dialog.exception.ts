export class PzmDialogRequiredException extends Error {
  constructor() {
    super('Required zuiDialog was dismissed');
  }
}
