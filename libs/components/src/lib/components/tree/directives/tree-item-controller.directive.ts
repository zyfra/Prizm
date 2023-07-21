import { Directive, Input } from '@angular/core';
import { PrizmAbstractTestId, prizmDefaultProp } from '@prizm-ui/core';

import { PrizmTreeItemComponent } from '../components/tree-item/tree-item.component';
import { PrizmTreeController } from '../misc/tree.interfaces';
import { PRIZM_TREE_CONTROLLER } from '../misc/tree.tokens';

@Directive({
  selector: '[prizmTreeController]:not([map])',
  exportAs: 'prizmTreeController',
  providers: [
    {
      provide: PRIZM_TREE_CONTROLLER,
      useExisting: PrizmTreeItemControllerDirective,
    },
  ],
})
export class PrizmTreeItemControllerDirective implements PrizmTreeController {
  private readonly map = new WeakMap<PrizmTreeItemComponent, boolean>();

  @Input()
  @prizmDefaultProp()
  prizmTreeController = true;

  public isExpanded(item: PrizmTreeItemComponent): boolean {
    return this.map.get(item) ?? this.prizmTreeController;
  }

  public toggle(item: PrizmTreeItemComponent): void {
    this.map.set(item, !this.isExpanded(item));
  }
}
