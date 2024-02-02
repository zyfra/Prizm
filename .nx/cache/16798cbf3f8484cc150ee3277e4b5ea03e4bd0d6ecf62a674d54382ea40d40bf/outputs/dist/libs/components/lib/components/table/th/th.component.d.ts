import { ElementRef } from '@angular/core';
import { PrizmHeadDirective } from '../directives/head.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PrizmTableCellSorter, PrizmTableCellSorterHandler, PrizmTableSorterService } from '../service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PrizmThComponent<T extends Partial<Record<keyof T, any>>> {
    private readonly head;
    readonly el: ElementRef<HTMLTableCellElement>;
    private readonly sorterService;
    readonly table: PrizmTableDirective<T> | null;
    sorter: PrizmTableCellSorterHandler<T> | null;
    resizable: boolean;
    sortable: boolean;
    width: number | null;
    get isSortable(): boolean;
    constructor(head: PrizmHeadDirective<T> | null, el: ElementRef<HTMLTableCellElement>, sorterService: PrizmTableSorterService<T>, table: PrizmTableDirective<T> | null);
    get key(): keyof T;
    get isCurrent(): boolean;
    get idx(): number;
    get count(): number;
    get num(): number | null;
    get sortItem(): PrizmTableCellSorter<T>;
    get icon$(): Observable<string>;
    onResized(width: number): void;
    updateSorter(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmThComponent<any>, [{ optional: true; }, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmThComponent<any>, "th[prizmTh]", never, { "sorter": "sorter"; "resizable": "resizable"; "sortable": "sortable"; }, {}, never, ["*"], false, never>;
}
