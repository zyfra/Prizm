export class ZuiDialogRequiredException extends Error {
  constructor() {
    super('Required zuiDialog was dismissed');
  }
}
