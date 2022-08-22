import { Directive, EventEmitter, Input, Output } from '@angular/core';

import { ZuiTreeItemComponent } from '../components/tree-item/tree-item.component';
import { ZuiTreeAccessor, ZuiTreeController } from '../misc/tree.interfaces';
import { ZUI_TREE_ACCESSOR, ZUI_TREE_CONTROLLER } from '../misc/tree.tokens';
import { zuiDefaultProp } from '../../../decorators';
import { zuiIsPresent } from '../../../util';

@Directive({
    selector: '[zuiTreeController][map]',
    exportAs: 'zuiTreeController',
    providers: [
        {
            provide: ZUI_TREE_ACCESSOR,
            useExisting: ZuiTreeControllerDirective,
        },
        {
            provide: ZUI_TREE_CONTROLLER,
            useExisting: ZuiTreeControllerDirective,
        },
    ],
})
export class ZuiTreeControllerDirective<T>
    implements ZuiTreeController, ZuiTreeAccessor<T>
{
    @Input()
    @zuiDefaultProp()
    zuiTreeController = true;

    @Input()
    @zuiDefaultProp()
    map: Map<T, boolean> = new Map();

    @Output()
    readonly toggled = new EventEmitter<T>();

    readonly items = new Map<ZuiTreeItemComponent, T>();

    public register(item: ZuiTreeItemComponent, value: T): void {
        this.items.set(item, value);
    }

    public unregister(item: ZuiTreeItemComponent): void {
        this.items.delete(item);
    }

    public isExpanded(item: ZuiTreeItemComponent): boolean {
        const value = this.items.get(item);

        return (value && this.map.get(value)) ?? this.zuiTreeController;
    }

    public toggle(item: ZuiTreeItemComponent): void {
        const value = this.items.get(item);
        const expanded = this.isExpanded(item);

        if (!zuiIsPresent(value)) {
            return;
        }

        this.toggled.emit(value);
        this.map.set(value, !expanded);
    }
}
