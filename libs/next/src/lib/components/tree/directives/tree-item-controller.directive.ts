import { Directive, Input } from '@angular/core';
import { pzmDefaultProp } from '../../../decorators';

import { PrizmTreeItemComponent } from '../components/tree-item/tree-item.component';
import { PrizmTreeController } from '../misc/tree.interfaces';
import { PZM_TREE_CONTROLLER } from '../misc/tree.tokens';

@Directive({
    selector: '[pzmTreeController]:not([map])',
    exportAs: 'pzmTreeController',
    providers: [
        {
            provide: PZM_TREE_CONTROLLER,
            useExisting: PrizmTreeItemControllerDirective,
        },
    ],
})
export class PrizmTreeItemControllerDirective implements PrizmTreeController {
    private readonly map = new WeakMap<PrizmTreeItemComponent, boolean>();

    @Input()
    @pzmDefaultProp()
    pzmTreeController = true;

    public isExpanded(item: PrizmTreeItemComponent): boolean {
        return this.map.get(item) ?? this.pzmTreeController;
    }

    public toggle(item: PrizmTreeItemComponent): void {
        this.map.set(item, !this.isExpanded(item));
    }
}
