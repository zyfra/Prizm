import {forwardRef, Provider, SkipSelf} from '@angular/core';

import {PZM_TREE_LEVEL, PZM_TREE_NODE} from '../../misc/tree.tokens';
import {PrizmTreeItemComponent} from './tree-item.component';

export const PZM_TREE_ITEM_PROVIDERS: Provider[] = [
    {
        provide: PZM_TREE_LEVEL,
        deps: [[new SkipSelf(), PZM_TREE_LEVEL]],
        useFactory: treeLevelFactory,
    },
    {
        provide: PZM_TREE_NODE,
        useExisting: forwardRef(() => PrizmTreeItemComponent),
    },
];

// eslint-disable-next-line @typescript-eslint/naming-convention
export function treeLevelFactory(level: number): number {
    return ++level;
}
