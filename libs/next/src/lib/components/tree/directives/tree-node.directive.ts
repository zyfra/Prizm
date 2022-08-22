import { Directive, Inject, Input, OnDestroy, Optional } from '@angular/core';

import { ZuiTreeItemComponent } from '../components/tree-item/tree-item.component';
import { ZuiTreeAccessor } from '../misc/tree.interfaces';
import { ZUI_TREE_ACCESSOR } from '../misc/tree.tokens';

@Directive({
    selector: 'zui-tree-item[zuiTreeNode]',
})
export class ZuiTreeNodeDirective<T> implements OnDestroy {
    @Input()
    public set zuiTreeNode(value: T) {
        this.directive?.register(this.component, value);
    }

    constructor(
        @Optional()
        @Inject(ZUI_TREE_ACCESSOR)
        private readonly directive: ZuiTreeAccessor<T>,
        @Inject(ZuiTreeItemComponent)
        private readonly component: ZuiTreeItemComponent,
    ) {}

    public ngOnDestroy(): void {
        this.directive?.unregister(this.component);
    }
}
