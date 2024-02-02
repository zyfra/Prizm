import { DoCheck } from '@angular/core';
import { PrizmTreeChildrenDirective } from '../../directives/tree-children.directive';
import { PrizmTreeItemComponent } from '../tree-item/tree-item.component';
import { PolymorphContent } from '../../../../directives';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmTreeComponent<T> extends PrizmAbstractTestId implements DoCheck {
    readonly directive: PrizmTreeChildrenDirective<T> | null;
    private readonly check$;
    value: T;
    readonly item?: PrizmTreeItemComponent;
    readonly child?: PrizmTreeComponent<T>;
    readonly children$: import("rxjs").Observable<readonly T[]>;
    readonly testId_ = "ui_tree";
    usePaddingIndent: boolean;
    content: PolymorphContent;
    constructor(directive: PrizmTreeChildrenDirective<T> | null);
    ngDoCheck(): void;
    private get handler();
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTreeComponent<any>, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmTreeComponent<any>, "prizm-tree[value]", ["prizmTree"], { "value": { "alias": "value"; "required": false; }; "usePaddingIndent": { "alias": "usePaddingIndent"; "required": false; }; "content": { "alias": "content"; "required": false; }; }, {}, never, never, false, never>;
}
