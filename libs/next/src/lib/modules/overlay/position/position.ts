export abstract class ZuiOverlayAbstractPosition<T extends Record<string, any> = Record<string, any>> {
  protected config: T = {} as T;
  abstract getPositions(host: HTMLElement): Record<string, any>;

  public getClassName(): string {
    return this.constructor.name.replace('Pos', '-pos').toLowerCase();
  }

  public updateConfig(config: T): void {
    this.config = { ...this.config, ...config };
  }

  public init(zid: string): void {}
}
