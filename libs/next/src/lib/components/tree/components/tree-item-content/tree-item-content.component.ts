import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, Inject } from '@angular/core';
import { POLYMORPH_CONTEXT } from '../../../../directives';

import { ZUI_DEFAULT_TREE_CONTROLLER } from '../../misc/tree.constants';
import { ZuiTreeController, ZuiTreeItemContext } from '../../misc/tree.interfaces';
import { ZUI_TREE_CONTROLLER } from '../../misc/tree.tokens';

@Component({
    selector: 'zui-tree-item-content',
    templateUrl: './tree-item-content.component.html',
    styleUrls: ['./tree-item-content.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiTreeItemContentComponent {
    @HostBinding('attr.testId')
    readonly testId = 'pzm_tree_item_content';

    constructor(
        @Inject(POLYMORPH_CONTEXT) readonly context: ZuiTreeItemContext,
        @Inject(forwardRef(() => ZUI_TREE_CONTROLLER))
        private readonly controller: ZuiTreeController,
    ) {}

    public get isExpanded(): boolean {
        return this.context.$implicit.isExpanded;
    }

    @HostBinding('class._expandable')
    public get isExpandable(): boolean {
        return (
            this.context.$implicit.isExpandable &&
            this.controller !== ZUI_DEFAULT_TREE_CONTROLLER
        );
    }

    public onClick(): void {
        this.controller.toggle(this.context.$implicit);
    }
}
