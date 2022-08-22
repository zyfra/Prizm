import { EMPTY_FUNCTION } from '../../../constants';
import { PolymorphComponent } from '../../../directives/polymorph';
import { ZuiTreeItemContentComponent } from '../components/tree-item-content/tree-item-content.component';
import { ZuiTreeController } from './tree.interfaces';

export const ZUI_TREE_ITEM_CONTENT = new PolymorphComponent(
    ZuiTreeItemContentComponent,
);

export const ZUI_DEFAULT_TREE_CONTROLLER: ZuiTreeController = {
    isExpanded: () => true,
    toggle: EMPTY_FUNCTION as () => void,
};
