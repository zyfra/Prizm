import { EMPTY_FUNCTION } from '../../../constants';
import { PolymorphComponent } from '../../../directives/polymorph';
import { PzmTreeItemContentComponent } from '../components/tree-item-content/tree-item-content.component';
import { PzmTreeController } from './tree.interfaces';

export const PZM_TREE_ITEM_CONTENT = new PolymorphComponent(
    PzmTreeItemContentComponent,
);

export const PZM_DEFAULT_TREE_CONTROLLER: PzmTreeController = {
    isExpanded: () => true,
    toggle: EMPTY_FUNCTION as () => void,
};
