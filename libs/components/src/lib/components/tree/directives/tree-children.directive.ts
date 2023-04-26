import { Directive, Input } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmHandler } from '../../../types';

@Directive({
  selector: 'prizm-tree[childrenHandler]',
})
export class PrizmTreeChildrenDirective<T> {
  @Input()
  @prizmDefaultProp()
  childrenHandler: PrizmHandler<T, readonly T[]> = PrizmTreeChildrenDirective.defaultHandler;

  public static defaultHandler<G>(item: G): readonly G[] {
    return Array.isArray(item) ? item : [];
  }
}
