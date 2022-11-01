import { Directive, Input } from '@angular/core';
import { pzmDefaultProp } from '../../../decorators';

import { PzmTreeItemComponent } from '../components/tree-item/tree-item.component';
import { PzmTreeController } from '../misc/tree.interfaces';
import { PZM_TREE_CONTROLLER } from '../misc/tree.tokens';

@Directive({
    selector: '[pzmTreeController]:not([map])',
    exportAs: 'pzmTreeController',
    providers: [
        {
            provide: PZM_TREE_CONTROLLER,
            useExisting: PzmTreeItemControllerDirective,
        },
    ],
})
export class PzmTreeItemControllerDirective implements PzmTreeController {
    private readonly map = new WeakMap<PzmTreeItemComponent, boolean>();

    @Input()
    @pzmDefaultProp()
    pzmTreeController = true;

    public isExpanded(item: PzmTreeItemComponent): boolean {
        return this.map.get(item) ?? this.pzmTreeController;
    }

    public toggle(item: PzmTreeItemComponent): void {
        this.map.set(item, !this.isExpanded(item));
    }
}
