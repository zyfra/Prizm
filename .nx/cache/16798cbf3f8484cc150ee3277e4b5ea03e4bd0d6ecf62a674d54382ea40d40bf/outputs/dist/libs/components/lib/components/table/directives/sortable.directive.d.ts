import { DoCheck, OnInit } from '@angular/core';
import { PrizmThComponent } from '../th/th.component';
import { PrizmSortByDirective } from './sort-by.directive';
import { PrizmTableDirective } from './table.directive';
import { PrizmComparator } from '../table.types';
import * as i0 from "@angular/core";
export declare class PrizmSortableDirective<T extends Partial<Record<keyof T, any>>> implements DoCheck, OnInit {
    private readonly sortBy;
    private readonly table;
    private readonly th;
    constructor(sortBy: PrizmSortByDirective<T>, table: PrizmTableDirective<T>, th: PrizmThComponent<T>);
    sorter: PrizmComparator<T>;
    get key(): keyof T;
    ngOnInit(): void;
    ngDoCheck(): void;
    private get match();
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSortableDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmSortableDirective<any>, "th[prizmTh][prizmSortable]", never, {}, {}, never, never, false, never>;
}
