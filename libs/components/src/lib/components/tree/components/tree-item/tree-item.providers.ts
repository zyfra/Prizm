import { forwardRef, Provider, SkipSelf } from '@angular/core';
import { PRIZM_TREE_LEVEL, PRIZM_TREE_NODE } from '../../misc/tree.tokens';
import { PrizmTreeItemComponent } from './tree-item.component';

export const PRIZM_TREE_ITEM_PROVIDERS: Provider[] = [
  {
    provide: PRIZM_TREE_LEVEL,
    deps: [[new SkipSelf(), PRIZM_TREE_LEVEL]],
    useFactory: treeLevelFactory,
  },
  {
    provide: PRIZM_TREE_NODE,
    useExisting: forwardRef(() => PrizmTreeItemComponent),
  },
];

// eslint-disable-next-line @typescript-eslint/naming-convention
export function treeLevelFactory(level: number): number {
  return ++level;
}
