import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmNavigationMenuItem, PrizmNavigationMenuToolbarConfig } from '@prizm-ui/components';
import { PrizmIconsSvgRegistry, PRIZM_ICONS_SVG_SET } from '@prizm-ui/icons';
import { MOKED_ITEMS } from './navigation-menu.constants';

@Component({
  selector: 'prizm-navigation-menu-basic-example',
  templateUrl: './navigation-menu-basic-example.component.html',
  styleUrls: ['./navigation-menu-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuBasicExampleComponent {
  items: PrizmNavigationMenuItem[] = MOKED_ITEMS;

  toolbarConfig: PrizmNavigationMenuToolbarConfig = {
    search: true,
    folderMode: true,
    rubricatorMode: true,
    closeAll: true,
  };

  constructor(private readonly iconRegistry: PrizmIconsSvgRegistry) {
    this.iconRegistry.registerIcons(PRIZM_ICONS_SVG_SET);
  }
}
