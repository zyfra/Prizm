import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  PrizmNavigationMenuChildrenHandler,
  PrizmNavigationMenuItem,
  PrizmNavigationMenuToolbarConfig,
} from '@prizm-ui/components';
import { GROUP_ITEMS, ParentItem } from './navigation-menu-children-handler-example.constants';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { PRIZM_ICONS_SET } from '@prizm-ui/icons/base/source/icon-set';

@Component({
  selector: 'prizm-navigation-menu-children-handler-example',
  templateUrl: './navigation-menu-children-handler-example.component.html',
  styleUrls: ['./navigation-menu-children-handler-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuChildrenHandlerExampleComponent {
  toolbarConfig: PrizmNavigationMenuToolbarConfig = {
    search: true,
    rubricatorMode: true,
    closeAll: true,
  };

  group1: PrizmNavigationMenuItem[] = GROUP_ITEMS;

  group2: PrizmNavigationMenuItem[] = GROUP_ITEMS;

  constructor(private readonly iconRegistry: PrizmIconsFullRegistry) {
    this.iconRegistry.registerIcons(PRIZM_ICONS_SET);
  }

  /** Hides 3rd level children */
  childrenHandler: PrizmNavigationMenuChildrenHandler<PrizmNavigationMenuItem> = item => {
    const shouldHideChildren = item.original instanceof ParentItem;
    return shouldHideChildren ? [] : item.children ?? [];
  };
}
