import { Directive, inject, Input } from '@angular/core';
import { PRIZM_TREE_SELECT_ITEMS_VIEW_CONTAINER_REF } from './token';

@Directive({
  selector: '[prizmInputTreeSelectItems]',
  standalone: true,
  providers: [],
  hostDirectives: [],
})
export class PrizmTreeSelectItemsDirective<T> {
  @Input() items?: T[];
  readonly treeSelectItemsViewContainerRef = inject(PRIZM_TREE_SELECT_ITEMS_VIEW_CONTAINER_REF);
}
