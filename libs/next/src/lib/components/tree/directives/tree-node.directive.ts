import { Directive, Inject, Input, OnDestroy, Optional } from '@angular/core';

import { PrizmTreeItemComponent } from '../components/tree-item/tree-item.component';
import { PrizmTreeAccessor } from '../misc/tree.interfaces';
import { PZM_TREE_ACCESSOR } from '../misc/tree.tokens';

@Directive({
    selector: 'pzm-tree-item[pzmTreeNode]',
})
export class PrizmTreeNodeDirective<T> implements OnDestroy {
    @Input()
    public set pzmTreeNode(value: T) {
        this.directive?.register(this.component, value);
    }

    constructor(
        @Optional()
        @Inject(PZM_TREE_ACCESSOR)
        private readonly directive: PrizmTreeAccessor<T>,
        @Inject(PrizmTreeItemComponent)
        private readonly component: PrizmTreeItemComponent,
    ) {}

    public ngOnDestroy(): void {
        this.directive?.unregister(this.component);
    }
}
