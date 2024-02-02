import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { PrizmTableCellStatus } from '../table.types';
import { PrizmTdService } from './td.service';
import * as i0 from "@angular/core";
export declare class PrizmTdComponent implements OnInit, OnDestroy {
    private readonly tdService;
    private readonly elementRef;
    status: PrizmTableCellStatus;
    colspan: string | number;
    readonly control: unknown;
    get realColspan(): number | string;
    constructor(tdService: PrizmTdService, elementRef: ElementRef<HTMLTableCellElement>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTdComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmTdComponent, "th[prizmTd], td[prizmTd]", never, { "status": { "alias": "status"; "required": false; }; "colspan": { "alias": "colspan"; "required": false; }; }, {}, ["control"], ["*"], false, never>;
}
