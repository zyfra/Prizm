import * as i0 from "@angular/core";
export declare class PrizmTableRowService {
    private idxCount;
    private readonly map;
    saveId(id: unknown, idx: number): void;
    getIdxById(id: unknown): number | null;
    incrementIdx(): void;
    getLastIncrementedIdx(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTableRowService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmTableRowService>;
}
