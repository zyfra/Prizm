import { Directive, EventEmitter, Input, Output } from '@angular/core';

import { PrizmTreeItemComponent } from '../components/tree-item/tree-item.component';
import { PrizmTreeAccessor, PrizmTreeController } from '../misc/tree.interfaces';
import { PRIZM_TREE_ACCESSOR, PRIZM_TREE_CONTROLLER } from '../misc/tree.tokens';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmIsPresent } from '../../../util';

@Directive({
  selector: '[prizmTreeController][map]',
  exportAs: 'prizmTreeController',
  providers: [
    {
      provide: PRIZM_TREE_ACCESSOR,
      useExisting: PrizmTreeControllerDirective,
    },
    {
      provide: PRIZM_TREE_CONTROLLER,
      useExisting: PrizmTreeControllerDirective,
    },
  ],
})
export class PrizmTreeControllerDirective<T> implements PrizmTreeController, PrizmTreeAccessor<T> {
  @Input()
  @prizmDefaultProp()
  prizmTreeController = true;

  @Input()
  @prizmDefaultProp()
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

    return (value && this.map.get(value)) ?? this.prizmTreeController;
  }

  public toggle(item: PrizmTreeItemComponent): void {
    const value = this.items.get(item);
    const expanded = this.isExpanded(item);

    if (!prizmIsPresent(value)) {
      return;
    }

    this.toggled.emit(value);
    this.map.set(value, !expanded);
  }
}
