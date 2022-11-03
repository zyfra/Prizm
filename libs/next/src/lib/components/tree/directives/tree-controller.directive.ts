import { Directive, EventEmitter, Input, Output } from '@angular/core';

import { PrizmTreeItemComponent } from '../components/tree-item/tree-item.component';
import { PrizmTreeAccessor, PrizmTreeController } from '../misc/tree.interfaces';
import { PZM_TREE_ACCESSOR, PZM_TREE_CONTROLLER } from '../misc/tree.tokens';
import { pzmDefaultProp } from '../../../decorators';
import { pzmIsPresent } from '../../../util';

@Directive({
    selector: '[pzmTreeController][map]',
    exportAs: 'pzmTreeController',
    providers: [
        {
            provide: PZM_TREE_ACCESSOR,
            useExisting: PrizmTreeControllerDirective,
        },
        {
            provide: PZM_TREE_CONTROLLER,
            useExisting: PrizmTreeControllerDirective,
        },
    ],
})
export class PrizmTreeControllerDirective<T>
    implements PrizmTreeController, PrizmTreeAccessor<T>
{
    @Input()
    @pzmDefaultProp()
    pzmTreeController = true;

    @Input()
    @pzmDefaultProp()
    map: Map<T, boolean> = new Map();

    @Output()
    readonly toggled = new EventEmitter<T>();

    readonly items = new Map<PrizmTreeItemComponent, T>();

    public register(item: PrizmTreeItemComponent, value: T): void {
        this.items.set(item, value);
    }

    public unregister(item: PrizmTreeItemComponent): void {
        this.items.delete(item);
    }

    public isExpanded(item: PrizmTreeItemComponent): boolean {
        const value = this.items.get(item);

        return (value && this.map.get(value)) ?? this.pzmTreeController;
    }

    public toggle(item: PrizmTreeItemComponent): void {
        const value = this.items.get(item);
        const expanded = this.isExpanded(item);

        if (!pzmIsPresent(value)) {
            return;
        }

        this.toggled.emit(value);
        this.map.set(value, !expanded);
    }
}
