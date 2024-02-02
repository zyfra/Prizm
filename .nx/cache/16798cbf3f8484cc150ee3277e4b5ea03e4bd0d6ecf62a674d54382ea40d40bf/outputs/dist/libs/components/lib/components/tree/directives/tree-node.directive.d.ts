import { OnDestroy } from '@angular/core';
import { PrizmTreeItemComponent } from '../components/tree-item/tree-item.component';
import { PrizmTreeAccessor } from '../misc/tree.interfaces';
import * as i0 from "@angular/core";
export declare class PrizmTreeNodeDirective<T> implements OnDestroy {
    private readonly directive;
    private readonly component;
    set prizmTreeNode(value: T);
    constructor(directive: PrizmTreeAccessor<T>, component: PrizmTreeItemComponent);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTreeNodeDirective<any>, [{ optional: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmTreeNodeDirective<any>, "prizm-tree-item[prizmTreeNode]", never, { "prizmTreeNode": "prizmTreeNode"; }, {}, never, never, false, never>;
}
