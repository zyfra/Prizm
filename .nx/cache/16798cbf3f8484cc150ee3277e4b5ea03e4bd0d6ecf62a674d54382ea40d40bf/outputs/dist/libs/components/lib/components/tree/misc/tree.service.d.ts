import { PrizmTreeLoader } from './tree.interfaces';
import * as i0 from "@angular/core";
export declare class PrizmTreeService<T> {
    private readonly loading;
    private readonly start;
    private readonly loader;
    private readonly map;
    private readonly load$;
    readonly data$: import("rxjs").Observable<T>;
    constructor(loading: T, start: T, loader: PrizmTreeLoader<T>);
    getChildren(item: T): readonly T[];
    loadChildren(item: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTreeService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmTreeService<any>>;
}
