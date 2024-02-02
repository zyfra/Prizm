import { OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PrizmCellService } from './cell.service';
import * as i0 from "@angular/core";
export declare class PrizmCellDirective implements OnDestroy, OnInit {
    readonly template: TemplateRef<Record<string, unknown>>;
    readonly viewContainer: ViewContainerRef;
    private readonly cellService;
    prizmCell: string;
    constructor(template: TemplateRef<Record<string, unknown>>, viewContainer: ViewContainerRef, cellService: PrizmCellService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCellDirective, [null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmCellDirective, "[prizmCell]", ["prizmCell"], { "prizmCell": "prizmCell"; }, {}, never, never, false, never>;
}
