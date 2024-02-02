import { AfterContentInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmHeadDirective } from '../directives/head.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PrizmThComponent } from '../th/th.component';
import { PrizmTableService } from '../table.service';
import { PrizmThGroupService } from './th-group.service';
import * as i0 from "@angular/core";
export declare class PrizmThGroupComponent<T extends Partial<Record<keyof T, any>>> implements OnInit, AfterContentInit, OnDestroy {
    readonly table: PrizmTableDirective<T>;
    readonly tableService: PrizmTableService;
    readonly thGroupService: PrizmThGroupService;
    private readonly columns$$;
    columns: ReadonlyArray<keyof T | string>;
    get cols$(): Observable<ReadonlyArray<keyof T | string>>;
    readonly th: QueryList<PrizmThComponent<T>>;
    readonly heads: QueryList<PrizmHeadDirective<T>>;
    heads$: Observable<PrizmHeadDirective<T>[]> | null;
    groupStructure$: Observable<{
        cols: PrizmThComponent<T>[];
        colspan: number;
    }>;
    constructor(table: PrizmTableDirective<T>, tableService: PrizmTableService, thGroupService: PrizmThGroupService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmThGroupComponent<any>, [null, null, { self: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmThGroupComponent<any>, "tr[prizmThGroup]", never, { "columns": { "alias": "columns"; "required": false; }; }, {}, ["th", "heads"], ["*"], false, never>;
}
