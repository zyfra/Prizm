import { InjectionToken } from '@angular/core';
import { PolymorphContent } from '../../../directives/polymorph';
import { ZUI_DEFAULT_TREE_CONTROLLER, ZUI_TREE_ITEM_CONTENT } from './tree.constants';
import { ZuiTreeAccessor, ZuiTreeController, ZuiTreeItemContext, ZuiTreeLoader } from './tree.interfaces';

export const ZUI_TREE_ACCESSOR = new InjectionToken<ZuiTreeAccessor<unknown>>(
    'Controller for tracking value - ZuiTreeItemComponent pairs',
);

export const ZUI_TREE_CONTROLLER = new InjectionToken<ZuiTreeController>(
    'Controller for expanding the tree',
    {
        factory: (): ZuiTreeController => ZUI_DEFAULT_TREE_CONTROLLER,
    },
);

export const ZUI_TREE_NODE = new InjectionToken('A node of a tree view');

export const ZUI_TREE_LOADING = new InjectionToken(
    'A tree node placeholder for loading',
    {factory: (): unknown => ({})},
);

export const ZUI_TREE_START = new InjectionToken('A tree node starting point');

export const ZUI_TREE_LOADER = new InjectionToken<ZuiTreeLoader<unknown>>(
    'A service to load tree progressively',
);

export const ZUI_TREE_CONTENT = new InjectionToken<
    PolymorphContent<ZuiTreeItemContext>
>('Content for a tree item', {
    factory: (): PolymorphContent<ZuiTreeItemContext> => ZUI_TREE_ITEM_CONTENT,
});

export const ZUI_TREE_LEVEL = new InjectionToken<number>(
    'Nesting level of current TreeView node',
    {
        factory: (): number => -1,
    },
);
