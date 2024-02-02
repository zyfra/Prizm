import { EmbeddedViewRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { PrizmTableRowService } from '../service/row.service';
import { PrizmTableTreeService } from '../service/tree.service';
import { PrizmTableRowContext } from '../table.types';
import * as i0 from "@angular/core";
export declare class PrizmTableRowInitDirective implements OnInit, OnDestroy, OnChanges {
    readonly viewContainer: ViewContainerRef;
    readonly tableRowService: PrizmTableRowService;
    readonly treeService: PrizmTableTreeService;
    context: PrizmTableRowContext;
    template: TemplateRef<any>;
    embeddedRef: EmbeddedViewRef<any>;
    private idx;
    private idxFromMap;
    constructor(viewContainer: ViewContainerRef, tableRowService: PrizmTableRowService, treeService: PrizmTableTreeService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    private initChildrenVisibleStateOnce;
    private generateIdx;
    updateContextIfCan(): void;
    private getContext;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTableRowInitDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmTableRowInitDirective, "ng-template[prizmTableRowInit]", never, { "context": "context"; "template": "template"; }, {}, never, never, false, never>;
}
