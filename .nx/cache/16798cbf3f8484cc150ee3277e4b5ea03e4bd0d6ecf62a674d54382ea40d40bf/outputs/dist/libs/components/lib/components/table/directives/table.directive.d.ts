import { AfterViewInit, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { PrizmSizeL, PrizmSizeM, PrizmSizeS, PrizmSizeXS } from '../../../util';
import { PrizmComparator, PrizmTableBorderStyle } from '../table.types';
import { AbstractPrizmController } from '../abstract/controller';
import { Observable } from 'rxjs';
import { PrizmTableCellSorter, PrizmTableSorterService } from '../service';
import { PrizmTableTreeService } from '../service/tree.service';
import { PrizmTableService } from '../table.service';
import * as i0 from "@angular/core";
export declare class PrizmTableDirective<T extends Partial<Record<keyof T, unknown>>> extends AbstractPrizmController implements AfterViewInit {
    readonly tree: PrizmTableTreeService;
    readonly sorterService: PrizmTableSorterService<T>;
    readonly tableService: PrizmTableService;
    readonly entries$: Observable<IntersectionObserverEntry[]>;
    private readonly changeDetectorRef;
    private readonly columns$$;
    columns: ReadonlyArray<keyof T | string>;
    columns$: Observable<readonly (string | keyof T)[]>;
    size: PrizmSizeXS | PrizmSizeS | PrizmSizeL | PrizmSizeM;
    tableBorderStyle: PrizmTableBorderStyle;
    set sort(sorters: PrizmTableCellSorter<T>[]);
    get sort(): PrizmTableCellSorter<T>[];
    direction: -1 | 1;
    readonly directionChange: EventEmitter<1 | -1>;
    /**
     * @deprecated
     * */
    readonly sorterChange: EventEmitter<PrizmComparator<T> | null>;
    readonly sortChange: Observable<PrizmTableCellSorter<T>[]>;
    constructor(tree: PrizmTableTreeService, sorterService: PrizmTableSorterService<T>, tableService: PrizmTableService, entries$: Observable<IntersectionObserverEntry[]>, changeDetectorRef: ChangeDetectorRef);
    sorter: PrizmComparator<T>;
    updateSorter(sorter: PrizmComparator<T> | null): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTableDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmTableDirective<any>, "table[prizmTable]", ["prizmTable"], { "columns": "columns"; "size": "size"; "tableBorderStyle": "tableBorderStyle"; "sort": "sort"; "direction": "direction"; "sorter": "sorter"; }, { "directionChange": "directionChange"; "sorterChange": "sorterChange"; "sortChange": "sortChange"; }, never, never, false, never>;
}
