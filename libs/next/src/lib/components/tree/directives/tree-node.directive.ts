import { Directive, Inject, Input, OnDestroy, Optional } from '@angular/core';

import { PzmTreeItemComponent } from '../components/tree-item/tree-item.component';
import { PzmTreeAccessor } from '../misc/tree.interfaces';
import { PZM_TREE_ACCESSOR } from '../misc/tree.tokens';

@Directive({
    selector: 'pzm-tree-item[pzmTreeNode]',
})
export class PzmTreeNodeDirective<T> implements OnDestroy {
    @Input()
    public set pzmTreeNode(value: T) {
        this.directive?.register(this.component, value);
    }

    constructor(
        @Optional()
        @Inject(PZM_TREE_ACCESSOR)
        private readonly directive: PzmTreeAccessor<T>,
        @Inject(PzmTreeItemComponent)
        private readonly component: PzmTreeItemComponent,
    ) {}

    public ngOnDestroy(): void {
        this.directive?.unregister(this.component);
    }
}
