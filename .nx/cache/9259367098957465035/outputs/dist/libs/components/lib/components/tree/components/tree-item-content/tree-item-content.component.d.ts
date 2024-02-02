import { PrizmTreeController, PrizmTreeItemContext } from '../../misc/tree.interfaces';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmTreeItemContentComponent extends PrizmAbstractTestId {
    readonly context: PrizmTreeItemContext;
    private readonly controller;
    readonly testId_ = "ui_tree_item_content";
    constructor(context: PrizmTreeItemContext, controller: PrizmTreeController);
    get isExpanded(): boolean;
    get isExpandable(): boolean;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTreeItemContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmTreeItemContentComponent, "prizm-tree-item-content", never, {}, {}, never, never, false, never>;
}
