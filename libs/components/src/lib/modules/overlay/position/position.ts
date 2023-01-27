import { ReplaySubject } from 'rxjs';
import { PrizmOverlayPositionMeta } from '../models';
import { EventBus } from '../utils';

export abstract class PrizmOverlayAbstractPosition<T extends Record<string, any> = Record<string, any>> {
  protected config: T = {} as T;
  private configSource$: ReplaySubject<T> = new ReplaySubject<T>(1);
  readonly config$ = this.configSource$.asObservable();
  private readonly positionSource$ = new ReplaySubject<PrizmOverlayPositionMeta>();
  readonly pos$ = this.positionSource$.asObservable();
  private _zid: string;
  public get zid(): string {
    return this._zid;
  }

  public calculate(): void {
    if (this.zid) EventBus.send(this.zid, 'z_dynpos');
  }

  abstract getPositions(host: HTMLElement): Record<string, any>;

  public getClassName(): string {
    return this.constructor.name.replace('Pos', '-pos').toLowerCase();
  }

  public updateConfig(config: Partial<T>): void {
    this.config = { ...this.config, ...config };
    this.configSource$.next(this.config);
  }

  public savePosition(position: PrizmOverlayPositionMeta): void {
    this.positionSource$.next(position);
  }

  public init(zid: string): void {
    this._zid = zid;
  }
}
