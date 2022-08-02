import { Directive, Input } from '@angular/core';
import { zuiDefaultProp } from '../../../decorators';

import { ZuiTreeItemComponent } from '../components/tree-item/tree-item.component';
import { ZuiTreeController } from '../misc/tree.interfaces';
import { ZUI_TREE_CONTROLLER } from '../misc/tree.tokens';

@Directive({
    selector: '[zuiTreeController]:not([map])',
    exportAs: 'zuiTreeController',
    providers: [
        {
            provide: ZUI_TREE_CONTROLLER,
            useExisting: ZuiTreeItemControllerDirective,
        },
    ],
})
export class ZuiTreeItemControllerDirective implements ZuiTreeController {
    private readonly map = new WeakMap<ZuiTreeItemComponent, boolean>();

    @Input()
    @zuiDefaultProp()
    zuiTreeController = true;

    public isExpanded(item: ZuiTreeItemComponent): boolean {
        return this.map.get(item) ?? this.zuiTreeController;
    }

    public toggle(item: ZuiTreeItemComponent): void {
        this.map.set(item, !this.isExpanded(item));
    }
}
