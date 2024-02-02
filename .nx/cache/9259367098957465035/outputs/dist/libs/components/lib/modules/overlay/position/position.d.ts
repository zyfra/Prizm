import { PrizmOverlayPositionMeta } from '../models';
export declare abstract class PrizmOverlayAbstractPosition<T extends Record<string, any> = Record<string, any>> {
    protected config: T;
    private configSource$;
    readonly config$: import("rxjs").Observable<T>;
    private readonly positionSource$;
    readonly pos$: import("rxjs").Observable<PrizmOverlayPositionMeta>;
    private _zid;
    get zid(): string;
    calculate(): void;
    abstract getPositions(host: HTMLElement, parentElement?: HTMLElement): Record<string, any>;
    getClassName(): string;
    updateConfig(config: Partial<T>): void;
    savePosition(position: PrizmOverlayPositionMeta): void;
    init(zid: string): void;
}
