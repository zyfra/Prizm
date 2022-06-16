import {ReplaySubject} from "rxjs";
import {ZuiOverlayPositionMeta} from "../models";

export abstract class ZuiOverlayAbstractPosition<T extends Record<string, any> = Record<string, any>> {
  protected config: T = {} as T;
  private configSource$: ReplaySubject<T> = new ReplaySubject<T>(1);
  readonly config$ = this.configSource$.asObservable();
  private readonly positionSource$ = new ReplaySubject<ZuiOverlayPositionMeta>();
  readonly pos$ = this.positionSource$.asObservable();
  abstract getPositions(host: HTMLElement): Record<string, any>;

  public getClassName(): string {
    return this.constructor.name.replace('Pos', '-pos').toLowerCase();
  }

  public updateConfig(config: Partial<T>): void {
    this.config = { ...this.config, ...config };
    this.configSource$.next(this.config);
  }

  public savePosition(
    position: ZuiOverlayPositionMeta
  ): void {
    this.positionSource$.next(position);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public init(zid: string): void {}
}
