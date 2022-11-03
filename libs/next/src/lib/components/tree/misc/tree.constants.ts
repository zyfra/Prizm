import { EMPTY_FUNCTION } from '../../../constants';
import { PolymorphComponent } from '../../../directives/polymorph';
import { PrizmTreeItemContentComponent } from '../components/tree-item-content/tree-item-content.component';
import { PrizmTreeController } from './tree.interfaces';

export const PZM_TREE_ITEM_CONTENT = new PolymorphComponent(
    PrizmTreeItemContentComponent,
);

export const PZM_DEFAULT_TREE_CONTROLLER: PrizmTreeController = {
    isExpanded: () => true,
    toggle: EMPTY_FUNCTION as () => void,
};
