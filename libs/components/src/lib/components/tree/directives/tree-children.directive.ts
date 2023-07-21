import { Directive, Input } from '@angular/core';
import { PrizmAbstractTestId, prizmDefaultProp } from '@prizm-ui/core';
import { PrizmHandler } from '../../../types';

@Directive({
  selector: 'prizm-tree[childrenHandler]',
})
export class PrizmTreeChildrenDirective<T> extends PrizmAbstractTestId {
  @Input()
  @prizmDefaultProp()
  childrenHandler: PrizmHandler<T, readonly T[]> = PrizmTreeChildrenDirective.defaultHandler;

  override readonly testId_ = 'ui_tree--children';

  public static defaultHandler<G>(item: G): readonly G[] {
    return Array.isArray(item) ? item : [];
  }
}
