import { DoCheck, ElementRef } from '@angular/core';
import { PolymorphContent } from '../../../../directives';
import { PrizmTreeController } from '../../misc/tree.interfaces';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmTreeItemComponent extends PrizmAbstractTestId implements DoCheck {
    private readonly elementRef;
    private readonly controller;
    readonly level: number;
    readonly content: PolymorphContent;
    private readonly nested;
    private readonly change$;
    readonly expanded$: import("rxjs").Observable<boolean>;
    readonly attached$: import("rxjs").Observable<boolean>;
    readonly testId_ = "ui_tree--item";
    get isExpandable(): boolean;
    get isExpanded(): boolean;
    usePaddingIndent: boolean;
    active: boolean;
    get levelVar(): number;
    constructor(elementRef: ElementRef<HTMLElement>, controller: PrizmTreeController, level: number, content: PolymorphContent);
    ngDoCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTreeItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmTreeItemComponent, "prizm-tree-item", ["prizmTreeItem"], { "usePaddingIndent": "usePaddingIndent"; "active": "active"; }, {}, ["nested"], ["*", "prizm-tree-item", "prizm-tree"], false, never>;
}
