import { InjectionToken } from '@angular/core';
import { PolymorphContent } from '../../../directives/polymorph';
import { PRIZM_DEFAULT_TREE_CONTROLLER, PRIZM_TREE_ITEM_CONTENT } from './tree.constants';
import { PrizmTreeAccessor, PrizmTreeController, PrizmTreeItemContext, PrizmTreeLoader } from './tree.interfaces';

export const PRIZM_TREE_ACCESSOR = new InjectionToken<PrizmTreeAccessor<unknown>>(
    'Controller for tracking value - PrizmTreeItemComponent pairs',
);

export const PRIZM_TREE_CONTROLLER = new InjectionToken<PrizmTreeController>(
    'Controller for expanding the tree',
    {
        factory: (): PrizmTreeController => PRIZM_DEFAULT_TREE_CONTROLLER,
    },
);

export const PRIZM_TREE_NODE = new InjectionToken('A node of a tree view');

export const PRIZM_TREE_LOADING = new InjectionToken(
    'A tree node placeholder for loading',
    {factory: (): unknown => ({})},
);

export const PRIZM_TREE_START = new InjectionToken('A tree node starting point');

export const PRIZM_TREE_LOADER = new InjectionToken<PrizmTreeLoader<unknown>>(
    'A service to load tree progressively',
);

export const PRIZM_TREE_CONTENT = new InjectionToken<
    PolymorphContent<PrizmTreeItemContext>
>('Content for a tree item', {
    factory: (): PolymorphContent<PrizmTreeItemContext> => PRIZM_TREE_ITEM_CONTENT,
});

export const PRIZM_TREE_LEVEL = new InjectionToken<number>(
    'Nesting level of current TreeView node',
    {
        factory: (): number => -1,
    },
);
