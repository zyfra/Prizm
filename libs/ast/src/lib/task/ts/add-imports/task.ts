export class PrizmTsCodeAddImportsIfNeededTask {
  readonly type = 'add-imports-if-needed';
}

export abstract class PrizmTsCodeTask {
  readonly type: string;

  public create(payload: any) {}
}
