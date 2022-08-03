import {forwardRef, Provider, SkipSelf} from '@angular/core';

import {ZUI_TREE_LEVEL, ZUI_TREE_NODE} from '../../misc/tree.tokens';
import {ZuiTreeItemComponent} from './tree-item.component';

export const ZUI_TREE_ITEM_PROVIDERS: Provider[] = [
    {
        provide: ZUI_TREE_LEVEL,
        deps: [[new SkipSelf(), ZUI_TREE_LEVEL]],
        useFactory: treeLevelFactory,
    },
    {
        provide: ZUI_TREE_NODE,
        useExisting: forwardRef(() => ZuiTreeItemComponent),
    },
];

// eslint-disable-next-line @typescript-eslint/naming-convention
export function treeLevelFactory(level: number): number {
    return ++level;
}
