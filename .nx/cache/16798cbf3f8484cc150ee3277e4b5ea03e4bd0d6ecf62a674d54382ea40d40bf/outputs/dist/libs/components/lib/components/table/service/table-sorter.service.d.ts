import { Observable } from 'rxjs';
import { PrizmTableCellSorter, PrizmTableCellSortOrder } from './model';
import * as i0 from "@angular/core";
export declare class PrizmTableSorterService<T> {
    private readonly map;
    private readonly sorters$$;
    get value(): PrizmTableCellSorter<T>[];
    get count(): number;
    get changes$(): Observable<PrizmTableCellSorter<T>[]>;
    sortCell(sorter: PrizmTableCellSorter<T>, clearPrevious: boolean): void;
    remove(id: string): void;
    set(sorter: PrizmTableCellSorter<T>[]): void;
    cell$(id: string): Observable<PrizmTableCellSorter<T>>;
    cell(id: string): PrizmTableCellSorter<T>;
    cellOrder(id: string): PrizmTableCellSortOrder;
    nextOrder(id: string): PrizmTableCellSortOrder | null;
    sort$(data: T[]): Observable<readonly T[]>;
    sort(data: T[], all?: PrizmTableCellSorter<T>[]): T[];
    private emit;
    isActive(id: string): boolean;
    idx(id: string): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTableSorterService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmTableSorterService<any>>;
}
