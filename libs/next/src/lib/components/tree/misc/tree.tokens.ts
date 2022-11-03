import { InjectionToken } from '@angular/core';
import { PolymorphContent } from '../../../directives/polymorph';
import { PZM_DEFAULT_TREE_CONTROLLER, PZM_TREE_ITEM_CONTENT } from './tree.constants';
import { PzmTreeAccessor, PzmTreeController, PzmTreeItemContext, PzmTreeLoader } from './tree.interfaces';

export const PZM_TREE_ACCESSOR = new InjectionToken<PzmTreeAccessor<unknown>>(
    'Controller for tracking value - PzmTreeItemComponent pairs',
);

export const PZM_TREE_CONTROLLER = new InjectionToken<PzmTreeController>(
    'Controller for expanding the tree',
    {
        factory: (): PzmTreeController => PZM_DEFAULT_TREE_CONTROLLER,
    },
);

export const PZM_TREE_NODE = new InjectionToken('A node of a tree view');

export const PZM_TREE_LOADING = new InjectionToken(
    'A tree node placeholder for loading',
    {factory: (): unknown => ({})},
);

export const PZM_TREE_START = new InjectionToken('A tree node starting point');

export const PZM_TREE_LOADER = new InjectionToken<PzmTreeLoader<unknown>>(
    'A service to load tree progressively',
);

export const PZM_TREE_CONTENT = new InjectionToken<
    PolymorphContent<PzmTreeItemContext>
>('Content for a tree item', {
    factory: (): PolymorphContent<PzmTreeItemContext> => PZM_TREE_ITEM_CONTENT,
});

export const PZM_TREE_LEVEL = new InjectionToken<number>(
    'Nesting level of current TreeView node',
    {
        factory: (): number => -1,
    },
);
