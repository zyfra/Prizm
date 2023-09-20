import { Directive, Input } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';

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
  private map = new WeakMap<PrizmTreeItemComponent, boolean>();
  private _prizmTreeController = true;

  @Input()
  @prizmDefaultProp()
  set prizmTreeController(value: boolean) {
    this._prizmTreeController = value ?? true;
    this.map = new WeakMap<PrizmTreeItemComponent, boolean>();
  }

  public isExpanded(item: PrizmTreeItemComponent): boolean {
    return this.map.get(item) ?? this._prizmTreeController;
  }

  public toggle(item: PrizmTreeItemComponent): void {
    this.map.set(item, !this.isExpanded(item));
  }
}
